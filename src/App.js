import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
 import './App.css';
import Homepage from "./pages/Home";
import EditPage from "./pages/Edit";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
     <h1 style={{margin:"20px" , textAlign:"center"}}>MEME GENERATOR</h1>

     <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/edit" element={<EditPage/>} />
     </Routes>
<Footer />
    </div>
  );
}

export default App;
