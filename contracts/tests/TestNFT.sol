// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2;

import "../extensions/VRC725Enumerable.sol";

contract TestNFT is VRC725Enumerable {
    constructor(string memory name, string memory symbol, address issuer) {
        __VRC725_init(name, symbol, issuer);
    }

    function _estimateFee(uint256) internal view override returns (uint256) {
        return minFee();
    }

    function mint(address owner, uint256 tokenId) external onlyOwner {
        _safeMint(owner, tokenId);
    }
}