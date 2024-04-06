import React from "react";
import { useState } from "react";
import { supabase } from "../client";
import "./CreatePost.css";

const CreatePost = () => {
  const [post, setPost] = useState({ name: "", speed: "", color: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Check if the name is one of the expected keys before updating the state
    if (name === "name" || name === "speed" || name === "color") {
      setPost((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const createPost = async (event) => {
    event.preventDefault();

    console.log("Post data:", post);
    await supabase
      .from("Game")
      .insert({
        name: post.name,
        speed: post.speed,
        color: post.color,
      })
      .select();

    window.location = "/read";
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" onChange={handleChange} />
        <label htmlFor="speed">Speed</label>
        <input type="text" id="speed" name="speed" onChange={handleChange} />
        <label>Color</label> <br />
        <input
          type="radio"
          id="red"
          name="color"
          value="red"
          onChange={handleChange}
        />
        <label htmlFor="red">Red</label> <br />
        <input
          type="radio"
          id="blue"
          name="color"
          value="blue"
          onChange={handleChange}
        />
        <label htmlFor="blue">Blue</label> <br />
        <input
          type="radio"
          id="green"
          name="color"
          value="green"
          onChange={handleChange}
        />
        <label htmlFor="green">Green</label> <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
