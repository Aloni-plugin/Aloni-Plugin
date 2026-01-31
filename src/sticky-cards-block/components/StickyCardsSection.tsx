import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StickyCards.css';

gsap.registerPlugin(ScrollTrigger);

export const StickyCardsSection: React.FC = () => {
    const stickyRef = useRef<HTMLElement>(null);
    const cardContainerRef = useRef<HTMLDivElement>(null);
    const stickyHeaderRef = useRef<HTMLHeadingElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    const [isGapCompleted, setIsGapCompleted] = useState(false);
    const [isFlipCompleted, setIsFlipCompleted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

            let gapAnimationCompleted = false;
            let flipAnimationCompleted = false;

            // Gap animation timeline
            const gapTl = gsap.timeline({ paused: true });
            gapTl
                .to(cardContainerRef.current, { gap: 30, duration: 1, ease: 'power3.out' }, 0)
                .to(card1Ref.current, { x: -30, duration: 1, ease: 'power3.out' }, 0)
                .to(card3Ref.current, { x: 30, duration: 1, ease: 'power3.out' }, 0)
                .to(cards, { borderRadius: '20px', duration: 1, ease: 'power3.out' }, 0);

            // Flip animation timeline
            const flipTl = gsap.timeline({ paused: true });
            flipTl
                .to(
                    cards,
                    {
                        rotationY: 180,
                        duration: 1,
                        ease: 'power3.inOut',
                        stagger: 0.1,
                        transformOrigin: 'center center',
                    },
                    0
                )
                .to(
                    [card1Ref.current, card3Ref.current],
                    {
                        y: 30,
                        rotationZ: (i: number) => (i === 0 ? -15 : 15),
                        duration: 1,
                        ease: 'power3.inOut',
                    },
                    0
                );

            // Scissors animation timeline (NEW)
            // Scissors animation timeline
            // Scissors animation timeline
            const scissorsTl = gsap.timeline({ paused: true });
            scissorsTl
                .fromTo(
                    '.scissors-left',
                    {
                        top: '-100px', // Changed from -100px to -150px
                        opacity: 0,
                        rotation: 180
                    },
                    {
                        top: '100%',
                        opacity: 1,
                        duration: 1.5,
                        ease: 'power2.inOut'
                    },
                    0
                )
                .fromTo(
                    '.scissors-right',
                    {
                        top: '-100px', // Changed from -100px to -150px
                        opacity: 0,
                        rotation: 180
                    },
                    {
                        top: '100%',
                        opacity: 1,
                        duration: 1.5,
                        ease: 'power2.inOut'
                    },
                    0
                )
                .to(['.scissors-left', '.scissors-right'], {
                    opacity: 0,
                    duration: 0.3
                }, 1.5);


            // Main ScrollTrigger
            const mm = gsap.matchMedia();

            mm.add('(min-width: 1000px)', () => {
                ScrollTrigger.create({
                    trigger: stickyRef.current,
                    start: 'top top',
                    end: `+=${window.innerHeight * 4}`,
                    scrub: 0.5,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const progress = self.progress;

                        // Update header (0.1 - 0.35)
                        if (progress >= 0.1 && progress <= 0.35) {
                            const headerProgress = gsap.utils.mapRange(0.1, 0.35, 0, 1, progress);
                            const yValue = gsap.utils.mapRange(0, 1, 40, 0, headerProgress);
                            const opacityValue = gsap.utils.mapRange(0, 1, 0, 1, headerProgress);
                            gsap.set(stickyHeaderRef.current, { y: yValue, opacity: opacityValue });
                        } else if (progress < 0.1) {
                            gsap.set(stickyHeaderRef.current, { y: 40, opacity: 0 });
                        } else {
                            gsap.set(stickyHeaderRef.current, { y: 0, opacity: 1 });
                        }

                        // Update card width (0 - 0.35)
                        if (progress <= 0.35) {
                            const widthPercentage = gsap.utils.mapRange(0, 0.35, 75, 60, progress);
                            gsap.set(cardContainerRef.current, { width: `${widthPercentage}%` });
                        } else {
                            gsap.set(cardContainerRef.current, { width: '60%' });
                        }

                        // Gap animation (0.45) + Scissors (NEW)
                        if (progress >= 0.45 && !gapAnimationCompleted) {
                            gapTl.play();
                            scissorsTl.play(); // Start scissors animation
                            gapAnimationCompleted = true;
                        } else if (progress < 0.45 && gapAnimationCompleted) {
                            gapTl.reverse();
                            scissorsTl.reverse(); // Reverse scissors
                            gapAnimationCompleted = false;
                        }

                        // Flip animation (0.7)
                        if (progress >= 0.7 && !flipAnimationCompleted) {
                            flipTl.play();
                            flipAnimationCompleted = true;
                        } else if (progress < 0.7 && flipAnimationCompleted) {
                            flipTl.reverse();
                            flipAnimationCompleted = false;
                        }
                    },
                });
            });
        }, stickyRef);

        return () => {
            ctx.revert();
            ScrollTrigger.refresh();
        };
    }, []);


    return (
        <section className="sticky" ref={stickyRef}>
            <div className="sticky-header">
                <h1 ref={stickyHeaderRef}>Three pillars with one purpose</h1>
            </div>

            <div className="card-container" ref={cardContainerRef}>
                {/* Left scissors - between card 1 and 2 */}
                <img
                    src="/images/scissors.png"
                    alt=""
                    className="scissors-left"
                />

                <div className="card" id="card-1" ref={card1Ref}>
                    <div className="card-front">
                        <img src="https://i.ibb.co/4wShfg0B/image-part-001.jpg" alt="image part 001" />
                    </div>
                    <div className="card-back">
                        <span>01</span>
                        <p>Interactive Web Experiences</p>
                    </div>
                </div>

                <div className="card" id="card-2" ref={card2Ref}>
                    <div className="card-front">
                        <img src="https://i.ibb.co/Y4MSmLXB/image-part-002.jpg" alt="image part 002" />
                    </div>
                    <div className="card-back">
                        <span>02</span>
                        <p>Thoughtful Design Language</p>
                    </div>
                </div>

                {/* Right scissors - between card 2 and 3 */}
                <img
                    src="/images/scissors.png"
                    alt=""
                    className="scissors-right"
                />

                <div className="card" id="card-3" ref={card3Ref}>
                    <div className="card-front">
                        <img src="https://i.ibb.co/NkrBdsq/image-part-003.jpg" alt="image part 003" />
                    </div>
                    <div className="card-back">
                        <span>03</span>
                        <p>Visual Design Systems</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
