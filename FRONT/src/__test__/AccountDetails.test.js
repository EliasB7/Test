import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccountDetails from "../components/AccountDetails/AccountDetails";

describe("AccountDetails Component", () => {
  const mockAccount = {
    moneda: "$",
    saldo: 1000,
    tipo_letras: "Ahorros",
    n: "123456789",
  };

  it("renders account details correctly", () => {
    render(<AccountDetails account={mockAccount} />);

    const saldoText = screen.getByText(
      `Saldo:${mockAccount.moneda}${mockAccount.saldo}`
    );
    const tipoCuentaText = screen.getByText(
      `Tipo de Cuenta: ${mockAccount.tipo_letras}`
    );
    const numeroCuentaText = screen.getByText(
      `Número de Cuenta: ${mockAccount.n}`
    );
    const backButton = screen.getByRole("button", { name: "Regresar" });

    expect(saldoText).toBeInTheDocument();
    expect(tipoCuentaText).toBeInTheDocument();
    expect(numeroCuentaText).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it("calls onBackClick when the back button is clicked", () => {
    const mockOnBackClick = jest.fn();
    render(
      <AccountDetails account={mockAccount} onBackClick={mockOnBackClick} />
    );

    const backButton = screen.getByRole("button", { name: "Regresar" });
    userEvent.click(backButton);

    expect(mockOnBackClick).toHaveBeenCalledTimes(1);
  });
});
