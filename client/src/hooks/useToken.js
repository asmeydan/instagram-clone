import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setUserState } from '../store/reducers/user'

const useToken = () => {
    const [token, setToken] = useState('')
    const dispatch = useDispatch()

    useEffect(()=> {
      setToken(JSON.parse(localStorage.getItem('auth')))
      dispatch(setUserState(JSON.parse(localStorage.getItem('auth'))))
    }, [dispatch])

  return [token]
}

export default useToken