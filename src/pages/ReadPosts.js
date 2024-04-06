import React, { useState, useEffect } from 'react';
import { supabase } from "../client";
import { Link } from "react-router-dom";
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          const { data } = await supabase.from("Game").select();

          // set state of posts
          setPosts(data);
        };
        fetchPosts();
    }, [props]);
    

    return (
      <div className="ReadPosts">
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <Card
              key={index}
              id={post.id}
              name={post.name}
              speed={post.speed}
              color={post.color}
            />
          ))
        ) : (
          <div>
            <h2>Your Crewmate Gallery</h2>
            <p>You haven't made a crewmate yet</p>
            <Link to="/new">
              <button className="headerBtn"> Create an Among Us </button>
            </Link>
          </div>
        )}
      </div>
    );
}

export default ReadPosts;