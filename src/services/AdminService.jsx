import http from "./axioscontext";

const Create=(data)=>{
    return http.post("/administrateur",data)
}
const GetAll=()=>{
    return http.get("/administrateur")
}
const Update=(id,data)=>{
    return http.put(`/administrateur/${id}`,data)
}
const GetById=(id)=>{
    return http.get(`/administrateur/${id}`)
}
const DeleteOne=(id)=>{
    return http.delete(`/administrateur/${id}`)
}

export default{
    Create, GetAll, Update, GetById, DeleteOne,
}