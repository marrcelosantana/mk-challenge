describe("client search", () => {
  const clients = [{ name: "John Doe" }, { name: "Peter Parker" }];

  it("should find the client by name", () => {
    const selectedClient = "John Doe";
    const foundClient = clients.find(
      (client) => client.name === selectedClient
    );

    expect(foundClient).toBeDefined();
    expect(foundClient?.name).toBe(selectedClient);
  });

  it("should not find the client if it does not exist", () => {
    const selectedClient = "Ana Maria";
    const foundClient = clients.find(
      (client) => client.name === selectedClient
    );

    expect(foundClient).toBeUndefined();
  });
});
