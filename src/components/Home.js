import React from "react";
import { Media } from 'reactstrap';


const Home = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
        <h2
            style={{
                marginBottom: '50px',
                textAlign: 'center',
                backgroundColor: 'lightblue'
            }}>Welcome Home {user ? user.username : "to the Fitness Tracker"}</h2>
    </div>
    );
};

export default Home;
