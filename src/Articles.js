import React from "react";
import style from "./style";
import BlogTitle from "./BlogTile";

function Articles({title, intro}) {

  const intro25 = `${intro.slice(0, 25)}...`;

  if (intro.length > 25) {
    return (
      <article>
        <BlogTitle title={title}/>
        <p style={style}>{intro25}</p>
      </article>
    );
  } else
    return (
      <article>
        <BlogTitle title={title}/>
        <p>{intro}</p>
      </article>
    );
  }

export default Articles;