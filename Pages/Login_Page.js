import { test, expect } from '@playwright/test';
import log from '../logger';
const data=require('../config.json');
import { waitForDebugger } from 'inspector';

export class Login_Page {

    constructor(page){
        
        this.page = page;
        this.userInput="input#user-name";
        this.passInput="input#password";
        this.Login_button="input#login-button";

    }

    async Get_Login_Page(url) {
        await this.page.goto(url);

        if(await expect(this.page).toHaveURL(data.BASE_URL)) {
            log.info('Url Passed Sucessfull....');
        } else {
            log.error('Please pass url...');
        }
    }

    async perform_Login_Action(username , password) {

        await this.page.locator(this.userInput).fill(username);
        
        try {
            await expect(this.page.locator(this.userInput)).toHaveText(data.USERNAME);
            log.info('userName Entered Sucessfully....');
        } catch(error){
            log.error('UserName Not Entered Properly...');
        }

        await this.page.locator(this.passInput).fill(password);

        try {
            await expect(this.page.locator(this.passInput).toHaveText(data.PASSWORD));
            log.info('Password entered Successfully');
        } catch(error) {
           log.error('Please Entred Password successfully....');
        }


        await this.page.locator(this.Login_button).click();

    }


}