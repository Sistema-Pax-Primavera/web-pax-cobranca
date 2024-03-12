import React, { useState } from 'react';
import './modal-clientes.css';

const ModalClientes = ({ cliente, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    onClose(); // Chamando a função de fechar modal fornecida pelo componente pai, se houver
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Detalhes do Cliente</h2>
            <p>Nome: {cliente.nome}</p>
            <p>Telefone: {cliente.telefone}</p>
            <p>Indicação: {cliente.indicacao}</p>
            <p>Resultado: {cliente.resultado}</p>
            <p>Data: {cliente.data}</p>
            {/* Adicione outras informações conforme necessário */}
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalClientes;
