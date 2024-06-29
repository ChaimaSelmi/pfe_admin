import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import VendeurService from '../services/VendeurService';
import { Link } from 'react-router-dom';
import './Lists.css'


const ListeVendeur = () => {
const [vendeur, setVendeur]=useState({});
const [isLoaded, setIsLoaded] = useState(false);
const [confirmedVendeurs, setConfirmedVendeurs] = useState([]);
const [isAffiche, setIsAffiche]=useState(false);
const Affiche= ()=>{
    VendeurService.GetAll()
    .then((res)=>{
        console.log(res)
        setVendeur(res.data.data)
        setIsAffiche(true)
        setIsLoaded(true);
    }).catch((error)=>{
        console.log(error)
    })
}
useEffect(()=>{
    Affiche()
    const confirmedVendeursFromLocalStorage = JSON.parse(localStorage.getItem('confirmedVendeurs')) || [];
    setConfirmedVendeurs(confirmedVendeursFromLocalStorage);
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
            VendeurService.DeleteOne(id).then((res) => {
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
  const confirmHandle = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action will confirm the Vendeur.",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm it!',
    }).then(async (result) => {
      if (confirmedVendeurs.includes(id)) {
        Swal.fire('Already confirmed!', 'You have already confirmed this Vendeur.', 'warning');
        return;
      }
      try {
        await VendeurService.confirmVendeur(id);
        setConfirmedVendeurs([...confirmedVendeurs, id]);
        Affiche();
        Swal.fire('Confirmed!', 'The Vendeur has been confirmed.', 'success');
        localStorage.setItem('confirmedVendeurs', JSON.stringify([...confirmedVendeurs, id]));
        Swal.fire('Confirmed!', 'The Vendeur has been confirmed.', 'success');
      } catch (error) {
        console.error('Error confirming Vendeur:', error);
        Swal.fire('Error', 'An error occurred while confirming the Vendeur', 'error');
      }
    });
  };
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
if (isAffiche){
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Liste Des Vendeurs</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Username</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Domaine</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Annonces Publiées</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                        <th className="text-secondary opacity-7">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {vendeur.map((item)=>{
                     return(                        
                     <tr key={item._id}>
                          <td>{item._id}</td>
                          <td>{item.username}</td>
                          <td>{item.domaine}</td>
                          <td><span>{item.annoncesPub.map((i)=>{
                           return(
                            <tr>{i.titre}</tr>
                           )
                          })}</span></td>
                          <td>{(item.confirmed).toString()}</td>
                          <td>
                            <Link className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" onClick={(e)=>confirmHandle(item._id)} disabled={confirmedVendeurs.includes(item._id)}>
                              Confirm
                            </Link>
                            <span className="mx-1">|</span> 
                            <Link className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" onClick={(e)=>OnDelete(item._id)}>
                              Delete
                            </Link>
                          </td>
                        </tr>
                    )})}
                     </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null; 
  }
};

export default ListeVendeur;
