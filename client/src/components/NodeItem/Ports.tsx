import React, {useContext} from 'react';
import {IPorts} from "../../types";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

type PortsProps = {
    ports: IPorts[]
}

const Ports = observer(({ports}:PortsProps) => {
    const network = useContext(Context)
    return (
            <div style={{border: '1px solid black', flex: 8, margin: "10px"}} className="d-flex flex-column flex-wrap align-content-start justify-content-around">
                {network?.network.tempPorts.map(port =>
                <div
                    style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid grey',
                        textAlign: "center",
                        cursor: 'pointer',
                }}
                    className='mx-2'
                    onClick={() => {
                        network.network._selectedPort = port
                    }}
                    key={port.id}
                >
                    {port.id}
                </div>
                )}
            </div>

    );
});

export default Ports;