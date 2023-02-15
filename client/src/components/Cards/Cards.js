import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Check out our EPIC Events!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src='./../assets/logos/8.jpg'
              src='https://i.ibb.co/pQdJm7h/8.png'
              text='Innovation Mela'
              path='/innovationMela'
            />
            <CardItem
              //src='https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              src='https://i.ibb.co/8Kg4Rrc/2.png'
              text='Pitch Tank'
              // label='Entrepreneurship'
              path='/pitchTank'
            />
            <CardItem
              // src='./../assets/logos/4.jpg'
              src='https://i.ibb.co/BLTNps4/5.png'
              text='Money Quest'
              // label='Consulting'
              path='/moneyquest'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/hL4k7RV/7.png'
              text='Panel Discussion'
              // label='Panel Discussion'
              path='/paneldis'
            />
            <CardItem
              src='https://i.ibb.co/VQk9nhs/12.png'
              text='Workshops      and      Webinars'
              // label='Consulting'
              path='/workshop'
            />
            <CardItem
              src='https://i.ibb.co/sF96SP1/F.png'
              // label='Genre/topic'
              text='    Fallout    '
              path='/fallout'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/28G490T/money-ball-black-3.jpg'
              text='Money Ball'
              // label='Consulting'
              path='/moneyball'
            />
            <CardItem
              src='https://i.ibb.co/Yjy3N6b/1.png'
              text='Case Maze'
              // label='Consulting'
              path='/casemaze'
            />
            <CardItem
              src='https://i.ibb.co/pQYFnfL/hand-black.jpg'
              text='Youth Panel Discussion'
              // label='Consulting'
              path='/ypd'
            /> 
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i.ibb.co/vkFxdts/Logo-Final.png'
              text='On the Spot'
              // label='Consulting'
              path='/onspot'
            />
            <CardItem
              src="https://i.ibb.co/JxJQ7Pw/iste-logo-meh-Asset-1.png"
              text='ECell x ISTE'
              // label='Consulting'
              path='/iste'
            />
            <CardItem
              src='https://i.ibb.co/ngqpJMD/Untitled26-20230210192807.png'
              text='IDEATASTIC'
              // label='Consulting'
              path='/ideatastic'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
