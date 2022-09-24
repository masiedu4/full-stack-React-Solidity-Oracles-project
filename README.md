# Solidity Project with Data Feeds and Oracles from Chaninlink


We can create a pool into which players/contributors can deposit funds when we create a FundMe game.

The issue is determining how to ensure that users do not send amounts that are greater or less than the required amount.

This project is divided into two parts. The smart contract logic retrieves the current price of ETH from Chainlink Data feeds (oracle) and ensures that amounts sent to the smart contract are equal to or greater than the required value in USD.

This interaction is enabled by the frontend components.

## Key Concepts Applied

- Chainlink Data Feeds for Fetching External Data
- Reentrancy Check
- Smart Contract Ownership
- Decimals in Smart Contracts
- Using Hardhatt and deploying on a testnet
- Using library...for


## Preview

![preview](https://elmerlar.sirv.com/Screenshot%20(122).png)
![preview](https://elmerlar.sirv.com/Screenshot%20(123).png)

Check out the [main](https://github.com/masiedu4/full-stack-React-Solidity-Oracles-project/tree/main) branch for the frontend part of this project and [master](https://github.com/masiedu4/full-stack-React-Solidity-Oracles-project/tree/master) for the smart contract logic.
