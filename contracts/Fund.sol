// SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./PriceConverter.sol";

contract FundMe is Ownable {
    using PriceConverter for uint256;

    uint256 public constant MINIMUM_USD = 50 * 1e18;

    // address array to store all our funders
    address[] public funders;
    mapping(address => uint) public addressToAmountFunded;

    // fund() allows accounts to send money to the smart contract

    function fund() public payable {
        require(
            msg.value.getConversionRate() >= MINIMUM_USD,
            "You are not sending enough ETH!"
        );

        // add to array
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public onlyOwner {
        // reset the addressToAmountFunded mappng balance before withdrawing

        for (uint i = 0; i < funders.length; i++) {
            address funder = funders[i];
            addressToAmountFunded[funder] = 0;
        }

        // reset the array
        funders = new address[](0);

        // withdraw the funds
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success, "Withdrawal Failed!");
    }

    // funds received without calling the fund() function will be recorded too
    receive() external payable {
        fund();
    }
}
