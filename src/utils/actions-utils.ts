import { Locator, Page, Response } from "@playwright/test";
import { getPage } from "./page-utils";
import {
  ClickOptions,
  FillOptions,
  GotoOptions,
} from "./optional-parameter-types";
import { getLocator } from "./locator-utils";

export async function openUrl(page: Page, url: string) {
  await page.goto(url);
}

export async function click(
  input: string | Locator,
  options?: ClickOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.click(options);
}

export async function fill(
  input: string | Locator,
  value: string,
  options?: FillOptions
): Promise<void> {
  const locator = getLocator(input);
  await locator.fill(value, options);
}

export async function gotoURL(
  path: string,
  options: GotoOptions = { waitUntil: "domcontentloaded" }
): Promise<null | Response> {
  return await getPage().goto(path, options);
}
