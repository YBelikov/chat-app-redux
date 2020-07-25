import React from 'react';
import {TextArea} from 'semantic-ui-react';
import {Container, Button, Menu} from 'semantic-ui-react';
import {addMessage} from '../chat/actions';

class TextBox extends React.Component {

    constructor(props) {
        super(props);
        this.changeData = this.changeData.bind(this);
        this.onSend = this.onSend.bind(this);
        this.setState({messageText: ''});
        
    }


    changeData(e) {
        this.setState({messageText: e.target.value});
        
    }

    onSend() {
        console.log(this.state.messageText);
        this.props.createNewMessage(this.state.messageText);
      
    }
    
     render(){
        return(
            <Menu inverted
					color = "blue"
					borderless
					style={{
						flexShrink: 0, 
						borderRadius: 0, 
                        margin: 0,
					}}> 
            <Container text
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "0.92857143em 1.14285714em"}}>
                <TextArea
                        rows={2}
                            fluid 
                            placeholder="Write your message here"
                                style={{
                                    flexGrow: 1,
                                    marginRight: "0.5em"}} onChange={this.changeData}>
                </TextArea>
                <Button onClick={this.onSend}>
                    Send
                </Button>
          </Container>
          </Menu>
        );
    }
}

const mapDispatchToProps = {
    addMessage
}

export default TextBox;