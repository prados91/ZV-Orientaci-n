import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Main from "./components/Main/Main";
import InputFormContainer from "./components/InputFormContainer/InputFormContainer";
import NotFound from './components/NotFound/NotFound'
function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path="/form" element={<InputFormContainer />} />
                <Route exact path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
