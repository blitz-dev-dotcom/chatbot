import { createChatBotMessage } from 'react-chatbot-kit';
import Date from './Date';
import Start from './start';
const config = {
  botName : 'Zoho Bot',
  initialMessages: [createChatBotMessage(`Hey! There i am here to help you`,{
    widget: "start"
  })],
  widgets: [
    {
      widgetName: 'date',
      widgetFunc:(props)=> <Date {...props}/>
    },
    {
      widgetName:'start',
      widgetFunc: (props) => <Start {...props}/>
    }
  ]
};

export default config;