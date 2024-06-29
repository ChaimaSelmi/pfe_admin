import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ClientService from '../services/ClientService';
import './Lists.css';
import { Link } from 'react-router-dom';

const ListClient = () => {
  const [client, setClient] = useState([]);
  const [isAffiche, setIsAffiche] = useState(false);

  const Affiche = () => {
    ClientService.GetAll()
      .then((res) => {
        console.log(res);
        setClient(res.data.data);
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
          ClientService.DeleteOne(id).then((res) => {
            Affiche();
          });
          swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
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
                <h6>Liste Des Clients</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nom</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Username</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Adresse</th>
                        <th className="text-secondary opacity-7">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {client.map((item) => (
                        <tr key={item._id}>
                          <td>{item._id}</td>
                          <td>{item.nom}</td>
                          <td>{item.username}</td>
                          <td>{item.email}</td>
                          <td>{item?.adresse}</td>
                          <td>
                            <Link className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" onClick={(e) => OnDelete(item._id)}>
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

export default ListClient;
