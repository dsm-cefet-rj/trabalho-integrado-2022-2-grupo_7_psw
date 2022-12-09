import React from "react";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./routes/profile";
import Friends from "./routes/friends";
import Reviews from "./routes/reviews";
import Lists from "./routes/lists";
import Screen from "./routes/screen";
import Settings from "./routes/usersettings";
import Favorites from "./routes/favorites";
import Popular from "./routes/popular";
import NewList from "./routes/newList";
import DropprUser from "./routes/dropprUser";
import SignIn from "./routes/signIn";
import Overview from "./routes/overview";
import OverviewUser from "./routes/overviewUser";
import Allgames from "./routes/allgames";
import AllgamesUser from "./routes/allgamesUser";
import Myreviews from "./routes/myreviews";
import MyreviewsUser from "./routes/myreviewsUser";
import { RecoilRoot } from "recoil";
import News from "./routes/news";
import NewsPage from "./routes/newsPage";
import NewsEditorPage from "./routes/newsEditorPage";
import Search from "./routes/search";
import EditList from "./routes/editlist";
import IndividualList from "./routes/individualListPage";
import RegisterPage from "./routes/registerPage";

const rootElement = document.getElementById("root");
render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/overview" element={<Overview />} />
        <Route path="dropprUser/overviewUser" element={<OverviewUser />} />
        <Route path="dropprUser/allgamesUser" element={<AllgamesUser />} />
        <Route path="dropprUser/myreviewsUser" element={<MyreviewsUser />} />
        <Route path="profile/allgames" element={<Allgames />} />
        <Route path="profile/myreviews" element={<Myreviews />} />
        <Route path="friends" element={<Friends />} />
        <Route path="dropprUser" element={<DropprUser />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="lists" element={<Lists />} />
        <Route path="screen/:id" element={<Screen />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/reviews/popular" element={<Popular />} />
        <Route path="/reviews/favorites" element={<Favorites />} />
        <Route path="/lists/new" element={<NewList />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-page/:id" element={<NewsPage />} />
        <Route path="/news-editor/create" element={<NewsEditorPage />} />
        <Route path="/news-editor/update/:id" element={<NewsEditorPage/>}/>
        <Route path="search/:name" element={<Search />} />
        <Route path="lists/edit" element={<EditList />} />
        <Route path="list/:id" element={<IndividualList />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
  rootElement
);
