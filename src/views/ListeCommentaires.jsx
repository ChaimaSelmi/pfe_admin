import React, { useEffect, useState } from 'react';
import CommentaireService from '../services/CommentaireService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './Lists.css';

const ListCommentaires = () => {
  const [commentaires, setCommentaires] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [confirmedCommentaires, setConfirmedCommentaires] = useState([]);

  useEffect(() => {
    const fetchCommentaires = async () => {
      try {
        const res = await CommentaireService.GetAll();
        setCommentaires(res.data.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCommentaires();
    const confirmedCommentairesFromLocalStorage = JSON.parse(localStorage.getItem('confirmedCommentaires')) || [];
    setConfirmedCommentaires(confirmedCommentairesFromLocalStorage);
  }, []);

  const onDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        CommentaireService.DeleteOne(id)
          .then(() => {
            setCommentaires(commentaires.filter((commentaire) => commentaire._id !== id));
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          })
          .catch((error) => {
            console.log(error);
            Swal.fire('Error', 'An error occurred while deleting the comment.', 'error');
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="col-md-7 mt-4">
        <div className="card">
          <div className="card-header pb-0 px-3">
            <h6 className="mb-0">Liste Des Commentaires</h6>
          </div>
          <div className="card-body pt-4 p-3">
            <ul className="list-group">
              {commentaires.map((commentaire) => (
                <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg" key={commentaire._id}>
                  <div className="d-flex flex-column">
                    <h6 className="mb-3 text-sm">{commentaire._id}</h6>
                    <span className="mb-2 text-xs">Contenu: <span className="text-dark font-weight-bold ms-sm-2">{commentaire.contenu}</span></span>
                    <span className="mb-2 text-xs">Auteur: <span className="text-dark ms-sm-2 font-weight-bold">{commentaire.auteur.nom}</span></span>
                  </div>
                  <div className="ms-auto text-end">
                    <button className="btn btn-link text-danger text-gradient px-3 mb-0" onClick={() => onDelete(commentaire._id)}>
                      <i className="far fa-trash-alt me-2" />Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCommentaires;
