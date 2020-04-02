import React from "react";

export default function ImagesArray(props) {
  const { total, imagesArray } = props;

  return (
    <div>
      <a>
        {props.imagesArray.map(image => (
          <span>
            <img
              style={{
                width: "30px",
                borderRadius: "50%",
                marginRight: "-10px",
                position: "relative",
                // zIndex: "999999"
              }}
              src={image.url}
            />
          </span>
        ))}
        {total ? (
          true
        ) : (
          <span style={{ marginRight: "-10px", borderRadius: "50%" }}>
            {100}
          </span>
        )}
      </a>
    </div>
  );
}
