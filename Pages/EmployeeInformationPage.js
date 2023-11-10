const { expect } = require('@playwright/test');

class EmployeeInformationPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.getByRole('link', { name: 'PIM' });
        this.searchField =  page.getByRole('textbox').nth(2);
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resultTable = page.locator('.orangehrm-container');
    }

    async searchEmployee(employeeId) {
        await this.pimMenu.click();
        await this.searchField.fill(employeeId);
        await this.searchButton.click();
    }

    async verifyEmployeeId(employeeId) {
        const idInTable = await this.resultTable.locator('.oxd-table-cell.oxd-padding-cell').textContent();
        await expect(idInTable).toBe(employeeId);
    }
}

module.exports = { EmployeeInformationPage };
