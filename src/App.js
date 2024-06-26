import "./App.css";
import Add from "./Components/add";
import Delete from "./Components/delete";
import Search from "./Components/search";
import View from "./Components/view";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/search" element={<Search />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
