const generatorPathToSaveImg = (rawDate, category, fileName ) => {
    let date = rawDate.split('-').reverse();
    date[1] = date.splice(0,1, date[1])[0];
    date = date.join('_')
    return `./images/modulTowers/${category}/${date}/${fileName}`;
};

const generatorPathToSaveImgOnJSON = (rawDate, category, fileName) => {
    const date = rawDate.split('-').reverse();
    date[1] = date.splice(0,1, date[1])[0];
    date.join('_');
    return `http://xn--80aimkbegibhlk6a3ixb.xn--p1ai/images/modulTowers/${category}/${date}/${fileName}`;
}

module.exports = {
    generatorPathToSaveImg: generatorPathToSaveImg,
    generatorPathToSaveImgOnJSON: generatorPathToSaveImgOnJSON,

};