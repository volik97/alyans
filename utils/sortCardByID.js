function sortCardByID(data) {
    return JSON.parse(data).sort((a,b) => {return a.id - b.id})
}

module.exports = sortCardByID;