import { r as registerInstance, h, H as Host, f as getElement } from './core-cab28218.js';

const NavPop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pop = () => {
            const nav = this.el.closest('ion-nav');
            if (nav) {
                nav.pop({ skipIfBusy: true });
            }
        };
    }
    render() {
        return (h(Host, { onClick: this.pop }));
    }
    get el() { return getElement(this); }
};

export { NavPop as ion_nav_pop };
