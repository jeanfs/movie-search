import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Actions
import { getMovies, clearResults } from '../../actions/movieSearch'

// Component's styles
import {
  Form,
  FormRow,
  FormInput,
  FormInputError,
  Button
} from './styles'

// Icons
import { Search } from 'react-feather';

class SearchForm extends Component {
  state = {
    query: '',
    isLoading: false,
    total: undefined,
    noResults: false
  }


  /**
   * _handleKeyPress
   * Dispatches the getMovies action when 'Enter' key is pressed.
   *
   * @param {object} e - the event argument when the input is changed
   */

  _handleKeyPress = (e) => {
    const inputValue = e.target.value.trim()

    this.setState({
      ...this.state,
      query: inputValue
    })

    if (inputValue === '') {
      this.setState({noResults: false})
    }

    if (e.key === 'Enter') {
      this._fetchMovies()
    }
  }


  /**
   * _handleClick
   * Prevents the default behavior of the button and invokes the _fetchMovie method
   *
   * @param {object} e - the event
   */

  _handleClick = (e) => {
    e.preventDefault();

    this._fetchMovies()
  }


  /**
   * _fetchMovies
   * Dispatches the action itself.
   */

  _fetchMovies = () => {
    const queryString = this.state.query;
    const props = this.props;

    // Interrupts the execution if the query string is empty
    if (queryString === '') {
      return
    }

    props.dispatch(clearResults())
    props.dispatch(getMovies(queryString))
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.isLoading !== this.props.isLoading ){
      this.setState({isLoading: nextProps.isLoading})
    }

    if((nextProps.total !== this.props.total) && nextProps.total > 0 ){
      this.setState({total: nextProps.total})
      this.props.history.push("/");
    }

    if((nextProps.total !== this.props.total) && nextProps.total === 0 ){
      this.setState({noResults: true})
    }
  }

  render() {
    return(
      <React.Fragment>
        <Form>
          <FormRow noResults={this.state.noResults}>
            <FormInput type="text" name="searchInput" placeholder="Digite o título do filme..." onChange={this._handleKeyPress}  />
            {this.state.noResults &&
              <FormInputError>Nenhum resultado encontrado. Tente outro filme. ;)</FormInputError>
            }
          </FormRow>

          <Button title="Clique para buscar" onClick={this._handleClick} disabled={this.state.isLoading}>
            <Search />
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  query: store.movieSearch.query,
  isLoading: store.movieSearch.isLoading,
  total: store.movieSearch.total
});

export default withRouter(connect(mapStateToProps)(SearchForm));
