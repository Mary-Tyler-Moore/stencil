import { r as registerInstance, h } from './core-cab28218.js';

const Home = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ion-header", null, h("ion-toolbar", null, h("ion-title", null, "Home"), h("ion-buttons", { slot: "end" }, h("ion-menu-button", null)))));
    }
    static get style() { return ""; }
};

export { Home as page_home };
