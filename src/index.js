import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const Header = ({ text }) => <h1 id ="hi">{text}</h1>

const Element = <p>Параграф</p>

class Main extends React.Component{
  render() {
    return (
      <div className='main'>
        <Header text={'Свойство текст'}/>
        <Element />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />

  </React.StrictMode>
);

