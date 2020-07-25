import React from 'react';
import {Card, Label, Icon} from 'semantic-ui-react';
import {showDeleteModal} from '../deleteModal/action';
import {showEditModal} from '../editModal/actions';

import {connect} from 'react-redux';

class OwnMessageCard extends React.Component {
    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onDelete() {
        this.props.showDeleteModal(this.props.message.id);
    }

    onEdit() {
        this.props.showEditModal(this.props.message);
    }

    render() {
        return(
               <Card color = "grey" style={{
                                            width: "100%"
                                                        }}>
                                                            
                    <Card.Content textAlign="right">
                        <Card.Header textAlign="right">{this.props.message.user}</Card.Header>
                        <Card.Meta>
                            {this.props.message.createdAt}
                        </Card.Meta>
                        <Card.Description textAlign = 'left'>{this.props.message.text}</Card.Description>  
                        </Card.Content>
                        <Card.Content extra textAlign="right">
                            <Label basic size='small' onClick={this.onDelete}>
                                <a>
                                    <Icon name='delete'/>
                                </a>
                            </Label>
                            <Label basic size='small' onClick={this.onEdit}>
                                <a>
                                    <Icon name='edit'/>
                                </a>
                            </Label>
                        </Card.Content>
                </Card>
        );
    }
}

const mapDispatchToProps = {
    showDeleteModal,
    showEditModal
}

export default connect(null, mapDispatchToProps)(OwnMessageCard);