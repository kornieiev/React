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

  openModal = e => {
    this.setState({ isModalOpen: true });
  };

  closeModal = e => {
    e.stopPropagation();
    this.setState(prevState => {
      return { isModalOpen: false };
    });
  };

  handleDelete = id => {
    this.props.onDelete(id);
  };

  render() {
    const { isModalOpen } = this.state;

    const {
      quiz: { id, topic, level, time, questions },
    } = this.props;

    return (
      <div
        onClick={e => {
          console.log('Клик по диву');
          this.openModal();
        }}
      >
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
            this.handleDelete(id);
            console.log('Клик по кнопке c id=', id);
          }}
        >
          Delete
        </button>
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
