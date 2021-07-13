import React from 'react';
import styled from 'styled-components';
import Image from './QRcode/qrcode.png';

const TripInfo=()=>{
    return(
        <>
        <Info>
            <InfoBox>
                <section>
                    <h6>Ship Name</h6>
                    <p>The Knight Rider</p>
                </section>
                <section>
                    <h6>Departure</h6>
                    <p>Mumbai</p>
                    <p>Sat,16 Oct 2021</p>
                    <p>08:00PM</p>
                </section>
            </InfoBox>
        </Info>
        <Info>
            <InfoBox>
                <section>
                    <h2>MS Andy Symond</h2>
                </section>
                <section>
                    <h6>Arrival</h6>
                    <p>Mumbai</p>
                    <p>Mon,18 Oct 2021</p>
                    <p>08:00AM</p>
                </section>
            </InfoBox>
        </Info>
        <Info>
             <InfoBox>
                <section style={{"marginTop":"120px"}}>
                    <p>Room Category<span style={{"fontSize":"18px","color":"#535353"}}>: Interior</span></p>
                    <p>Deck No<span style={{"fontSize":"18px","color":"#535353"}}>: 11</span></p>
                    <p>Room No<span style={{"fontSize":"18px","color":"#535353"}}>: 9004</span></p>
                </section>
            </InfoBox>
        </Info>
        <Info>
            <InfoBox>
                <section style={{"marginTop":"120px"}}>
                    <p>Group 1</p>
                    <p style={{"fontSize":"18px","color":"#535353"}}>1200 - 1230 pm</p>
                </section>
            </InfoBox>
        </Info>
        <Info>
            <InfoBox>
                <section>
                    <p>Scan QR Code</p>
                    <img src={Image} alt=""/>
                </section>
            </InfoBox>
        </Info>
        
        </>
    )
}

export default TripInfo;

const Info = styled.div`
display: flex;
width: 100%;
flex-direction: row;
text-align:justify;
justify-content: space-around;

`;

const InfoBox = styled.div`
display: flex;
flex-direction: column;
>section {
    padding: 25px;
>h6{
    font-size:14px;
    color: #535353;
    padding: 2px;
    font-weight:normal;
}
>p{
    font-weight: 500;
font-size: 18px;
line-height: 130%;
color: #500E4B;
padding: 3px;
}
>h2{
    font-weight: bold;
font-size: 20px;
color: #500E4B;
margin-top:25px;
}
>img{
   width: 154px;
height: 133px;
margin-top:20px;
}
}
`;
