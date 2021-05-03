import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

import SearchBox from './components/searchBox';


import React, { useState, useEffect } from 'react'




function App() {
  const [isBusy, setBusy] = useState(true)
  const [movies, setMovies] =useState([])
  const [page, setPage] = useState("1")
  const [search, setSearch] = useState({year: "", term: "ram"})
  

 
  useEffect(
    () => {
      fetch(`http://www.omdbapi.com/?s=${search.term}&y=${search.year}&page=${page}&type=movie&apikey=92f9200d`)
        .then(resp => resp.json())
        .then(data =>{ 
              setMovies(data)})
      },
    [search])

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <SearchBox setSearch={setSearch} search= {search}></SearchBox>
          </Col>
        </Row>
        <Row>
          <Col>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
