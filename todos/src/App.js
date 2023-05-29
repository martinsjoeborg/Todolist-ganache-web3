import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS} from './config';
import './App.css';
import { TodoForm } from './components/TodoForm';

function App() {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [todos, setTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    async function connect() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      const todoContract = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
      setContract(todoContract);
      populateTodos(todoContract);
      setConnected(true);
    };

    if (!connected) {
      connect();
    };
  }, [connected]);

  async function populateTodos(contract) {
    let notCompletedList = [];
    let completedList = [];
    let blockArrayId = await contract.methods.todoCount().call();
    for (let i = 0; i <= blockArrayId; i++){
      let todo = await contract.methods.todos(i).call();
      if (todo.id > 0 && todo.completed === false){
        notCompletedList.push(todo);
      } else if (todo.id > 0 && todo.completed === true){
        completedList.push(todo);
      };
    };
    setTodos(notCompletedList);
    setFinishedTodos(completedList);
  };

  async function createTodo (todo) {
    await contract.methods.createTodo(todo)
    .send({from: account})
    .once("receipt", async (receipt) => {
      console.log(receipt);
      populateTodos(contract);  
    });
  };

  async function deleteTodo (id) {
    await contract.methods.removeTodo(id)
    .send({from: account})
    .once("receipt", async (receipt) => {
      console.log(receipt);
      populateTodos(contract);
    });
  };

  async function toggleTodo (id) {
    await contract.methods.toggleTodo(id)
    .send({from: account})
    .once("receipt", async (receipt) => {
      console.log(receipt);
      populateTodos(contract);
    });
  };
  
  const htmlNotCompleted = todos.map((toDo) => {
    return ( <ul className='list-left' key={toDo.id}>
      <li>{toDo.text}</li>
      <li>{toDo.completed}<button onClick={() =>{deleteTodo(toDo.id)}}>X</button><button onClick={ () => {toggleTodo(toDo.id)} }>Complete</button></li>
    </ul>
    );
  });

  const htmlCompleted = finishedTodos.map((toDo) => {
    return ( <ul className='list-left' key={toDo.id}>
      <li>{toDo.text}</li>
      <li>{toDo.completed}<button onClick={() =>{deleteTodo(toDo.id)}}>X</button><button onClick={ () => {toggleTodo(toDo.id)} }>Uncomplete</button></li>
    </ul>
    );
  });


  return (
    <div className="App">
      <header>
        <p>account: {account}</p>
        <TodoForm addTodo={createTodo}></TodoForm>
      </header>
      <section className='list'>
        <div className='section-left'>
        <h3>Things to do</h3>
        {htmlNotCompleted}
        </div>
        <div className='section-right'>
          <h3>Completed</h3>
          {htmlCompleted}
        </div>
      </section>
    </div>
  );
}

export default App;
