import React from "react";
import {Button, Form, FormControl} from "react-bootstrap";

export const CompactSearchForm: React.VFC = () => {
    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"></FormControl>
            <Button variant="outline-success">Seach</Button>
        </Form>
    );
}