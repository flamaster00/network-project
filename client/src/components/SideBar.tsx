import React from 'react';
import {Button, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const SideBar = () => {
    return (
        <div className="mt-3">
        <ListGroup>
            <ListGroupItem>Первый Этаж</ListGroupItem>
            <ListGroupItem>Второй Этаж</ListGroupItem>
        </ListGroup>
        </div>
            );
};

export default SideBar;