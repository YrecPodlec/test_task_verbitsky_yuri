import Navbar from "./Components/NavBar/NavBar.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Likes from "./pages/Likes/Likes.tsx";
import Home from "./pages/Home/Home.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.tsx";
function App() {
  return (
    <>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/likes" element={<Likes/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
  )
}

export default App
