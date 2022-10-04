import { assert, expect } from "chai"
import { network, deployments, ethers, getNamedAccounts } from "hardhat"
import { EscrowContract } from "../../typechain-types"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { describe, it } from "node:test"

import { BigNumber } from "ethers"

describe("EscrowContract", () => {
    let accounts: SignerWithAddress[]
    let payee: SignerWithAddress

    beforeEach(async () => {
        accounts = await getNamedAccounts()
        payee = accounts[1]
    })
    describe("depositOf", () => {
        it("should return the amount deposiyed by the payee", async () => {
            let EscrowContract: EscrowContract = await ethers.getContract("EscrowContract")
            let value = await EscrowContract.depositsOf(payee.address)
            assert.equal(value, "0")
        })
    })
    describe("", () => {
        it("")
    })
})
