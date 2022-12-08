import styled from "styled-components";
import deleteIcon from "../../assets/icons/delete_icon.svg"

export const ExpensesItemContainer = styled.div`
display: flex;
flex-direction: column;

width: 100%;
max-height: 200px;

overflow: scroll;
overflow-x : scroll;

`

export const StyledExpensesItem = styled.li`
display: flex;
align-items: center;
justify-content: space-between;

padding: 5px;
margin-top: 5px;

border-bottom: 1px solid lightgray;

:hover{
    background-color: yellow;
    padding: 10px;
    border-radius: 10px;
}
`

export const CostBadge = styled.div`
display: flex;
align-items: center;
justify-content: center;
align-items: center;

box-sizing: border-box;
min-width: 45px;
padding: 3px;

color: white;
background-color: #23C9FF;
border-radius: 10px;

font-size: 8px;
text-align: center;
`

export const BadgeContainer = styled.div`
display: flex;
`

export const DeleteButton = styled.button`
height: 20px;
width: 20px;

margin-left: 20px;
border: 0;
background: center no-repeat url(${deleteIcon});
`