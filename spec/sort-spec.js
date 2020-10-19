const sort = require('../src/assets/spec/sort-to-test');

const data = [
    {
        "title": "Fun Fun Function",
        "statistics": {
            "viewCount": "7261372",
            "commentCount": "0",
            "subscriberCount": "180691",
            "hiddenSubscriberCount": false,
            "videoCount": "189"
        }
    },
    {
        "title": "Google Chrome Developers",
        "statistics": {
            "viewCount": "21089248",
            "commentCount": "0",
            "subscriberCount": "260317",
            "hiddenSubscriberCount": false,
            "videoCount": "796"
        }
    },
    {
        "title": "DevTips",
        "statistics": {
            "viewCount": "13948443",
            "commentCount": "0",
            "subscriberCount": "306828",
            "hiddenSubscriberCount": false,
            "videoCount": "329"
        }
    },
    {
        "title": "freeCodeCamp.org",
        "statistics": {
            "viewCount": "10578494",
            "commentCount": "0",
            "subscriberCount": "464998",
            "hiddenSubscriberCount": false,
            "videoCount": "879"
        }
    },
    {
        "title": "meet.js",
        "statistics": {
            "viewCount": "28565",
            "commentCount": "0",
            "subscriberCount": "504",
            "hiddenSubscriberCount": false,
            "videoCount": "69"
        }
    },
    {
        "title": "JSConf",
        "statistics": {
            "viewCount": "6747555",
            "commentCount": "0",
            "subscriberCount": "106248",
            "hiddenSubscriberCount": false,
            "videoCount": "1281"
        }
    },
    {
        "title": "Coding Tech",
        "statistics": {
            "viewCount": "13779683",
            "commentCount": "0",
            "subscriberCount": "362617",
            "hiddenSubscriberCount": false,
            "videoCount": "539"
        }
    },
    {
        "title": "Allegro Tech",
        "statistics": {
            "viewCount": "38100",
            "commentCount": "0",
            "subscriberCount": "577",
            "hiddenSubscriberCount": false,
            "videoCount": "96"
        }
    }
]

describe('sort', () => {
    it('should sort the data by parameters', () => {
        expect(sort(data, 'title')).toBe(data.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : 0));
        expect(sort(data, 'subscribers')).toBe(data.sort((a, b) => a.statistics.subscriberCount - b.statistics.subscriberCount));
        expect(sort(data, 'videos')).toBe(data.sort((a, b) => a.statistics.videoCount - b.statistics.videoCount));
        expect(sort(data, 'views')).toBe(data.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount));
    })
})
