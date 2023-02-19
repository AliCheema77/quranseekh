import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Courses from './components/courses/Courses';
import {Moto} from './components/body/Moto';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/home"/>} />
          <Route path="/home" element={[<Header />, <Body />, <Moto />, <Courses />, <About />, <Footer />]} />
          <Route path="/about" element={[<Header />, <About />, <Footer />]} />
          <Route path="/courses" element={[<Header />, <Courses />, <Footer />]} />
          <Route path="*" element={<h1>Page Note Exists</h1>} />
          <Route path="/contact" element={[<Header />, <Footer />]} />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
