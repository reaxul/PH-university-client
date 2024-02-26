import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const sidebarGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.map((item: TSidebarItem) => {

    if (item.children) {
      return {
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      };
    }
    
    return {
      key: item.name,
      label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
    };
  });

  return sidebarItems;
};
