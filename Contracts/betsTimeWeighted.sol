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

// TIME WEIGHTED
contract Bets
{
	
}