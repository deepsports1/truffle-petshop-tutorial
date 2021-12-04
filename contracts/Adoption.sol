pragma solidity ^0.5.0;

contract Adoption {
	address[16] public adopters;
	address public owner;

	constructor() public {
		owner = msg.sender;
	}

	function kill() public {
		require(msg.sender == owner);		
	}

	function adopt(uint petId) public returns (uint) {
		require(petId >= 0 && petId <= 15);

		adopters[petId] = msg.sender;

		return petId;
	}

	function getAdopters() public view returns(address[16] memory) {
		return adopters;
	}
}