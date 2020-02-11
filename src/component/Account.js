import React from "react";

const Account = props => {
  return (
    <div className="create__account">
      <form className="account__form">
        <input
          type="text"
          className="account__name"
          placeholder="Enter Account Name"
        />
        <button type="submit" className="btn__submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Account;
