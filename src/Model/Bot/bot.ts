namespace Abl {
    export class Bot {

        private name: string;

        private position: Position;

        private scheduledActions: Action[] = [];

        public constructor(name: string, position?: Position) {
            this.name = name;
            this.position = position;
            this.scheduleAction(new Action.say('Hello! my name is ' + this.name));
        }

        public getPosition(): Position {
            return this.position;
        }

        public scheduleAction(action: Action): this {
            this.scheduledActions.push(action);
            return this;
        }

        public getNextAction(): Action {
            return this.scheduledActions.shift();
        }
    }
}