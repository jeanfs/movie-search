import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FormRow, Input, Button } from './styles'

class SearchForm extends Component {
  state = {
    searchTerm: ''
  }

  inputChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleClick = (e) => {

  }

  render() {
    return(
      <form>
        <FormRow>

          <Input placeholder="Digite o título do filme..." onChange={this.inputChange} />

          <Button title="Clique para buscar" onClick={this.handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </Button>

        </FormRow>
      </form>
    );
  }
}

const mapStateToProps = store => ({
  searchTerm: store.searchTerm
});

export default connect(mapStateToProps)(SearchForm);
