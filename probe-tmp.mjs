import { chromium } from 'playwright';
import 'dotenv/config';

const url = process.env.LMS_URL;
const user = process.env.LMS_USERNAME;
const pass = process.env.LMS_PASSWORD;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.getByLabel('User').fill(user);
await page.getByLabel('Password').fill(pass);
await page.getByRole('combobox', { name: 'Select the role' }).click();
await page.getByRole('option', { name: 'Admin' }).click();
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForTimeout(3000);

await page.locator("//button[@id='program']").click();
await page.waitForTimeout(1000);
await page.getByText('Add New Program').first().click();
await page.waitForTimeout(1000);
await page.locator("//input[@id='programName']").fill('ProbeProg' + Date.now().toString().slice(-5));
await page.locator('div[role=dialog] .p-radiobutton-box').first().click();
await page.locator('#saveProgram').click();
await page.waitForTimeout(2000);
const toast = await page.locator('.p-toast-message-content').first().innerText().catch(() => '');
console.log('TOAST:', JSON.stringify(toast));
await page.waitForTimeout(1500);

const rows = page.locator('p-table tbody tr');
const rowCount = await rows.count();
console.log('PROGRAM ROW COUNT:', rowCount);
for (let i = 0; i < Math.min(rowCount, 8); i++) {
  const texts = await rows.nth(i).locator('td').allInnerTexts();
  console.log('ROW', i, JSON.stringify(texts));
  console.log('ROW', i, 'html:', (await rows.nth(i).innerHTML()).slice(0, 600));
}
const footer = await page.locator("[class*='p-datatable-footer']").innerText().catch(() => 'n/a');
console.log('FOOTER:', footer);

await browser.close();
