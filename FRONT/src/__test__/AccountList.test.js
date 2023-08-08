import React from "react";
import { render, fireEvent } from "@testing-library/react";

import AccountList from "../components/AccountList/AccountList";

describe("AccountList component", () => {
  it("renders without crashing", () => {
    render(<AccountList accounts={[]} />);
  });

  it("displays account buttons with correct content", () => {
    const accounts = [
      { tipo_letras: "Tipo A", n: 123 },
      { tipo_letras: "Tipo B", n: 456 },
    ];

    const { getByText } = render(<AccountList accounts={accounts} />);

    expect(getByText("Tipo A")).toBeInTheDocument();
    expect(getByText("Nro: 123")).toBeInTheDocument();

    expect(getByText("Tipo B")).toBeInTheDocument();
    expect(getByText("Nro: 456")).toBeInTheDocument();
  });

  it("calls showAccountDetails when an account button is clicked", () => {
    const accounts = [{ tipo_letras: "Tipo A", n: 123 }];
    const showAccountDetailsMock = jest.fn();

    const { getByText } = render(
      <AccountList
        accounts={accounts}
        showAccountDetails={showAccountDetailsMock}
      />
    );

    const accountButton = getByText("Tipo A");
    fireEvent.click(accountButton);

    expect(showAccountDetailsMock).toHaveBeenCalledTimes(1);
    expect(showAccountDetailsMock).toHaveBeenCalledWith(accounts[0]);
  });
});
