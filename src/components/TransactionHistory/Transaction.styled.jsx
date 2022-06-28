import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 400px;
  margin-bottom: 20px;
  margin-left: 100px;
  padding: 0;
`;

export const TableTh = styled.th`
  font-weight: bold;
  padding: 5px;
  background: blue;
  color: white;
  border: 1px solid #dddddd;
`;

export const TableItem = styled.tr`
  background: ${props => {
    if (props.total % 2) {
      return 'gray';
    }
    return 'white';
  }};
  color: black;
  border: 1px solid #dddddd;
`;
