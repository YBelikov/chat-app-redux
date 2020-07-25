import React from 'react';
import MessageList from '../messageList/index';
import TextBox from '../textBox/index';
import {addMessage} from '../chat/actions';
import { connect } from 'react-redux';
import {toISOStringLocal} from './service';
import {sendMessage} from './actions';


class UserInterface extends React.Component {
    constructor(props) {
        super(props);
        this.createMessage = this.createMessage.bind(this);
    }

    createMessage(text) {
        this.props.addMessage({
                                ...this.props.currentUser,
                                text,
                                createdAt : toISOStringLocal(new Date()),
                                editedAt : ''
                            });
    }

    render() {
        return(
            <div className="user-interface">
                <MessageList messageList={this.props.messages} currentUserId={this.props.currentUser.userId}/>
                <TextBox createNewMessage={this.createMessage.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser : state.userInterface
    };
}

const mapDispatchToProps = {
        sendMessage,
        addMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInterface);