import React from 'react';
import './AvatarModal.css';
import Avatar1 from '../Assets/avatar1.png';
import Avatar2 from '../Assets/avatar2.png';
import Avatar3 from '../Assets/avatar3.png';
import Avatar4 from '../Assets/avatar4.png';



const AvatarModal = ({ onClose, onSelect }) => {
    return (
      <div className="avatar-modal">
        <h2 className="modal-title">Choose Avatar</h2>
        <div className="avatar-options">
          <img
            src={Avatar1}
            alt="Avatar 1"
            className="avatar-option"
            onClick={() => onSelect(Avatar1)}
          />
          <img
            src={Avatar2}
            alt="Avatar 2"
            className="avatar-option"
            onClick={() => onSelect(Avatar2)}
          />
          <img
            src={Avatar3}
            alt="Avatar 3"
            className="avatar-option"
            onClick={() => onSelect(Avatar3)}
          />
          <img
            src={Avatar4}
            alt="Avatar 4"
            className="avatar-option"
            onClick={() => onSelect(Avatar4)}
          />

        </div>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    );
  };

  export default AvatarModal
