import React, { useContext } from "react";
import "./Posts.css";
import { Context } from "../../../Context";
import Task from "./Task";

function Post() {
  const { tasks } = useContext(Context);

  return (
    <div className="postWrapper">
      {tasks
        .map((props) => {
          return <Task {...props} key={props.id} />;
        })
        .reverse()}
    </div>
  );
}

export default Post;
