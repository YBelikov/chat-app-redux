
import {callApi} from '../helpers/apiHelper';
import { ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from './actionType';

const initialState = [{
    "id": "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "I don’t *** understand. It's the Panama accounts",
    "createdAt": "2020-07-16T19:48:12.936Z",
    "editedAt": ""
}, {
    "id": "80e00b40-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    "user": "Wendy",
    "text": "Tells exactly what happened.",
    "createdAt": "2020-07-16T19:48:42.481Z",
    "editedAt": "2020-07-16T19:48:47.481Z"
}, {
    "id": "80e03259-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    "user": "Wendy",
    "text": "You were doing your daily bank transfers and…",
    "createdAt": "2020-07-16T19:48:56.273Z",
    "editedAt": ""
}, {
    "id": "80e03258-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "Yes, like I’ve been doing every *** day without red *** flag",
    "createdAt": "2020-07-16T19:49:14.480Z",
    "editedAt": ""
}, {
    "id": "80e03257-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "There`s never been a *** problem.",
    "createdAt": "2020-07-16T19:48:28.769Z",
    "editedAt": ""
}, {
    "id": "80e03256-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "4b003c20-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/PCEX63VBu7wVvdt9Eq-FrTI6d_4=/300x300/v1.cjs0MzYxNjtqOzE4NDk1OzEyMDA7MzQ5OzMxMQ",
    "user": "Helen",
    "text": "Why this account?",
    "createdAt": "2020-07-16T19:49:33.195Z",
    "editedAt": ""
}, {
    "id": "80e03255-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "I don`t *** know! I don`t know!",
    "createdAt": "2020-07-16T19:49:45.821Z",
    "editedAt": ""
}, {
    "id": "80e03254-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "5328dba1-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://www.aceshowbiz.com/images/photo/tom_pelphrey.jpg",
    "user": "Ben",
    "text": "What the ** is a red flag anyway?",
    "createdAt": "2020-07-16T19:50:07.708Z",
    "editedAt": ""
}, {
    "id": "80e03253-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "4b003c20-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/PCEX63VBu7wVvdt9Eq-FrTI6d_4=/300x300/v1.cjs0MzYxNjtqOzE4NDk1OzEyMDA7MzQ5OzMxMQ",
    "user": "Helen",
    "text": "You said you could handle things",
    "createdAt": "2020-07-16T19:53:02.483Z",
    "editedAt": ""
}, {
    "id": "80e03252-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "I did what he taught me.",
    "createdAt": "2020-07-16T19:53:17.272Z",
    "editedAt": "2020-07-16T19:53:50.272Z"
}, {
    "id": "80e03251-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "it`s not my fucking fault!",
    "createdAt": "2020-07-16T19:53:49.171Z",
    "editedAt": ""
}, {
    "id": "80e03250-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "533b5230-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/EVAkglctn7E9B0hVKJrueplabuQ=/220x196/v1.cjs0NjYwNjtqOzE4NDk1OzEyMDA7MjIwOzE5Ng",
    "user": "Wendy",
    "text": "Can you fix this? Can you fix it?",
    "createdAt": "2020-07-16T19:56:51.491Z",
    "editedAt": ""
}, {
    "id": "80e03249-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "4b003c20-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://resizing.flixster.com/PCEX63VBu7wVvdt9Eq-FrTI6d_4=/300x300/v1.cjs0MzYxNjtqOzE4NDk1OzEyMDA7MzQ5OzMxMQ",
    "user": "Helen",
    "text": "Her best is gonna get us all killed.",
    "createdAt": "2020-07-16T19:57:07.965Z",
    "editedAt": "2020-07-16T19:57:15.965Z"
}, {
    "id": "80e03248-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "I don`t know how!",
    "createdAt": "2020-07-16T19:58:06.686Z",
    "editedAt": ""
}, {
    "id": "80e03247-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "it means that the accounts frozen that cause the feds might think that there’s a crime being committed.",
    "createdAt": "2020-07-16T19:52:04.375Z",
    "editedAt": ""
}, {
    "id": "80e03246-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "9e243930-83c9-11e9-8e0c-8f1a686f4ce4",
    "avatar": "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
    "user": "Ruth",
    "text": "Like by me",
    "createdAt": "2020-07-16T19:52:15.334Z",
    "editedAt": ""
}, {
    "id": "80e03245-1b8f-11e8-9629-c7eca82aa7bd",
    "userId": "5328dba1-1b8f-11e8-9629-c7eca82aa7bd",
    "avatar": "https://www.aceshowbiz.com/images/photo/tom_pelphrey.jpg",
    "user": "Ben",
    "text": "aaaha!",
    "createdAt": "2020-07-16T19:58:17.878Z",
    "editedAt": ""
}]

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_MESSAGE: {
            const {id, messageData} = action.payload;
            const newMessage = {id, ...messageData};
            return [...state, newMessage];
        }
        case EDIT_MESSAGE: {
            const {id, messageData} = action.payload;
            const editedMessage = state.map(message => {
                if (message.id === id) {
                    return {
                        ...message,
                        ...messageData
                    };
                } else {
                    return message
                }
            });
            return editedMessage;
        }
        case DELETE_MESSAGE: {
            const {id} = action.payload;
            console.log(id);
            return state.filter(message => message.id != id);
        }
        default : {
            return state;
        }
        
    }
}