import { Page } from "@playwright/test";
import { openUrl, click, fill } from "../../../src/utils/actions-utils";
import { getLocatorByRole } from "../../../src/utils/locator-utils";

class loginpageFluent {
  private readonly userNameTextBox = () =>
    getLocatorByRole("textbox", { name: "Username" });
  private readonly passwordTextBox = () =>
    getLocatorByRole("textbox", { name: "Password" });
  private readonly loginButton = () =>
    getLocatorByRole("button", { name: /LOGIN/i });

  async enhancedLogin(username: string, password: string) {
    await fill(this.userNameTextBox(), username);
    await fill(this.passwordTextBox(), password);
    await click(this.loginButton());
  }
}
export default loginpageFluent;
