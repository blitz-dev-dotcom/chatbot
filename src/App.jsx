import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import config from './bot/config';
import ActionProvider from './bot/ActionProvider';
import MessageParser from './bot/MessageParser';
function App() {
  return (
    <div className="App">
      <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
