import React from 'react';
import {Menu} from 'semantic-ui-react';


class Header extends React.Component {
    render() {
        return (
            <Menu inverted
                color = "blue"
                borderless
                    style={{
                    height : "10vh",
                    flexShrink: 0, 
                    borderRadius: 0, 
                    margin: 0}}>
                <Menu.Item>
                    Chatter
                </Menu.Item>  
                <Menu.Item>
                    Users in chat: {this.props.numberOfUsers + 1}
                </Menu.Item>  
                <Menu.Item>
                    Messages: {this.props.numberOfMessages}
                </Menu.Item>
                <Menu.Item position="right">
                    Last message at: {this.props.lastMessageDate}
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;