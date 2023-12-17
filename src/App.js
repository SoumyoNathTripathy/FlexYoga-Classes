import AdvancedForm from "./components/AdvancedForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./components/Success";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdvancedForm />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
