var CartPage = function CartPage() {

    var productLabel = element(By.css('#product_1_3_0_0 > td.cart_description > p > a'))


    this.getLabelText  =  function  () {
        return  new  Promise(function  (resolve) {
            productLabel.getText().then(function  (text) {
                resolve(text);
            });
        })
    };
}
module.exports = CartPage;