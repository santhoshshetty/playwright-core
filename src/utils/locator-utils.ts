import { FrameLocator, Locator, selectors } from "@playwright/test";
import { getPage } from "./page-utils";
import {
  LocatorOptions,
  GetByRoleTypes,
  GetByRoleOptions,
} from "./optional-parameter-types";

export function getLocator(
  input: string | Locator,
  options?: LocatorOptions
): Locator {
  return typeof input === "string" ? getPage().locator(input, options) : input;
}
export function getLocatorByRole(
  role: GetByRoleTypes,
  options?: GetByRoleOptions
): Locator {
  return getPage().getByRole(role, options);
}
