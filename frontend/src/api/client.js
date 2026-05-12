

const BASE_URL =  "http://localhost:3000"

const apiRequest = async(endpoint , method , body = null)=>{
    const token = localStorage.getItem('token')
    const headers = {
        'Content-Type' : 'application/json'
    }
    if(token){
        headers['Authorization'] = `Bearer ${token}`;
    }
    const config = {
        method : method,
        headers : headers,
    }
    
    if(body){
        config.body = JSON.stringify(body)
    }

    const response = await fetch(`${BASE_URL}${endpoint}`,config);

    if(!response.ok){
        const errorData =  await response.json()
        throw new Error(errorData.message || "Something went wrong" )
        
    }
    return response.json();
}

export const post = (endpoint,body) => apiRequest(endpoint,'POST' , body);
export const get = (endpoint) => apiRequest(endpoint,'GET');
export const del = (endpoint) => apiRequest(endpoint,'DELETE');
export const patch = (endpoint, body) => apiRequest(endpoint, 'PATCH', body);