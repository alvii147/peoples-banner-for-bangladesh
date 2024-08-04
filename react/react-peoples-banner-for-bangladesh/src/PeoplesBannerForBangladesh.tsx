import React from 'react';

const DEFAULT_LINK: string = 'https://www.aljazeera.com/program/newsfeed/2024/7/24/bangladeshs-deadly-protests-explained';
const LOCAL_STORAGE_HIDE_BANNER_KEY = 'peoples-banner-for-bangladesh-hide';

export type VariantType = 'black' | 'green' | 'red' | 'white';

export interface VariantStyles {
    backgroundColor: string;
    foregroundColor: string;
    emphasisColor: string;
}

const VARIANT_STYLES_MAP: Record<VariantType, VariantStyles> = {
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

export interface PeoplesBannerForBangladeshProps {
    variant?: VariantType;
    backgroundColor?: string;
    foregroundColor?: string;
    emphasisColor?: string;
    link?: string;
}

const PeoplesBannerForBangladesh = (props: PeoplesBannerForBangladeshProps): JSX.Element | null => {
    const [hideBanner, setHideBanner] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_HIDE_BANNER_KEY)) {
            setHideBanner(true);
        }
    }, []);

    if (hideBanner) {
        return null;
    }

    const variant: VariantType = props.variant ?? 'green';
    const variantStyles: VariantStyles = VARIANT_STYLES_MAP[variant];
    const backgroundColor: string = props.backgroundColor ?? variantStyles.backgroundColor;
    const foregroundColor: string = props.foregroundColor ?? variantStyles.foregroundColor;
    const emphasisColor: string = props.emphasisColor ?? variantStyles.emphasisColor;
    const link: string = props.link ?? DEFAULT_LINK;

    const mainDivStyles: React.CSSProperties = {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10101,
        padding: '15px 10px 15px 10px',
        backgroundColor: backgroundColor,
    };

    const paragraphContainerDivStyles: React.CSSProperties = {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    }

    const paragraphOnClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        window.open(link, '_blank');
    };

    const paragraphStyles: React.CSSProperties = {
        margin: 'auto',
        color: foregroundColor,
    };

    const emphasisStyles: React.CSSProperties = {
        color: emphasisColor,
    };

    const closeButtonContainerDivStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 5px 0px 15px',
        cursor: 'pointer',
    }

    const closeButtonOnClick: React.MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        localStorage.setItem(LOCAL_STORAGE_HIDE_BANNER_KEY, 'true');
        setHideBanner(true);
    };

    return (
        <div style={mainDivStyles}>
            <div style={paragraphContainerDivStyles} onClick={paragraphOnClick}>
                <p style={paragraphStyles}>
                    <strong>
                        Sheikh Hasina's fascist government has <span style={emphasisStyles}> murdered </span> hundreds of Bangladeshi students for peacefully protesting.
                    </strong>
                </p>
            </div>
            <div style={closeButtonContainerDivStyles} onClick={closeButtonOnClick}>
                <svg width={20} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                    <path fill={foregroundColor} d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z'/>
                </svg>
            </div>
        </div>
    );
};

export default PeoplesBannerForBangladesh;
