import React , { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {

    const [burgerSt , setBurgerSt] = useState(false)
    const cars = useSelector(selectCars)



    return (
        <Container>
            <TeslaImg>
                <img src="/images/logo.svg" style={{height: '100%' , width: '100%'}}/> 
            </TeslaImg>

            <Menu>
                {cars && cars.map((car , index) => {
                    return <a key={index} href="#">{car}</a>
                })}               
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerSt(true)}></CustomMenu>
            </RightMenu>

            <BurgerNav show={burgerSt}>
                <CustomClose className="close-btn" onClick={()=>setBurgerSt(false)} ></CustomClose>
                {cars && cars.map((car , index) => {
                    return <li key={index}><a href="#">{car}</a></li>
                })}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Use Inventory</a></li>
                <li><a href="#">Trade in</a></li>
                <li><a href="#">CyberTrack</a></li>
                <li><a href="#">Roadaster</a></li>
            </BurgerNav>

        </Container>
    )
}

export default Header;

const Container = styled.div`
    padding: 0px 20px;
    position: fixed;
    left: 0;
    right: 0;
    height: 60px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`

const TeslaImg = styled.div`
    height: 55%;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    
    a {
        font-weight: 600;
        font-size: 16px;
        text-transform: uppercase;
        padding: 0 10px;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`

    display: flex;
    align-items: center;


    a {
        text-transform: uppercase;
        font-size: 18px;
        margin-right: 10px;
        font-weight: bold;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 1000;
    list-style-type: none;
    padding: 20px;
    text-align: start;

    transform: ${({show}) => show ? 'translateX(0)' : 'translateX(100%)'};
    transition: ease .5s transform;

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);

        a {
            font-weight: bold;
        }
    }
`


const CustomClose = styled(CloseIcon)`
    position: fixed;
    right: 10px;
    top: 10px;
    color: red;
    cursor: pointer;

`