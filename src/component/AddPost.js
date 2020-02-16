import React from "react";
import uniqid from "uniqid";
import moment from "moment";
import PropTypes from "prop-types";

class AddPost extends React.Component {
  descRef = React.createRef();
  imgRef = React.createRef();

  static propTypes = {
    userId: PropTypes.string,
    addPost: PropTypes.func
  };

  handleSubmit = e => {
    //1)Prevent app from submiting
    e.preventDefault();

    //2)Post date
    const user = this.props.userId;
    const id = uniqid();
    const desc = this.descRef.current.value;
    const img = this.imgRef.current.value
      ? URL.createObjectURL(this.imgRef.current.files[0])
      : "";
    const date = moment().format();

    //3)Add data to the state
    this.props.addPost(user, id, desc, img, date);

    //4)Reset Form
    this.descRef.current.value = "";
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="add__post">
        <div className="add_post_header">
          <h2>Create Post</h2>
        </div>
        <div className="add_post_body">
          <textarea
            ref={this.descRef}
            className="post_content"
            placeholder="What's on your mind"
            style={{ resize: "vertical" }}
          ></textarea>
        </div>
        <div className="add_post_footer">
          <form className="post__submit" onSubmit={this.handleSubmit}>
            <input
              type="file"
              ref={this.imgRef}
              className="post__media"
              accept=".png, .jpg, .jpeg"
            />
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
