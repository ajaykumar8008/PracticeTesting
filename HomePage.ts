import {Page, expect, Locator } from '@playwright/test';

import { TestConfig } from '../test.config';
export class HomePage{

    private readonly page: Page;

    public readonly fName: Locator;
    public readonly eMail: Locator;
    private readonly config: TestConfig;

    //constructor
    constructor(page:Page, config:TestConfig){

        this.page =page;
        this.config=config;
        this.fName = page.locator("//input[@id='name']");
        this.eMail = page.locator("//input[@id='email']");


    }

   
    // async isFirstName(name: string = this.config.firstName){

    //     await this.fName.fill(name);

    // }

    // async isEmail(email : string =  this.config.eMailname){
    //     await this.eMail.fill(email);
    // }
}