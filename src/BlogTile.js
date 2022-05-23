import React from "react";
import style from "./style";

function BlogTitle({title}) {
  return (
    <h1 style={style.headingStyles}>{title}</h1>
  );
}

export default BlogTitle;