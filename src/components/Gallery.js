import React from "react";
import styled, { keyframes } from 'styled-components';
import laundrette from '../assets/averie-woodard-axTG1hSQ6W4-unsplash.jpg'
import pole from '../assets/tim-mossholder-q49oU8NeOHQ-unsplash.jpg'
import local from '../assets/priscilla-du-preez-acNPOikiDRw-unsplash.jpg'
import barber from '../assets/mostafa-meraji-5npGPG0sSVk-unsplash.jpg'
import barber2 from '../assets/jonathan-cooper-sS3qRFsKZlg-unsplash.jpg'
import dogWalker from '../assets/matt-nelson-aI3EBLvcyu4-unsplash.jpg'
import nails from '../assets/kris-atomic-Xa8fX8bQCgs-unsplash.jpg'
import library from '../assets/janko-ferlic-sfL_QOnmy00-unsplash.jpg'
import groomer from '../assets/henar-langa-ZVdZw2p08y4-unsplash.jpg'
import shoes from '../assets/greg-rosenke-9uvZZ54XF3M-unsplash.jpg'
import therapy from '../assets/engin-akyurt-SMwCQZWayj0-unsplash.jpg'
import massage from '../assets/emiliano-vittoriosi-dsy_ILnH69A-unsplash.jpg'
import glasses from '../assets/david-travis-aVvZJC0ynBQ-unsplash.jpg'
import street from '../assets/charlie-green-yAMPbrx-vQE-unsplash.jpg'
import clean from '../assets/austrian-national-library-t5qnrCVkUz8-unsplash.jpg'
import rural from '../assets/annie-spratt-VOq2QltYffI-unsplash.jpg'

function Gallery() {

    const GalleryContainer = styled.div`
        position: absolute;
        top: 0;
    `;

    const Gallery = styled.div`
        height: 100px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(8, 250px);
        grid-template-rows: repeat(2, 250px);
        grid-gap: 0px;
        position: absolute;
        margin: 0;
        padding: 0;
        border: 0;
        top: -5px;
        left: -200px;
        /* perspective: 2000; */
    `;


    const Image = styled.img`
        object-fit: cover;
        height: 100%;
        width: 100%;
        object-fit: cover;
        perspective-origin: top;
        transition: 1s;
        perspective: 500;  
        transform: rotateY(60deg);
        transform-origin: left;
        animation: picMove 10s ease forwards;

        :hover {
            transform: rotateY(0deg);
        }

        @keyframes picMove {
            0% {transform: rotateY(100deg);

            }
            100% {transform: rotateY(0deg);

            }
            
    }
    `;

    

    


    



    return(
        <GalleryContainer>

                <Gallery>
                    <Image src={rural} alt="rural-village"/>
                    <Image src={glasses} alt="glasses"/>
                    <Image src={therapy} alt="therapy"/>
                    <Image src={shoes} alt="shoes"/>
                    <Image src={laundrette} alt="laundrette"/>
                    <Image src={barber} alt="barber"/>
                    <Image src={pole} alt="barber-pole"/>
                    <Image src={clean} alt="cleaner"/>
                    
                    <Image src={street} alt="street"/>
                    <Image src={local} alt="theatre-sign"/>
                    <Image src={barber2} alt="barber"/>
                    <Image src={library} alt="library"/>
                    <Image src={groomer} alt="dog-groomer"/>
                    <Image src={nails} alt="nail-salon"/>
                    <Image src={dogWalker} alt="dog-walker"/>
                    <Image src={massage} alt="massage"/>
                    

                </Gallery>
        </GalleryContainer>


    )
}

export default Gallery;