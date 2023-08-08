"use strict";

const axios = require("axios");
const { fetchAccounts } = require("../src/controller/accountsController");

jest.mock("axios");

describe("fetchAccounts", () => {
  it("should fetch accounts successfully", async () => {
    const mockData = [
      { id: 1, name: "Account 1" },
      { id: 2, name: "Account 2" },
    ];

    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchAccounts();
    expect(result).toEqual(mockData);
  });

  it("should throw an error when fetching accounts fails", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    try {
      await fetchAccounts();
    } catch (error) {
      expect(error.message).toEqual("Error al obtener cuentas");
    }
  });
});
