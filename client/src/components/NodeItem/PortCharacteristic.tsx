import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {IPorts} from "../../types";
import {Row} from "react-bootstrap";
import NodeStore from "../../store/NodeStore";
import {Context} from "../../index";

type PortCharacteristicProps = {
    // port: IPorts[]
}

const PortCharacteristic = observer(() => {
    const network = useContext(Context)
    return (
        <Row className="d-flex flex-column mt-3" style={{width: '100%', height: '300px', border: '1px solid black'}}>
            Характеристики порта:
                {network?.network.selectedPort && (
                    <div>
                        <Row >
                            {network.network.selectedPort.name}: {network.network.selectedPort.description}
                        </Row>
                        <Row >
                            {network.network.selectedPort.WLAN}: {network.network.selectedPort.wlanDescription}
                        </Row>
                        <Row >
                            {network.network.selectedPort.port}: {network.network.selectedPort.portDescription}
                        </Row>
                    </div>

                    )}

        </Row>
    );
});

export default PortCharacteristic;