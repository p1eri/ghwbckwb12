import React, { useState } from 'react';
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import {LoginForm, RegisterForm} from '../forms/forms';

const navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  }

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  }

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  }

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  }

  return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="/"><img src='/logo.svg' alt='logo'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form className="d-flex">
              <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
              />
            </Form>
            <Nav className="me-auto">
              <Nav.Link href="#">Trade</Nav.Link>
              <Nav.Link href="#">P2P</Nav.Link>
              <Nav.Link href="#">Partners</Nav.Link>
              <Nav.Link href="#">Mining</Nav.Link>
              <Nav.Link href="#">Academy</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className='reg' onClick={handleShowRegisterModal}>Register</Button>
              <Button variant="primary" className='log' onClick={handleShowLoginModal}>Log in</Button>
            </Nav>
            <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
              <Modal.Header closeButton>
                <Modal.Title>Зарегистрироваться</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <RegisterForm/>
              </Modal.Body>
            </Modal>
            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
              <Modal.Header closeButton>
                <Modal.Title>Войти</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <LoginForm/>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default navbar