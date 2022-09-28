import React from "react";
import { Link } from "react-router-dom";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const Card = ({ body, head, link, publishDateTime, image }) => {
  // const Card = ({ id, l, q, qid, i, s, rank, v }) => {
  console.log(body);
  return (
    <div className="card name my-5">
      <img
        className="card-img-top"
        src={image.url}
        alt="Card image"
        // style={width=100%}
      />
      <div className="card-body">
        <h4 className="card-title">{head}</h4>
        <p className="card-text">{body}</p>
        {/* <p className="card-text">{}</p> */}
        {/* <p className="card-text">{rank}</p> */}
      </div>
      <div>
        <li className="list-group-item">
          <Link to={-1} className="card-link">
            Go Back
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Card;
