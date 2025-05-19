const{test,expect}= require('@playwright/test');
require('dotenv').config();
const data=require('../config.json');
const log= require('../logger')
import { Login_Page } from '../Pages/Login_Page';
import{ Product_Page } from '../Pages/Product_Page';
import { Checkout_Page } from '../Pages/Checkout_Page';
import { Payment_Page } from '../Pages/Payment_Page';


test('Login_Page_Test' , async({browser})=>{

    const context= await browser.newContext({ recordVideo: { dir: 'videos/' } });
    const page =await context.newPage();

    const login= new Login_Page(page);
    const product= new Product_Page(page);
    const checkout=new Checkout_Page(page);
    const Payment=new Payment_Page(page);

    await login.Get_Login_Page(data.BASE_URL);
    log.info('Web Application Launched....');
    await login.perform_Login_Action(data.USERNAME,data.PASSWORD);
    log.info('Login Action Performed....');
    await page.waitForTimeout(1000);

    await product.Verify_Page_Title(data.TITLE);
    log.info('Page title Verified....');
    await product.Verify_Products();
    log.info('Products Verified....');
    await product.click_On_Item();
    log.info('Click on Item Done....');
    await product.verify_Product_Name(data.Pro_Name);
    log.info('Product Name Verified....');
    await product.click_On_Add_Cart();
    log.info('Click on Add To Cart Done....');
    await page.waitForTimeout(3000);


    await checkout.valiidate_Product_Name();
    log.info('Product NAme Verified....');
    await checkout.valiidate_Product_Price();
    log.info('Product Price Verified....');
    await checkout.OrderData(data.FIRST_NAME,
                             data.LAST_NAME,
                             data.POSTAL_CODE);
                             log.info('Checkout order Data Done....');
    await page.waitForTimeout(3000);


    await Payment.Verify_Product_Name();
    log.info('product Name Verifoed....');
    await Payment.Verify_Product_Price();
    log.info('product price verified....');
    await Payment.Verify_Product_Final_Price();
    log.info('product final price verified....');
    await Payment.validate_Order_Msg();
    log.info('Order mesage verified....');
    await page.waitForTimeout(2000);
})


