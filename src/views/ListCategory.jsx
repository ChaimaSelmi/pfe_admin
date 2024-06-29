import React, { useEffect, useState } from 'react';
import CategoryService from '../services/CategoryService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Lists.css';

const ListCategory = () => {
  const [categorie, setCategorie] = useState([]);
  const [isAffiche, setIsAffiche] = useState(false);

  const Affiche = () => {
    CategoryService.GetAll()
      .then((res) => {
        console.log(res);
        setCategorie(res.data.data);
        setIsAffiche(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Affiche();
  }, []);

  const OnDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          CategoryService.DeleteOne(id).then(() => {
            Affiche();
          });
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  };

  if (isAffiche) {
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Table Des Categories</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nom</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Annonces</th>
                        <th className="text-secondary opacity-7">Actions</th> {/* Renommé pour plus de clarté */}
                      </tr>
                    </thead>
                    <tbody>
                      {categorie.map((item) => (
                        <tr key={item._id}>
                          <td>{item._id}</td>
                          <td>{item.nom}</td>
                          <td style={{ maxWidth: '200px' }}>{item.description}</td> {/* Ajustement de la largeur */}
                          <td>
                            <ul className="list-unstyled">
                              {item.annonces.map((annonce, index) => (
                                <li key={index}>{annonce.titre}</li>
                              ))}
                            </ul>
                          </td>
                          <td>
                            <Link to={`/Home/Update/${item._id}`} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                              Edit
                            </Link>
                            <span className="mx-1">|</span> {/* Barre de séparation */}
                            <Link onClick={(e) => OnDelete(item._id)} className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
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
  } else {
    return null;
  }
};

export default ListCategory;
