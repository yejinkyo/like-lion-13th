import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "./pages/Main"; 
import Read from "./pages/Read"; 
import Write from "./pages/Write"; 
import data from "./data.json"; 

function App() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main dataList={dataList} />} />
        <Route path="/read/:postId" element={<Read dataList={dataList} />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
