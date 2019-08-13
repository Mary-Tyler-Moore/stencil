import { r as registerInstance, h, H as Host, f as getElement } from './core-cab28218.js';

const NavPush = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.push = () => {
            const nav = this.el.closest('ion-nav');
            const toPush = this.component;
            if (nav && toPush !== undefined) {
                nav.push(toPush, this.componentProps, { skipIfBusy: true });
            }
        };
    }
    render() {
        return (h(Host, { onClick: this.push }));
    }
    get el() { return getElement(this); }
};

export { NavPush as ion_nav_push };
