namespace Abl {
    export class Position {

        private x: number;
        private y: number;

        public constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public getX(): number {
            return this.x;
        }

        public getY(): number {
            return this.y;
        }
    }
}