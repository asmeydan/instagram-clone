import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import useToken from "./hooks/useToken";
import NewPost from "./components/NewPost";
import { useSelector } from 'react-redux'

function App() {
  const [token] = useToken()
  const {open: isOpenModal} = useSelector((state)=> state.modal)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={token ?(<Navigate to={"/"} />) :(<Auth />)} />
        <Route
          path="/"
          element={!token ?(<Navigate to={"/auth"} />) :(<Home />)}
        />
      </Routes>
      {isOpenModal && <NewPost />}
    </BrowserRouter>
  );
}

export default App;
