import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"

const deployEscrowContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    console.log("deploying!")
    const escrowcontract = await deploy("EscrowContract", {
        from: deployer,
        args: [],
        log: true,
    })
    console.log(`deployed escrowcontract to ${escrowcontract.address}`)
}
export default deployEscrowContract
