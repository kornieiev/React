import React, { Component } from 'react';
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

export default class QuizCard extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = e => {
    e.stopPropagation();
    this.setState(prevState => {
      return { isModalOpen: false };
    });
  };

  render() {
    const { isModalOpen } = this.state;

    const {
      quiz: { id, topic, level, time, questions },
      onDelete,
    } = this.props;

    return (
      <div onClick={this.openModal}>
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
        <button onClick={() => onDelete(id)}>Delete</button>
        {/* {isModalOpen && <h1>Modal!!! {topic}</h1>} */}

        {/* замість рендеру за умовою краще використати React Modal: */}
        <Modal
          isOpen={isModalOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <p>{topic}</p>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}
