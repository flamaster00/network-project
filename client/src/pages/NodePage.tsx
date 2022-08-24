import React from 'react';
import {ISelectedNode} from "../types";
import SelectedNode from "../components/NodeItem/SelectedNode";
import {observer} from "mobx-react-lite";

type NodePageProps = {
    node: ISelectedNode,
}

const NodePage = observer(() => {
    const tempNode = {id: 101, floor: 1, portQTY: 10, type: "Свечка", ports: [
            {id: 1,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 2,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 3,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 4,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 5,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 6,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 7,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },{id: 8,
                name: 'Номер порта', description: "11/22/33",
                WLAN: 'WLAN', wlanDescription: 1,
                port: 'Destination', portDescription: '202.2'

            },

        ]}
    return (
        <div>
            {/*todo key = node.id*/}
            <SelectedNode node={tempNode} key={tempNode.id}/>
        </div>
    );
});

export default NodePage;