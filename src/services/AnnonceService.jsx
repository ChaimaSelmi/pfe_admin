import http from "./axioscontext";

const Create=(data)=>{
    return http.post("/annonce",data)
}
const GetAll=()=>{
    return http.get("/annonce")
}
const Update=(id,data)=>{
    return http.put(`/annonce/${id}`,data)
}
const GetById=(id)=>{
    return http.get(`/annonce/${id}`)
}
const DeleteOne=(id)=>{
    return http.delete(`/annonce/${id}`)
}
const confirmAnnonce=(id)=>{
    return http.put(`/annonce/${id}/confirm`)
}

export default{
    Create, GetAll, Update, GetById, DeleteOne, confirmAnnonce, 
}