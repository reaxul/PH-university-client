import { TRoute, TUserPath } from "../types";


export const RouteGenerator = (items: TUserPath[]) => {
    const routes = items.reduce((acc: TRoute[], item) => {
        if (item.children) {
            return [
                ...acc,
                ...item.children.map((child) => ({
                    path: child.path,
                    element: child.element,
                })),
            ];
        }
        return [...acc, { path: item.path, element: item.element }];
    }, []);

    return routes;
};