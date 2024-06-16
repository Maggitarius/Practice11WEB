import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './style/style.css'; // Импортируем CSS файл

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
