import { Locator, Page } from "@playwright/test";

export type WaitForLoadStateOptions = Parameters<Page["waitForLoadState"]>[0];

export type ClickOptions = Parameters<Locator["click"]>[0] & {
  loadState?: WaitForLoadStateOptions;
};
export type FillOptions = Parameters<Locator["fill"]>[1];

export type LocatorOptions = Parameters<Page["locator"]>[1];
export type GetByRoleTypes = Parameters<Locator["getByRole"]>[0];
export type GetByRoleOptions = Parameters<Locator["getByRole"]>[1];
export type GotoOptions = Parameters<Page["goto"]>[1];
