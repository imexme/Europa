import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'

export const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>SpaceShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/cart"><i className='fas fa-shopping-cart'></i>  Cart <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/shop"><i className='fas fa-user'></i>  Shop</a>
                                </li>


                            </ul>
                        </div>
                    </Navbar.Collapse>
                </Container>

            </nav>
        </header>
    )
}
export default Header 