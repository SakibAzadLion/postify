import React from "react";

class Post extends React.Component {
  render() {
    return (
      <li className="post">
        <h2 className="user_name">Sakib Azad</h2>
        <span className="post_time">34m</span>
        <p className="post_content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          laoreet aliquam felis, ac scelerisque ipsum consectetur a. Nunc vel
          egestas magna, at dignissim arcu. Quisque lorem dolor, lobortis sed
          nunc eget, dignissim suscipit ipsum. Praesent sit{" "}
        </p>
        <img src="../images/post.jpg" alt="post_img" className="post_img" />
        <div className="status__bars">
          <div className="thumbs__up">
            <i className="fa fa-thumbs-up"></i>
          </div>
          <div className="thumbs__down">
            <i className="fa fa-thumbs-down"></i>
          </div>
        </div>
        <ul className="comment__list">
          <li className="comment__item">
            <h3>Sakib Azad</h3>
            <p>Funney very funney</p>
            <i className="fa fa-times"></i>
          </li>
          <li className="comment__item">
            <h3>Sakib Azad</h3>
            <p>Funney very funney</p>
            <i className="fa fa-times"></i>
          </li>
        </ul>
        <form className="comment__form">
          <input type="text" className="comment__inp" placeholder="Comment" />
          <button type="submit" style={{ display: "none" }}></button>
        </form>
        <div className="remove__btn">
          <button type="button" className="remove_post_btn">
            Remove Post
          </button>
        </div>
      </li>
    );
  }
}

export default Post;