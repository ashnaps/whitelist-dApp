//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist{
    uint8 public maxWhitelistedAddresses;
    constructor (uint8 _maxWhitelistedAddresses)
    {
        maxWhitelistedAddresses=_maxWhitelistedAddresses;
    }
    // max no. of addresses that can be whitelisted
    // Input will be given by user, need of constructor


   
   mapping(address=>bool) public whiteListedAddresses; 
    //Create a map for keeping tracking the whitelisted addresses
    //if address is mapped ans is (T) else F,by default it is false

    uint8 public numAddressesWhitelisted;
    //keeps the count of whitelisted addresses till time

    function addAddressToWhitelist() public{
        require(!whiteListedAddresses[msg.sender],"Sender has been already whitelisted");
        require(numAddressesWhitelisted < maxWhitelistedAddresses,"More addresses can't be added, limited exceeded");
        whiteListedAddresses[msg.sender]=true;
        numAddressesWhitelisted+=1;
    }

}
//Ashnaaaaa!
