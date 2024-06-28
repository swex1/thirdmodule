// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BaseContract {
    uint public data;
    address public owner;

    // Constructor to initialize the contract
    constructor(uint _data) {
        data = _data;
        owner = msg.sender;
    }

    // View function: reads the state but doesn't modify it
    function getData() public view returns (uint) {
        return data;
    }

    // Pure function: doesn't read or modify the state
    function add(uint256 a, uint256 b) public pure returns (uint) {
        return a + b;
    }

    // Payable function: allows the contract to receive Ether
    function deposit() public payable {
        require(msg.value > 0, "Must send some Ether");
    }

    // Function to get the contract balance (view)
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Example of a function that can modify the state
    function setData(uint256 _data) public {
        require(msg.sender == owner, "Only owner can set data");
        data = _data;
    }
}

   
