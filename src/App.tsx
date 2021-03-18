import React from 'react';
import logo from './logo.svg';
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import {NavigationBar} from "./components/navigation-bar/navigation-bar";
import Switch from "react-bootstrap/Switch";
import {AboutPage} from "./pages/about-page";
import {HomePage} from "./pages/home-page";
import {ContactPage} from "./pages/contact-page";
import {ErrorPage} from "./pages/error-page";
// import './App.scss';

function App() {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            <main>
                <Switch>
                    <Route path="/about" component={AboutPage}></Route>
                    <Route path="/contact" component={ContactPage}></Route>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/*" component={ErrorPage}></Route>
                </Switch>
            </main>
        </Container>
    );
}

export default App;
