import NodeStore from "./store/NodeStore";

export interface INode {
    id: number,
    floor: number,
    type: string,
}

export interface IFloor {
    id: number,
    name: string
}

export interface ISelectedNode {
    id: number,
    floor: number,
    portQTY: number,
    type: string,
    ports: IPorts[]
}

export interface IPorts {
    id: number,
    name: string,
    description: string,
    VLAN: string,
    vlanDescription: number,
    port: string,
    portDescription: string
}

export interface IRoutes {
    path: string,
    Component: any
}

export interface IAppContext {
    network: NodeStore
}