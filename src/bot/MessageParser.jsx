import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(message.includes('hello')){
      actions.handleHello();
    }
    if(message.includes('appointment')){
      actions.appointment();
    }
    if(message.includes(2023)){
      actions.handleDate();
    }
    if(message.includes('hi')){
      actions.handleHi();
    }
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
        
      })}
    </div>
  );
};

export default MessageParser;