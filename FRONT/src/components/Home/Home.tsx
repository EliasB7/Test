import React, { useState, useEffect } from "react";
import AccountList from "../AccountList/AccountList";
import AccountDetails from "../AccountDetails/AccountDetails";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import styles from "./Home.module.css";

interface Account {
  moneda: string;
  saldo: number;
  tipo_letras: string;
  n: string;
}

function Home() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch("http://localhost:3001/accounts");
      const data = await response.json();
      setAccounts(data.cuentas || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const accountTypeMapping: Record<string, string> = {
    cc: "Cuenta Corriente",
    ca: "Cuenta de Ahorro",
    ccp: "Cuenta Corriente Personal",
  };

  const showAccountDetails = (account: Account) => {
    setSelectedAccount(account);
  };

  const handleBackClick = () => {
    setSelectedAccount(null);
  };

  return (
    <div>
      <NavBar />
      <p className={styles.p}>Consulte su saldo</p>
      {selectedAccount ? (
        <h2 className={styles.margin}>ESTE ES TU SALDO ACTUAL</h2>
      ) : (
        <h2 className={styles.margin}>SELECCIONE LA CUENTA A CONSULTAR</h2>
      )}
      {accounts && accounts.length > 0 ? (
        selectedAccount ? (
          <AccountDetails
            account={{
              ...selectedAccount,
              tipo_letras:
                accountTypeMapping[selectedAccount.tipo_letras.toLowerCase()] ||
                selectedAccount.tipo_letras,
            }}
            onBackClick={handleBackClick}
          />
        ) : (
          <AccountList
            accounts={accounts.map((account) => ({
              ...account,
              tipo_letras:
                accountTypeMapping[account.tipo_letras.toLowerCase()] ||
                account.tipo_letras,
            }))}
            showAccountDetails={showAccountDetails}
          />
        )
      ) : (
        <p>Cargando cuentas...</p>
      )}
      <Footer />
    </div>
  );
}

export default Home;
