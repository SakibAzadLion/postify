import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <AddPost
            addPost={this.props.addPost}
            userId={this.props.match.params.userId}
          />
          <ul className="post__list">
            {this.props.posts.map((post, i) => (
              <Post
                key={post.code}
                code={post.code}
                index={i}
                userId={this.props.match.params.userId}
                post={post}
                comments={this.props.comments}
                likeDislike={this.props.likeDislike}
                addComment={this.props.addComment}
                removePost={this.props.removePost}
                removeComment={this.props.removeComment}
                toogleLike={this.props.toogleLike}
                toogleDislike={this.props.toogleDislike}
                removeLikeDislike={this.props.removeLikeDislike}
                removeCommentObj={this.props.removeCommentObj}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
