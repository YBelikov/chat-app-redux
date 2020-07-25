import React from 'react';
import {Card, Image, Label, Icon} from 'semantic-ui-react';


class OtherUserMessageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLiked: false};
        this.handleLikeClick = this.handleLikeClick.bind(this);
        this.handleDislikeClick = this.handleDislikeClick.bind(this);
    }

    handleLikeClick() {
        this.setState({isLiked: true});
    }

    handleDislikeClick() {
        this.setState({isLiked: false});
    }

    render() {

        const likeIcon = this.state.isLiked ?  <Icon name='heart' color='red'/> :  <Icon name='heart'/>
        
        return(
                <Card color = "grey" style={{
                                            width: "100%"
                                                        }}>
                                                            
                    <Card.Content textAlign="left">
                        <Image floated='left' size='mini'src={this.props.message.avatar}/>
                        <Card.Header textAlign="left">{this.props.message.user}</Card.Header>
                        <Card.Meta>
                            {this.props.message.createdAt}
                        </Card.Meta>
                        <Card.Description>{this.props.message.text}</Card.Description>  
                        </Card.Content>
                        <Card.Content extra textAlign="right">
                            <Label basic size="small" 
                                    onClick={this.state.isLiked ? this.handleDislikeClick : this.handleLikeClick}>
                                <a>
                                    {likeIcon}                             
                                </a>
                            </Label>
                        </Card.Content>
                </Card>
        );
    }
}
export default OtherUserMessageCard;