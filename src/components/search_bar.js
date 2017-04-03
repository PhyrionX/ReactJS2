import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting value' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.tern}
          onChange={event => this.setState({tern: event.target.value})}/>
      </div>
    );
  }
}

export default SearchBar;
