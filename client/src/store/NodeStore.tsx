import {makeAutoObservable} from "mobx";
import {INode, IFloor, ISelectedNode, IPorts} from "../types"

export default class NodeStore {
    _selectedPort: IPorts | null
    _selectedNode: ISelectedNode | null
    _tempNodeList: INode[]
    _tempFloorList: IFloor[]
    _tempPorts: IPorts[]
    _tempSelectedNode: ISelectedNode[]

    constructor() {
        this._tempNodeList = [
            {id: 101, floor: 1, type: "Свечка"},
            {id: 102, floor: 1, type: "Патч панель"},
            {id: 103, floor: 1, type: "Свечка"},
            {id: 104, floor: 1, type: "Патч панель"},
            {id: 105, floor: 1, type: "Патч панель"},
            {id: 201, floor: 2, type: "Свечка"},
            {id: 202, floor: 2, type: "Свечка"},
            {id: 203, floor: 2, type: "Патч панель"},
            {id: 301, floor: 3, type: "Патч панель"},
            {id: 302, floor: 3, type: "Свечка"},
            {id: 303, floor: 3, type: "Патч панель"},
            {id: 304, floor: 3, type: "Свечка"},
        ]

        this._tempFloorList = [
            {id: 1, name: "Первый этаж"},
            {id: 2, name: "Второй этаж"},
            {id: 3, name: "Третий этаж"},
        ]

        this._tempPorts = [
            {id: 1,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 1,
                port: 'Destination', portDescription: '202.1'

            },{id: 2,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 2,
                port: 'Destination', portDescription: '202.2'

            },{id: 3,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 3,
                port: 'Destination', portDescription: '202.3'

            },{id: 4,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 4,
                port: 'Destination', portDescription: '202.4'

            },{id: 5,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 5,
                port: 'Destination', portDescription: '202.5'

            },{id: 6,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 6,
                port: 'Destination', portDescription: '202.6'

            },{id: 7,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 7,
                port: 'Destination', portDescription: '211.7'

            },{id: 8,
                name: 'Номер порта', description: "11/22/33",
                VLAN: 'VLAN', vlanDescription: 8,
                port: 'Destination', portDescription: '202.8'

            },

        ]
        this._tempSelectedNode = [
            {id: 101, floor: 1, portQTY: 10, type: "Свечка", ports: this._tempPorts},
        ]
        this._selectedPort = null
        this._selectedNode = null

        makeAutoObservable(this)
    }

    setTempNodeList(nodes: INode[]) {
        this._tempNodeList = nodes
    }

    setTempFloorList(floors: IFloor[]) {
        this._tempFloorList = floors
    }

    setTempPorts(ports: IPorts[]) {
        this._tempPorts = ports
    }

    setTempSelectedNode(selectedNode: ISelectedNode[]) {
        this._tempSelectedNode = selectedNode
    }

    setSelectedPort(selectedPort: IPorts | null) {
        this._selectedPort = selectedPort
    }
    setSelectedNode(selectedNode: ISelectedNode | null) {
        this._selectedNode = selectedNode
    }

    get selectedPort(): IPorts | null {
        return this._selectedPort
    }
    get selectedNode(): ISelectedNode | null {
        return this._selectedNode
    }

    get tempNodeList(): INode[] {
        return this._tempNodeList
    }

    get tempFloorList(): IFloor[] {
        return this._tempFloorList
    }

    get tempPorts(): IPorts[] {
        return this._tempPorts
    }

    get tempSelectedNode(): ISelectedNode[] {
        return this._tempSelectedNode
    }
}
