import React from "react";
import NavBar from "./components/navBar/NavBar";
import {Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";

import './App.css';
import Preloader from "./components/preloader/Preloader";

const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));
const Messages = React.lazy(() => import("./components/messages/Messages"));
const Login = React.lazy(() => import("./components/login/Login"));
const News = React.lazy(() => import("./components/news/News"));
const UsersContainer = React.lazy(() => import("./components/users/UsersContainer"));


function App() {

  return (
    <div className='app-wrapper'>
            <HeaderContainer />
            <NavBar />
            <div className='content'>
                <React.Suspense fallback={<Preloader />}>
                <Routes>
                        <Route path='/profile/*' element={<ProfileContainer />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/messages' element={<Messages />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/login' element={<Login />}/>
                </Routes>
                </React.Suspense>
            </div>
    </div>
  );
}

export default App;
