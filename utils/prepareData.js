const fs = require('fs');
const { join } = require('path');
const { sortCardByID } = require('./sortCardByID.js');
const { describe } = require('node:test');
const prepareDate = date => {
    if (date.length > 10) {
        const reversAndSplitDate = date.substr(0, 10).split('-').reverse();
        reversAndSplitDate[1] = reversAndSplitDate.splice(0, 1, reversAndSplitDate[1])[0];
        return reversAndSplitDate.join('_');
    } else {
        const reversAndSplitDate = date.split('-').reverse();
        reversAndSplitDate[1] = reversAndSplitDate.splice(0, 1, reversAndSplitDate[1])[0];
        return reversAndSplitDate.join('_');
    }
};

const prepareCategory = category => {
    switch (category) {
        case 'Спорт':
            return 'Sport';
        case 'Образование':
            return 'Education';
        case 'Здравоохранение':
            return 'Healthy';
        case 'Культура':
            return 'Culture';
        case 'Крым':
            return 'Krym';
        default:
            console.error('Unknown category:', category);
            return 'Unknown';
    }
};
const prepareJSON = (
    location,
    deadline,
    square,
    floors,
    arrCategory,
    urlCategory,
    title,
    urlDate,
    filesName,
    description,
    date,
    id,
    catalogUrls,
    filePath = '../data.json'
) => {
    const data = fs.readFileSync(join(__dirname, filePath), { encoding: 'utf-8' });
    const dataParse = JSON.parse(data);
    const newDate = new Date(date);
    const imagePath = filePath.includes('Projects') ? 'images/projects' : 'images/modulTowers';
    const url = `https://xn--80aimkbegibhlk6a3ixb.xn--p1ai/${imagePath}/${urlCategory}/${urlDate}_${id}/`;
    const oldImageRenameUrl = catalogUrls => {
        const renameUrls = [];
        for (let item in catalogUrls) {
            const fileName = catalogUrls[item].split('/').slice(-1)[0];
            const newUrl = url.concat(fileName);
            renameUrls.push(newUrl);
        }
        return renameUrls;
    };
    const catalog = filesName => {
        return filesName.map(item => url.concat(item));
    };
    const lastID =
        dataParse.length > 0
            ? dataParse.reduce(function (prev, current) {
                  if (+current.id > +prev.id) {
                      return current;
                  } else {
                      return prev;
                  }
              }).id
            : 0;
    const imagesUrl = catalog(filesName);
    if (catalogUrls) {
        const oldUrls = oldImageRenameUrl(catalogUrls);
        imagesUrl.push(...oldUrls);
    }
    const foundCover = imagesUrl => {
        return imagesUrl.filter(item => {
            if (item.includes('cover')) {
                return item;
            }
        })[0];
    };
    const card = {
        id: id ?? +lastID + 1,
        category: arrCategory,
        title: title,
        img: foundCover(imagesUrl),
        catalog: imagesUrl,
        description: description,
        date: newDate.toJSON(),
        floors: floors,
        square: square,
        deadlines: deadline,
        location: location,
        visible: true,
    };
    return card;
};

module.exports = {
    prepareDate: prepareDate,
    prepareCategory: prepareCategory,
    prepareJSON: prepareJSON,
};
