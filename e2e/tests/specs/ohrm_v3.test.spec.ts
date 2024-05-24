import { test } from "../../../src/utils/page-setup";
import { gotoURL } from "../../../src/utils/actions-utils";
import loginpageFluent from "../pages/loginpageFluent";
import { Env } from "../../config/env";

test.describe("Orange HRM - Login", () => {
  test("Login to HRM - Revised", async () => {
    const loginPage = new loginpageFluent();
    await gotoURL(Env.URL);
    await loginPage.enhancedLogin(Env.USER, Env.PASS);
  });
});
