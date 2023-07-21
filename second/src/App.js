import { BrowserRouter  as Router, Routes,Route  } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";

const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/Videos" element={<Videos />} />   
            <Route path="/Upload" element={<Upload />} />   

        </Routes>
        <Footer/>
    </Router>
  )
}

export default App