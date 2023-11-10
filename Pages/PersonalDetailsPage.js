class PersonalDetailsPage {
    constructor(page) {
        this.page = page;
        this.genderFemale = page.locator('label').filter({ hasText: 'Female' }).locator('span');
        this.maritalStatus = page.locator('(//div[contains(@class, "oxd-select-text-input") and contains(text(), "-- Select --")])[2]');
        this.nationality = page.locator('(//div[contains(@class, "oxd-select-text-input") and contains(text(), "-- Select --")])[1]');
        //this.dobField = page.locator("//div[@class='oxd-select-text oxd-select-text--focus']/div[@class='oxd-select-text-input']");
        this.saveButton = page.locator('form').filter({ hasText: 'Employee Full NameNicknameEmployee IdOther IdDriver\'s License NumberLicense Expi' }).getByRole('button');
        
    }

    async fillPersonalDetails() {
        await this.genderFemale.click();
        await this.maritalStatus.click('Married');
        await this.nationality.click('British');
        //await this.dobField.fill('1970-01-01');
        await this.saveButton.click();
    }
}

module.exports = { PersonalDetailsPage };
