import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    console.log(props.images);
    return (
      <section className="Images">
        <div className="row">
          {props.images.map(function (image, index) {
            return (
              <div
                className="col-4"
                key={index}
              >
                <img
                  src={image.src.landscape}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
