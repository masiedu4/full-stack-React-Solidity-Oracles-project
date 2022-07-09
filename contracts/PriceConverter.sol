// SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

library PriceConverter {
    function getPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
        );
        // int price will have 8 decimal places
        (, int price, , , ) = priceFeed.latestRoundData();

        // will return 18 decimal places
        return uint256(price * 1e10);
    }

    function getConversionRate(uint ethAmount) internal view returns (uint) {
        uint256 ethPrice = getPrice();
        uint ethAmountInUsd = (ethPrice * ethAmount) / 1e18;
        return ethAmountInUsd;
    }
}
