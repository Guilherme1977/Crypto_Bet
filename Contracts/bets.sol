// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

interface ERC20 
{
	 function allowance(address owner, address spender) external view returns (uint256);

	function transfer(address recipient, uint256 amount) external;

	function transferFrom(address sender, address recipient, uint256 amount) external;	

	function balanceOf(address account) external returns (uint256);

	function approve(address spender, uint256 amountIn) external;
}

// return*((1.618(valueWeight)^(log10(portfolioValue)))

contract Bets
{
	uint256 public betCount;
	address admin = 0xE0203035Ce7e17cd4B997301c43F0c484f910079;
	address token = 0x8A419Ef4941355476cf04933E90Bf3bbF2F73814; // testnet mtrg
	//address token = 0x24aA189DfAa76c671c279262F94434770F557c35; // mainnet busd
	uint256 unlockedBusd;
	uint256 commission = 10;
	uint256 notCommission = 90;
	uint256 defaultAffiliateCommission = 50;

	// bet id => bet description
	mapping(uint256 => string) public bet;

	mapping(uint256 => uint256) public outcomeCount;

	// bet id => outcome id => outcome description
	mapping(uint256 => mapping(uint256 => string)) public outcome;

	// bet id => total amount betted
	mapping(uint256 => uint256)public prizePool;

	// bet id => outcome id => total amount betted on each outcome
	mapping(uint256 => mapping(uint256 => uint256)) public outcomePool;

	// bet id => outcome id => account => amount betted on each outcome
	mapping(uint256 => mapping(uint256 => mapping(address => uint256))) public wager;

	// bet id => winning outcome
	mapping(uint256 => uint256) public result;

	// bet id => bet status
	// 0 = not started
	// 1 = betting stage
	// 2 = waiting stage
	// 3 = finished
	// 4 = cancelled
	mapping(uint256 => uint256) public status;

	// bet id => has address claimed rewards for specific bet?
	mapping(uint256 => mapping(address => bool)) public hasClaimed;

    // bet id => has address claimed rewards for specific bet?
	mapping(uint256 => mapping(address => bool)) public hasWithdrawn;

	mapping(address => address) public affiliateOf;

	mapping(address => uint256) public affiliateCommission;

	mapping(address => uint256) public affiliateNotCommission;

	mapping(address => uint256) public affiliateBusd;

	function createBet
	(
		string memory _bet,
		string[] memory _outcome
	)
	public
	{
		require(msg.sender == admin);

		betCount++;
		bet[betCount] = _bet;
		outcomeCount[betCount] = _outcome.length;
		for (uint256 i = 1; i <= _outcome.length; i++)
		{
			outcome[betCount][i] = _outcome[i-1];
		}
		status[betCount] = 1;
	}

	function placeBet(uint256 _betId, uint256 _outcomeId, uint256 _amount) public
	{
		require(status[_betId] == 1);

		ERC20(token).transferFrom(msg.sender, address(this), _amount);

		prizePool[_betId] += _amount;
		outcomePool[_betId][_outcomeId] += _amount;
		wager[_betId][_outcomeId][msg.sender] += _amount;
	}

	function closeBet(uint256 _betId) public
	{
		require(msg.sender == admin);

		status[_betId] = 2;
	}

	function cancel(uint256 _betId) public
	{
		require(status[_betId] == 1 || status[_betId] == 2);

		status[_betId] = 4;
	}

	function withdraw(uint256 _betId) public
	{
		require(status[_betId] == 4);
		require(!hasWithdrawn[_betId][msg.sender]);

		hasWithdrawn[_betId][msg.sender] = true;

		uint256 withdrawAmount;

		for (uint256 i = 0; i < outcomeCount[_betId]; i++)
		{
			withdrawAmount += wager[_betId][i+1][msg.sender];
		}

		ERC20(token).transfer(msg.sender, withdrawAmount);
	}

	function setResult(uint256 _betId, uint256 _outcomeId) public
	{
		require(status[_betId] == 2);
		require(msg.sender == admin);

		result[_betId] = _outcomeId;
		status[_betId] = 3;
		// this must be done in claim reward stage because of affiliate system
		//unlockedBusd += (prizePool[_betId] - outcomePool[_betId][result[_betId]]) * commission / denominator;
	}

	function claimReward(uint256 _betId) public
	{
		require(status[_betId] == 3);
		require(!hasClaimed[_betId][msg.sender]);

		hasClaimed[_betId][msg.sender] = true;
		if (affiliateOf[msg.sender] == address(0))
		{
			unlockedBusd = ((prizePool[_betId]-outcomePool[_betId][result[_betId]])*wager[_betId][result[_betId]][msg.sender]*commission)/(outcomePool[_betId][result[_betId]]*100);
			ERC20(token).transfer(msg.sender, wager[_betId][result[_betId]][msg.sender]+(((prizePool[_betId]-outcomePool[_betId][result[_betId]])*wager[_betId][result[_betId]][msg.sender]*notCommission)/(outcomePool[_betId][result[_betId]]*100)));
		}
		else
		{
			unlockedBusd = ((prizePool[_betId]-outcomePool[_betId][result[_betId]])*wager[_betId][result[_betId]][msg.sender]*commission*affiliateNotCommission[affiliateOf[msg.sender]])/(outcomePool[_betId][result[_betId]]*100*100);
			affiliateBusd[affiliateOf[msg.sender]] = ((prizePool[_betId]-outcomePool[_betId][result[_betId]])*wager[_betId][result[_betId]][msg.sender]*commission*affiliateCommission[affiliateOf[msg.sender]])/(outcomePool[_betId][result[_betId]]*100*100);
			ERC20(token).transfer(msg.sender, wager[_betId][result[_betId]][msg.sender]+(((prizePool[_betId]-outcomePool[_betId][result[_betId]])*wager[_betId][result[_betId]][msg.sender]*notCommission)/(outcomePool[_betId][result[_betId]]*100)));
		}
	}

	function setCommission
	(
		uint256 _commission
	)
	public
	{
		require(msg.sender == admin);

		commission = _commission;
		notCommission = 100 - _commission;
	}

	function setAffiliate(address _affiliate) public
	{
		affiliateOf[msg.sender] = _affiliate;
	}

	function setAffiliateCommission(address _affiliate, uint256 _commission) public
	{
		require(msg.sender == admin);

		affiliateCommission[_affiliate] = _commission;
		affiliateNotCommission[_affiliate] = 100-_commission;
	}

	function registerAffiliate() public
	{
		affiliateCommission[msg.sender] = defaultAffiliateCommission;
		affiliateNotCommission[msg.sender] = 100-defaultAffiliateCommission;
	}

	function adminWithdraw() public
	{
		require(msg.sender == admin);
 		
 		uint256 temp = unlockedBusd;
		unlockedBusd = 0;
		ERC20(token).transfer(admin, temp);
	}

	function affiliateWithdraw() public
	{
		uint256 temp = affiliateBusd[msg.sender];
		affiliateBusd[msg.sender] = 0;
		ERC20(token).transfer(msg.sender, temp);
	}
}
