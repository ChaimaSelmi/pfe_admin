import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import AdminService from '../services/AdminService';
import './Lists.css'

const ListAdmin = () => {
const [admin, setAdmin]=useState({});
const [isAffiche, setIsAffiche]=useState(false);
const Affiche= ()=>{
    AdminService.GetAll()
    .then((res)=>{
        console.log(res)
        setAdmin(res.data.data)
        setIsAffiche(true)
    }).catch((error)=>{
        console.log(error)
    })
}
useEffect(()=>{
    Affiche()
}, [])
const OnDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          AdminService.DeleteOne(id).then((res) => {
            Affiche();
          });
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  
if (isAffiche){
  return (
<div className="card">
  <div className="card-header">
    <h5>Liste Des Administrateurs</h5>
    <div className="card-header-right">    
    <ul className="list-unstyled card-option">        
    <li><i className="icofont icofont-simple-left " /></li>        
    <li><i className="icofont icofont-maximize full-card" /></li>        
    <li><i className="icofont icofont-minus minimize-card" /></li>        
    <li><i className="icofont icofont-refresh reload-card" /></li>        
    <li><i className="icofont icofont-error close-card" /></li>  
    </ul></div>
  </div>
  <div className="card-block table-border-style">
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Username</th>
            <th>Privilege</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {admin.map((item)=>{
        return(
          <tr>
            <th scope="row">{item._id}</th>
            <td>{item.nom}</td>
            <td>{item.username}</td>
            <td>{item.privileges}</td>
            <td>
            <button className="btn btn-danger btn-rounded btn-sm" onClick={(e)=>OnDelete(item._id)}>Delete</button>
            </td>
          </tr>
        )})}
        </tbody>
      </table>
    </div>
  </div>
</div>

  )
}}

export default ListAdmin
