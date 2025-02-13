'use client';
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";

export default function valentine() {
    const [showMessage, setShowMessage] = useState(false);
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        AOS.init();

        // Generate random values for hearts on the client side
        const generatedHearts = Array.from({ length: 50 }).map(() => ({
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
        }));
        setHearts(generatedHearts);
    }, []);

    const handleClick = () => {
        setShowMessage(true);
    };

    const handleCloseMessage = () => {
        setShowMessage(false);
    }
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(1); // เริ่มต้นที่ความดัง 100%

    useEffect(() => {
        AOS.init();

        // ฟัง event click เพื่อเริ่มเพลง (สำหรับ autoplay ตาม policy ของเบราว์เซอร์)
        const playMusic = () => {
            if (audioRef.current) {
                audioRef.current.play().catch((err) => {
                    console.log('Autoplay is blocked by the browser:', err);
                });
            }
        };

        document.addEventListener('click', playMusic, { once: true });

        return () => {
            document.removeEventListener('click', playMusic);
        };
    }, []);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };
    return (
        <div>
            {/* Audio สำหรับเล่นเพลง */}
            <audio ref={audioRef} loop>
                <source src="/song_valentine.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <section
                className="relative h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('/bg_valentine.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                <div data-aos="fade-up" data-aos-duration="3000" className="relative flex items-center justify-center h-full z-10">
                    <p onClick={handleClick} className="border-4 bg-red-400 flex justify-center items-center rounded-xl font-bold cursor-pointer text-white text-2xl h-12 w-50">
                        ❤️ เปิดจดหมาย ❤️
                    </p>
                </div>
                {showMessage && (
                    <div data-aos="fade-down" data-aos-duration="3000" className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="bg-red-300 p-4 rounded-xl shadow-lg text-center h-auto w-85 order-2">
                            <h1 className="flex items-center justify-center text-l font-bold bg-red-600 rounded-xl h-10 border-2">
                                Happy Valentine KUB💕
                            </h1>
                            <p className="mt-4 text-sm md:text-l bg-red-400 rounded-xl p-3 border-2">
                            สุขสันต์วันวาเลนไทน์นะครับ ❤️ <br />เวลาผ่านไปเร็วมาก เราคบกันมาเกือบ 2 ปี 6 เดือนแล้วนะ
                            ตั้งแต่วันแรกจนถึงวันนี้ ความรู้สึกที่มีให้ดื้อก็ไม่เคยเปลี่ยนเลยิ<br />
                            ขอบคุณที่อยู่ข้างกันในทุกช่วงเวลา ทั้งตอนสุขและตอนทุกข์ ขอบคุณที่เป็นรอยยิ้มเเล้วก็เป็นกำลังใจให้เค้าเสมอมา <br />
                            และเป็นคนพิเศษที่สุดในชีวิตของเราขอให้วันนี้เป็นอีกหนึ่งวันแห่งความสุขของเรา ไม่ว่าจะผ่านไปกี่วัน กี่เดือน หรือกี่ปี เราจะยังอยู่ข้างกันเสมอ<br />
                            รักดื้อนะครับ ❤️
                                <p className="font-bold text-center mt-5">
                                    CHETNIPHAT
                                </p>
                            </p>
                            <Link
                                className="flex justify-center items-center"
                                href="/valentine"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCloseMessage();
                                }}
                            >
                                <p className="text-xl mt-5 border-2 bg-red-400 flex justify-center items-center rounded-xl font-bold cursor-pointer text-white h-12 w-48">
                                    ปิดจดหมาย
                                </p>
                            </Link>
                        </div>
                    </div>
                )}
                <div className="absolute inset-0 overflow-hidden z-0">
                    {hearts.map((heart, index) => (
                        <div
                            key={index}
                            className="heart"
                            style={{
                                left: heart.left,
                                animationDelay: heart.animationDelay,
                                animationDuration: heart.animationDuration,
                            }}
                        ></div>
                    ))}
                </div>
            </section>
            <style jsx>{`
                .heart {
                    position: absolute;
                    top: -10%;
                    width: 20px;
                    height: 20px;
                    background-color: pink;
                    transform: rotate(-45deg);
                    animation-name: fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }

                .heart::before,
                .heart::after {
                    content: '';
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: pink;
                    border-radius: 50%;
                }

                .heart::before {
                    top: -10px;
                    left: 0;
                }

                .heart::after {
                    left: 10px;
                    top: 0;
                }

                @keyframes fall {
                    to {
                        transform: translateY(110vh) rotate(-45deg);
                    }
                }
            `}</style>
        </div>
    );
}