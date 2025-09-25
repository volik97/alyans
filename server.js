const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const mailer = require('nodemailer');
const http = require('http');
const https = require('https');
const fs = require('fs');
const fileUpload = require('express-fileupload')
const cors = require('cors');
const {saveCard, visibleCard, deleteCard, changeEmail, editCard} = require('./controller/fsController');
const {join} = require("path");
const {prepareDate, prepareCategory, prepareJSON} = require("./utils/prepareData");
// не забудь установить зависимости nodemailer, node-telegram-bot-api, connect-history-api-fallback, express


// сертификаты для https
// если на хосте тут будет выебываться и не получится прочитать сертификаты проверь их доступ в ситеме (chmod)
let httpsOptions = {};
try {
	const key = fs.readFileSync(path.join(__dirname, './cert/private.key'));
	const cert = fs.readFileSync(path.join(__dirname, './cert/certificate.crt'));

	httpsOptions = {
		key,
		cert,
	};

} catch (err) {
	process.exit(1);
}

// настройки express
const app = express();

//это для роутинга реакта
app.use(history());
app.use(cors());
app.use(fileUpload())
//  это чтобы express мог прочитать тело твоих post pfghjcjd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// это означает что из  папки dist будут отдаваться статика по корневому адресу сервера, и кстати если положишь index.html вот так dist/index.html то этот server.js будет отдавать и твой сайт
app.use('/', express.static(path.join(__dirname, './dist')));
app.use('/images', express.static(path.join(__dirname, './images')));

const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";

app.post('/captcha', async (req, res) => {
	const captcha = req.body.captcha;
	try{
		const captchaResponse = await fetch(verifyEndpoint, {
			method: "POST",
			headers: { "Content-type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams({
				secret: '6Ldw1FUpAAAAAP-3fpnmTLj1Vvb-Ym41mzZ-raU5', // See prior section
				response: captcha, // the user's generated "Captcha" token
			}),
		}).then((res) => res.json());
		return res.json(captchaResponse)
	}
	catch(err){

	}
})



app.post('/sendEmail', async (req, res) => {
	const data = fs.readFileSync(join(__dirname,'./dataEmail.json'), {encoding: 'utf-8'})
	const dataParse = JSON.parse(data)
	const mailTransporter = mailer.createTransport({
		host: 'smtp.mail.ru', // смтп адрес почтовика
		port: 465, // порт смтп почты
		secure: true,
		auth: {
			user: dataParse.email, // адрес твоей почты от кого будешь отплавять сообщение
			pass: dataParse.password, // специальный пароль получаемый в ЛК твоей почты
		},
	});

	const email = {
		from: dataParse.email, // вот сюда пишешь от кого будешь отправлять почту
		to: dataParse.email,
		// сюда куда ты отправляешь почту
	};

	try {
		//  тело почты
		email.subject = req.body?.subject;
		email.text = `
    Тема: ${req.body?.subject}
    Ф.И.О.: ${req.body?.firstName};
    Телефон: ${req.body?.tel};
	E-mail: ${req.body?.email}`;
		//тут отправляется сообщзение на почту
		await mailTransporter.sendMail(email);
		await res.status(200).json({ result: 'ok' });
	} catch (err) {
		console.error('Ошибка отправки email:', err);
	}
});
app.get('/getDataCard', async (req, res) => {
	const data = fs.readFileSync(join(__dirname,'./data.json'), {encoding: 'utf-8'})
	res.status(200).json(data)
})
app.get('/getEmail', async (req, res) => {
	const data = fs.readFileSync(join(__dirname,'./dataEmail.json'), {encoding: 'utf-8'})
	const dataParse = JSON.parse(data)
	res.status(200).send(dataParse.email)
})
app.post('/saveCard', async (req, res) => {
		try {
			const data = JSON.parse(req.body.body)
			const date = prepareDate(data.date)
			const category = prepareCategory(data.category[0])
			const catalog = []
			const prevDataJson = fs.readFileSync(join(__dirname,'./data.json'), {encoding: 'utf-8'})
			const prevDataParse = JSON.parse(prevDataJson)
			const lastID = prevDataParse.reduce(function(prev, current) {
				if (+current.id > +prev.id) {
					return current;
				} else {
					return prev;
				}}).id
			const confirmId = +lastID+1
			fs.mkdirSync(`images/modulTowers/${category}/${date}_${confirmId}/`, {recursive: true})
			for (let item in req.files) {
				const file = req.files[item]
				const filePath = path.join(__dirname, 'images', 'modulTowers', `${category}`, `${date}_${confirmId}`, `${file.name}`)
				file.mv(filePath, err => {
					if (err) {
						return res.status(500).send(err)
					}})
				catalog.push(file.name)
			}
			const card = prepareJSON(data.location, data.deadlines, data.square, data.floors, data.category, category, data.title, date, catalog, data.description, data.date, confirmId)
			const statusSave = saveCard(card)
			if (statusSave === 'OK') {
				res.status(200).send('Объект добавлен')
			}
		} catch (err) {
			res.status(500).send(err);
		}
})
app.post('/visibleCard', async (req, res) => {
	const data = req.body
	visibleCard(data.id)
	res.status(200).send('OK')
})
app.post('/deleteCard', async (req, res) => {
	const data = req.body
	const dataJson = fs.readFileSync(join(__dirname,'./data.json'), {encoding: 'utf-8'})
	const dataParse = JSON.parse(dataJson)
	const deleteData = dataParse.find(card => card.id === data.id)
	const date = prepareDate(deleteData.date)
	const category = prepareCategory(deleteData.category[0])
	const filePath = path.join(__dirname, 'images', 'modulTowers', `${category}`, `${date}`)
	if(fs.existsSync(filePath)){
		fs.rmSync(filePath, {recursive: true})
		deleteCard(data.id)
		res.status(200).send('OK')
	} else {
		const filePath = path.join(__dirname, 'images', 'modulTowers', `${category}`, `${date}_${data.id}`)
		fs.rmSync(filePath, {recursive: true})
		deleteCard(data.id)
		res.status(200).send('OK')
	}
})
app.post('/editCard', async (req, res) => {
	try {
		const data = JSON.parse(req.body.body)
		const date = prepareDate(data.date)
		const category = prepareCategory(data.category[0])
		const catalogUrls = data.catalogUrls
		const catalog = []
		const dataJson = fs.readFileSync(join(__dirname,'./data.json'), {encoding: 'utf-8'})
		const parseData = JSON.parse(dataJson).find(item => item.id === data.id);
		let odUrl;
		let oldPath;
		if (parseData.catalog[0]){
			oldUrl = parseData.catalog[0].split('/').slice(-3)
			oldPath = path.join(__dirname, 'images', 'modulTowers', `${oldUrl[0]}`, `${oldUrl[1]}`)
		}
		const newPath = path.join(__dirname, 'images', 'modulTowers',`${category}`, `${date}_${data.id}`)

		const deleteData = parseData.catalog.filter(item => !catalogUrls.includes(item))

		//удаляем старые фото
		if (deleteData.length > 0) {
			for (let item in deleteData) {
				const url = deleteData[item]
				const directory = url.split('/').slice(-3)
				const filePath = path.join(__dirname, 'images', 'modulTowers',`${directory[0]}`, `${directory[1]}`, `${directory[2]}`)
				if(fs.existsSync(filePath)){
					fs.unlinkSync(`images/modulTowers/${directory[0]}/${directory[1]}/${directory[2]}`)
				} else {
					fs.unlinkSync(`images/modulTowers/${directory[0]}/${directory[1]}_${data.id}/${directory[2]}`)
				}
			}
		}
		if(oldPath && oldPath !== newPath){
			fs.renameSync(oldPath, newPath)
		} else {
			fs.mkdirSync(`images/modulTowers/${category}/${date}_${data.id}/`, {recursive: true})
		}

		for (let item in req.files) {
			const file = req.files[item]
			const filePath = path.join(__dirname, 'images', 'modulTowers', `${category}`, `${date}_${data.id}`, `${file.name}`)
			file.mv(filePath, err => {
				if (err) {
					return res.status(500).send(err)
				}})
			catalog.push(file.name)
		}
			const card = prepareJSON(data.location, data.deadlines, data.square, data.floors, data.category, category, data.title, date, catalog, data.description, data.date, data.id, catalogUrls)
			const statusSave = editCard(card)
		if (statusSave === 'OK') {
			res.status(200).send('Объект добавлен')
		}
	} catch (err) {
		res.status(500).send(err);
	}
})
app.post('/changeEmail', async (req, res) => {
	try {
		const {email, password} = req.body;
		changeEmail(email, password);
		res.status(200).send('OK')
	} catch (err) {
		res.status(500).send('Ошибка изменения E-mail!');
	}

})
// Запуск HTTP сервера
const port = 3000; // Порт, на котором Nginx будет проксировать запросы
http.createServer(app).listen(port, '0.0.0.0', () => {
});
// app.use((req, res, next) => {
// 	res.redirect('https://xn--80aimkbegibhlk6a3ixb.xn--p1ai/');
// });
// http
// 	.createServer(
// 		express().use('/', (req, res) => {
// 			res.redirect('https://xn--80aimkbegibhlk6a3ixb.xn--p1ai/');
// 		})
// )
// .listen(80, '0.0.0.0', () => {
// 		console.log('http listening on port 80');
// 	});
// https.createServer(httpsOptions, app).listen(443, '0.0.0.0', () => {
// 	console.log('https listening on port 443');
// });
