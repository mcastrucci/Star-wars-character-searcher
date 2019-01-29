import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import  SearchBox  from '../components/SearchBox';
import  SearchContent  from '../components/SearchContent';
import { connect } from 'react-redux';
import { setSearchField, requestSearch } from '../actions/actions';

const mapStateToProps = state => ({
  searchField: state.searchContent.searchField,
  results: state.searchResult.results,
  requestInProgress:  state.searchResult.requestInProgress
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch (setSearchField(event.target.value)),
  onRequestSearch: (text) => dispatch (requestSearch (text))
});



class App extends Component {

  componentDidMount() {
    console.log('componentDidMount', this.props)
  }

  componentDidUpdate(prevProps){
    if (this.props.searchField !== prevProps.searchField ){
      this.props.onRequestSearch(this.props.searchField);
    }
  }

  componentWillReceiveProps (nextProps){
    console.log('componendWillReceiveProps next:', nextProps);
    console.log('componendWillReceiveProps last:',this.props);
  }

  render() {
    console.log("rendering....");
    const {onSearchChange, results, requestInProgress} = this.props;
    let gotResults = false;
    

    if (results !== undefined){
      console.log('rendering... ', results);
      if (results.results !== undefined)
        gotResults = true;
    }
    
    console.log ('request in progress? ', requestInProgress);
    return (
      <div className="App-container">
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          {requestInProgress === true &&
            <h1>LOADING...</h1>
          }
          {requestInProgress === false && results !== undefined && gotResults &&
            <SearchContent searchResults={results.results} /> 
        }
      </div>
    );
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (App);
