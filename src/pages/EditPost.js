import React from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { supabase } from "../client";
import './EditPost.css'

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    const handleChange = (event) => {
      const { name, value } = event.target;
      if (name === "name" || name === "speed" || name === "color") {
        setPost((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
          .from("Game")
          .update({
            name: post.name,
            speed: post.speed,
            color: post.color,
          })
          .eq("id", id);

          window.location = "/";
    }

    const deletePost = async (event) => {
      event.preventDefault();

      await supabase.from("Game").delete().eq("id", id);

      window.location = "http://localhost:3000/";
    };

    return (
      <div>
        <form>
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" name="name" onChange={handleChange} />
          <br />
          <br />
          <label htmlFor="speed">Speed</label>
          <input type="text" id="speed" name="speed" onChange={handleChange} />
          <br />
          <br />
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
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            onChange={handleChange}
          />
          <label htmlFor="black">Black</label> <br />
          <input
            type="radio"
            id="yellow"
            name="color"
            value="yellow"
            onChange={handleChange}
          />
          <label htmlFor="yellow">Yellow</label> <br />
          <input
            type="radio"
            id="orange"
            name="color"
            value="orange"
            onChange={handleChange}
          />
          <label htmlFor="orange">Orange</label> <br />
          <input type="submit" value="Submit" onClick={updatePost} />
          <button className="deleteButton" onClick={deletePost}>
            Delete
          </button>
        </form>
      </div>
    );
}

export default EditPost