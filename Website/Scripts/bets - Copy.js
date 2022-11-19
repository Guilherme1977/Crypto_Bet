const contractABI = 
[
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
    "inputs": [],
    "name": "affiliateWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
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
        "name": "_name",
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
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "description",
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
    "inputs": [],
    "name": "registerAffiliate",
    "outputs": [],
    "stateMutability": "nonpayable",
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
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
const contractAddress = "0x8883e1884E919Ce32ad2C42d957323Bef41fc906";
const address = "0x2813a3F7E9885091653D9D7EDA15b5a5Ed68a0c4";
const privateKey1 = "65ea51021f4481cf73bfa5ccec80aad394bd2907021ede0e171c77260d278029";
const web3 = new Web3("https://rpctest.meter.io");
const contract = new web3.eth.Contract(contractABI, contractAddress);

let bet;
let id;

function search()
{
  id = document.getElementsByTagName("input")[1].value;
  console.log(id);

  if (bet != undefined)
  {
    bet.remove();
  }

	contract.methods.status(id).call(function (err, resStatus) 
  {
    contract.methods.outcomeCount(id).call(function (err, resOptionCount)
    {
      _displayBet(id, resOptionCount, resStatus);
    });
  });
}

function placeBet (_option, _amount)
{
  let option = document.getElementsByTagName("input")[3].value;
  let amount = document.getElementsByTagName("input")[2].value;

  web3.eth.getTransactionCount(address, (err, txCount) => 
  {
    const txObject =
    {
      nonce: web3.utils.toHex(txCount),
      chainId: 83,
      gasLimit: web3.utils.toHex(800000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: contractAddress,
      data: contract.methods.placeBet(id, option, amount).encodeABI()
    }

    const tx = new ethereumjs.Tx(txObject);

    var privateKey2 = new ethereumjs.Buffer.Buffer(privateKey1, 'hex')

    tx.sign(privateKey2);

    const serializedTx = tx.serialize();

    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err, txHash) => 
    {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
    })
  });
}

function claimReward()
{
  web3.eth.getTransactionCount(address, (err, txCount) => 
  {
    const txObject =
    {
      nonce: web3.utils.toHex(txCount),
      chainId: 83,
      gasLimit: web3.utils.toHex(800000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      to: contractAddress,
      data: contract.methods.claimReward(id).encodeABI()
    }

    const tx = new ethereumjs.Tx(txObject);

    var privateKey2 = new ethereumjs.Buffer.Buffer(privateKey1, 'hex')

    tx.sign(privateKey2);

    const serializedTx = tx.serialize();

    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err, txHash) => 
    {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
    })
  });
}

function _displayBet(_id, _optionCount, _status)
{
	bet = document.createElement("div");
	document.getElementsByTagName("body")[0].appendChild(bet);

  let element;

  if (_status == 1)
  {
    let idStatus = document.createElement("p");
    idStatus.innerHTML = "Bet #" + _id + " - Active";
    bet.appendChild(idStatus);
  }
  if (_status == 2)
  {
    let idStatus = document.createElement("p");
    idStatus.innerHTML = "Bet #" + _id + " - Pending";
    bet.appendChild(idStatus);
  }
  if (_status == 3)
  {
    let idStatus = document.createElement("p");
    idStatus.innerHTML = "Bet #" + _id + " - Finished";
    bet.appendChild(idStatus);
  }

	element = document.createElement("br");
	bet.appendChild(element);

  let description = document.createElement("p");
  contract.methods.description(_id).call(function (err, resDescription) 
  {
    description.innerHTML = resDescription;
  });
  bet.appendChild(description);

	element = document.createElement("br");
	bet.appendChild(element);

  let optionContainer = document.createElement("div");
  bet.appendChild(optionContainer);

	for (i = 0; i < _optionCount; i++)
	{
    let option = document.createElement("p");
    option.innerHTML = "(" + (i+1) + ") ";
    optionContainer.appendChild(option);

    element = document.createElement("br");
    optionContainer.appendChild(element);
    
    let optionStats = document.createElement("p");
    optionContainer.appendChild(optionStats);

    element = document.createElement("br");
    optionContainer.appendChild(element);

		contract.methods.outcome(_id, i+1).call(function(err, resOption)
    {
      option.innerHTML = option.innerHTML + resOption;
    });   

    contract.methods.outcomePool(_id, i+1).call(function(err, resOptionValue)
    {
      contract.methods.prizePool(_id).call(function(err, resPrizePool)
      {
        console.log(i);
        console.log(resOptionValue + " | " + resPrizePool);
        optionStats.innerHTML = "--- " + (Math.round(resOptionValue/resPrizePool*100)) + "% $" + (Math.round(resOptionValue/1000000000000000000));
      });
    });
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