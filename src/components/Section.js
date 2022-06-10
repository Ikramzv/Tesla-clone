import styled from 'styled-components'

function Section({title , rightBtnText , leftBtnText , description , backgroundImg , carId}) {

    return (
        <Wrap bgImage={backgroundImg} id={carId} >
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                    <ButtonGroup>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        {rightBtnText ?  
                            <RightButton>
                                {rightBtnText}
                            </RightButton> : rightBtnText 
                        }
                    </ButtonGroup>
                <DownArrow src="images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({bgImage}) => `url("/images/${bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center; 


`

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    width: 256px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    background: rgba(23,26,32,0.8);
    opacity: 0.85;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown 1.5s infinite ;
    
`

const Buttons = styled.div`

`
