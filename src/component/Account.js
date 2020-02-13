import React from "react";

class Account extends React.Component {
  userRef = React.createRef();

  handleSubmit = e => {
    //1) Prevent browser from submiting
    e.preventDefault();

    //2) Get the input
    const userId = this.userRef.current.value;

    //3) Push the url
    this.props.history.push(`/user/${userId}`);
  }

  render() {
    return (
      <div className="create__account">
        <form className="account__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.userRef}
            className="account__name"
            placeholder="Enter Account Name"
          />
          <button type="submit" className="btn__submit">
            Create Account
          </button>
        </form>
      </div>
    );
  }
}

export default Account;
