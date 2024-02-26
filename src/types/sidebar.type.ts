import { ReactNode } from "react";

export type TRoute = {
    path?: string;
    element: ReactNode;
};
export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
}
export type TSidebarItem = {
    name: string;
    path?: string;
    children?: TSidebarItem[];
};