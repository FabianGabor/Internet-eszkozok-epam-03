import React from "react";
import {Button, Form, FormControl, Nav, Navbar, NavLink} from "react-bootstrap";
import {CompactSearchForm} from "../search-form/compact-search-form";
import {LinkContainer} from "react-router-bootstrap";

export const NavigationBar: React.VFC = () => {
    return (
        <Navbar>
            <LinkContainer to="/">
                <Navbar.Brand href="/">EPAM</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/">
                        <NavLink href="/">Home</NavLink>
                    </LinkContainer>

                    <LinkContainer to="/about">
                        <NavLink href="/about">About</NavLink>
                    </LinkContainer>

                    <LinkContainer to="/contact">
                        <NavLink href="/contact">Contact</NavLink>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            <CompactSearchForm></CompactSearchForm>
        </Navbar>
    );
}