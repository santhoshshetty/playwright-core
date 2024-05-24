import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";

test.describe("Demo Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.addLocatorHandler(
      page.locator("#CybotCookiebotDialog"),
      async () => {
        await page
          .locator(
            "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
          )
          .click();
      }
    );
  });

  /* Demo Tests for Alerts feature */
  test.skip("demo test for alerts", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    await page.locator("button:has-text('Click Me')").nth(1).click();
    await page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.accept();
    });
    await page.locator("button:has-text('Click Me')").nth(2).click();
    await page.on("dialog", async (dialog) => {
      console.log(dialog.message());
      await dialog.dismiss();
    });
    expect(await page.locator("p[id='confirm-demo']").textContent()).toContain(
      "You pressed Cancel!"
    );
  });

  /* Demo Tests for Dropdowns feature */
  test.skip("demo test for dropdowns", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
    );
    await page.selectOption("select#select-demo", { value: "Monday" }); //label: "Tuesday", index: 5
    await page.selectOption("select#multi-select", [
      { label: "California" },
      { index: 2 },
      { value: "Texas" },
    ]);
  });

  /* Demo Tests for Frames feature */
  test("demo test for frames", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/iframe-demo/"
    );
    const framesCount = await page.frames;
    console.log("Frames Count: " + framesCount.length);
    const frame = await page.frame("iFrame1");

    await frame?.locator("div[class='rsw-ce']").fill("Playwright Test");
    expect(page.locator("h1")).toHaveText("Simple iframe");
  });

  test("demo test for multiple tabs/windows", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
    );
    const [window] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator("a:has-text('Follow On Twitter')").click(),
    ]);
    await window.waitForLoadState("domcontentloaded");
    const pages = await window.context().pages();
    console.log("No. of tabs: " + pages.length);
    expect(window.url()).toContain("twitter.com");
    expect(page.locator("h1")).toHaveText("Window popup Modal");
    expect(window.locator("a[data-testid='signup']")).toBeVisible;
  });

  /* Demo Tests for download file feature  */
  test("demo test for download file", async ({ page }) => {
    await page.addLocatorHandler(
      page.locator("#CybotCookiebotDialog"),
      async () => {
        await page
          .locator(
            "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
          )
          .click();
      }
    );
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo"
    );
    await page.locator("#textbox").fill("Playwright Test");
    await page.locator("id=create").click();
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.click("id=link-to-download"),
    ]);
    const fileName = await download.suggestedFilename();
    await download.saveAs(fileName);
  });

  /* Demo Tests for file upload feature  */
  test("demo test for file upload", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");
    //await page.setInputFiles("input[type='file']", ["./resources/sample.png"]);
    const [uploadFile] = await Promise.all([
      page.waitForEvent("filechooser"),
      page.locator("input[name='file']").click(),
    ]);
    uploadFile.setFiles("./resources/sample.png");
  });

  /* Demo Tests for Popup Listener feature  */
  test("demo test for popup listener", async ({ page }) => {
    await page.goto("file:///C:/Users/gouresan/Downloads/sample.html");
    const visible = await page.locator("input").isVisible();
    console.log("Visible: " + visible);
    //console.log("Visible: " + (await page.$eval("input", (e) => e.value)));

    console.log(await page.locator("#OK1").getAttribute("id"));
    await page.addLocatorHandler(page.locator("#uniquePopup"), async () => {
      await page.locator("#OK1").click();
    });
    await page.addLocatorHandler(page.locator("#uniquePopup2"), async () => {
      await page.locator("#OK2").click();
    });

    for (let i = 0; i < 250; i++) {
      await page.locator("input").fill("Playwright Test: " + i);
    }
  });

  /* Demo Tests for Soft Assertions feature  */
  test("assertions test", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/simple-form-demo"
    );
    await page
      .getByPlaceholder("Please enter your Message")
      .fill("Playwright Test");
    console.log(await page.locator("#showInput").isVisible());
    await page.locator("#showInput").click();
    await expect(page.locator("#message")).toHaveText("Playwright Test");
    await expect
      .soft(page.getByPlaceholder("Please enter first value"))
      .toBeVisible();
    await expect
      .soft(page.getByPlaceholder("Please enter second value"))
      .toBeVisible();
  });

  test("Visual QA", async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    expect(await page.screenshot()).toMatchSnapshot("login-page");
  });

  test("Accessibility Test", async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    const accessibilityResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityResults.violations.length).toBe(0);
  });
});
