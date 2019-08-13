import { r as registerInstance, h } from './core-cab28218.js';

const App = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/", component: "page-home" }), h("ion-route", { url: "/about", component: "page-about" })), h("app-menu", null), h("ion-nav", { id: "main" })));
    }
};

export { App as app_root };
