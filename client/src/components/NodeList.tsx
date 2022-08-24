import React, {useContext} from 'react';
import { Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import NodeListItem from "./NodeListItem";
import {INode} from "../types";
import NodeStore from "../store/NodeStore";
import {Context} from "../index";


interface NodeListProps {
    nodes: INode[],
    floor: number
}

const NodeList = observer(({floor}: NodeListProps) => {
    const network = useContext(Context)
    return (

        <Row className="mt-3">
            {network?.network.tempNodeList.map(node =>
                node.floor === floor && <NodeListItem node={node} key={node.id}/>
            )}
        </Row>

    );

});

export default NodeList;

