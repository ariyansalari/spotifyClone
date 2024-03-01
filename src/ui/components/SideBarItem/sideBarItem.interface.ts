import { IconType } from "react-icons";

export interface SideBarItemProps {
    icon:IconType;
    label:string;
    active?:boolean;
    href:string;

}