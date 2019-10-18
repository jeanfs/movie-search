import React from 'react'
import { connect } from 'react-redux';
import { Form, Input, Button } from './styles'
import { getMovies } from '../../actions/movies'

const SearchForm = ({ dispatch }) => {
  let searchInput;

  return(
    <Form onSubmit={e => {
      e.preventDefault()

      if(!searchInput.value.trim()) {
        return
      }
      dispatch(getMovies(searchInput.value))
    }}>
      <Input ref={node => searchInput = node} placeholder="Digite o título do filme..." />

      <Button title="Clique para buscar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </Button>
    </Form>
  );
}


export default connect()(SearchForm);
