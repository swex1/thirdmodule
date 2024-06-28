// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleError {
    
    uint public count;
    uint public value;
    address public owner;

    constructor(){
        owner = msg.sender;

    }
    function setNum()public {
        count++;
        require(msg.sender==owner ,"address aere not same ");
    }

    function assNum()public view{
        assert(msg.sender<owner);
    }

    function revNum() public view {
        if(msg.sender!= owner){
            revert("fake user");
        }
    }
}
