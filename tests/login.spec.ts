const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login');
});
//add tests for login page
test('Check that site has a title', async ({ page }) => {
    await expect(page).toHaveTitle('Login - Practice Software Testing - Toolshop - v5.0');
  });

  test('Fill in the fields on the login page', async ({ page }) => {
    const emailTest = 'customer@practicesoftwaretesting.com'
    const passwordTest = 'welcome01' 
  
    // Playwright сам зачекає, поки поле стане visible + enabled
    await page.getByTestId('email').fill(emailTest);
    await page.getByTestId('password').fill(passwordTest);
  
    // Цей чек має сенс, бо ми хочемо переконатися,
    // що справді ввели потрібний текст
    await expect(page.getByTestId('password')).toHaveValue(passwordTest);
  
    // Те саме з кнопкою: Playwright зачекає до "enabled", але тут 
    // ми явно хочемо перевірити стан кнопки
    const loginButton = page.getByTestId('login-submit');
    await expect(loginButton).toBeEnabled();
    await loginButton.click();
  
    // Assertions після переходу на іншу сторінку
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
    await expect(page.getByTestId('nav-menu')).toContainText('Jane Doe');
    await expect(page.getByTestId('page-title')).toContainText('My account');
  });
  