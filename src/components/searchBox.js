import React, { useEffect, useState, useMemo } from 'react';
import Form from 'react-bootstrap/Form';


function SearchBox () {
 const [search, setSearch] = useState("")

 const updateSearch = (val) => {
    setSearch(val)
  }

 return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Movie Search</Form.Label>
                <Form.Control 
                    value={ input }
                    type="text" 
                    onChange={ (e) => updateSearch(e.target.value) }
                    placeholder='Search by Title'
                    className='search-input' />
            </Form.Group>
        </Form>
 )
}

export default SearchBox