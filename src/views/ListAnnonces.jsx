import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AnnonceService from '../services/AnnonceService';
import './Lists.css'
import { Link } from 'react-router-dom';
const ListAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [confirmedAnnonces, setConfirmedAnnonces] = useState([]);

  useEffect(() => {
    fetchAnnonces();
    const confirmedAnnoncesFromLocalStorage = JSON.parse(localStorage.getItem('confirmedAnnonces')) || [];
    setConfirmedAnnonces(confirmedAnnoncesFromLocalStorage);
  }, []);

  const fetchAnnonces = () => {
    AnnonceService.GetAll()
      .then((res) => {
        setAnnonces(res.data.data);
        console.log("res.data.data", res.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        AnnonceService.DeleteOne(id)
          .then(() => {
            fetchAnnonces();
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          })
          .catch((error) => {
            console.error('Error deleting annonce:', error);
            Swal.fire('Error', 'An error occurred while deleting the annonce', 'error');
          });
      }
    });
  };

  const confirmHandle = async (id) => {
    if (confirmedAnnonces.includes(id)) {
      Swal.fire('Already confirmed!', 'You have already confirmed this annonce.', 'warning');
      return;
    }
  
    try {
      await AnnonceService.confirmAnnonce(id);
      const updatedConfirmedAnnonces = [...confirmedAnnonces, id]; // Mise à jour de la liste des annonces confirmées
      setConfirmedAnnonces(updatedConfirmedAnnonces); // Mettre à jour l'état local
      console.log("updatedConfirmedAnnonces", updatedConfirmedAnnonces)
      localStorage.setItem('confirmedAnnonces', JSON.stringify(updatedConfirmedAnnonces)); // Stocker la version mise à jour dans localStorage
      fetchAnnonces();
      Swal.fire('Confirmed!', 'The annonce has been confirmed.', 'success');
    } catch (error) {
      console.error('Error confirming annonce:', error);
      Swal.fire('Error', 'An error occurred while confirming the annonce', 'error');
    }
  };
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Liste Des Annonces</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Titre</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Categorie</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Vendeur</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                        <th className="text-secondary opacity-7">Actions</th> {/* Renommé pour plus de clarté */}
                      </tr>
                    </thead>
                    <tbody>
                    {annonces.map((annonce) => (
                        <tr key={annonce._id}>
                          <td>{annonce._id}</td>
                          <td>{annonce.titre}</td>
                          <td>{annonce.description}</td> {/* Ajustement de la largeur */}
                          <td>
                          {annonce.category?.nom}
                          </td>
                          <td>
                          {annonce.vendeur?.username}                          
                          </td>
                          <td>{String(annonce.confirmed)}</td>
                          <td>
                    <Link
                      onClick={() => confirmHandle(annonce._id)}
                      disabled={confirmedAnnonces.includes(annonce._id)}
                      className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user"
                    >
                      Confirm
                    </Link>
                    <span className="mx-1">|</span>
                    <Link
                      onClick={() => handleDelete(annonce._id)}
                      className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user"
                    >
                      Delete
                    </Link>
                  </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default ListAnnonces;
