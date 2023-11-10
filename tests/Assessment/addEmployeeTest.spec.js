require('dotenv').config(); 
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('/Ajith/Project/OrangeHRM_POM/Pages/LoginPage')
const { DashboardPage } = require('/Ajith/Project/OrangeHRM_POM/Pages/DashboardPage');
const { AddEmployeePage } = require('/Ajith/Project/OrangeHRM_POM/Pages/AddEmployeePage');
const { PersonalDetailsPage } = require('/Ajith/Project/OrangeHRM_POM/Pages/PersonalDetailsPage');
const { EmployeeInformationPage } = require('/Ajith/Project/OrangeHRM_POM/Pages/EmployeeInformationPage');

test('Complete employee add workflow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const addEmployeePage = new AddEmployeePage(page);
    const personalDetailsPage = new PersonalDetailsPage(page);
    const employeeInfoPage = new EmployeeInformationPage(page);

    //await page.goto(process.env.BASE_URL || 'default URL');
    //await loginPage.login(process.env.USERNAME || 'default username', process.env.PASSWORD || 'default password');
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await loginPage.login('Admin', 'admin123');
    await dashboardPage.verifyPageTitle();
    await dashboardPage.gotoAddEmployee();

    const employeeId = '00011'; 
    await addEmployeePage.addEmployee('Mickey', 'The', 'Mouse', employeeId);
    //const employeeDetails = await addEmployeePage.getEmployeeDetails();
    //expect(employeeDetails.name).toBe('Mickey The Mouse');
    //expect(employeeDetails.id).toBe(employeeId);

    await personalDetailsPage.fillPersonalDetails();
   // await addEmployeePage.backButton.click();

    await employeeInfoPage.searchEmployee(employeeId);
    await employeeInfoPage.verifyEmployeeId(employeeId);
});
