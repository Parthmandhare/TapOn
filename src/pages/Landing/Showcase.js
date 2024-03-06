import React , { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import img1 from '../../assets/img/gamer.png'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: rgb(30 41 59 );
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
    animation-duration: 15s;
    @media (max-width: 30em){
    animation-duration: 10s;



    }
}

&>*:last-child{
    animation-duration: 10s;
    @media (max-width: 30em){
    animation-duration: 5s;



    }
}

`

const move = keyframes`

0%{transform:translateX(100%)};
100%{transform:translateX(-100%)}

`

const Title = styled.div`

/* background-color: lightblue; */
color: white;
font-size: 3em;
font-weight: 500;
margin: 2rem 0;
display: flex;

@media (max-width: 48em){
    width: 12rem;

    }
    @media (max-width: 30em){
        font-size: 2em;
        margin-left: 3rem;
    }

`
const Row = styled.div`

/* background-color: lightblue; */
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;
animation: ${move}  linear infinite ${props=>props.direction};







`

const ImgContainer = styled.div`
width: 25rem;
margin: 0 1rem;
background-color: white;
height: 30rem;
text-align: center;
padding: 1em;

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
    width: 12rem;

    }
    @media (max-width: 30em){
    width: 15rem;
    height: 25rem;
    }





img{
    width: 50%;
    height: auto;
    border-radius: 40;
    padding:0.8rem;
    margin-left: 30%;
    border-bottom: 1px solid black;
    
}

h2{
        font-size: 1em;
        white-space: normal;
        align-self: flex-start;
        margin: 1rem auto;
        font-weight: 500;
        align-items: center;
        justify-content: center;

        @media (max-width: 30em){
        font-size: 1em;

        }
    }

`
const Textcontainer = styled.div`

    /* padding: 0.8rem; */
    max-width: 100%;
    /* background-color: yellow; */
    overflow-y: auto; /* Enable vertical scrolling */
    margin-left: 0.6em;
    margin-right: 0.6em;
    display: flex;
    
    
    p{
        font-size: 1.1em;
        white-space: normal;
        align-self: flex-start;
        margin: 1rem auto;
        font-weight: 400;
        align-items: center;
        justify-content: center;
        line-height: 1.75em;

        @media (max-width: 30em){
        font-size: 0.9em;

    }


    }

 

`


    
  



const Item = ({img,content,name, passRef})=>{

    let play=(e)=>{
        passRef.current.style.animationPlayState='running';
    }
    let pause=(e)=>{
        passRef.current.style.animationPlayState='paused';
    }

    return(

        <ImgContainer onMouseOver={e=>pause(e)} onMouseOut={e=>play(e)}>
        <img src={img} alt="itemimg"/>
        <Textcontainer>
        <p>{content}</p>
        </Textcontainer>
        <h2>{name}</h2>
        
        


        
        
        </ImgContainer>
    )
}



const Showcase = () => {

    const Row1Ref= useRef(null);
    const Row2Ref= useRef(null);
  return (
    <Section>
        <Title>Testimonial</Title>
        <Row direction ="none" ref={Row1Ref}>

            <Item img={img1} content="MiniWeb Pages turned my static business card into a dynamic online presence. It's incredible how much impact a single page can have. Highly recommend!" name="- Sarah K., Entrepreneur" passRef={Row1Ref}/>

            <Item img={img1} content="MiniWeb Pages transformed the way I network. Now, I have a sleek and professional online presence that stands out from the crowd." name="- Jason M." passRef={Row1Ref}/>

            <Item img={img1} content="I was amazed by how easy it was to create my MiniWeb Page. In just a few simple steps, I had a personalized showcase for my services. Fantastic platform! " name="- Emily S., Freelancer" passRef={Row1Ref}/>



        </Row>
        <Row direction ="reverse" ref={Row2Ref}>

            <Item img={img1} content="As a small business owner, I needed something more than just a traditional business card. MiniWeb Pages provided the perfect solution, allowing me to showcase my brand and offerings effectively." name="- David R., Small Business Owner" passRef={Row2Ref}/>
            <Item img={img1} content="I've received so many compliments on my MiniWeb Page! It's been a game-changer for my personal branding efforts. Thank you for such a user-friendly platform!" name=" - Rachel L., Creative Professional" passRef={Row2Ref}/>
            <Item img={img1} content="MiniWeb Pages helped me streamline my online presence. Now, instead of juggling multiple platforms, I have everything I need in one concise page. It's simplified my life!" name="- Mark D., Entrepreneur" passRef={Row2Ref}/>



        </Row>

        



    </Section>
  )
}

export default Showcase