import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {

    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="a87e9780-fd7d-44ea-a98f-22b5b842dba6"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('./messageincoming.mp3').play()}
        />
    );
}

export default App;