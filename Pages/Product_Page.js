const { escape } = require("querystring");
const { threadId } = require("worker_threads");
exports.Product_Page =
class Product_Page {

    constructor(page) {

        this.page=page;
        this.product_Locator="div[class='inventory_item_name']";
        this.Item="a#item_4_title_link";
        this.VerifyName="div.inventory_details_name";
        this.AddCartButton="//button[text()='ADD TO CART']";
        this.viewCart_Button="a[class='shopping_cart_link fa-layers fa-fw']";

    }

    async Verify_Page_Title(expected_title) {
        const title=await this.page.title();
        console.log('Expected_Title : ',title);

        if(title===expected_title) {
            console.log('Product Page Title Matched...');
        } else {
            console.log('Product Page Title Not Matched...');
        }
    
    }

    async Verify_Products() {

        const prod_No= await this.page.locator(this.product_Locator).all();
        console.log('No Of Products : ', prod_No.length);

        for(let prod of prod_No) {
        console.log('Name Of Product : ', await prod.textContent());
        }

    }

    async click_On_Item() {
        await this.page.locator(this.Item).click();
    }

    async verify_Product_Name(name) {

        const Name= await this.page.locator(this.VerifyName).textContent();
        
        if(name===Name){
            console.log('Product Name Matched....');
        } else {
            console.log('Product Name Matched....');
        }

    }

    async click_On_Add_Cart() {
        await this.page.locator(this.AddCartButton).click();
        await this.page.locator(this.viewCart_Button).click();
    }
}