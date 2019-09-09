describe('Testing products page', function() {
    it('should have cards', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/products');

        element.all(by.css('.card')).then( (cards) => {
            expect(cards.length).toEqual(95);
        });
    });
    
    it('should have cards', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://localhost:3000/products');

        var cat = element(by.css('.card a'));
        expect(cat.getText()).toBe('Show');
    });
});