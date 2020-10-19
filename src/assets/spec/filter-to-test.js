function filter(data, search) {
    search = search.toLowerCase();
    return data.filter(item => item.title.toLowerCase().includes(search));
}

module.exports = filter;
