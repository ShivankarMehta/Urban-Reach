import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  //   console.log(props.details.link);
  const url = "//" + props.details.link;
  return (
    <div>
      <div>
        <strong class="d-inline-block mb-2 text-primary">
          {props.details.title && props.details.title}
        </strong>
        {props.image && (
          <div className="text-center">
            <img src={props.image} className="img-fluid " />
          </div>
        )}
        <h3 class="mb-0">{props.details.page}</h3>
        <p class="card-text mb-auto ">{props.details.content}</p>
        {url != "//" && (
          <Link
            to={url}
            target="_blank"
            className="btn btn-secondary mt-2 d-block "
          >
            Visit
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
