import React, { useState } from 'react';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { useAuth0 } from '../../react-auth0-spa'

const BsNavLink = ({route, title}) =>
    <Link href={route}>
        <a className="nav-link port-navbar-link">{title}</a>
    </Link>;

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <span onClick={() => loginWithRedirect({})} className='nav-link port-navbar-link clickable'>Login</span>
    )
};

const Logout = () => {
    const { logout } = useAuth0();
    return (
      <span onClick={() => logout()} className='nav-link port-navbar-link clickable'>Logout</span>
    )
};

const Example = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
                <NavbarBrand className="port-navbar-brand" href="/">Giosevid Acosta</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/" title="Home" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/portfolios" title="Portfolio" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/blogs" title="Blog" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BsNavLink route="/cv" title="Cv" />
                        </NavItem>
                        {
                            !isAuthenticated &&
                            <NavItem className="port-navbar-item">
                                <Login />
                            </NavItem>
                        }
                        {
                            isAuthenticated &&
                            <NavItem className="port-navbar-item">
                                <Logout />
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Example;
