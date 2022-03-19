const { expect, assert } = require('chai');
let owner, addr1;

describe('Box', async () => {
    before(async () => {
        [owner, addr1] = await ethers.getSigners();
        this.Box = await ethers.getContractFactory(name = 'Box', signer = owner);
    })

    beforeEach(async () => {
        this.box = await this.Box.deploy();
        await this.box.deployed();
    })

    it('retrive returns a value previously stored', async () => {
        await this.box.store(42);
        // console.log(await this.box.retrieve());
        assert.equal(await this.box.retrieve(), 42);
        expect((await this.box.retrieve()).toString()).to.be.equal('42');
        expect(await this.box.retrieve()).to.be.equal(42);
    })

    it('store emits an event', async () => {
        await expect(this.box.connect(owner).store(42)).to.emit(this.box, 'ValueChanged').withArgs(42);
    })

    it('non owner cannot store a value', async () => {
        await expect(this.box.connect(addr1).store(42)).to.be.revertedWith('Ownable: caller is not the owner');
    })
})