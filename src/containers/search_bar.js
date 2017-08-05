import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // This binding is not needed if onInputChange is an arrow function.
    // This statement saying 'bind this.onInputChange with this, and then
    // resplace th existing onInputChange function with it, like an override.
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  // The 'event' object is a vanilla javascript event, nothing to do with React.
  onInputChange(event) {
    //console.log(event.target.value)
    
    // We are referencing 'this' here, so we need to bind the context in the
    // constructor since this is not an arrow function.
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to fetch weather data.
    this.props.fetchWeather(this.state.term);
    // Component state, not application state.
    // Setting the state causes the component to re-render.
    // It will appear as emptied out to the user.
    this.setState({term: ''});

  }

  render() {
    return (
      // Before we added an 'onSubmit' handler to this form, the default bahavior
      // was that when you click submit, your browser thinks you are doing a form
      // post so it sends a post request to the server and reloads the page,
      // appending a '?' to your URL in the address bar.
      // This was undesirable behavior, so we added an onSubmit handler.
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch);
}

// Previous in other git projects, we've mapped state to props via mapStateToProps
// and mapped dispatch to props via mapDispatchToProps. Were were not passing in
// null as the first argument to connect. Now, we are passing in null because
// the second argument always has to be the mapDispatchToProps function. Passing
// in null here means that this container doesn't care about the redux state.
export default connect(null, mapDispatchToProps)(SearchBar);
