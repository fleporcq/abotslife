class Game {

    private game: Phaser.Game;

    private bot: Bot;

    public constructor() {
        this.game = new Phaser.Game('100', '100', Phaser.AUTO, 'world', { preload: this.preload, create: this.create });
        this.bot = new Bot();
    }

    protected preload() {
    }

    protected create() {
        
    }

    public getBot(): Bot {
        return this.bot;
    }
}