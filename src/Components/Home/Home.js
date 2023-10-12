import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const email = localStorage.getItem("email");
  const user = email ? email.split("@")[0] : "Guest";
  const userText = user.charAt(0).toUpperCase() + user.slice(1);
  return (
    <Card className={classes.home}>
      <h1>
        Hey👋, <span>{userText}</span> Welcome back!
      </h1>
    </Card>
  );
};

export default Home;
