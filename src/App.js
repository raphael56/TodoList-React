import React, {useState} from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.min.css'
import './components/header/header'
import Header from './components/header/header';
import Card from './components/card/Card';


function App() {

  const [monState, setMonState] = useState([
    { tache: 'Promener le chien', txt: "une fois à 8h, une fois à 19h" },
    { tache: 'Préparer le repas', txt: "acheter poisson + riz" },
    { tache: 'Creer une APP', txt: "Apprendre React" }
  ])

  const [tache, setTache] = useState();
  const [txt, setTxt] = useState();

  function creationCarte(e) {
    e.preventDefault();
    // console.log(tache, txt)
    const nvTab = [...monState, { tache: tache, txt: txt }]
    setMonState(nvTab)
    console.log(nvTab)
    setTache('')
    setTxt('')
  }

  function supprCarte(index) {
    const tabNettoyage = [...monState]
  //  console.log(index)
  //   console.log(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])))

   setMonState(tabNettoyage.filter(item => tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])))
  }


  return (
    <div>
      <Header />
      <div className="container px-3">
        <h2 className="title mt-5">
          Rentrez vos tâches à faire
        </h2>

        <form onSubmit={creationCarte}>
          <div className="field">
            <div className="control">
              <label htmlFor="tache" className="label">Tâche</label>
              <input
                value={tache}
                className="input"
                type="text"
                id="tache"
                placeholder="Une tâche à faire"
                onChange = {e=>setTache(e.target.value)}
                />
            </div>
          </div>
          
          <div className="field">
            <div className="control">
              <label htmlFor="txt" className="label">Descriptif de la tâche</label>
              <textarea
                value={txt}
                className="textarea"
                type="text"
                id="txt"
                placeholder="Une tâche à faire"
                onChange = {e=>setTxt(e.target.value)}
                >
              </textarea>
            </div>
          </div>

          <div className="control">
            <button className="button is-link">Créer une tâche</button>
</div>


        </form>
      </div>
      {
        monState.map((todo, index) => (
          <Card
            key={index}
            index={index}
          tache={todo.tache}
            txt={todo.txt}
            supprFunc={supprCarte}
        />
          
        ))
      }
    </div>
  );
}

export default App;
