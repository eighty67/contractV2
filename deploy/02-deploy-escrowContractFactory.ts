import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../utils/verify"

const deployEscrowContractFactory: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const EscrowContractFactory = await deploy("EscrowContractFactory", {
        from: deployer,
        log: true,
    })

    console.log(`deployed escrowcontract to ${EscrowContractFactory.address}`)
    if (network.config.chainId != 31337) {
        await verify(EscrowContractFactory.address, [])
    } else {
        console.log(
            "can't verify on localhost. suggest: yarn hardhat deploy --network<network name>"
        )
    }
}
export default deployEscrowContractFactory
