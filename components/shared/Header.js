import React, { useState } from 'react';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const BsNavLink = ({route, title}) =>
    <NavItem>
        <Link href={route}><a className="nav-link">{title}</a></Link>
    </NavItem>;

const Example = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Giosevid Acosta</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <BsNavLink route="/" title="Home" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/about" title="About" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/portfolios" title="Portfolio" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/blogs" title="Blog" />
                        </NavItem>
                        <NavItem>
                            <BsNavLink route="/cv" title="Cv" />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;
