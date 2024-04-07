import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
import "./View.css";

const View = (props) => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("Game").select();
      setPosts(data);
    };
    fetchPosts();

    console.log(posts);
    if (posts) {
      const post = posts.find((post) => post.id === parseInt(id));
      setCurrentPost(post);
    }
  }, [id, posts]);

  let uniqueText;
  if (posts && currentPost) {
    switch (currentPost.color) {
      case "red":
        uniqueText = "This crewmate is enchanting and powerful. Don't let your emotions out of control.";
        break;
      case "blue":
        uniqueText = "This crewmate commands destiny with his fingertips. With the waves of destiny on thier side, you will surely win.";
        break;
      case "green":
        uniqueText = "This crewmate is groovy and calm. Though they eat losts of trash for fun.";
        break;
      case "black":
        uniqueText =
          "This crewmate has a dark past but unwavering loyalty. Where shadows linger, their presence whispers of death.";
        break;
      case "yellow":
        uniqueText = "This crewmate is intelligent and always has a plan. You'll want her on your side.";
        break;
      case "orange":
        uniqueText = "This crewmate is cheeky and funny. You'll have a good time with them";
        break;
      default:
        uniqueText = "This crewmate is bland and kinda forgettable. Are you sure about this one?";
    }
  }

  return (
    <div className="info-container">
      {posts && currentPost && (
        <div className="info">
          <h1>
            Say Hi to{" "}
            <span style={{ color: currentPost.color }}>{currentPost.name}</span>
          </h1>
          <p>Speed: {currentPost.speed}</p>
          <p>
            Color:{" "}
            <span style={{ color: currentPost.color }}>
              {currentPost.color}
            </span>
          </p>
          <p style={{ color: currentPost.color }}>{uniqueText}</p>
        </div>
      )}
    </div>
  );
};

export default View;
