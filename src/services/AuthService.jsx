import http from "./axioscontext";

const signup=(data)=>{
    return http.post("/auth/signup",data)
}
const signin=(data)=>{
    return http.post("/auth/signin",data)
}
const logout=()=>{
    return http.get("/auth/logout")
}



export default{
    signup, signin,
}