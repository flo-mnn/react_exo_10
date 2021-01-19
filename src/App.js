import React, { Component } from 'react';
import './App.css';

class App extends Component {

  changeTitle = (e, nouveau) => {
    e.target.textContent = nouveau;
  };

  changeParagraphe = (e) => {

    // let para = document.querySelector('p');
    // para.textContent += 'nouveau Mot de la fin';
    e.target.previousSibling.textContent += 'Mot de la fin.'
  };

  change2ndTitle = (e) => {
    let newtitle = e.target.parentElement.parentElement.querySelector('h3');
    newtitle.textContent = e.target.previousSibling.value;
  };

  change2ndParagraphe = (e) => {
    e.target.previousSibling.textContent = e.target.value;
  };


  render() {
    return (
      <div>
        <h1 onClick={(e)=> this.changeTitle(e,'Nouveau joli Titre')}>Joli Titre</h1>
        <h3>Joli sous-titre</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ex unde ut reprehenderit, cumque labore! Possimus omnis est ea excepturi!</p>
        <button onClick={this.changeParagraphe}>Modifier le paragraphe</button>
        <div>
          <input type="text"/>
          <input type="submit" value="Sous-titre" onClick={this.change2ndTitle}/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, repellendus!</p>
        <textarea name="change" id="change" cols="30" rows="10" onChange={this.change2ndParagraphe}></textarea>
      </div>
    )
  }
}

export default App


// nb : des states pourraient être utilisés à la place de cibler et textContent