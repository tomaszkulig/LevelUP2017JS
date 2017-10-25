var HomePage = function HomePage(){

    this.URL = 'http://automationpractice.com/index.php'
    this.womanButton = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'))

}

module.exports = HomePage;