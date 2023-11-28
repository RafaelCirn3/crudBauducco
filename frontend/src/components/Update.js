import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
 
const Update = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        produtoNome: "",
        produtoDescricao: "",
        produtoPreco: "",
      });
 
    const location = useLocation();
    const navigate = useNavigate();
 
    const userId = location.pathname.split("/")[2];
 
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
 
    useEffect(() => {
        axios.get("http://localhost:3001/api/produtos/"+id)
        .then(res => {
            console.log(res)
            setUser(res.data[0]);
        })
        .catch(err => console.log(err))
    }, []);
 
    const handleClick = async (e) => {
        e.preventDefault();
 
        try {
            await axios.put(`http://localhost:3001/api/produtos/${userId}`, user);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
 
  return (
    <div className="container">
    <h1>Atualizar produto</h1>
        <form>
                <div className="mb-3 mt-3">
                    <label className="form-label"> ID:</label>
                    <input type="text" className="form-control" id="produtoId" placeholder="Enter Your Full Name" name="produtoId" value={id} disabled />
                </div>
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
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Atualizar</button>
        </form>
        <div className='container d-flex justify-content-center'>
            <Link to="/">Voltar</Link>
        </div>
    </div>
  );
};
 
export default Update;