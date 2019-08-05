export class Student {
    name: string;
    age: number;
    skills: {name: string, level: number}[];
    email: string;
    gender: boolean = false;
    regDate: Date = new Date();
}
