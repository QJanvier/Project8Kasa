import '../src/assets/style/index.scss';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Error404 from './components/Error404'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './routes/About';



function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element= { <Home /> } />
          <Route path="/about" element= { <About /> } />
          <Route path="/*" element= { <Error404 /> } />
        </Routes>
      <Footer />
    </>
  );
}

export default App
