import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import useToken from "./hooks/useToken";
import NewPost from "./components/NewPost";
import { useSelector } from "react-redux";
import Explore from "./pages/Explore";

function App() {
  const [token] = useToken();
  const { open: isOpenModal } = useSelector((state) => state.modal);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={token ? <Navigate to={"/"} /> : <Auth />}
        />
          <Route
            path="/"
            element={!token ? <Navigate to={"/auth"} /> : <Home />}
          />
        <Route
          path="/profile"
          element={!token ? <Navigate to={"/auth"} /> : <Profile />}
        />
        <Route
          path="/explore"
          element={!token ? <Navigate to={"/auth"} /> : <Explore />}
        />
      </Routes>
      {isOpenModal && <NewPost />}
    </BrowserRouter>
  );
}

export default App;
