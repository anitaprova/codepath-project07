import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import View from "./pages/View";
import { Link } from 'react-router-dom'


const App = () => {
  const posts = [
  ]

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={posts} />,
    },
    {
      path: "/edit/:id",
      element: <EditPost data={posts} />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
    {
      path: "/view/:id",
      element: <View data={posts}/>
    }
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>ඞ Among Us</h1>
        <Link to="/">
          <button className="headerBtn"> Crewmate Gallery </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create an Among Us </button>
        </Link>
      </div>
      {element}
    </div>
  );
}

export default App;
