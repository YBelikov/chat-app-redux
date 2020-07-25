import React from 'react';
import {List, Container} from 'semantic-ui-react';
import OwnMessageCard from '../ownMessageCard/index';
import OtherUserMessageCard from '../otherUserMessageCard/index';
import {showDeleteModal} from '../deleteModal/action';
import {connect} from 'react-redux'

const listStyle = { 
    flexGrow: 1,
    overflowX: "hidden",
    overflowY: "auto",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    backgroundColor : "gray"
 }

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id) {
      this.props.showDeleteModal(id);
    }
    render() {
        const messages = this.props.messageList.map(message => {
                            const content = message.userId == this.props.currentUserId ? <OwnMessageCard message={message} deleteMessage={this.onDelete}/>
                                                                          : <OtherUserMessageCard message={message}/>
                            return(
                                  <div className='message'>
                                    {content}
                                  </div>
                                );
                        });

        return(
            <div className="message-list" style={listStyle}>
            <Container text>
              <List > 
                {messages}
              </List>
            </Container>
          </div>
        );
    }

}

const mapDispatchToProps = {
    showDeleteModal
} 

export default connect(null, mapDispatchToProps)(MessageList);