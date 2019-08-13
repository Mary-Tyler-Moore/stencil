import { r as registerInstance, h } from './core-cab28218.js';

const TabsHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("p", null, "Hello TabsHome!")));
    }
    static get style() { return "tabs-home {\n  /* Component styles go here */\n}"; }
};

export { TabsHome as tabs_home };
