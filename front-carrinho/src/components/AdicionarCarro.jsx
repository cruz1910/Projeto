import React, { useState } from 'react';

const AdicionarCarro = ({ onAddCar, onClose }) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    nome: '',
    marca: '',
    ano: '',
    categoria: '',
    preco: '',
    foto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        foto: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nome && formData.marca && formData.ano && formData.categoria && formData.preco) {
      const novoCarro = {
        ...formData,
        preco: parseFloat(formData.preco),
        foto: formData.foto ? URL.createObjectURL(formData.foto) : ''
      };
      onAddCar(novoCarro);
      setFormData({
        id: Date.now(),
        nome: '',
        marca: '',
        ano: '',
        categoria: '',
        preco: '',
        foto: null
      });
      onClose();
    }
  };

  return (
    <div className="formulario-adicionar">
      <h2>Adicionar Novo Carro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Carro</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="campo-formulario"
            placeholder="Ex: Ford Mustang"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="marca">Marca</label>
          <input
            type="text"
            id="marca"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className="campo-formulario"
            placeholder="Ex: Ford"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ano">Ano</label>
          <input
            type="number"
            id="ano"
            name="ano"
            value={formData.ano}
            onChange={handleChange}
            className="campo-formulario"
            placeholder="Ex: 2023"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="campo-formulario"
            placeholder="Ex: Sedan"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            className="campo-formulario"
            placeholder="Ex: 50000"
            required
          />
        </div>
        <div className="form-group upload-area">
          <label htmlFor="foto">Foto do Carro</label>
          <div className="upload-area">
            <p>Arraste e solte a imagem aqui ou clique para selecionar</p>
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleFileChange}
              className="campo-formulario"
            />
          </div>
          {formData.foto && (
            <img 
              src={URL.createObjectURL(formData.foto)} 
              alt="Preview" 
              className="preview-image"
            />
          )}
        </div>
        <div className="form-buttons">
          <button 
            type="button" 
            className="botao-alerta"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="botao-formulario"
          >
            Adicionar Carro
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdicionarCarro;
