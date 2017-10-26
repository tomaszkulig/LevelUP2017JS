var HomePage = function HomePage(){

    this.URL = 'http://automationpractice.com/index.php'
    this.dressesButton = element(By.css('#block_top_menu > ul > li:nth-child(2) > a'))

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
}

module.exports = HomePage;