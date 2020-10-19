function sort(data, sortName) {
    switch (sortName) {
        case 'title':
            data.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : 0);
            break;
        case 'subscribers':
            data.sort((a, b) => a.statistics.subscriberCount - b.statistics.subscriberCount);
            break;
        case 'videos':
            data.sort((a, b) => a.statistics.videoCount - b.statistics.videoCount);
            break;
        case 'views':
            data.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
            break;
        default:
            break;
    }

    return data;
}

module.exports = sort;
