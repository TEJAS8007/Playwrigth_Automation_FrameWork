const{test,expect}= require('@playwright/test');
import { Login_Page } from '../Pages/Login_Page';
import{ Product_Page } from '../Pages/Product_Page';
import { Checkout_Page } from '../Pages/Checkout_Page';
import { Payment_Page } from '../Pages/Payment_Page';

test('Login_Page_Test' , async({browser})=>{

   const context= await browser.newContext();
   const page =await context.newPage();

   const login= new Login_Page(page);
   const product= new Product_Page(page);
   const checkout=new Checkout_Page(page);
   const Payment=new Payment_Page(page);

   await login.Get_Login_Page('https://www.saucedemo.com/v1/');
   await login.perform_Login_Action('standard_user','secret_sauce');

   await page.waitForTimeout(1000);

   
    await product.Verify_Page_Title('Swag Labs');
    
    await product.Verify_Products();

    await product.click_On_Item();

    await product.verify_Product_Name('Sauce Labs Backpack');

    await product.click_On_Add_Cart();

    await page.waitForTimeout(3000);

    await checkout.valiidate_Product_Name();

    await checkout.valiidate_Product_Price();

    await checkout.OrderData('Tejas','Aware','422542');

    await page.waitForTimeout(3000);

    await Payment.Verify_Product_Name();

    await Payment.Verify_Product_Price();

    await Payment.Verify_Product_Final_Price();

    await Payment.validate_Order_Msg();

    await page.waitForTimeout(2000);
})


