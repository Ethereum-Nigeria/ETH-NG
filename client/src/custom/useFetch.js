import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../contexts/auth-context";


const useFetch = url => {
    const history = useHistory()
    const { enableAuth } = useContext(AuthContext)

    const initialFetchState = {
        isLoading: true, 
        fetchError: ''
     }
    const [ fetchResult, setFetchResult ] = useState([])
    const [ resultState, setResultState ] = useState(initialFetchState)
    useEffect(() => {
        const source = axios.CancelToken.source()
        const fetchData = async () => {
            try {
                const config = {
                    cancelToken: source.token
                }
                const result = await axios.get(url, config)
                console.log(result)
                const { data } = result
                setFetchResult(data)
               
                setResultState({
                    isLoading: false,
                    fetchError: ''
                })

                enableAuth({
                    isAuthenticated: true,
                    name: data.name,
                    email: data.name,
                    createdAt: data.createdAt
                })

                history.push('/user/dashboard')

                
                
            } catch(err) {
                setResultState({
                    isLoading: false,
                    fetchError: err.response.data.msg
                })
                enableAuth({
                    isAuthenticated: false,
                    name: '',
                    email: '',
                    createdAt: ''
                })
                history.push('/')
            }
        }
    
        fetchData()

        return () => source.cancel()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [ fetchResult, resultState ]
}

export  { useFetch } 