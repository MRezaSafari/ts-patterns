// Normal Implementation
function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

const degree = 21;

const converter = convertToFahrenheit(convertToCelsius(degree));

// With Builder Pattern

class DegreeConverter {
  private baseDegree = 0;
  private _celsius = 0;
  private _fahrenheit = 0;

  constructor(degree: number) {
    this.baseDegree = degree;
    this._celsius = null;
    this._fahrenheit = null;
  }

  convertToCelsius() {
    if (this._celsius === null) {
      this._celsius = ((this.baseDegree - 32) * 5) / 9;
    } else {
      this._celsius = ((this._celsius - 32) * 5) / 9;
    }

    return this;
  }

  convertToFahrenheit() {
    this._celsius = (this._fahrenheit * 9) / 5 + 32;
    return this;
  }

  get celsius() {
    return this._celsius;
  }

  get fahrenheit() {
    return this._fahrenheit;
  }
}

const dgc = new DegreeConverter(50).convertToFahrenheit().convertToCelsius();

const f = dgc.fahrenheit;
const c = dgc.celsius;

