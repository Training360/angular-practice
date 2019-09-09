describe('Testing index page', function() {
    it('should have bootstrap', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        element.all(by.css('link')).then( async (links) => {
            let done = false;
            for (link of links) {
                let href = await link.getAttribute('href');
                if (href.indexOf('bootstrap') > -1) {
                    done = true;
                    break;
                }
            }
            expect(done).toEqual(true);
        });
    });

    it('should have bootstrap and jquery .js', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        element.all(by.css('script')).then( async (links) => {
            let done = false;
            for (link of links) {
                let href = await link.getAttribute('src');
                if (href.indexOf('bootstrap') > -1) {
                    done = true;
                    break;
                }
            }
            expect(done).toEqual(true);
        });
    });
    
    it('should have a sticky navbar', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let navbar = element(by.css('nav.navbar.sticky-top'))
        expect(navbar.isPresent()).toBeTruthy();
    });
    
    it('should have home link on the navbar', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let link = element(by.css('nav.navbar.sticky-top a[href="/"]'))
        expect(link.isPresent()).toBeTruthy();
    });
    
    it('should have products link on the navbar', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let link = element(by.css('nav.navbar.sticky-top a[href="/products"]'))
        expect(link.isPresent()).toBeTruthy();
    });
    
    it('should have about link on the navbar', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let link = element(by.css('nav.navbar.sticky-top a[href="/about"]'))
        expect(link.isPresent()).toBeTruthy();
    });
    
    it('should have contact link on the navbar', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let link = element(by.css('nav.navbar.sticky-top a[href="/contact"]'))
        expect(link.isPresent()).toBeTruthy();
    });
    
    it('should have a .container div', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let cont = element(by.css('body .container'));
        expect(cont.isPresent()).toBeTruthy();
    });
    
    it('should have a jumbotron button', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/');

        let cont = element(by.css('.jumbotron a[href="/products"]'));
        expect(cont.isPresent()).toBeTruthy();
    });
});