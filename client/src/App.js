import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import useToken from "./hooks/useToken";
import { useState } from "react";
import NewPost from "./components/NewPost";

function App() {
  const [token] = useToken()
  const [newPost, setNewPost] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={token ?(<Navigate to={"/"} />) :(<Auth />)} />
        <Route
          path="/"
          element={!token ?(<Navigate to={"/auth"} />) :(<Home setNewPost={ setNewPost } />)}
        />
      </Routes>
      {newPost && <NewPost setNewPost={setNewPost} />}
    </BrowserRouter>
  );
}

export default App;
