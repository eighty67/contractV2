import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../utils/verify"
import fs from "fs"

const deployEscrowContract: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const myAddress = "0xD8E752BB6Fc4BEEB2E820D9409d76FD30df41dFe"

    console.log("deploying!")
    const escrowcontract = await deploy("EscrowContract", {
        from: deployer,
        args: [myAddress],
        log: true,
    })

    console.log(`deployed escrowcontract to ${escrowcontract.address}`)
    if (network.config.chainId != 31337) {
        await verify(escrowcontract.address, [myAddress])
    } else {
        console.log(
            "can't verify on localhost. suggest: yarn hardhat deploy --network<network name>"
        )
    }

    // const data = {
    //     address: escrowcontract.address,
    //     abi: JSON.parse(escrowcontract.interface.format("json")),
    // }

    fs.writeFileSync("./EscrowContract.json", JSON.stringify(data))
}
export default deployEscrowContract
