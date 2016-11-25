class Game {
    private game: Phaser.Game;
    public constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'world', { preload: this.preload, create: this.create });
        let bot = new Bot();
    }
    protected preload() {
        this.game.load.image('logo', 'phaser2.png');
    }
    protected create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }
}