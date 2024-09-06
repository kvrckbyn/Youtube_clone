import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import Undefined from "./pages/Undefined";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail";
import Results from "./pages/VideoDetail/Results";

function App() {
  return  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/watch" element={<VideoDetail/>}/>
      <Route path="/results" element={<Results/>}/>
      <Route path="*" element={<Undefined/>}/>
    </Routes>

    </BrowserRouter>
}

export default App;