import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root"
})
export class App {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="page-home" />
          <ion-route url="/about" component="page-about" />
        </ion-router>
        <app-menu />
        <ion-nav id="main" />
      </ion-app>
    );
  }
}
