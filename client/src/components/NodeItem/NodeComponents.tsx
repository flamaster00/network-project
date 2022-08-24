import React, {useContext} from 'react';
import Ports from "./Ports";
import {ISelectedNode} from "../../types";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";

type NodeComponentsProps = {
    node: ISelectedNode
}

const NodeComponents = observer(({node}: NodeComponentsProps) => {
    const navigate = useNavigate()
    return (

            <div
                style={{border: '1px solid black', width: '95%', height: '100px'}}
                className="d-flex justify-content-around mx-2 mt-3"
            >
                <Ports ports={node.ports} />
                <div
                    style={{border: '1px solid black', flex: 2, margin: "10px", }}
                >
                    Свечка HP model
                    <p>IP: <a href="google.ru" target="_blank">172.22.0.0</a></p>
                </div>
            </div>
    );
});

export default NodeComponents;