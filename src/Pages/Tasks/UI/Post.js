import React, { useContext } from "react";
import "./Posts.css";
import { Context } from "../../../Context";
import Task from "./Task";

function Post() {
  const { tasks } = useContext(Context);

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
              <Task
                author={author}
                title={title}
                time={time}
                date={date}
                likes={likes}
                replies={replies}
                shares={shares}
                id={id}
                picture={picture}
              />
            );
          }
        )
        .reverse()}
    </div>
  );
}

export default Post;
