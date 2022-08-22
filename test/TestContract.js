require('dotenv').config();
const { deployments, ethers } = require('hardhat');
const { expect } = require("chai");


describe("TestContract", function () {
  beforeEach(async function() {
    await deployments.fixture(['test']);
  });

  describe('printHello()', function() {
    it('emits MyMessage event', async function() {
      const TestContract = await ethers.getContract('TestContract');
      await expect(
        TestContract.printHello()
      ).to.emit(TestContract, 'MyMessage').withArgs('Hellow, World');
    });
  });

});
