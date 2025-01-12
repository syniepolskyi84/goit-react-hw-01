import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <table>
      <thead className={css.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
          <tr key={id}>
            <td className={css.type}>{type}</td>
            <td className={css.amount}>{amount}</td>
            <td className={css.currency}>{currency}</td>
          </tr>
        )
        })
        }
      </tbody>
    </table >
  );
};

export default TransactionHistory;
