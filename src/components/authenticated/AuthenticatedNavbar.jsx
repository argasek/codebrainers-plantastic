import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown
} from "reactstrap";
import AuthenticatedNavbarItem from "components/navbar/AuthenticatedNavbarItem";
import { ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS } from "constants/Routes";
import { faCog, faHome, faLeaf, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class AuthenticatedNavbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand="md" className="mb-4">
        <NavbarBrand href="/">Plantastic</NavbarBrand>
        <NavbarToggler onClick={ this.toggle } />
        <Collapse isOpen={ isOpen } navbar>
          <Nav className="mr-auto" navbar>
            <AuthenticatedNavbarItem path={ ROUTE_PLANTS } icon={ faSeedling } name='Plants' />
            <AuthenticatedNavbarItem path={ ROUTE_CATEGORIES } icon={ faLeaf } name='Categories' />
            <AuthenticatedNavbarItem path={ ROUTE_ROOMS } icon={ faHome } name='Rooms' />
          </Nav>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon={ faCog } />
                { ' ' }
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Preferences…
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AuthenticatedNavbar;