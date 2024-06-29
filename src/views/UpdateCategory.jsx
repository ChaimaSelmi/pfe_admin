import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import CategoryService from '../services/CategoryService';


const UpdateCategory = () => {
  const [data, setData]=useState({});
  const {id}=useParams()
  useEffect(()=>{
    CategoryService.GetById(id).then((res)=>{
      console.log(res)
      setData(res.data.data)
    })
  }, [])
  const OnChangeHandle=(e)=>{
    setData({
      ...data, [e.target.name]:e.target.value
    }) 
    console.log(data)
  }
  const navigate = useNavigate()
  const OnSubmitHandle=(e)=>{
    e.preventDefault()
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        CategoryService.Update(id, data).then((res)=>{
          console.log(res)
          navigate("/Home/list")
          }).catch((error)=>{
            console.log(error)
        })
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

  }
  return (
<form>
<div>
    <h4>Edite Categorie</h4>
</div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Nom</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" defaultValue={data.nom} name='nom' onChange={OnChangeHandle} />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">Description</label>
    <div className="col-sm-10">
      <textarea rows={5} cols={5} className="form-control" defaultValue={data.description} name='description' onChange={OnChangeHandle} />
    </div>
  </div>
  <div className="panel-footer">
    <button className="btn btn-primary pull-right" onClick={OnSubmitHandle}>Save</button>
</div>

</form>

  )
}

export default UpdateCategory
