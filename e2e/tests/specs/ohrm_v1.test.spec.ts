import { test, expect } from "@playwright/test";

test.describe("Orange HRM - Login", () => {
  test("Login to HRM - Plain ", async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    await page.getByRole("textbox", { name: "Username" }).fill("Admin");
    await page.getByRole("textbox", { name: "Password" }).fill("admin123");
    await page.getByRole("button", { name: /LOGIN/i }).click();
    await expect(page.url()).toContain("dashboard");
  });
});
