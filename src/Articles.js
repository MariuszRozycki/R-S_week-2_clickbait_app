import React from "react";

function Articles({title, intro}) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{intro}</p>
    </article>
  );
}

export default Articles;