import Bot = Abl.Bot;

class Game {

    private game: Phaser.Game;

    private bots: Map<string, Bot> = new Map();

    public constructor() {
        this.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'world', {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this),
            render: this.render.bind(this)
        });
    }

    protected preload() {
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.load.image('background', 'assets/debug-grid-1920x1920.png');
        this.game.load.image('bot', 'assets/phaser-dude.png');
    }

    protected create() {
        this.game.add.tileSprite(0, 0, 1920, 1920, 'background');
    }

    protected update() {
        this.bots.forEach((bot: Bot) => {

        });
    }

    protected render() {
        this.debug();
    }

    public addBot(name: string, position?: Abl.Position): this {
        this.bots.set(name, new Bot(name, position));
        if (position) {
            this.game.add.sprite(position.getX(), position.getY(), 'bot');
        }
        return this;
    }

    public removeBot(name: string): this {
        this.bots.delete(name);
        return this;
    }

    public getBot(name: string): Bot {
        return this.bots.get(name);
    }

    protected debug(): void {
        this.game.debug.text(this.bots.size.toString(), 32, 32);
    }
}