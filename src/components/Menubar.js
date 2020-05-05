import React from 'react';
import { Hub } from 'aws-amplify';
import { Nav, NavDropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { setCurrentUserInfo, getCurrentUserInfo } from './utils';

function MenuGreeting(props) {
    if (props.userInfo != null && props.userInfo.username != null) {
        return <>
            <Navbar.Text>Hello, {props.userInfo.username}</Navbar.Text>
            <Nav.Item><AmplifySignOut/></Nav.Item>
            </>
    } else {
        return <Nav.Link href="#login">Please Login</Nav.Link>;
    }
}

class Menubar extends React.Component {
    
    constructor(props) {
        super(props);
        console.log("Menubar constructor(), props:" + JSON.stringify(props));
        this.state = { userInfo: getCurrentUserInfo() };
        Hub.listen('auth', (data) => {
            console.log("## Menubar: received auth event: " + JSON.stringify(data.payload.event));
            if (data.payload.event === "signIn") {
                this.setState({ userInfo: data.payload.data });
            } else if (data.payload.event === "signOut") {
                this.setState({ userInfo: null });
            }
        });
    }

    render () {    
        return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" fixed="top" >
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>      
                    <MenuGreeting userInfo={this.state.userInfo}/>
                </Nav>

                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>

            </Navbar.Collapse>
            </Navbar>
        </div>
        );
    }
}
export default Menubar;