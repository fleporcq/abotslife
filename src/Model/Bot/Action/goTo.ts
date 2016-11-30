namespace Abl.Action {
    export class goTo implements Action {

        private destination: Position;

        public constructor(destination: Position) {
            this.destination = destination;
        }

        public getDestination(): Position {
            return this.destination;
        }
    }
}