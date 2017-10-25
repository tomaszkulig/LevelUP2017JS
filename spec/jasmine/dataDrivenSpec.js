var data = {
    '#contact-link > a':{'cssSelector' : '#contact-link > a',
                                'value': 'Contact us'
    },
    'shop':{
        'cssSelecotr' : '.shopping_cart',
               'value': 'Cart (empty)'
    }

}

using(data, function(element) {
describe('Protractor Demo App' + element, function() {
    it('should have a title', function() {

        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
       
        expect(browser.findElement(By.css(element.cssSelecotr)).getText()).toEqual(element.value);
    
        });
    });
});