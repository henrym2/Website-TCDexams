import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'

class SiteSearch extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2">
                </FormControl>
                <Button variant = "outline-light"> Search </Button>
            </Form>
        )
    }
}

export default SiteSearch