import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <AddPost addPost={this.props.addPost} />
          <ul className="post__list">
            {this.props.posts.map((post, i) => <Post key={post.code} index={post.code} post={post} userId={this.props.match.params.userId} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
