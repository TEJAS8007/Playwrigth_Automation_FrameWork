exports.Checkout_Page= 
class Checkout_Page {

    constructor(page) {
        this.page=page;

        this.product_Name="div.inventory_item_price";
        this.product_Price="div.inventory_item_price";
        this.checkOut="//a[text()='CHECKOUT']";

        // Order Data Locator
        this.First_Name="#first-name";
        this.last_Name="#last-name";
        this.PO_Code="#postal-code";
        this.continue="input[class='btn_primary cart_button']";
        
    }

     async valiidate_Product_Name() {
        const Name= await this.page.locator(this.product_Name).textContent();
        console.log('Product Name : '+Name);
    }

    async valiidate_Product_Price() {
        const price= await this.page.locator(this.product_Price).textContent();
        console.log('Product Price : '+price);

        await this.page.locator(this.checkOut).click();
    }
    
    async OrderData(un,ln,po) {

        await this.page.locator(this.First_Name).fill(un);
         await this.page.locator(this.last_Name).fill(ln);
          await this.page.locator(this.PO_Code).fill(po);
           await this.page.locator(this.continue).click();
    }

}