import { assert, expect } from "chai"
import { network, deployments, ethers, getNamedAccounts } from "hardhat"
import { EscrowContract } from "../../typechain-types"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { describe, it } from "node:test"

describe("EscrowContract", () => {
    // let account: SignerWithAddress
    // let payee: SignerWithAddress

    // beforeEach(async () => {
    //     account = await getNamedAccounts()
    //     payee =
    // })
    it("should return the amount deposiyed by the payee", async () => {
        let accounts: SignerWithAddress = await getNamedAccounts()
        let depositor: SignerWithAddress = accounts[0]
    })
})
