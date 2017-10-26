var HomePage = require(pageObjectDir + "/homePage.js");
var homePage = new HomePage();
var DressPage = require(pageObjectDir + "/dressPage.js")
var dressPage = new DressPage();
var TestData = require("../testData/testData.js")
var testData = new TestData();

beforeAll(function () {
    browser.get(homePage.URL);
    homePage.dressesButton.click();
});

describe('Should open product page', function () {
    using(testData.data, function (dress) {
        it('Click dress', function () {
            dress.cssSelector.click();
        });
        it('Click dress', function () {
            expect(dressPage.getLabelText(dressPage.actualName)).toEqual(dress.name);
        });
        it('Click dress', function () {
            expect(dressPage.getLabelText(dressPage.actualPrice)).toEqual(dress.price);
            browser.navigate().back();
        });
    });
});

