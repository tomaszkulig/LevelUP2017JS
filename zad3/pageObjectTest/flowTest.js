var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var ProductPage = require(pageObjectDir + "/productPage.js");
var productPage = new ProductPage();
var DressPage = require(pageObjectDir + "/dressPage.js")
var dressPage = new DressPage();

beforeAll(function () {
    browser.get(homePage.URL);
});

beforeEach(function () {
    homePage.dressesButton.click();
});

afterAll(function () {
});

afterEach(function () {
    productPage.logo.click();
});

var  getLabelText  =  function  (element) {
    return  new  Promise(function  (resolve) {
        element.getText().then(function  (text) {
            resolve(text);
        });
    })
};

var data = {
    'dress1':{
        'cssSelector' : element(By.css('#center_column li:nth-child(1) > div  h5 > a')),
        'name' : 'Printed Dress',
        'price' : '$26.00'
    },
    'dress2':{
        'cssSelector' : element(By.css('#center_column li:nth-child(2) > div  h5 > a')),
        'name' : 'Printed Dress',
        'price' : '$50.99'
    },
    'dress3':{
        'cssSelector' : element(By.css('#center_column li:nth-child(3) > div  h5 > a')),
        'name' : 'Printed Summer Dress',
        'price' : '$28.98'
    },
    'dress4':{
        'cssSelector' : element(By.css('#center_column li:nth-child(4) > div  h5 > a')),
        'name' : 'Printed Summer Dress',
        'price' : '$30.50'
    },
    'dress5':{
        'cssSelector' : element(By.css('#center_column li:nth-child(5) > div  h5 > a')),
        'name' : 'Printed Chiffon Dress',
        'price' : '$16.40'
    }}

describe('Should open product page', function () {
    using(data, function (dress) {
        it('Click dress', function () {
        dress.cssSelector.click();
        expect(getLabelText(dressPage.actualName)).toEqual(dress.name)
        expect(getLabelText(dressPage.actualPrice)).toEqual(dress.price)
        })
    });
 });

