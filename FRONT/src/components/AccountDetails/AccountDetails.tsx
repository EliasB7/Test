import React from "react";
import styles from "./AccountDetails.module.css";

interface Account {
  moneda: string;
  saldo: number;
  tipo_letras: string;
  n: string;
}

interface AccountDetailsProps {
  account: Account;
  onBackClick: () => void;
}

function AccountDetails({ account, onBackClick }: AccountDetailsProps) {
  return (
    <div className={styles["account-details"]}>
      <h2>Detalles de cuenta:</h2>
      <p>
        Saldo:
        {account.moneda}
        {account.saldo}
      </p>
      <p>Tipo de Cuenta: {account.tipo_letras}</p>
      <p>Número de Cuenta: {account.n}</p>
      <button onClick={onBackClick} className={styles.button}>
        Regresar
      </button>
    </div>
  );
}

export default AccountDetails;
