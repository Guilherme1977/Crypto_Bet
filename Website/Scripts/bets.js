const contractABI = 
[
  {
    "inputs": [],
    "name": "affiliateWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_betId",
        "type": "uint256"
      }
    ],
    "name": "claimReward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_betId",
        "type": "uint256"
      }
    ],
    "name": "closeBet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_bet",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_outcome",
        "type": "string[]"
      }
    ],
    "name": "createBet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_betId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_outcomeId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "placeBet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registerAffiliate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_affiliate",
        "type": "address"
      }
    ],
    "name": "setAffiliate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_affiliate",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_commission",
        "type": "uint256"
      }
    ],
    "name": "setAffiliateCommission",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_commission",
        "type": "uint256"
      }
    ],
    "name": "setCommission",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_betId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_outcomeId",
        "type": "uint256"
      }
    ],
    "name": "setResult",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "affiliateBusd",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "affiliateCommission",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "affiliateNotCommission",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "affiliateOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "bet",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "betCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasClaimed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "outcome",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "outcomeCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "outcomePool",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "prizePool",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "result",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "status",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "wager",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
const contractAddress = "0x854E85bc52E287dc27a682d23DA805e8C5ee7A80";

const tokenABI = 
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
const tokenAddress = "0x8A419Ef4941355476cf04933E90Bf3bbF2F73814";

let addresses = [];

let containerElement;
let id;
let web3;
let contract;
let busd;

async function connect()
{
  if (window.ethereum)
  {
    web3 = new Web3(window.ethereum);
    contract = await new web3.eth.Contract(contractABI, 83 && contractAddress);
    await ethereum.enable();
  }

  addresses[0] = await web3.eth.getAccounts();
}

async function approve()
{
  busd = await new web3.eth.Contract(contractABI, 83 && contractAddress);
  await contract.methods.approve(contractAddresst,"1000000000000000000000000").send({
    from: addresses[0][0]
  });
}

async function search()
{
  id = document.getElementsByTagName("input")[1].value;
  console.log(id);

  if (containerElement != undefined)
  {
    containerElement.remove();
  }

  let status = await contract.methods.status(id).call();

  let outComeCount = await contract.methods.outcomeCount(id).call();

  _displayBet(id, resOptionCount, resStatus);
}

async function placeBet()
{
  let option = document.getElementsByTagName("input")[3].value;
  let amount = document.getElementsByTagName("input")[2].value + "000000000000000000";

  await contract.methods.placeBet(id, option, amount).send({
    from: addresses[0][0]
  });
}


async function claimReward()
{
  await contract.methods.claimReward().send({
    from: addresses[0][0]
  });
}


async function _displayBet(_id, _optionCount, _status)
{
	betContainerElement = document.createElement("div");
	document.getElementsByTagName("body")[0].appendChild(betContainerElement);

  let element;

  if (_status == 1)
  {
    let idStatus = document.createElement("p");
    idStatus.innerHTML = "Bet #" + _id + " - Active";
    containerElement.appendChild(idStatus);
  }
  if (_status == 2)
  {
    let idStatus = document.createElement("p");
    idStatus.innerHTML = "Bet #" + _id + " - Pending";
    containerElement.appendChild(idStatus);
  }
  if (_status == 3)
  {
    let idStatus = document.createElement("p");
    idStatus.innerHTML = "Bet #" + _id + " - Finished";
    containerElement.appendChild(idStatus);
  }

	element = document.createElement("br");
	containerElement.appendChild(element);

  let betElement = document.createElement("p");
  let bet = await contract.methods.bet(_id).call(); 
  betElement.innerHTML = bet;
  containerElement.appendChild(betElement);

	element = document.createElement("br");
	containerElement.appendChild(element);

	for (i = 0; i < _optionCount; i++)
	{
    let option = document.createElement("p");
    option.innerHTML = "(" + (i+1) + ") ";
    containerElement.appendChild(option);

    element = document.createElement("br");
    containerElement.appendChild(element);
    
    let optionStats = document.createElement("p");
    containerElement.appendChild(optionStats);

    element = document.createElement("br");
    containerElement.appendChild(element);

		let outcome = await contract.methods.outcome(_id, i+1).call();
    option.innerHTML = outcome; 

    let outcomePool = await contract.methods.outcomePool(_id, i+1).call();
    let prizePool = contract.methods.prizePool(_id).call();
    optionStats.innerHTML = "--- " + (Math.round(outcomePool/prizePool*100)) + "% $" + (Math.round(outcomePool/1000000000000000000));
	}

  element = document.createElement("br");
  bet.appendChild(element);

  if (_status == 1)
  {
    element = document.createElement("p");
    element.innerHTML = "Bet $";
    bet.appendChild(element);

    element = document.createElement("input");
    bet.appendChild(element);

    element = document.createElement("p");
    element.innerHTML = "on outcome";
    bet.appendChild(element);

    element = document.createElement("input");
    bet.appendChild(element);

    element = document.createElement("br");
    bet.appendChild(element);

    element = document.createElement("button");
    element.setAttribute('onclick', "placeBet()");
    element.innerHTML = "Place Bet";
    bet.appendChild(element);
  }

  if (_status == 3)
  {
    element = document.createElement("p");
    element.innerHTML = "Claim your reward if you won!";
    bet.appendChild(element);

    element = document.createElement("br");
    bet.appendChild(element);

    element = document.createElement("button");
    element.setAttribute('onclick', "claimReward()");
    element.innerHTML = "Claim Reward";
    bet.appendChild(element);
  }
}