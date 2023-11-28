import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Add = () => {
  const [users, setUser] = useState({
    produtoNome: "",
    produtoDescricao: "",
    produtoPreco: "",
  });
 
  const navigate = useNavigate();
 
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
 
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/produtos", users);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className="container">
    <h2 className='w-100 d-flex justify-content-center p-3'>Adicionar Produto</h2>
        <div className='row'>
            <div className='col-md-12'>
                <h3>Adicionar Produto</h3>
                <form>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Nome:</label>
                        <input type="text" className="form-control" id="produtoNome" placeholder="Digite o nome" name="produtoNome" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Descrição:</label>
                        <input type="text" className="form-control" id="produtoDescricao" placeholder="Digite a descrição" name="produtoDescricao" onChange={handleChange} required/>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label">Preço:</label>
                        <input type="number" className="form-control" id="produtoPreco" placeholder="Digite o preço" name="produtoPreco" onChange={handleChange} required/>
                    </div>
                      
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Adicionar</button>
                </form>
                <div className='container d-flex justify-content-center'>
                  <Link to="/">Voltar</Link>
            </div>
            </div>
        </div>
</div>
  );
};
 
export default Add;