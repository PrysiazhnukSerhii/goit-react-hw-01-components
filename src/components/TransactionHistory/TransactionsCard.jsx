import PropTypes from 'prop-types';

export function PaintingTransactionsCard({ type, amount, currency, id }) {
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

PaintingTransactionsCard.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
