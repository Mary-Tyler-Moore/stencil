import { r as registerInstance, j as isPlatform, d as config, c as getIonMode, h, H as Host, f as getElement } from './core-cab28218.js';
import { a as rIC } from './helpers-b5fd6f64.js';

const App = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        rIC(() => {
            const isHybrid = isPlatform(window, 'hybrid');
            if (!config.getBoolean('_testing')) {
                __sc_import_app('./tap-click-809ee5bd.js').then(module => module.startTapClick(config));
            }
            if (config.getBoolean('statusTap', isHybrid)) {
                __sc_import_app('./status-tap-d0c897e9.js').then(module => module.startStatusTap());
            }
            if (config.getBoolean('inputShims', needInputShims())) {
                __sc_import_app('./input-shims-6d7f0456.js').then(module => module.startInputShims(config));
            }
            if (config.getBoolean('hardwareBackButton', isHybrid)) {
                __sc_import_app('./hardware-back-button-fcf38822.js').then(module => module.startHardwareBackButton());
            }
            __sc_import_app('./focus-visible-30ddc1ea.js').then(module => module.startFocusVisible());
        });
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: {
                [mode]: true,
                'ion-page': true,
                'force-statusbar-padding': config.getBoolean('_forceStatusbarPadding')
            } }));
    }
    get el() { return getElement(this); }
    static get style() { return "html.plt-mobile ion-app {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nion-app.force-statusbar-padding {\n  --ion-safe-area-top: 20px;\n}"; }
};
const needInputShims = () => {
    return isPlatform(window, 'ios') && isPlatform(window, 'mobile');
};

export { App as ion_app };
