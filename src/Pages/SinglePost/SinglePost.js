import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../Context";
import "./SinglePost.css";
import { getDarkMode } from "../../Themes/getDarkMode";

function SinglePost() {
  const { id } = useParams();
  const { tasks, darkMode } = useContext(Context);

  const { author, title, time, date, likes, replies, shares, picture } =
    useMemo(() => {
      return tasks.find((el) => JSON.stringify(el.id) === id);
    }, [id]);

  return (
    <div className="singlePostWrapper">
      <div className="singlePostHeader">
        <div
          className="singlePostPhoto"
          style={picture ? { display: "block" } : { display: "none" }}
        >
          {picture && (
            <img
              src={picture}
              alt=""
              className="picture"
              style={getDarkMode(darkMode, "pictureBorder")}
            />
          )}
        </div>

        <div className="singlePostName">{author}</div>
      </div>
      <div className="singlePostTitle" style={getDarkMode(darkMode, "post")}>
        {title}
      </div>
      <div className="postDate" style={getDarkMode(darkMode, "dateAndlikes")}>
        {`${time} · ${date}, 2022 `}
      </div>
      <div
        className="likesShareRepost"
        style={getDarkMode(darkMode, "dateAndlikes")}
      >
        <span className="likes">
          <strong>{likes}</strong> Лайков
        </span>
        <span className="replies">
          <strong>{replies}</strong> Ответов
        </span>
        <span className="shares">
          <strong>{shares}</strong> Репостов
        </span>
      </div>
    </div>
  );
}

export default SinglePost;
