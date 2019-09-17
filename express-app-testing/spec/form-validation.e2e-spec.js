describe('Testing Registration', function() {

    let goButton;
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:3000/');

    beforeEach(async () => {
        goButton = await element(by.css('button.btn.btn-primary[type=submit]'));
    });

    it('should firstname error message showed', async () => {
        browser.sleep(1000);
        let el = await element(by.css('#billing-address-form #firstName'));
        let errorMessage = await element(by.css('#billing-address-form .row:first-child .col-md-6.mb-3:first-child .invalid-feedback'));
        el.sendKeys('H');
        goButton.click();
        expect( errorMessage.isDisplayed() ).toBe(true);
    });
    it('should firstname error message still hidden', async () => {
        browser.sleep(1000);
        let el = await element(by.css('#billing-address-form #firstName'));
        let errorMessage = await element(by.css('#billing-address-form .row:first-child .col-md-6.mb-3:first-child .invalid-feedback'));
        el.sendKeys('Hernandez');
        goButton.click();
        expect( errorMessage.isDisplayed() ).toBe(false);
    });
    
    it('should lastName error message showed', async () => {
        browser.sleep(1000);
        let el = await element(by.css('#billing-address-form #lastName'));
        let errorMessage = await element(by.css('#billing-address-form .row:first-child .col-md-6.mb-3:nth-child(2) .invalid-feedback'));
        el.sendKeys('G');
        goButton.click();
        expect( errorMessage.isDisplayed() ).toBe(true);
    });
    it('should lastName error message still hidden', async () => {
        browser.sleep(1000);
        let el = await element(by.css('#billing-address-form #lastName'));
        let errorMessage = await element(by.css('#billing-address-form .row:first-child .col-md-6.mb-3:nth-child(2) .invalid-feedback'));
        el.sendKeys('Guerra');
        goButton.click();
        expect( errorMessage.isDisplayed() ).toBe(false);
    });

});