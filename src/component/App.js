import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <AddPost />
          <ul className="post__list">
            <Post />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
