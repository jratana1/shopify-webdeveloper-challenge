import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function SearchBox (props) {

 const updateSearch = (target) => {
    props.setSearch(prevState => ({
        ...prevState,
        [target.name]: target.value}))
  }

 return (

        <Form className="Searchbox p-3">
            <Row>
                <Col xs={6} md={8}>
                    <Form.Group controlId="formGroupSearch"> 
                        <Form.Label>Movie Search</Form.Label>
                        <Form.Control 
                            value={ props.search.term }
                            name="term"
                            type="text" 
                            onChange={ (e) => updateSearch(e.target) }
                            placeholder='Search by Title'
                            className='search-input' />
                    </Form.Group>
                </Col>
                <Col></Col>
                <Col >
                    <Form.Group controlId="formGroupYear">
                        <Form.Label>Year</Form.Label>
                            <Form.Control 
                                value={ props.search.year }
                                name="year"
                                type="number" 
                                onChange={ (e) => updateSearch(e.target) }
                                placeholder='Filter Year'
                                min="1900"
                                max="2021"
                                className='search-input' />
                    </Form.Group>
                </Col>

            </Row>
        </Form>
 )
}

export default SearchBox