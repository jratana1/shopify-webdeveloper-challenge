import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck'

import SearchBox from './components/searchBox';
import Header from './components/header';
import MovieCard from './components/movieCard'
import Paginate from './components/paginate'



import React, { useState, useEffect } from 'react'




function App() {
  const [isBusy, setBusy] = useState(true)
  const [movies, setMovies] =useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState({year: "", term: ""})
  const [nominations, setNominations] = useState([])

  function mapMoviesToCards() {
    if (movies.Search && movies.Search.length) {
      return movies.Search.map((movie, index) => {
        return <MovieCard nominations= {nominations} setNominations={setNominations} key={index} imdb={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster}></MovieCard>
      })
    }
  }
  

 
  useEffect(
    () => {
      fetch(`http://www.omdbapi.com/?s=${search.term}&y=${search.year}&page=${page}&type=movie&apikey=92f9200d`)
        .then(resp => resp.json())
        .then(data =>{ 
              setMovies(data)
        })
      },
    [search, page])

  return (
    <div className="App">
      <Container>
        <Header></Header>
      </Container>
      <Container>
        <Row>
          <Col>
          <SearchBox setPage={setPage} setSearch={setSearch} search= {search}></SearchBox>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Row>
                {mapMoviesToCards() ? mapMoviesToCards().slice(0,5) : null}
              </Row>
              <Row>
                {mapMoviesToCards() ? mapMoviesToCards().slice(5,10) : null}
              </Row>
            </CardDeck>      
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className= "justify-content-center">
          {mapMoviesToCards() ? <Paginate page={page} total={movies.totalResults} setPage={setPage}></Paginate> : null}
        </Row>
      </Container>
    </div>
  );
}

export default App;
