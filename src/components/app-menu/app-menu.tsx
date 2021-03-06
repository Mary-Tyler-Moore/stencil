import { Component, h } from "@stencil/core";

@Component({
  tag: "app-menu",
  styleUrl: "app-menu.scss"
})
export class AppMenu {
  appPages = [
    { title: "Home", url: "/", icon: "home" },
    { title: "About", url: "/about", icon: "person" },
    { title: "Foo", url: "/about", icon: "person" }
  ];

  render() {
    return (
      <ion-menu side="start" contentId="main">
        <ion-content>
          <ion-list>
            <ion-menu-toggle>
              {this.appPages.map(p => (
                <ion-item href={p.url}>
                  <ion-icon name={p.icon} slot="start" />
                  <ion-label>{p.title}</ion-label>
                </ion-item>
              ))}
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>
    );
  }
}
