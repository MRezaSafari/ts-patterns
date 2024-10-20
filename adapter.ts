class OldApi {
  getData(): string {
    return "Data";
  }
}

class newApi {
    fetchData(): string {
        return "Data";
    }
}

class ApiAdapter {
    private oldApi: OldApi;
    
    constructor(oldApi: OldApi) {
        this.oldApi = oldApi;
    }

    gatherData(): string {
        return this.oldApi.getData();
    }
}

const oldApi = new OldApi();
const adapter = new ApiAdapter(oldApi);

adapter.gatherData();
