import { test } from "../../fixtures/customFixtures";
import loginpage from "../pages/loginpage";
import { Env } from "../../config/env";

test.describe("Orange HRM - Login", () => {
  test.only("Login to Orange HRM - Regular POM", async ({
    page,
    loginpage,
  }) => {
    await page.goto(Env.URL);
    await loginpage.login(Env.USER, Env.PASS);
  });
});
