import React, { useContext } from "react";
import "./Posts.css";
import { Context } from "../../../Context";
import { Link } from "react-router-dom";

function Post() {
  const { tasks, darkMode, getDarkMode } = useContext(Context);

  return (
    <div className="postWrapper">
      {tasks
        .map(
          ({
            author,
            title,
            time,
            date,
            likes,
            replies,
            shares,
            id,
            picture,
          }) => {
            return (
              <Link to={`/tasks/${id}`} key={id}>
                <div className="post" style={getDarkMode(darkMode, "post")}>
                  <div className="headerWrapper">
                    <div className="pictureWrapper">
                      {picture ? (
                        <img
                          src={picture}
                          alt=""
                          className="picture"
                          style={getDarkMode(darkMode, "pictureBorder")}
                        />
                      ) : (
                        <div
                          className="lnr lnr-user profilePicture"
                          style={getDarkMode(darkMode, "profilePicture")}
                        />
                      )}
                    </div>
                    <div className="postHeader">{author}</div>
                  </div>

                  <div className="postTitle">{title}</div>
                  <div
                    className="postDate"
                    style={getDarkMode(darkMode, "likesShareRepost")}
                  >
                    {time}
                    {" · "}
                    {date}, 2022
                  </div>
                  <div
                    className="likesShareRepost"
                    style={getDarkMode(darkMode, "likesShareRepost")}
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
              </Link>
            );
          }
        )
        .reverse()}
    </div>
  );
}

export default Post;
