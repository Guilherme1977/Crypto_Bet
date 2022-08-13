// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

interface ERC20 
{
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

	// bet id => name
	mapping 
	(
		uint256 => string
	)
	public description;

	mapping 
	(
		uint256 => uint256
	)
	public betOptionCount;

	// bet id => option id => option
	mapping 
	(
		uint256 => mapping
		(
			uint256 => string
		)
	)
	public option;

	// bet id => total amount betted
	mapping
	(
		uint256 => uint256
	)
	public betTotalBetted;

	// bet id => option id => total amount betted
	mapping 
	(
		uint256 => mapping
		(
			uint256 => uint256
		)
	)
	public optionTotalBetted;

	// bet id => option id => account => amount betted
	mapping 
	(
		uint256 => mapping 
		(
			uint256 => mapping 
			(
				address => uint256
			)
		)
	)
	public accountAmountBetted;

	// bet id => total amount betted
	mapping
	(
		uint256 => uint256
	)
	public result;

	// bet id => total amount betted
	mapping
	(
		uint256 => uint256
	)
	public status;

	// bet id => total amount betted
	mapping
	(
		uint256 => mapping  
		(
			address => bool
		)
	)
	public hasClaimed;

	mapping 
	(
		address => address
	)
	public affiliateOf;

	mapping 
	(
		address => address
	)
	public affiliateCommission;

	mapping 
	(
		address => address
	)
	public affiliateNotCommission;

	mapping 
	(
		address => uint256
	)
	public affiliateBUSD;

	function createBet
	(
		string memory _name,
		string[] memory _option
	)
	public
	{
		require(msg.sender == admin);

		betCount++;
		description[betCount] = _name;
		betOptionCount[betCount] = _option.length;
		for (uint256 i = 1; i <= _option.length; i++)
		{
			option[betCount][i] = _option[i];
		}
		status[betCount] = 1;
	}

	function placeBet(uint256 _betId, uint256 _optionId, uint256 _amount) public
	{
		require(status[_betId] == 1);

		ERC20(token).transferFrom(msg.sender, address(this), _amount);

		betTotalBetted[_betId] += _amount;
		optionTotalBetted[_betId][_optionId] += _amount;
		accountAmountBetted[_betId][_optionId][msg.sender] += _amount;
	}

	function closeBet(uint256 _betId) public
	{
		require(msg.sender == admin);

		status[_betId] = 2;
	}

	function setResult(uint256 _betId, uint256 _optionId) public
	{
		require(status[_betId] == 2);
		require(msg.sender == admin);

		result[_betId] = _optionId;
		status[_betId] = 3;
		// this must be done in claim reward stage because of affiliate system
		//unlockedBusd += (betTotalBetted[_betId] - optionTotalBetted[_betId][result[_betId]]) * commission / denominator;
	}

	function claimReward(uint256 _betId) public
	{
		require(status[_betId] == 3);
		require(!hasClaimed[_betId][msg.sender]);

		hasClaimed[_betId][msg.sender] = true;
		if (affiliate[msg.sender] == address(0))
		{
			ERC20(token).transfer(msg.sender, accountAmountBetted[_betId][result[_betId]][msg.sender]+(((betTotalBetted[_betId]-optionTotalBetted[_betId][result[_betId]])*accountAmountBetted[_betId][result[_betId]][msg.sender]*notCommission)/(optionTotalBetted[_betId][result[_betId]]*100)));
			unlockedBusd = ((betTotalBetted[_betId]-optionTotalBetted[_betId][result[_betId]])*accountAmountBetted[_betId][result[_betId]][msg.sender]*commission)/(optionTotalBetted[_betId][result[_betId]]*100);
		}
		else
		{
			ERC20(token).transfer(msg.sender, accountAmountBetted[_betId][result[_betId]][msg.sender]+(((betTotalBetted[_betId]-optionTotalBetted[_betId][result[_betId]])*accountAmountBetted[_betId][result[_betId]][msg.sender]*notCommission)/(optionTotalBetted[_betId][result[_betId]]*100)));
			unlockedBusd = ((betTotalBetted[_betId]-optionTotalBetted[_betId][result[_betId]])*accountAmountBetted[_betId][result[_betId]][msg.sender]*commission*affiliateNotCommission[affiliate[msg.sender]])/(optionTotalBetted[_betId][result[_betId]]*100*100);
			affiliateBusd[affiliate[msg.sender]] = ((betTotalBetted[_betId]-optionTotalBetted[_betId][result[_betId]])*accountAmountBetted[_betId][result[_betId]][msg.sender]*commission*affiliateCommission[affiliate[msg.sender]])/(optionTotalBetted[_betId][result[_betId]]*100*100);
		}
	}

	function setCommission
	(
		uint256 _commission,
	)
	public
	{
		require(msg.sender == admin);

		commission = _commission;
		notCommission = 100 - _commission;
	}

	function setAffiliate(address _affiliate) public
	{
		affiliate[msg.sender] == _affiliate;
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

	function withdraw() public
	{
		require(msg.sender == admin);
 
		ERC20(token).transfer(admin, unlockedBusd);
		unlockedBusd = 0;
	}

	function affiliateWithdraw() public
	{
		ERC20(token).transfer(msg.sender, affiliateBusd[msg.sender]);
		affiliateBusd[msg.sender] = 0;
	}
}