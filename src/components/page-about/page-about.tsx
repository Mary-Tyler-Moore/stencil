import { Component, h } from "@stencil/core";

@Component({
  tag: "page-about",
  styleUrl: "page-about.scss"
})
export class PageAbout {
  render() {
    return (
      <ion-header>
        <ion-toolbar>
          <ion-title>About</ion-title>
          <ion-buttons slot="end">
            <ion-menu-button />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}
