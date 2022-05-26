import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home />} />
        <Route Route path="/movies" element={<Movies />} >
          <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
      </Route>
      <Route path="/timer" element={<UseEffect/>}/>
      <Route path="/memo" element={<UseMemo />} />
      <Route path="*" element={<NotFound/>} />
    </Routes> 
  );
};

export default App;