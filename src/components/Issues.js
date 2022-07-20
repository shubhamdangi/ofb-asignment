import React, { useEffect, useState } from "react";

function Issues() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Issues">
      <>
        <div className="feedpage">
          <div className="dash">
            <div className="Head">
              <br />
            </div>
            <div className="contents">
              <ul class="list-group list-group-flush issue ">
                <li class="list-group-item dash">
                  <span style={{ color: "green" }}>&#9673; </span> 635 Open{" "}
                  <span style={{ color: "grey" }}>&#10003; 10,104 Closed </span>
                </li>
                {data.map((user) => (
                  <li class="list-group-item dash" key={user.id}>
                    <h5>
                      <span style={{ color: "green" }}>&#9673; </span>{" "}
                      {user.title}
                      {user.labels[2] ? (
                        <span className="message message__component">
                          {user.labels[2]?.name}
                        </span>
                      ) : null}
                      <span className="message message__type">
                        Type:{user.user.type}
                      </span>
                      <span className="message message__bug">
                        {user.labels[0]?.name}
                      </span>
                    </h5>
                    <p style={{ color: "grey" }}>
                      #{user.number} by {user.user.login}
                    </p>
                    {user.labels.map((i) => {
                      <p>{i.name}</p>;
                    })}
                  </li>
                ))}

                <li class="list-group-item dash"></li>
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Issues;
