import { r as registerInstance, h } from './core-cab28218.js';

const AppMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.appPages = [
            { title: "Home", url: "/", icon: "home" },
            { title: "About", url: "/about", icon: "person" },
            { title: "Foo", url: "/about", icon: "person" }
        ];
    }
    render() {
        return (h("ion-menu", { side: "start", contentId: "main" }, h("ion-content", null, h("ion-list", null, h("ion-menu-toggle", null, this.appPages.map(p => (h("ion-item", { href: p.url }, h("ion-icon", { name: p.icon, slot: "start" }), h("ion-label", null, p.title)))))))));
    }
    static get style() { return "app-menu {\n  /* Component styles go here */\n}"; }
};

export { AppMenu as app_menu };
