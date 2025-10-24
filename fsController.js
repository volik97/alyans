const fs = require('fs');
const { join } = require('path');
const path = require('path');
const saveCard = (card, filePath = '../data.json') => {
    try {
        const data = fs.readFileSync(join(__dirname, filePath), { encoding: 'utf-8' });

        const dataParse = JSON.parse(data);

        dataParse.push(card);
        fs.writeFileSync(join(__dirname, filePath), JSON.stringify(dataParse), {
            encoding: 'utf-8',
        });
        return 'OK';
    } catch (err) {
        console.log(err);
        return err;
    }
};
const editCard = (card, filePath = '../data.json') => {
    try {
        const data = fs.readFileSync(join(__dirname, filePath), { encoding: 'utf-8' });

        const dataParse = JSON.parse(data);
        const editDataParse = dataParse.filter(item => item.id !== card.id);
        editDataParse.push(card);
        fs.writeFileSync(join(__dirname, filePath), JSON.stringify(editDataParse), {
            encoding: 'utf-8',
        });
        return 'OK';
    } catch (err) {
        console.log(err);
        return err;
    }
};
const deleteCard = (id, filePath = '../data.json') => {
    const data = fs.readFileSync(join(__dirname, filePath), { encoding: 'utf-8' });
    const dataParse = JSON.parse(data);

    // Найти карточку для удаления, чтобы получить информацию о папке
    const cardToDelete = dataParse.find(card => card.id === id);

    const filterData = dataParse.filter(card => card.id !== id);
    fs.writeFile(
        join(__dirname, filePath),
        JSON.stringify(filterData),
        { encoding: 'utf-8' },
        err => err && console.error(err)
    );

    // Удалить папку с изображениями
    if (cardToDelete && cardToDelete.catalog && cardToDelete.catalog.length > 0) {
        try {
            const firstImageUrl = cardToDelete.catalog[0];
            console.log('URL изображения:', firstImageUrl);

            // Извлекаем путь к папке из URL
            // URL: https://xn--80aimkbegibhlk6a3ixb.xn--p1ai/images/projects/Healthy/2024-10-12_1/filename.jpg
            const urlParts = firstImageUrl.split('/');
            const domainIndex = urlParts.findIndex(part =>
                part.includes('xn--80aimkbegibhlk6a3ixb.xn--p1ai')
            );

            if (domainIndex !== -1 && urlParts.length > domainIndex + 3) {
                // Получаем путь после домена: images/projects/Healthy/2024-10-12_1
                const imagePath = urlParts.slice(domainIndex + 1, -1).join('/');
                const fullPath = join(__dirname, '..', imagePath);

                console.log('Путь к папке:', fullPath);

                if (fs.existsSync(fullPath)) {
                    fs.rmSync(fullPath, { recursive: true, force: true });
                    console.log(`Удалена папка: ${fullPath}`);
                } else {
                    console.log(`Папка не существует: ${fullPath}`);
                }
            } else {
                console.log('Не удалось извлечь путь из URL:', firstImageUrl);
            }
        } catch (err) {
            console.error('Ошибка удаления папки:', err);
        }
    }
};
const visibleCard = (id, filePath = '../data.json') => {
    try {
        const data = fs.readFileSync(join(__dirname, filePath), { encoding: 'utf-8' });
        const dataParse = JSON.parse(data);
        dataParse.map(item => (item.id === id ? (item.visible = !item.visible) : null));
        fs.writeFileSync(join(__dirname, filePath), JSON.stringify(dataParse), {
            encoding: 'utf-8',
        });
        return 'OK';
    } catch (err) {
        console.error('Ошибка в visibleCard:', err);
        return err;
    }
};

const changeEmail = (email, password) => {
    const data = fs.readFileSync(join(__dirname, '../dataEmail.json'), { encoding: 'utf-8' });
    const dataParse = JSON.parse(data);
    dataParse.email = email;
    dataParse.password = password;
    fs.writeFileSync(join(__dirname, '../dataEmail.json'), JSON.stringify(dataParse), {
        encoding: 'utf-8',
    });
};
module.exports = {
    deleteCard: deleteCard,
    editCard: editCard,
    saveCard: saveCard,
    visibleCard: visibleCard,
    changeEmail: changeEmail,
};
