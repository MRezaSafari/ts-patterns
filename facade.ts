class DatabaseInitializer {
  // connect to DB and initialize
  initializer() {
    console.log('Initializing database...');
  }
}

class LoggingServer {
  log(message: string) {
    console.log(message);
  }
}

class App {
    private db = new DatabaseInitializer();
    private logger = new LoggingServer();

    run() {
        this.logger.log('Starting app...');
        this.db.initializer();
    }
}

const app = new App();
// Initialize the database and log that it is starting up
app.run();