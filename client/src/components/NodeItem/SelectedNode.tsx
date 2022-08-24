import React from 'react';
import {ISelectedNode} from "../../types";
import {Container} from "react-bootstrap";
import NodeComponents from "./NodeComponents";
import PortCharacteristic from "./PortCharacteristic";

type SelectedNodeProps = {
    node: ISelectedNode,
}

const SelectedNode = ({node}: SelectedNodeProps) => {
    return (
        <Container className="d-flex flex-column align-items-center mt-3">
            <div>
                <h2>Узел {node.id}</h2>
            </div>
            <div
                style={{border: '1px solid black', width: "100%"}}
                className="d-flex flex-column align-items-center pb-3"
            >
            <NodeComponents node={node} />
            <NodeComponents node={node} />
            <NodeComponents node={node} />
            <NodeComponents node={node} />
            </div>

            <PortCharacteristic />
        </Container>
    );
};

export default SelectedNode;