import styled from '@emotion/styled';

export const FrendList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const FrendItem = styled.li`
display:flex;
justify-content: center;
width: 150px;
margin-bottom: 8px;
background-color: #fff;
border-radius: 0px 0px 4px 4px;
 box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
}`;

export const Status = styled.p`
  color: ${props => {
    if (props.children === 'online') {
      return 'green';
    }

    return 'red';
  }};
`;
