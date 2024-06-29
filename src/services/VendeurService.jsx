import http from "./axioscontext";

const Create=(data)=>{
    return http.post("/vendeur",data)
}
const GetAll=()=>{
    return http.get("/vendeur")
}
const Update=(id,data)=>{
    return http.put(`/vendeur/${id}`,data)
}
const GetById=(id)=>{
    return http.get(`/vendeur/${id}`)
}
const DeleteOne=(id)=>{
    return http.delete(`/vendeur/${id}`)
}
const confirmVendeur=(id)=>{
    return http.put(`/vendeur/${id}/confirm`)
}

export default{
    Create, GetAll, Update, GetById, DeleteOne,confirmVendeur,
}