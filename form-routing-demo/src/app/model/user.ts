export class User {
    id: number = 0;
    name: string = "";
    age: number = 18;
    email: string = "";
    password: string = "";

    constructor(settings: any = {}) {
      for (let k in settings) {
        this[k] = settings[k];
      }
    }

    get isAdult(): boolean {
      return this.age > 17;
    }
}
