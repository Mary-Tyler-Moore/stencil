import { Component, h } from "@stencil/core";

@Component({
  tag: "page-home",
  styleUrl: "page-home.scss"
})
export class Home {
  render() {
    return (
      <ion-header>
        <ion-toolbar>
          <ion-title>Home</ion-title>
          <ion-buttons slot="end">
            <ion-menu-button />
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    );
  }
}
