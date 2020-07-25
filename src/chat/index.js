import React from 'react';

import { connect } from 'react-redux';
import Header from '../header/index';
import UserInterface from '../userInterface/index';
import DeleteModal from '../deleteModal/index';
import EditModal from '../editModal/index';
import * as actions from './actions';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="chat">
                    <DeleteModal/>
                    <EditModal/>
                    <Header numberOfMessages={this.props.messages.length} 
                            numberOfUsers={this.props.users}
                            lastMessageDate={this.props.messages[this.props.messages.length - 1].createdAt}/>
                   <UserInterface messages = {this.props.messages}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages : state.chat,
        users : [...new Set(state.chat.map(message => message.userId))].length
    };
}


export default connect(mapStateToProps)(Chat);



