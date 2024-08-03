export type VariantType = 'black' | 'green' | 'red' | 'white';
export interface VariantStyles {
    backgroundColor: string;
    foregroundColor: string;
    emphasisColor: string;
}
export interface PeoplesBannerForBangladeshProps {
    variant?: VariantType;
    backgroundColor?: string;
    foregroundColor?: string;
    emphasisColor?: string;
    link?: string;
}
declare const PeoplesBannerForBangladesh: (props: PeoplesBannerForBangladeshProps) => JSX.Element | null;
export default PeoplesBannerForBangladesh;
