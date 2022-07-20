import React from "react";

function Header() {
  return (
    <div className="Header">
      <div className="title">
        facebook/<b>react</b>
        <span
          style={{
            color: "grey",
            border: "1px solid black",
            borderRadius: "5px",
            marginLeft: "3px",
            padding: "2px",
          }}
        >
          Public
        </span>
        <br />
        <div className="header__lower">
          <p> &lt;&gt; Code</p>
          <p style={{ borderBottom: "1px solid orange" }}> &#9673; Issues</p>
          <p> &#8593; Pull requests</p>
          <p> &#x23F5; Actions</p>
          <p> &#9830; Projects</p>
          <p> &#128214; Wiki </p>
          <p>&#128737; Security</p>
          <p>&#128202; Insights</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
