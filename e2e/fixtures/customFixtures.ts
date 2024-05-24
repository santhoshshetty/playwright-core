import { test as base } from "@playwright/test";
import loginpage from "../tests/pages/loginpage";

export const test = base.extend({
  loginpage: async ({ page }, use) => {
    await use(new loginpage(page));
  },
});
