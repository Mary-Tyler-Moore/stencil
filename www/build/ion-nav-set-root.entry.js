import { r as registerInstance, h, H as Host, f as getElement } from './core-cab28218.js';

const NavSetRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.setRoot = () => {
            const nav = this.el.closest('ion-nav');
            const toPush = this.component;
            if (nav && toPush !== undefined) {
                nav.setRoot(toPush, this.componentProps, { skipIfBusy: true });
            }
        };
    }
    render() {
        return (h(Host, { onClick: this.setRoot }));
    }
    get el() { return getElement(this); }
};

export { NavSetRoot as ion_nav_set_root };
