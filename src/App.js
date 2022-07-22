import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProject from "./pages/Project/AddProject";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
