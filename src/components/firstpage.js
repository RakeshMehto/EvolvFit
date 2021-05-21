import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Home(props) {
  return (
    <div className="pp">
      <div className="container">
        <div className="home-page">
          <div className="row">
            <div className="">
              <button className="btn btn1" color="danger">
                <Link to="/userPage">User</Link>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="">
              <button className="btn btn2" color="danger">
                <Link to="/adminlogin">Admin</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
