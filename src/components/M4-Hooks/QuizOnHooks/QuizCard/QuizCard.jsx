import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '5px solid grey',
    borderRadius: '10px',
  },
};

Modal.setAppElement('#root');

export default function QuizCard({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = e => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div onClick={() => setIsModalOpen(true)}>
      <p>{topic}</p>
      <div>
        <p>
          <b>Level:</b>
          {level}
        </p>
        <p>
          <b>Time:</b>
          {time}
        </p>
        <p>
          <b>Questions:</b>
          {questions}
        </p>
      </div>
      <button
        onClick={e => {
          e.stopPropagation();
          onDelete(id);
        }}
      >
        Delete
      </button>

      {/* замість рендеру за умовою краще використати React Modal: */}
      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>{topic}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
