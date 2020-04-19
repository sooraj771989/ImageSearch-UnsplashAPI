import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({ term: e.target.value }, function() {
      // this.refs.searchBox.value = "";
      this.props.onSubmit(this.state.term);
    });
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="flex py-10 bg-black">
        <form className="w-full md:w-6/12 mx-auto px-4" action="#" method="get">
          <div className="flex flex-col">
            <label className="text-gray-100 mb-2 font-semibold">
              Image Search
            </label>
            <input
              ref="searchBox"
              className="input-form"
              placeholder="Enter Keyword Here..."
              type="search"
              value={this.state.term}
              onChange={this.handleSearch}
            />
            <button
              className="search-button"
              type="submit"
              value="sd"
              onClick={this.handleSubmit.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
