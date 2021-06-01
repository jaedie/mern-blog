import React from "react";
import "../dist/css/Post.css";

function Post() {
  return (
    <div className="post">
      <img className="post__img" src="/images/post1.png" alt="post_img" />
      <div className="post__info">
        <div className="post__info__ctgs">
          <span className="post__info__ctg">Life</span>
          <span className="post__info__ctg">Coding</span>
        </div>
        <span className="post__info__title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post__info__date">1hr ago</span>
        <p className="post__info__des">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          quibusdam quaerat sunt eum laudantium in porro placeat non ullam cum
          accusantium, reiciendis omnis delectus ea autem et iure doloremque
          laboriosam vero quos, blanditiis mollitia. Ut totam ratione et earum
          similique sint nobis labore natus, neque commodi ad asperiores sequi
          odio.
        </p>
      </div>
    </div>
  );
}

export default Post;
