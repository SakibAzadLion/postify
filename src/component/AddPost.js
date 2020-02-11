import React from "react";

class AddPost extends React.Component {
  render() {
    return (
      <div className="add__post">
        <div className="add_post_header">
          <h2>Create Post</h2>
        </div>
        <div className="add_post_body">
          <textarea
            className="post_content"
            placeholder="What's on your mind"
            style={{resize: "vertical"}}
          ></textarea>
        </div>
        <div className="add_post_footer">
          <form className="post__submit">
            <input type="file" className="post__media" />
            <button type="submit" className="post_submit_btn">
              Post
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPost;
