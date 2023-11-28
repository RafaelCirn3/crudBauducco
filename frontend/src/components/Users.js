import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Users = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/produtos/");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);
 
  console.log(users);
 
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/produtos/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>CRUD Bauducco</h2>
        <div className='row'>
            <div className='col-md-12'>
            <p><Link to="/add" className="btn btn-success">Adicionar produto</Link></p>
            <table className="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{user.produtoId}</td>
                                <td>{user.produtoNome} </td>
                                <td>{user.produtoDescricao} </td>
                                <td>{user.produtoPreco} </td>
                                <td>
                                    <Link to={`/update/${user.produtoId}`} className="btn btn-info mx-2">Editar</Link>
                                    <button onClick={()=>handleDelete(user.produtoId)} className="btn btn-danger">Deletar</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        </div>
    </div>
  );
};
 
export default Users;