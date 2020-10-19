const { JSDOM } = require('jsdom');

describe('list.html', () => {
    let browser;

    beforeEach(done => {
        JSDOM.fromFile('./src/app/components/list.html', {

        }).then(resp => {
            browser = resp;
            done();
        });
    });

    afterEach(() => {
        browser.window.close();
    })

    it('has #title-channel', () => {
        let template = browser.window.document.getElementsByTagName('template')[0];
        let div = template.content.getElementById('title-channel');
        expect(div).not.toBe(null);
    });

    it('Tag a should open a new tab', () => {
        let template = browser.window.document.getElementsByTagName('template')[0];
        let a = template.content.querySelector('a');
        expect(a.target).toEqual('_blank');
    })
});

