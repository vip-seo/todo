interface Test {
  color:string;
}
abstract class Human implements Test {
  abstract color: string;
  constructor(protected name: string, protected age: number) {}
  abstract run(): number;
}
class User extends Human {
  color: string = 'white';
  constructor(private one: string, private two: number) {
    super(one, two);
  }

  sayHello(): void {
    console.log('hello ' + this.name)
  }
  run(): number{
    return 4;
  }
}


const mark = new User('Mark', 27);

console.log(mark);

