import http from "./axioscontext";

const Create=(data)=>{
    return http.post("/client",data)
}
const GetAll=()=>{
    return http.get("/client")
}
const Update=(id,data)=>{
    return http.put(`/client/${id}`,data)
}
const GetById=(id)=>{
    return http.get(`/client/${id}`)
}
const DeleteOne=(id)=>{
    return http.delete(`/client/${id}`)
}

export default{
    Create, GetAll, Update, GetById, DeleteOne,
}