import React, { Component } from 'react';
import './App.css';

class App extends Component {

  changeTitle = (e, nouveau) => {
    e.target.textContent = nouveau;
  };

  changeParagraphe = (e) => {
    e.target.previousSibling.textContent += 'Mot de la fin.'
  };

  render() {
    return (
      <div>
        <h1 onClick={(e)=> this.changeTitle(e,'Nouveau joli Titre')}>Joli Titre</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex unde ut reprehenderit, cumque labore! Possimus omnis est ea excepturi!</p>
        <button onClick={this.changeParagraphe}>Modifier le paragraphe</button>
      </div>
    )
  }
}

export default App
