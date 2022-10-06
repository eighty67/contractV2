// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./EscrowContract.sol";

contract EscrowContractFactory {
    EscrowContract[] public Accounts;
    event EscrowStarted(uint256 date, address beneficiary, address AccountAddresses);

    function create(address payable beneficiary_) external {
        EscrowContract Escoww = new EscrowContract(beneficiary_);
        Accounts.push(Escoww);
        emit EscrowStarted(block.timestamp, beneficiary_, address(Escoww));
    }
}
