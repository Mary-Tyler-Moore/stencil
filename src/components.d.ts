/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppMenu {}
  interface AppRoot {}
  interface PageAbout {}
  interface PageHome {}
  interface TabsHome {}
  interface TabsRoot {}
}

declare global {


  interface HTMLAppMenuElement extends Components.AppMenu, HTMLStencilElement {}
  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {}
  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };

  interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {}
  var HTMLPageHomeElement: {
    prototype: HTMLPageHomeElement;
    new (): HTMLPageHomeElement;
  };

  interface HTMLTabsHomeElement extends Components.TabsHome, HTMLStencilElement {}
  var HTMLTabsHomeElement: {
    prototype: HTMLTabsHomeElement;
    new (): HTMLTabsHomeElement;
  };

  interface HTMLTabsRootElement extends Components.TabsRoot, HTMLStencilElement {}
  var HTMLTabsRootElement: {
    prototype: HTMLTabsRootElement;
    new (): HTMLTabsRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-menu': HTMLAppMenuElement;
    'app-root': HTMLAppRootElement;
    'page-about': HTMLPageAboutElement;
    'page-home': HTMLPageHomeElement;
    'tabs-home': HTMLTabsHomeElement;
    'tabs-root': HTMLTabsRootElement;
  }
}

declare namespace LocalJSX {
  interface AppMenu extends JSXBase.HTMLAttributes<HTMLAppMenuElement> {}
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface PageAbout extends JSXBase.HTMLAttributes<HTMLPageAboutElement> {}
  interface PageHome extends JSXBase.HTMLAttributes<HTMLPageHomeElement> {}
  interface TabsHome extends JSXBase.HTMLAttributes<HTMLTabsHomeElement> {}
  interface TabsRoot extends JSXBase.HTMLAttributes<HTMLTabsRootElement> {}

  interface IntrinsicElements {
    'app-menu': AppMenu;
    'app-root': AppRoot;
    'page-about': PageAbout;
    'page-home': PageHome;
    'tabs-home': TabsHome;
    'tabs-root': TabsRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


