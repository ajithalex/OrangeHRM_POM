const { expect } = require('@playwright/test');
class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
        this.addEmployeeButton = page.getByRole('button', { name: ' Add' });
    }

    async verifyPageTitle() {
        await expect(this.page).toHaveTitle('OrangeHRM');
    }

    async gotoAddEmployee() {
        await this.pimMenu.click();
        await this.addEmployeeButton.click();
    }
}

module.exports = { DashboardPage };
