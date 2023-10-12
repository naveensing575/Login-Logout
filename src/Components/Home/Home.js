import React from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const email = localStorage.getItem("email");
  const user = email ? email.split("@")[0] : "Guest";

  return (
    <Card className={classes.home}>
      <h1>Welcome back, {user}!</h1>
    </Card>
  );
};

export default Home;
