exports.Payment_Page =
class Payment_Page {

    constructor(page) {

        this.page=page;
        this.product_Name=".inventory_item_name";
        this.product_Price=".inventory_item_price";
        this.final_Price="div.summary_total_label";
        this.fiinish_Button="//a[text()='FINISH']";

        this.Order_MSG="h2.complete-header";

    }

    async Verify_Product_Name() {
        const Name= await this.page.locator(this.product_Name).textContent();
        console.log("Product Name : "+Name);
    }

     async Verify_Product_Price() {
        const Price= await this.page.locator(this.product_Price).textContent();
        console.log("Product Price : "+Price);
    }

    async Verify_Product_Final_Price() {
        const Price= await this.page.locator(this.final_Price).textContent();
        console.log("Product Final Price : "+Price);

        await this.page.locator(this.fiinish_Button).click();
    }

    async validate_Order_Msg() {

        const msg= await this.page.locator(this.Order_MSG).textContent();
        console.log("Product Final MSG : "+msg);
    }
}