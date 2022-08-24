import React from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./utils/routes";
import {IRoutes} from "../types";
import Network from "../pages/Network";

type AppRouterProps = {
    route: IRoutes,
}

function NETWORK_ROUTE() {
    return null;
}

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route) => (
            <Route path={route.path} element={<route.Component/>} key={route.path}/>
            ))};
            <Route path="*" element={<NETWORK_ROUTE/>} />
        </Routes>
    );
};

export default AppRouter;