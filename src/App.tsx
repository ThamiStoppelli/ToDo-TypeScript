import React from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';

//interfaces
import { ITask } from './interfaces/Task';

//css
import styles from "./App.module.css";
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main} >
        <div>
          <h2>O que voce vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa' />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
