import styled from '@emotion/styled'

export const StatList = styled.ul`
list-style: none;
padding:0;

display:flex;
margin-left:200px;
`
export const StatsItem = styled.li`
display:flex;
flex-direction: column;
padding: 5px;
border: 1px solid black;
background:  ${()=> { 
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return `${color}`;}};
`