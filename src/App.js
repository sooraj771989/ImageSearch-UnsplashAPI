import React from "react";
import unsplash from "./api/search";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./styles.css";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
