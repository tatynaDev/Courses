import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPageAdilet from "./components/hero/MainPageAdilet";
import AboutSchoolAdemir from "./components/hero/AboutSchoolAdemir";
import AboutUsAzim from "./components/hero/AboutUsAzim";



function App() {
  return (
    <div className="App">
        <Routes>
           <Route path={'/MainPage'} element={<MainPageAdilet/>}/>
           <Route path={'/AboutSchool'} element={<AboutSchoolAdemir/>}/>
           <Route path={'/AboutUs'} element={<AboutUsAzim/>}/>
        </Routes>
    </div>
  );
}

export default App;
