//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist{
    uint8 public maxAddresses;
    constructor (uint8 _maxAddresses)
    {
        maxAddresses=_maxAddresses;
    }
    // max no. of addresses that can be whitelisted
    // Input will be given by user, need of constructor


   
   mapping(address=>bool) public whiteListedAddresses; 
    //Create a map for keeping tracking the whitelisted addresses
    //if address is mapped ans is (T) else F,by default it is false

    uint8 public numWhiteListed;
    //keeps the count of whitelisted addresses till time

    function addAddresstoWhitelist() public{
        require(!whiteListedAddresses[msg.sender],"Sender has been already whitelisted");
        require(numWhiteListed < maxAddresses,"More addresses can't be added, limited exceeded");
        whiteListedAddresses[msg.sender]=true;
        numWhiteListed+=1;
    }

}

