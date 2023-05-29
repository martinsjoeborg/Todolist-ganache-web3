export const TODO_LIST_ADDRESS = "0x6F3e185751c601091b14a489a1Ba09a83625F7D8";

export const TODO_LIST_ABI = [
    /* constructor */{
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    /* RemovedTodo - event */{
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "RemovedTodo",
      "type": "event"
    },
    /* TodoCreated - event */{
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TodoCreated",
      "type": "event"
    },
    /* ToggleTodo - event */{
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "ToggleTodo",
      "type": "event"
    },
    /* todoCount - function */{
      "inputs": [],
      "name": "todoCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    /* todos - function */{
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "todos",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "text",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    /* createTodo - function */{
      "inputs": [
        {
          "internalType": "string",
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "createTodo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    /* toggleTodo - function */{
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "toggleTodo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    /* removeTodo - function */{
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "removeTodo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];