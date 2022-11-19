const contractABI = 
[
  {
    "inputs": [],
    "name": "adminWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_betId",
        "type": "uint256"
      }
    ],
    "name": "cancel",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_betId",
        "type": "uint256"
      }
    ],
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
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "hasWithdrawn",
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
const contractAddress = "0x56c2D2353597016c2571603417C90A41917b855e";

const tokenABI = 
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
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

let accounts = [];

let containerElement;
let id;
let web3;
let contract;
let token;

window.onload = async function()
{
  if (window.ethereum)
  {
    web3 = new Web3(window.ethereum);
    contract = await new web3.eth.Contract(contractABI, 83 && contractAddress);
    token = await new web3.eth.Contract(tokenABI, 83 && tokenAddress);
  }

  await ethereum.enable();
  accounts = await web3.eth.getAccounts();
  updateInterface();
}

var accountInterval = setInterval(async function() 
{
  if (web3 != undefined)
  {
    let tempAccount = [];
    if (window.ethereum.selectedAddress !== null)
    {
      tempAccount[0] = web3.utils.toChecksumAddress(window.ethereum.selectedAddress);
    }
    
    if (tempAccount[0] !== accounts[0]) 
    {
      if (web3.utils.isAddress(tempAccount[0]))
      {
        accounts[0] = web3.utils.toChecksumAddress(window.ethereum.selectedAddress);
      }
      updateInterface();
    }
  }
}, 100);

async function connect()
{
  await ethereum.enable();
  accounts = await web3.eth.getAccounts();
  updateInterface();
}

async function approve()
{
  await token.methods.approve(contractAddress,"1000000000000000000000000").send({
    from: accounts[0]
  });

  let hasApproved = await token.methods.allowance(accounts[0], contractAddress).call();

  if (hasApproved > 0)
  {
    document.getElementsByTagName("button")[4].remove();
    element = document.createElement("button");
    element.setAttribute('onclick', "placeBet()");
    element.innerHTML = "Place Bet";
    containerElement.appendChild(element);
  }
  else
  {
    element = document.createElement("button");
    element.setAttribute('onclick', "approve()");
    element.innerHTML = "Approve $BUSD";
    containerElement.appendChild(element);
  }
}

async function search()
{
  if (document.getElementsByTagName("input")[1].value == "")
  {
    return;
  }

  id = document.getElementsByTagName("input")[1].value;

  if (containerElement != undefined)
  {
    containerElement.remove();
  }

  let status = await contract.methods.status(id).call();

  let outcomeCount = await contract.methods.outcomeCount(id).call();

  _displayBet(id, outcomeCount, status);
}

async function placeBet()
{
  let option = document.getElementsByTagName("input")[3].value;
  let amount = document.getElementsByTagName("input")[2].value + "000000000000000000";

  await contract.methods.placeBet(id, option, amount).send({
    from: accounts[0]
  });

  search();
}


async function claimReward()
{
  await contract.methods.claimReward(id).send({
    from: accounts[0]
  });

  search();
}

async function updateInterface()
{
  let tempAccount = [];
  if (window.ethereum.selectedAddress !== null)
  {
    tempAccount[0] = web3.utils.toChecksumAddress(window.ethereum.selectedAddress);
  }

  if (!tempAccount.length) 
  {
    document.getElementsByTagName("button")[0].innerHTML = "Connect Wallet";
  }
  else
  {
    document.getElementsByTagName("button")[0].innerHTML = 
    accounts[0][0] +
    accounts[0][1] + 
    accounts[0][2] +
    accounts[0][3] + 
    "..." +
    accounts[0][38] +
    accounts[0][39] + 
    accounts[0][40] +
    accounts[0][41];
  }

  search();
}

async function _displayBet(_id, _optionCount, _status)
{
	containerElement = document.createElement("div");
	document.getElementsByTagName("body")[0].appendChild(containerElement);

  let element;

  let betIdElement = document.createElement("p");
  betIdElement.innerHTML = "Bet #" + _id + " -";
  containerElement.appendChild(betIdElement);

  let statusElement = document.createElement("p");
  containerElement.appendChild(statusElement);

  if (_status == 1)
  {
    statusElement.innerHTML = "Active";
    statusElement.setAttribute("class", "green");
  }
  if (_status == 2)
  {
    statusElement.innerHTML = "Pending";
    statusElement.setAttribute("class", "blue");
  }
  if (_status == 3)
  {
    statusElement.innerHTML = "Finished";
    statusElement.setAttribute("class", "orange");
  }
  if (_status == 4)
  {
    statusElement.innerHTML = "Cancelled";
    statusElement.setAttribute("class", "red");
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
    let outcomeIdElement = document.createElement("p");
    outcomeIdElement.innerHTML = "(" + (i+1) + ") ";
    containerElement.appendChild(outcomeIdElement);

    let outcomeElement = document.createElement("p");
    let outcome = await contract.methods.outcome(_id, i+1).call();
    outcomeElement.innerHTML = outcome;
    containerElement.appendChild(outcomeElement);

    element = document.createElement("br");
    containerElement.appendChild(element);
    
    let outcomePool = await contract.methods.outcomePool(_id, i+1).call();
    let prizePool = await contract.methods.prizePool(_id).call();
    let wager = await contract.methods.wager(_id, i+1, accounts[0]).call();

    let outcomeStatsElement = document.createElement("p");
    outcomeStatsElement.innerHTML = "--- ";
    containerElement.appendChild(outcomeStatsElement);

    let outcomePercentElement = document.createElement("p");
    outcomePercentElement.innerHTML = (Math.round(outcomePool/prizePool*100)) + "%";
    outcomePercentElement.setAttribute("class", "orange");
    containerElement.appendChild(outcomePercentElement);

    let outcomePoolElement = document.createElement("p");
    outcomePoolElement.innerHTML = "$" + (Math.round(outcomePool/1000000000000000000));
    outcomePoolElement.setAttribute("class", "blue");
    containerElement.appendChild(outcomePoolElement);

    let wagerElement = document.createElement("p");
    wagerElement.innerHTML = "$" + (Math.round(wager/1000000000000000000));
    if (wager > 0)
    {
      wagerElement.setAttribute("class", "green");
    }
    containerElement.appendChild(wagerElement);

    element = document.createElement("br");
    containerElement.appendChild(element);
	}

  element = document.createElement("br");
  containerElement.appendChild(element);

  if (_status == 1)
  {
    element = document.createElement("p");
    element.innerHTML = "Bet $";
    containerElement.appendChild(element);

    element = document.createElement("input");
    containerElement.appendChild(element);

    element = document.createElement("p");
    element.innerHTML = "on outcome";
    containerElement.appendChild(element);

    element = document.createElement("input");
    containerElement.appendChild(element);

    let hasApproved = await token.methods.allowance(accounts[0], contractAddress).call();

    if (hasApproved > 0)
    {
      element = document.createElement("button");
      element.setAttribute('onclick', "placeBet()");
      element.innerHTML = "Place Bet";
      containerElement.appendChild(element);
    }
    else
    {
      element = document.createElement("button");
      element.setAttribute('onclick', "approve()");
      element.innerHTML = "Approve $BUSD";
      containerElement.appendChild(element);
    }
  }

  if (_status == 3)
  {
    element = document.createElement("p");
    containerElement.appendChild(element);

    let hasClaimed = await contract.methods.hasClaimed(id, accounts[0]).call();

    if (hasClaimed)
    {
      element.innerHTML = "You have already claimed rewards for this bet!";
    }
    else
    { 
      let wager = await contract.methods.wager(id, await contract.methods.result(id).call(), accounts[0]).call();

      if (wager == 0)
      {
        element.innerHTML = "You either did not bet on the right outcome or did not bet at all... (loser)";
      }
      else
      {
        element.innerHTML = "Claim your rewards!";

        element = document.createElement("br");
        containerElement.appendChild(element);

        element = document.createElement("button");
        element.setAttribute('onclick', "claimReward()");
        element.innerHTML = "Claim Reward";
        containerElement.appendChild(element);
      }
    }
  }
}
