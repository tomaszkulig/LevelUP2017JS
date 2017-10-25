var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var WomanPage = require(pageObjectDir + "/womanPage.js");
var womanPage = new WomanPage();
var TopsPage = require(pageObjectDir + "/topsPage.js");
var topsPage = new TopsPage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();
var CartPage = require(pageObjectDir + "/cartPage.js");
var cartPage = new CartPage();

var until = protractor.ExpectedConditions;


var isDescriptionLongerThan = function (givenLength) {
return new Promise(function (resolve) {
productPage.description.getText().then(function (text) {
resolve(text.length > givenLength);
        });
    })
};

var getLabelText = function () {
    return new Promise(function (resolve) {
    cartPage.productLabel.getText().then(function (text) {
    resolve (text);
            });
        })
    };

/*var isLabelLongerThan = function(isLongerThan){
    return new Promise(function(resolve){
        browser.customerServiceLabel.getText().then(function(text){
            resolve(text.lenght > isLongerThan);
        })
    });
}*/
//isLabelLongerThan(1).then(console.log)

describe('ContactUs Page Test', function () {
    it('Open Page', function () {
        //browser.waitForAngularEnabled(false); 
        browser.get(homePage.URL);       
    });
    it("Should click into button woman section", function() {
        homePage.womanButton.click();
        expect(browser.getTitle()).toEqual(womanPage.pageTitle)
    });
    it("Should click into button woman section", function() {
        womanPage.topsButton.click();
        expect(browser.getTitle()).toEqual(topsPage.pageTitle)
    });
    it("Should click into product top sleeve", function() {
        topsPage.sleeveTop.click();
    });
    it("Should check if description has more than 8 characters", function() {
        expect(isDescriptionLongerThan(8));
    });
    it("Should check is condition new", function() {
        
    });
 
    it("Should add product with m size to cart", function() {
        productPage.dropDownMenu.click();
        productPage.mSize.click();
        productPage.addToCartButton.click();
    });

    it("Should go to cart", function() {
     browser.wait(function() {
     return productPage.popUpImage.isPresent()});
        productPage.cart.click();
    });

    it("Should check if right product is in the cart", function() {
        expect(getLabelText()).toEqual("Faded Short Sleeve T-shirts");
       });

   
    /*it("should have a title", function(){
        browser.get(contactUsPage.URL);
        expect(contactUsPage.customerService.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it("should display Subject Heading Dropdown", function(){
        expect(contactUsPage.subjectHeading.isDisplayed()).toBe(true);
    });
    it("should display Send Button", function(){
        expect(contactUsPage.sendButton.isPresent()).toBe(true);
    });*/
});