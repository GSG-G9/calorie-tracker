import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ThemeProvider from "./components/ThemeProvider";
import HomePage from "./components/Home";
import LoginPage from "./components/Login";
import SignupPage from "./components/Signup";
import LogoutPage from "./components/Logout";
import NutritionPage from "./components/Nutrition";
import myProfilePage from "./components/Profile";
import CaloriesPage from "./components/Calories";
import MyFoodPage from "./components/MyFood";
import FoodPage from "./components/Food";
import ExercisePage from "./components/Exercise";

function App() {
  return (
    <>
      <ThemeProvider />

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/logout	" component={LogoutPage} />
          <Route exact path="/nutrition" component={NutritionPage} />
          <Route exact path="/myprofile" component={myProfilePage} />
          <Route exact path="/calories" component={CaloriesPage} />
          <Route exact path="/myfood" component={MyFoodPage} />
          <Route exact path="/food" component={FoodPage} />  
          <Route exact path="/exercise" component={ExercisePage} />  
        </Switch>
      </Router>
    </>
  );
}

export default App;
