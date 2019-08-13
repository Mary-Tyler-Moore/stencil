import { r as registerInstance, h } from './core-cab28218.js';

const TabsRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("p", null, "Hello TabsRoot!")));
    }
    static get style() { return "tabs-root {\n  /* Component styles go here */\n}"; }
};

export { TabsRoot as tabs_root };
