interface Button {
  render(): void;
}

enum ButtonType {
  MALE,
  FEMALE,
}

class ButtonFactory {
  static createButton(type: ButtonType): Button {
    switch (type) {
      case ButtonType.MALE:
        return new MaleClothButton();

      case ButtonType.FEMALE:
        return new FemaleClothButton();
    }
  }
}

class MaleClothButton implements Button {
  render(): void {
    console.log("Male Cloth Button Producing.");
  }
}

class FemaleClothButton implements Button {
  render(): void {
    console.log("Female Cloth Button Producing.");
  }
}

// Pre order
const maleButton1 = ButtonFactory.createButton(ButtonType.MALE);
const maleButton2 = ButtonFactory.createButton(ButtonType.MALE);

// Pre order
const femaleButton1 = ButtonFactory.createButton(ButtonType.FEMALE);

// Actual Producing
maleButton1.render();
maleButton2.render();

femaleButton1.render();

// Example 2

interface Database {
    connect(): void;
    url: string;
}

class MongoDB implements Database {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    connect(): void {
        console.log(`Connectin to MongoDB. URL: ${this.url}`);
    }
}

class Postgres implements Database {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    connect(): void {
        console.log(`Connectin to Postgres. URL: ${this.url}`);
    }
}

enum DatabaseType {
    POSTGRES,
    MONGODB,
}

class DatabaseFactory {
    static requestConnection(dbType: DatabaseType, url: string): Database {
        switch (dbType) {
            case DatabaseType.POSTGRES:
                return new Postgres(url);

            case DatabaseType.MONGODB:
                return new MongoDB(url);
        }
    }
}

const pgdb = DatabaseFactory.requestConnection(DatabaseType.POSTGRES, "pgsql://");
const mongodb = DatabaseFactory.requestConnection(DatabaseType.POSTGRES, "mongo://");

pgdb.connect();
mongodb.connect();