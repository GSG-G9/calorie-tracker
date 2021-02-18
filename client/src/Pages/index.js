import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  Login,
  Signup,
  Logout,
  MyProfile,
  Food,
  Exercise,
  FoodList,
  FoodQuantityPath,
  ContactUs,
} from '../utils/constant';
import AllFoodList from './FoodList';
import HomePage from './Home';
import LoginPage from './Login';
import SignupPage from './Signup';
import LogoutPage from './Logout';
import MyProfilePage from './Profile';
import FoodQuantity from './FoodQuantity';
import FoodPage from './Food';
import ExercisePage from './Exercise';
import NavBar from '../components/layout/NavBar';
import NotFound from './NotFoundPage';
import ContactUsPage from './ContactUs';

import { context } from '../components/UserProvider';

function Pages() {
  const [isAuthenticated] = useContext(context);
  return (
    <>
      {isAuthenticated ? <NavBar /> : ''}
      <Switch>
        <Route exact path={Login} component={LoginPage} />
        <Route exact path={Signup} component={SignupPage} />
        <Route exact path={Home} component={HomePage} />
        <Route exact path={ContactUs} component={ContactUsPage} />
        {isAuthenticated ? (
          <>
            <Route exact path={Logout} component={LogoutPage} />
            <Route exact path={MyProfile} component={MyProfilePage} />
            <Route exact path={Food} component={FoodPage} />
            <Route exact path={FoodList} component={AllFoodList} />
            <Route exact path={FoodQuantityPath} component={FoodQuantity} />
            <Route exact path={Exercise} component={ExercisePage} />
          </>
        ) : (
          ''
        )}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Pages;
