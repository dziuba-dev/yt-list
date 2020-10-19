const filter = require('../src/assets/spec/filter-to-test');

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

describe('filter', () => {
    it('should filter the data according to the parameters', () => {
        expect(filter(data, 'dev')).toEqual(data.filter(item => item.title.toLowerCase().includes('dev')));
        expect(filter(data, 'empty')).toEqual(data.filter(item => item.title.toLowerCase().includes('empty')));
        expect(filter(data, 'google')).toEqual(data.filter(item => item.title.toLowerCase().includes('google')));
        expect(filter(data, '')).toEqual(data.filter(item => item.title.toLowerCase().includes('')));
        expect(filter(data, 'JS')).toEqual(data.filter(item => item.title.toLowerCase().includes('js')));
        expect(filter(data, 'Fun')).toEqual(data.filter(item => item.title.toLowerCase().includes('fun')));
    })
})
