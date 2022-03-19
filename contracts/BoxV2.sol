// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV2 is Initializable, OwnableUpgradeable {
    uint256 private _value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    function initialize(uint256 value) public initializer {
        _value = value;
    }

    // Stores a new value in the contract
    function store(uint256 value) public onlyOwner {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }

    function increment() public onlyOwner {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}
