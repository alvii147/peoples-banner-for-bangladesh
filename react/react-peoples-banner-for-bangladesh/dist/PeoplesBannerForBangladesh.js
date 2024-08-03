"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const DEFAULT_LINK = 'https://www.aljazeera.com/program/newsfeed/2024/7/24/bangladeshs-deadly-protests-explained';
const LOCAL_STORAGE_HIDE_BANNER_KEY = 'peoples-banner-for-bangladesh-hide';
const VARIANT_STYLES_MAP = {
    'black': {
        backgroundColor: '#4D4D4D',
        foregroundColor: '#FFF1CC',
        emphasisColor: '#E62E00',
    },
    'green': {
        backgroundColor: '#006A4E',
        foregroundColor: '#FFD666',
        emphasisColor: '#F42A41',
    },
    'red': {
        backgroundColor: '#E62E00',
        foregroundColor: '#FFC933',
        emphasisColor: '#660000',
    },
    'white': {
        backgroundColor: '#F5F5F5',
        foregroundColor: '#001A09',
        emphasisColor: '#FF1A1A',
    },
};
const PeoplesBannerForBangladesh = (props) => {
    var _a, _b, _c, _d, _e;
    const [hideBanner, setHideBanner] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_HIDE_BANNER_KEY)) {
            setHideBanner(true);
        }
    }, []);
    if (hideBanner) {
        return null;
    }
    const variant = (_a = props.variant) !== null && _a !== void 0 ? _a : 'green';
    const variantStyles = VARIANT_STYLES_MAP[variant];
    const backgroundColor = (_b = props.backgroundColor) !== null && _b !== void 0 ? _b : variantStyles.backgroundColor;
    const foregroundColor = (_c = props.foregroundColor) !== null && _c !== void 0 ? _c : variantStyles.foregroundColor;
    const emphasisColor = (_d = props.emphasisColor) !== null && _d !== void 0 ? _d : variantStyles.emphasisColor;
    const link = (_e = props.link) !== null && _e !== void 0 ? _e : DEFAULT_LINK;
    const mainDivStyles = {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10101,
        padding: '0px 10px 0px 10px',
        backgroundColor: backgroundColor,
    };
    const paragraphContainerDivStyles = {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    };
    const paragraphOnClick = (e) => {
        window.open(link, '_blank');
    };
    const paragraphStyles = {
        color: foregroundColor,
    };
    const emphasisStyles = {
        color: emphasisColor,
    };
    const closeButtonContainerDivStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 5px 0px 15px',
        cursor: 'pointer',
    };
    const closeButtonOnClick = (e) => {
        localStorage.setItem(LOCAL_STORAGE_HIDE_BANNER_KEY, 'true');
        setHideBanner(true);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { style: mainDivStyles, children: [(0, jsx_runtime_1.jsx)("div", { style: paragraphContainerDivStyles, onClick: paragraphOnClick, children: (0, jsx_runtime_1.jsx)("p", { style: paragraphStyles, children: (0, jsx_runtime_1.jsxs)("strong", { children: ["Sheikh Hasina's fascist government has ", (0, jsx_runtime_1.jsx)("span", { style: emphasisStyles, children: " murdered " }), " hundreds of Bangladeshi students for peacefully protesting."] }) }) }), (0, jsx_runtime_1.jsx)("div", { style: closeButtonContainerDivStyles, onClick: closeButtonOnClick, children: (0, jsx_runtime_1.jsx)("svg", { width: 20, xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 512 512', children: (0, jsx_runtime_1.jsx)("path", { fill: foregroundColor, d: 'M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z' }) }) })] }));
};
exports.default = PeoplesBannerForBangladesh;
