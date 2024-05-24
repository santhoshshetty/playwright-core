import { Page, expect } from "@playwright/test";

class loginpage {
  constructor(private readonly page: Page) {}

  private readonly userNameTextBox = () =>
    this.page.getByRole("textbox", { name: "Username" });
  private readonly passwordTextBox = () =>
    this.page.getByRole("textbox", { name: "Password" });
  private readonly loginButton = () =>
    this.page.getByRole("button", { name: /LOGIN/i });

  async login(username: string, password: string) {
    await this.userNameTextBox().fill(username);
    await this.passwordTextBox().fill(password);
    await this.loginButton().click();
    await expect(this.page.url()).toContain("dashboard");
  }
}
export default loginpage;
