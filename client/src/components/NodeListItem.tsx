import React, {useContext} from 'react';
import {Card, Col} from "react-bootstrap";
import {INode} from "../types";
import {useNavigate} from "react-router-dom";
import {NODE_ROUTE} from "./utils/consts";
import {Context} from "../index";

type NodeItemProps = {
    node: INode
}

const NodeListItem = ({node}: NodeItemProps) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className="mt-3">
            <Card
            style={{cursor: "pointer", width: 100, height: 100}}
            border={"dark"}
            onClick={() => navigate(NODE_ROUTE + '/' + node.id)}
            >
                    <div className="">{node.id}</div>
                    <div>{node.type}</div>
            </Card>
        </Col>
    );
};

export default NodeListItem;