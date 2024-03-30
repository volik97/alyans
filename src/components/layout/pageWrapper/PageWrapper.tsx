// import NavbarDefault from "../header/Header";
import MainPage from "../../pages/mainPage/MainPage";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ModulesTowers from "../../pages/moduls/modulesTowers.tsx";
import Header from "../header/Header.tsx";
import NewTerritory from "../../pages/newTerritory/newTerritory.tsx";
import News from "../../pages/News/news.tsx";
import CurrentEvents from "../../pages/News/currentEvents/currentEvents.tsx";
import AdminPanel from "../../pages/AdminPanel/AdminPanel.tsx";

export default function PageWrapper({className}: {className?: string}) {
  return (
    <div className={`${className} min-h-screen`} >
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/moduls" element={<ModulesTowers/>} />
          <Route path="/newTerritory" element={<NewTerritory/>} />
          <Route path="/news">
              <Route index element={<News/>}/>
              <Route path=':id' element={<CurrentEvents/>} />
          </Route>
          <Route path="/rFtoqf2Ukl9vNhFe0UvsfYLqqdSKtvHA" element={<AdminPanel/>}/>
      </Routes>
      <Footer />
    </div>
  );
}
