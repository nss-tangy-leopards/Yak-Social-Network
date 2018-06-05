import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#92959b';
    this.subtitle.style.display = "block"
    this.subtitle.style.width = "50%"
    this.closeButton.style.margin = "20px"
    this.submit.style.margin = "10px"


  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Register</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Register</h2>
          <button ref={closeButton => this.closeButton = closeButton} onClick={this.closeModal}>close</button>

          <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label>
            Location:
            <input type="text" value={this.state.location} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
              Password:
              <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input ref={submit => this.submit = submit} type="submit" value="Submit" onClick={this.handleSubmit} />
          <label>
            remember me
          <input type="checkbox" value="Remember Me?"  />
          </label>
        </form>
        </Modal>
      </div>
    );
  }
}

export default Register