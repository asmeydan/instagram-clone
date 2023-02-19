import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userFetch } from "../axios";
import { setUserState, logoutState } from "../store/reducers/user";

const useToken = () => {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth")));

    userFetch(JSON.parse(localStorage.getItem("auth"))?.token)
      .then((res) => {
        dispatch(setUserState(res.data));
      })
      .catch(() => {
        dispatch(logoutState());
        setToken(null)
      });
  }, [dispatch]);

  return [token];
};

export default useToken;
