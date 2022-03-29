import React from "react";

const Card = (props) => {
  return (
    <>
      {props.post.map((posts) => (
        <>
          <div className="card" style={{ width: "35rem" }}>
            <div className="card-body">
              <h5>{posts.episode_id}</h5>
              <p>{posts.title}</p>
              <a>{posts.opening_crawl}</a>
            </div>
          </div>
          <hr />
        </>
      ))}
    </>
  );
};

export default Card;
