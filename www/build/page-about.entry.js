import { r as registerInstance, h } from './core-cab28218.js';

const PageAbout = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ion-header", null, h("ion-toolbar", null, h("ion-title", null, "About"), h("ion-buttons", { slot: "end" }, h("ion-menu-button", null)))));
    }
    static get style() { return ""; }
};

export { PageAbout as page_about };
