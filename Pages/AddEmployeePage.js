class AddEmployeePage {
    constructor(page) {
        this.page = page;
        this.firstNameField = page.getByPlaceholder('First Name');
        this.middleNameField = page.getByPlaceholder('Middle Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.employeeIdField = page.locator('form').getByRole('textbox').nth(4);
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async addEmployee(firstName, middleName, lastName, employeeId) {
        await this.firstNameField.fill(firstName);
        await this.middleNameField.fill(middleName);
        await this.lastNameField.fill(lastName);
        await this.employeeIdField.fill(employeeId);
        await this.saveButton.click();
    }
    /*async getEmployeeDetails() {
        return {
            name: await this.page.locator('.oxd-text.oxd-text--h6.--strong').textContent(),
            id: await this.employeeIdField.inputValue()
        };
    } */
}

module.exports = { AddEmployeePage };
