import React, { useState } from "react";
import styles from "./AccountList.module.css";

interface Account {
  moneda: string;
  saldo: number;
  tipo_letras: string;
  n: string;
}

interface Props {
  accounts: Account[];
  showAccountDetails: (account: Account) => void;
}

function AccountList({ accounts, showAccountDetails }: Props) {
  const segmentSizes = [5, 4, 4];

  const [currentPage, setCurrentPage] = useState<number>(0);
  const totalSegments = segmentSizes.length;
  const currentSegment = Math.min(currentPage, totalSegments - 1);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalSegments) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = segmentSizes
    .slice(0, currentSegment)
    .reduce((acc, size) => acc + size, 0);
  const endIndex = startIndex + segmentSizes[currentSegment];
  const currentAccounts = accounts.slice(startIndex, endIndex);

  return (
    <div>
      <div className={styles.pagination}>
        {currentSegment > 0 && (
          <button
            onClick={() => handlePageChange(currentSegment - 1)}
            className={styles.paginationButton}
          >
            {"<< Anterior"}
          </button>
        )}
        {currentAccounts.map((account, index) => (
          <button
            key={index}
            onClick={() => showAccountDetails(account)}
            className={styles.accountButton}
          >
            <p>{account.tipo_letras}</p>
            <p>Nro: {account.n}</p>
          </button>
        ))}
        {currentSegment < totalSegments - 1 && (
          <button
            onClick={() => handlePageChange(currentSegment + 1)}
            className={styles.paginationButton}
          >
            {"Siguiente >>"}
          </button>
        )}
      </div>
    </div>
  );
}

export default AccountList;
