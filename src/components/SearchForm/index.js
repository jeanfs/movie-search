import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FormRow, Input, Button } from './styles'
import { getMovies } from '../../actions/movies'

class SearchForm extends Component {
  state = {
    searchTerm: ''
  }

  /**
   * _handleKeyPress
   * Dispatches the getMovies action when 'Enter' key is pressed.
   *
   * @param {object} e - the event argument when the input is changed
   */
  _handleKeyPress(e) {
    const queryString = e.target.value.trim()

    if (queryString !== '' && queryString.length >= 2) {
      if (e.key === 'Enter') {
        getMovies(queryString)
      }
    }
  }

  /**
   * _handleClick
   * Dispatches the getMovies action when 'Enter' key is pressed.
   *
   * @param {object} e - the event argument when the input is changed
   */
  _handleClick(e) {
    e.preventDefault();
    debugger;
    const queryString = this.state.searchTerm;

    if (queryString !== '' && queryString.length >= 2) {
      getMovies(queryString)
    }
  }

  handleClick = (e) => {

  }

  render() {
    return(
      <React.Fragment>
        <FormRow>
          <Input placeholder="Digite o título do filme..." onChange={this._handleKeyPress} />

          <Button title="Clique para buscar" onClick={this._handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Button>
        </FormRow>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  searchTerm: store.searchTerm
});

export default connect(mapStateToProps)(SearchForm);
