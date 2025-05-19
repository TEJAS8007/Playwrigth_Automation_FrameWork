const{test,expect}= require('@playwright/test')
import { Login_Page } from '../Pages/Login_Page'
import{ Product_Page } from '../Pages/Product_Page'

test('Login_Page_Test' , async({browser})=>{

   const context= await browser.newContext();
   const page =await context.newPage();

   const login= new Login_Page(page);
   await login.Get_Login_Page('https://www.saucedemo.com/v1/');
   await login.perform_Login_Action('standard_user','secret_sauce');

   await page.waitForTimeout(2000);
})


test('Product_Page_Test',async({browser})=>{

    const context= await browser.newContext();
    const page =await context.newPage();

    const product= new Product_Page(page);

    await product.Verify_Page_Title('Swag Labs');
    
    await product.Verify_Products();

    await product.click_On_Item();

    await product.verify_Product_Name();

    await product.click_On_Add_Cart();
})
