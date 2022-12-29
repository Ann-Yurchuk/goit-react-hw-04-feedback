import styled from '@emotion/styled';

export const FeedbackOptionsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 600px;
background-color: yellow;
border-radius: 15px;
box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
padding: 20px;`

export const Button = styled.button`
cursor: pointer;
border: none;
display: inline-block;
width: 150px;
height: 50px;
padding: 15px;
margin: 10px 20px;
border-radius: 15px;
color: yellow;
box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
letter-spacing: 2px;
text-decoration: none;

&:hover {
color: gray;
box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}
`