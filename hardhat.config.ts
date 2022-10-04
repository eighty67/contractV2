import { HardhatUserConfig } from "hardhat/config"
// import "@nomiclabs/hardhat-waffle"
import "@nomicfoundation/hardhat-toolbox"
// import "@nomiclabs/hardhat-etherscan"
import "hardhat-deploy"
// import "solidity-coverage"
// import "hardhat-gas-reporter"
// import "hardhat-contract-sizer"
import * as dotenv from "dotenv"
dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL
const account = PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        localhost: {
            chainId: 31337,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: account,
            chainId: 5,
        },
        polygon: {
            url: MAINNET_RPC_URL,
            accounts: account,
            chainId: 137,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
            1: 0,
        },
        payee: {
            default: 1,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.8.0",
            },
            {
                version: "0.6.6",
            },
        ],
    },
}

export default config
