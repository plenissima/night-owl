/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type Page = typeof import('./page_objects/page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, Page: Page }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
