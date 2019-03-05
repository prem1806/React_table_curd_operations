import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div className="form-group">

        <input type="text" className="form-control" placeholder="Search" value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>

      </div>

    );
  }

}

export default SearchBar;