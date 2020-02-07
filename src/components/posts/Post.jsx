import React from "react";

import Card from "../card/Card";
import UseFetch from "../effects/Use-Fetch.effects";

const Post = ({ postId }) => {
  const post = UseFetch(
    `https://jsonplaceholder.typicode.com/posts?id=${postId}`
  );

  return (
    <Card>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>No Post Found</p>
      )}
    </Card>
  );
};

export default Post;
