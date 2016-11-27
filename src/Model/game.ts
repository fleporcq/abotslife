import Bot = Abl.Bot;

class Game {

    private readonly CAMERA_STEP: number = 10;

    private readonly MAP_SIZE: number = 64;

    private game: Phaser.Game;

    private bots: Map<string, [Bot, Phaser.Sprite]> = new Map();

    private cursors: Phaser.CursorKeys;

    private map: Phaser.Tilemap;

    public constructor() {
        this.game = new Phaser.Game('100%', '100%', Phaser.AUTO, 'world', {
            preload: this.preload.bind(this),
            create: this.create.bind(this),
            update: this.update.bind(this),
            render: this.render.bind(this)
        });
    }

    protected preload() {
        this.game.load.image('bot', 'assets/phaser-dude.png');
        this.game.load.image('tileset', 'assets/ground_1x1.png');
    }

    protected create() {
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.loadMap();
    }

    protected update() {
        this.bots.forEach((botAndSprite) => {

        });
        this.moveCamera();
    }

    protected render() {
        this.debug();
    }

    protected loadMap() {
        let data = '';

        for (var y = 0; y < this.MAP_SIZE; y++) {
            for (var x = 0; x < this.MAP_SIZE; x++) {
                data += this.game.rnd.between(0, 24).toString();

                if (x < this.MAP_SIZE - 1) {
                    data += ',';
                }
            }

            if (y < this.MAP_SIZE - 1) {
                data += "\n";
            }
        }
        this.game.cache.addTilemap('map', null, data, Phaser.Tilemap.CSV);
        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('tileset', 'tileset', 32, 32);

        //  0 is important
        let layer = this.map.createLayer(0);

        //  Scroll it
        layer.resizeWorld();
    }

    public addBot(name: string, position?: Abl.Position): this {
        if (!position) {
            position = new Abl.Position(this.game.world.randomX, this.game.world.randomY);
        }
        let sprite = this.game.add.sprite(position.getX(), position.getY(), 'bot');
        sprite.anchor.set(0.5);
        this.bots.set(name, [new Bot(name, position), sprite]);
        return this;
    }

    public removeBot(name: string): this {
        let sprite = this.bots.get(name)[1];
        sprite.destroy();
        this.bots.delete(name);
        return this;
    }

    public getBot(name: string): Bot {
        return this.bots.get(name)[0];
    }

    public focusOnBot(name: string) {
        this.game.camera.focusOn(this.bots.get(name)[1]);
    }

    protected moveCamera() {

        if (this.cursors.up.isDown) {
            this.game.camera.y -= this.CAMERA_STEP;
        } else if (this.cursors.down.isDown) {
            this.game.camera.y += this.CAMERA_STEP;
        }

        if (this.cursors.left.isDown) {
            this.game.camera.x -= this.CAMERA_STEP;
        } else if (this.cursors.right.isDown) {
            this.game.camera.x += this.CAMERA_STEP;
        }
    }

    protected debug(): void {
        this.game.debug.text('Map size :' + this.MAP_SIZE.toString(), 32, 32);        
        this.game.debug.text('Bots count :' + this.bots.size.toString(), 32, 48);
    }
}