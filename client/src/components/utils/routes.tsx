import {NETWORK_ROUTE, NODE_ROUTE} from "./consts";
import Network from "../../pages/Network";
import NodePage from "../../pages/NodePage";
import {IRoutes} from "../../types";

// export const authRoutes: IRoutes[] = [
//     {
//         path: ADMIN_ROUTE,
//         Component: Admin,
//     }
// ]

export const publicRoutes: IRoutes[] = [
    {
        path: NETWORK_ROUTE,
        Component: Network,
    },
    {
        path: NODE_ROUTE + '/:id',
        Component: NodePage,
    }
];