class Light {
    turnOn() {
        console.log("Light is ON");
    }

    turnOff(){
        console.log("Light is OFF");
    }
}

class LightOnCommand {
    constructor(private light: Light) {}

    execute() {
        this.light.turnOn();
    }
}

class LightOffCommand {
    constructor(private light: Light) {}

    execute() {
        this.light.turnOff();
    }
}

const kitchenLight = new Light();
const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);

kitchenLightOn.execute();
kitchenLightOff.execute();