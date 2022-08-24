import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../components/SideBar";
import NodeList from "../components/NodeList";
import NodeStore from "../store/NodeStore";
import {observer} from "mobx-react-lite";
import {Context} from "../index";


const Network = observer(() => {
    const network = useContext(Context)
    return (
        <Container>
            <Row className="">
                <Col md={3}>
                    <SideBar/>
                </Col>

                <Col md={9}>
                    <div className="d-flex justify-content-center">
                        <h2>Все узлы</h2>
                    </div>
                    {
                        network?.network.tempFloorList.map(floor =>
                    <NodeList nodes={network?.network.tempNodeList} floor={floor.id} />
                        )
                    }
                </Col>
            </Row>

        </Container>
    );
});

export default Network;