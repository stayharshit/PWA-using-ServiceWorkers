import React from 'react';
import './App.css';
import {Container,Navbar,Nav} from 'react-bootstrap';
import {Link,Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to = '/'>Home</Link></Nav.Link>
              <Nav.Link><Link to = '/about'>About</Link></Nav.Link>
              <Nav.Link><Link to = '/user'>User</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/users' element={<User/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
