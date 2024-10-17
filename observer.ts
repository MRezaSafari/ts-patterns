class Subject {
  private observers: Function[] = [];

  subscribe(fn: Function) {
    this.observers.push(fn);
  }

  notify(data: any) {
    this.observers.forEach((ob) => ob(data));
  }
}

const subject = new Subject();

subject.subscribe((data) => console.log(`Data Received: ${data}`));

subject.notify("My Data hell rldl")
