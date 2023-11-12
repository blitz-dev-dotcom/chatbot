import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName : 'Zoho Bot',
  initialMessages: [createChatBotMessage(`Hey! There i am here to help you`)],
  widgets : [
    {
      widgetName: '',
      widgetFunc: (props)=>{Overview (...props)}
    }
  ]
};

export default config;