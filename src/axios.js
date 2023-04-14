import axios from "axios";

const makeRequest = axios.create({
    baseURL: 'http://188.0.131.132:3355/',
    withCredentials: true,
   
})

export const getUser = async (login) => {
    try {
        const res = await makeRequest.get('/users/'+login)
 
        return res
    } catch(err)
    {
        console.log(err)
        return(err)
    }
}

export const addResult = async (user_id, timer) => {
    try {
        const res = await makeRequest.post('/users/results/add', {user_id, timer})
 
        return res
    } catch(err)
    {
        console.log(err)
        return(err)
    }
}

export const getResultsByUserId = async (user_id) => {
    try {
        const res = await makeRequest.get('/users/results/'+user_id)
 
        return res
    } catch(err)
    {
        console.log(err)
        return(err)
    }
}

export const getResults = async () => {
    try {
        const res = await makeRequest.get('/users/results/')
 
        return res
    } catch(err)
    {
        console.log(err)
        return(err)
    }
}

