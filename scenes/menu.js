class Level extends Phaser.Scene
{
    constructor()
    {
        super({key: "Level"})
    }

    preload()
    {
        //
    }

    create()
    {
		this.add.text(10, 10, "Test")
    }

    update(time, delta)
    {
        //
    }
}