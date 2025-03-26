import Navbar from "./Components/Navbar/Navbar.jsx";
import NewText from "./Components/TextBox/NewText.jsx";
import LanguageSelector from "./Components/TextBox/LanguageSelector.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './Components/TextBox/AboutPage.jsx';
import HomePage from './Components/TextBox/HomePage.jsx';
import FileUploader from './Components/TextBox/FileUploader.jsx';
import React,{useState} from "react";
import axios from "axios";


function App() {
  const [textareaValue, setTextareaValue] = useState("");
  const [result, setResult] = useState(null);
  const [input,setInput] = useState("");
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/process", {input,selectedValue});
      setResult(response.data.result);
    } catch (error) {
      console.error("Error communicating with the backend:", error);
    }
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };



  

  return (
    <>
         <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/texttranslater"
          element={
            <>
              <LanguageSelector
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                handleChange={handleChange}
              />
              <NewText
                setTextareaValue={setTextareaValue}
                textareaValue={textareaValue}
                result={result}
                input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
              />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/file" element={<FileUploader/>} />


      </Routes>
    </BrowserRouter>


    </>
  );
}

export default App
