namespace Abl {
    export class Bot {

        private name: string;

        private position: Position;

        public constructor(name: string, position?: Position) {
            this.name = name;
            this.position = position;
        }

        public sayHello(): this {
            console.log('Hello! my name is ' + this.name);
            return this;
        }

        public getPosition(): Position {
            return this.position;
        }
    }
}