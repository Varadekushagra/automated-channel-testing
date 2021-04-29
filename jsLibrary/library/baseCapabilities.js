class baseCapabilities {
  constructor() {
    this.capability = {
      "robustest.projectID": "608a66075b020ad0b4e03fcc", //robustest project id
      "robustest.buildID": "608a66185b020ad0b4e03fd0", // robustets build id
      // "robustest.jobIdentifier":
      //  "Roku Test" + new Date().getHours() + new Date().getMinutes(), // job identifier
      "robustest.jobIdentifier": "RokuTestGreatest",
      "robustest.accessKey": "kEs6cXaAswB7jCbA78SJw6dPNx4", // access key,
      "robustest.baseURL": "http://localhost:8085/roku/v1/session",
      "robustest.rokuUser": "rokuDev",
      "robustest.rokuPassword": "123456",
    };
  }
  getCapability() {
    return this.capability;
  }
}
module.exports.baseCapabilities = baseCapabilities;
