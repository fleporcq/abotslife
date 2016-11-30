namespace Abl.Action {
    export class say implements Action{

        private phrase: string;

        public constructor(phrase: string) {
            this.phrase = phrase;
        }

        public getPhrase() {
            return this.phrase;
        }
    }
}