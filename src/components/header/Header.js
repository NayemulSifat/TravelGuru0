
import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../resources/Logo.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {

    const optionsStyle = {
        marginRight: "10px",
        padding: "5px",
        textDecoration: "none",

    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    return (
        <Navbar bg="transparent" >
            <Nav><img src={logo} alt="" /></Nav>

            <Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
                </Form>
            </Nav>


            <Nav className="mr-auto " >
                <Link to="/" style={optionsStyle}>Home</Link>
                <Link to="/news" style={optionsStyle}>News</Link>
                <Link to="/destination" style={optionsStyle}>Destination</Link >
                <Link to="/blog" style={optionsStyle}>blog</Link >
                <Link to="/contact" style={optionsStyle}>Contact</Link >
                <Link to="/login" className="btn">{loggedInUser.displayName ? `${loggedInUser.displayName} [sign out]` : 'Login'}</Link >
            </Nav>
        </Navbar>
    );
};

export default Header;