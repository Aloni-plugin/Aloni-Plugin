import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@fontsource/licorice';
import '@fontsource/poppins';

gsap.registerPlugin(ScrollTrigger);

export const DiagonalCutSection = ({
    bottomRightColor = '#a8d5ba',
    topLeftColor = '#f4c2c2',
    showScissors = true,
    scissorsWidth = 120,
    scissorsHeight = 120,
    scissorsImagePath = '/wp-content/plugins/Aloni-Plugin/images/scissors.png',
    showWavyLines = true,
    showLeafs = true,
    children,
    onButtonClick,
}) => {
    const sectionRef = useRef(null);
    const stackedImagesRef = useRef(null);

    useEffect(() => {
        if (!stackedImagesRef.current) return;

        const images = stackedImagesRef.current.querySelectorAll('.stackedImage');

        // Images are now positioned with specific coordinates and rotations from Figma
        // The CSS handles the final positioning, so we can add subtle animations if needed
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="diagonalSection">
            <div
                className="triangleTopLeft"
                style={{ background: topLeftColor }}
            >
                {showWavyLines && (
                    <img
                        src="/wp-content/plugins/Aloni-Plugin/images/wavy-lines.svg"
                        alt="Wavy lines decoration"
                        className="wavyLines"
                    />
                )}

                <div className="pinkContent">
                    <div className="barberSection">
                        <div className="textOverlays">
                            <h1 className="kapsalonTitle">
                                <span className="kapsalonText">Kapsalon</span>
                                <span className="denizText">Deniz</span>
                            </h1>
                            <p className="kapsalonSubtitle">Een prachtig nieuw kapsel....</p>
                        </div>
                        
                        <div className="mainImageFrame">
                            <img
                                src="/wp-content/plugins/Aloni-Plugin/images/Kapsalon-image.png"
                                alt="Kapsalon with barber and tools"
                                className="mainImage"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="triangleBottomRight"
                style={{ background: bottomRightColor }}
            >
                {showLeafs && (
                    <img
                        src="/wp-content/plugins/Aloni-Plugin/images/moving-leafs.svg"
                        alt="Leaf decorations"
                        className="movingLeafs"
                    />
                )}

                <div className="greenContent">
                    <div className="atelierSection">
                        <div className="atelierTextOverlays">
                            <h1 className="atelierTitle">
                                <span className="atelierText">Atelier</span>
                                <span className="atelierDenizText">Deniz</span>
                            </h1>
                            <p className="atelierSubtitle">Of je oude kleding als nieuw?</p>
                        </div>
                        
                        <div className="atelierImageFrame">
                            <img
                                src="/wp-content/plugins/Aloni-Plugin/images/Atelier Main.png"
                                alt="Atelier with clothing repair"
                                className="atelierImage"
                            />
                        </div>

                        <button 
                            className="kledingButton"
                            onClick={onButtonClick || (() => window.location.href = '/contact')}
                        >
                            👔 Kleding afspraak
                        </button>
                    </div>
                </div>
            </div>

            <svg className="dashedLine">
                <line x1="100%" y1="0%" x2="0%" y2="100%" />
            </svg>

            {showScissors && (
                <div 
                    className="scissorsAnimation"
                    style={{
                        width: `${scissorsWidth}px`,
                        height: `${scissorsHeight}px`,
                        transform: `rotate(${235}deg)`
                    }}
                >
                    <img src={scissorsImagePath} alt="Scissors" />
                </div>
            )}

            <div className="content">
                {children}
            </div>

            <button 
                className="kapperButton"
                onClick={onButtonClick || (() => window.location.href = '/contact')}
            >
                ✂️ Kapper afspraak
            </button>
        </section>
    );
};
