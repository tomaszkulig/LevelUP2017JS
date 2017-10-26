var ProductPage = function ProductPage(){

        this.description = element(By.css('#short_description_content > p'))
        this.dropDownMenu  = element(By.css('#group_1'))
        this.mSize = element(By.css('#group_1 > option:nth-child(2)'))
        this.addToCartButton = element(By.css('#add_to_cart > button > span'))
        this.cart = element(By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span'))
        this.popUpImage = element(By.css("#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > div.product-image-container.layer_cart_img > img"))
        this.logo =  element(By.css("#header_logo > a > img"))
    }
    
    module.exports = ProductPage;