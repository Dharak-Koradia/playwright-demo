import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locator constants
  private readonly USERNAME_INPUT = '#user-name';
  private readonly PASSWORD_INPUT = '#password';
  private readonly LOGIN_BUTTON = '#login-button';

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(this.USERNAME_INPUT);
    this.passwordInput = page.locator(this.PASSWORD_INPUT);
    this.loginButton = page.locator(this.LOGIN_BUTTON);
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL || 'https://envVariablesDidNotLoad.com');
  }

  async login() {
    await this.usernameInput.fill(process.env.USERNAME || '');
    await this.passwordInput.fill(process.env.PASSWORD || '');
    await this.loginButton.click();
  }

  // New helper for custom credentials
  async loginWithCustomCredentials(username: string, password: string) {
    await this.page.locator(this.USERNAME_INPUT).fill(username);
    await this.page.locator(this.PASSWORD_INPUT).fill(password);
    await this.page.locator(this.LOGIN_BUTTON).click();
  }
}
