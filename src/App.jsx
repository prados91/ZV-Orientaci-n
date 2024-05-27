import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'
import Main from "./components/Main/Main";
import QuestionContainer from "./components/QuestionContainer/QuestionContainer";
import NotFound from './components/NotFound/NotFound'
import Contact from "./components/Contact/Contact";
function App() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route exact path="/test" element={<QuestionContainer />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
