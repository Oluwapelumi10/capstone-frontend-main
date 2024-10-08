import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    To access the Capstone Client Management Application <Button color="link"><Link to="/clients">Click Me! </Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;