import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThemeProvider from '../components/ThemeProvider';
import {
  Home,
  Login,
  Signup,
  Logout,
  Nutrition,
  MyProfile,
  Calories,
  MyFood,
  Food,
  Exercise,
} from '../Utils/constant';
import HomePage from '../Pages/Home';
import LoginPage from '../Pages/Login';
import SignupPage from '../Pages/Signup';
import LogoutPage from '../Pages/Logout';
import NutritionPage from '../Pages/Nutrition';
import MyProfilePage from '../Pages/Profile';
import CaloriesPage from '../Pages/Calories';
import MyFoodPage from '../Pages/MyFood';
import FoodPage from '../Pages/Food';
import ExercisePage from '../Pages/Exercise';
import './style.css';
import UserProvider from '../components/userProvider';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Switch>
            <Route exact path={Home} component={HomePage} />
            <Route exact path={Login} component={LoginPage} />
            <Route exact path={Signup} component={SignupPage} />
            <Route exact path={Logout} component={LogoutPage} />
            <Route exact path={Nutrition} component={NutritionPage} />
            <Route exact path={MyProfile} component={MyProfilePage} />
            <Route exact path={Calories} component={CaloriesPage} />
            <Route exact path={MyFood} component={MyFoodPage} />
            <Route exact path={Food} component={FoodPage} />
            <Route exact path={Exercise} component={ExercisePage} />
          </Switch>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
