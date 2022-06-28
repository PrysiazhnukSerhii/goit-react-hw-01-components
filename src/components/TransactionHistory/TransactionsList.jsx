import PropTypes from 'prop-types';
import { PaintingTransactionsCard } from './TransactionsCard';
import { TransactionTable, TableTh, TableItem } from './Transaction.styled';

export function PaintingTransactionsList({ items }) {
  return (
    <TransactionTable className="transaction-history">
      <thead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableItem key={item.id} total={items.indexOf(item)}>
            <PaintingTransactionsCard
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </TableItem>
        ))}
      </tbody>
    </TransactionTable>
  );
}

PaintingTransactionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
