import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHi = ()=>{
    const botMessage = createChatBotMessage('hello,Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const appointment = ()=>{
    const botMessage = createChatBotMessage('Please Provide me the Date! So,I can assist You in the better way');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const handleDate = ()=>{
    const botMessage = createChatBotMessage('Please wait! I am checking for the availability',{
    widget: 'date'
  });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  const exception = ()=>{
    const botMessage = createChatBotMessage('I cant assist you for this question');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            appointment,
            handleDate,
            handleHi,
            exception
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;