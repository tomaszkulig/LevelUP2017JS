var DressPage = function DressPage() {

    this.pageTitle = 'Women - My Store';
    this.actualName = $('div.pb-center-column.col-xs-12.col-sm-4 > h1');
    this.actualPrice = $('#our_price_display');

    this.getLabelText  =  function  (element) {
        return  new  Promise(function  (resolve) {
            element.getText().then(function  (text) {
                resolve(text);
            });
        })
    };
}

module.exports = DressPage;