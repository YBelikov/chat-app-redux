import React from 'react';
import {Modal, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {hideModal} from './action';
import {deleteMessage} from '../chat/actions';

class DeleteModal extends React.Component {

    constructor(props) {
        super(props);
        this.onClose = this.onClose.bind(this);
        this.onYes = this.onYes.bind(this);
    }

    onYes() {
        this.props.deleteMessage(this.props.modalInfo.messageId);
        this.props.hideModal();
    } 
    onClose() {
        this.props.hideModal();
    }

    render() {
            return( 
                <div className='delete-modal'>
                    <Modal size='small' open={this.props.modalInfo.isShown} onClose={this.onClose} >
                        <Modal.Header>Delete Your Message</Modal.Header>
                        <Modal.Content>
                            <p>Are you sure you want to delete your message</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={this.onClose}>No</Button>
                            <Button onClick={this.onYes}
                                    positive
                                    icon='checkmark'
                                    labelPosition='right'
                                    content='Yes'
                            />
                        </Modal.Actions>
                    </Modal>
                </div>
            );    
    }
}

const mapStateToProps = (state) => {
    return {
        modalInfo : state.deleteModal
    };
}
const mapDispatchToProps = {
    hideModal,
    deleteMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);