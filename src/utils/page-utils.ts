import { Page, Locator } from "@playwright/test";
import { LocatorOptions } from "./optional-parameter-types";

let page: Page;

export function getPage(): Page {
  return page;
}

export function setPage(pageInstance: Page): void {
  page = pageInstance;
}

export function getLocator(
  input: string | Locator,
  options?: LocatorOptions
): Locator {
  return typeof input === "string" ? getPage().locator(input, options) : input;
}
