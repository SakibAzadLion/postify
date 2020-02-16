import React from "react";
import moment from "moment";
import Moment from "react-moment";
import "font-awesome/css/font-awesome.min.css";

class Post extends React.Component {
  commentRef = React.createRef();

  handleComment = e => {
    //1)Prevent from submiting
    e.preventDefault();

    //2)Get the comment
    const code = this.props.code;
    const user = this.props.userId;
    const comment = this.commentRef.current.value;
    console.log(code, user, comment);

    //3)Add comment to the state
    this.props.addComment(code, user, comment);

    //4)Reset From
    e.currentTarget.reset();
  };

  renderComment = (comment, i) => {
    return (
      <li className="comment__item" key={i}>
        <h3>{comment.user}</h3>
        <p>{comment.text}</p>
        <i
          className="fa fa-times"
          onClick={() => this.props.removeComment(this.props.code, i)}
        ></i>
      </li>
    );
  };

  toogleLikeDislike = type => {
    const code = this.props.code.replace(/\s/g, "_");
    const user = this.props.userId.replace(/\s/g, "_");
    const index = this.props.index;
    const liked = this.props.likeDislike.hasOwnProperty(`${user}_${code}`)
      ? this.props.likeDislike[`${user}_${code}`].liked
      : false;
    const disliked = this.props.likeDislike.hasOwnProperty(`${user}_${code}`)
      ? this.props.likeDislike[`${user}_${code}`].disliked
      : false;

    if (type === "like") {
      this.props.toogleLike(code, user, index, !liked);
      this.props.toogleDislike(code, user, index, false);
    } else {
      this.props.toogleDislike(code, user, index, !disliked);
      this.props.toogleLike(code, user, index, false);
    }
  };

  render() {
    const code = this.props.code.replace(/\s/g, "_");
    const user = this.props.userId.replace(/\s/g, "_");

    const liked = this.props.likeDislike.hasOwnProperty(`${user}_${code}`)
      ? this.props.likeDislike[`${user}_${code}`].liked
      : false;

    const disliked = this.props.likeDislike.hasOwnProperty(`${user}_${code}`)
      ? this.props.likeDislike[`${user}_${code}`].disliked
      : false;
    console.log(this.props.post.date);
    return (
      <li className="post">
        <h2 className="user_name">{this.props.post.user}</h2>
        <span className="post_time">
          <Moment fromNow>{this.props.post.date}</Moment>
        </span>
        <p className="post_content">{this.props.post.desc}</p>
        {this.props.post.img ? (
          <img
            src={this.props.post.img}
            alt={`post-image-${this.props.code}`}
            className="post_img"
          />
        ) : (
          ""
        )}
        <div className="status__bars">
          <div className="thumbs__up">
            <i
              className={`fa fa-thumbs-up ${liked ? "liked" : ""}`}
              onClick={() => this.toogleLikeDislike("like")}
            ></i>
          </div>
          <div className="thumbs__down">
            <i
              className={`fa fa-thumbs-down ${disliked ? "disliked" : ""}`}
              onClick={() => this.toogleLikeDislike("dislike")}
            ></i>
          </div>
        </div>
        <ul className="comment__list">
          {this.props.comments[this.props.code].map(this.renderComment)}
        </ul>
        <form className="comment__form" onSubmit={this.handleComment}>
          <input
            type="text"
            ref={this.commentRef}
            className="comment__inp"
            placeholder="Comment"
          />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
        {this.props.post.user === this.props.userId ? (
          <div className="remove__btn">
            <button
              type="button"
              className="remove_post_btn"
              onClick={() => {
                this.props.removeLikeDislike(user, code);
                this.props.removeCommentObj(code);
                this.props.removePost(this.props.index);
              }}
            >
              Remove Post
            </button>
          </div>
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default Post;
