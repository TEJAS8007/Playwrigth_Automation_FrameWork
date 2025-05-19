exports.Login_Page =
class Login_Page {

    constructor(page){
        
        this.page = page;
        this.userInput="input#user-name";
        this.passInput="input#password";
        this.Login_button="input#login-button";

    }

    async Get_Login_Page(url) {
        await this.page.goto(url);
    }

    async perform_Login_Action(username , password) {

        await this.page.locator(this.userInput).fill(username);
        await this.page.locator(this.passInput).fill(password);
        await this.page.locator(this.Login_button).click();

    }


}