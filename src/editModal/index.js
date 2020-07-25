import React from 'react';
import {Modal, Container, Button, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {hideEditModal} from './actions';
import {updateMessageText} from './actions';
import {editMessage} from '../chat/actions';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.changeData = this.changeData.bind(this);
    }

    onEdit() {
        this.props.editMessage(this.props.modalInfo.message.id, this.props.modalInfo.message);
        this.props.hideEditModal();
    }

    changeData(e) {
        this.props.updateMessageText({...this.props.modalInfo.message, text : e.target.value});   
        
    }

    onCancel() {
        this.props.hideEditModal();
    }

    render() {
               return(
                        <div className='edit-modal'>
                            <Modal size='' open={this.props.modalInfo.isShown}>
                                <Modal.Header>Edit Your Message</Modal.Header>
                                <Modal.Content>
                                    <Container text
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "0.92857143em 1.14285714em"}}>
                                        <TextArea
                                                rows={8}
                                                    value={this.props.modalInfo.message.text}
                                                    fluid 
                                                    placeholder="Write your message here"
                                                        style={{
                                                            flexGrow: 1,
                                                            marginRight: "0.5em"}} onChange={this.changeData}>
                                        </TextArea>
                                    </Container>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button negative onClick={this.onCancel}>Cancel</Button>
                                    <Button onClick={this.onEdit}
                                            positive
                                            icon='pencil'
                                            labelPosition='right'
                                            content='Edit'
                                    />
                                </Modal.Actions>
                            </Modal>
                    </div>
               );
    }
}

const mapStateToProps = (state) => {
    return {
        modalInfo : state.editModal
    };
}

const mapDispatchToProps = {
    hideEditModal,
    updateMessageText,
    editMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);