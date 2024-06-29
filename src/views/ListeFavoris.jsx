import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import FavorisService from '../services/FavorisService';
import { Link } from 'react-router-dom';
import './Lists.css'


const ListFavoris = () => {
  const [favoris, setFavoris] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAffiche, setIsAffiche] = useState(false);

  const Affiche = () => {
    FavorisService.GetAll()
      .then((res) => {
        console.log(res)
        setFavoris(res.data.data)
        setIsAffiche(true)
        setIsLoaded(true);
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    Affiche()
  }, [])

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isAffiche) {
    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header pb-0">
                <h6>Liste Des Favoris</h6>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">ID</th>
                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Annonce</th>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Client</th>
                      </tr>
                    </thead>
                    <tbody>
                    {favoris.map((item, index) => (
                        <tr key={index}>
                          <td>{item._id}</td>
                          <td>{item.annonce?.titre}</td>
                          <td>{item.user?.username}</td> 
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
}
  export default ListFavoris;
