'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Phitcha from '/Pitcha.jpg';
export default function Home() {
  const [imageSrc, setImageSrc] = useState("/Lio.jpg");

  const toggleImage = () => {
    setImageSrc((prev) =>
      prev === "/Lio.jpg" ? "/Lio2.png" : "/Lio.jpg"
    );
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to top, black, transparent 80%), url('/image.jpg')",
      }}
    >
      {/* แนะนำตัว */}
      <section className="h-full flex md:flex-row items-center justify-between text-white px-10 z-20 relative">
        {/* Photo Lio */}
        <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center md:ml-60 md:mr-10 w-full md:w-auto">
          <img
            src={imageSrc}
            alt="Lio Photo"
            className="h-48 md:h-96 rounded-xl object-contain"
            onClick={toggleImage} // เพิ่ม toggle เมื่อคลิกรูปภาพ
          />
        </div>

        {/* Detail */}
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0">
          <div className="text-center md:text-left">
            <div data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-2xl md:text-4xl font-bold">Hi! My Name Chatchawan Chanprom</h2>
              <p className="mt-4 text-sm md:text-lg">
                I'm the owner of this website. I created this website to store my work.
              </p>
              <p className="mt-4 text-sm md:text-lg">
                I'm a student at Mahasarakham University, Majoring in Computer Science and International Technology.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              {/* Continue Button */}
              <Link
                href="/valentine"
                className="flex btn-main mt-5 h-12 justify-center items-center text-center text-xs md:text-base"
              >
                <span>💖Valentine Day💖</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <h1 className="text-center text-4xl font-bold bg-black">S.Sorsala Studio</h1>
      <section className="h-96 bg-black flex justify-around items-center ml-1 px-10">
        <div className="flex justify-center md:ml-60 md:mr-10 w-full md:w-auto">
          <img data-aos="fade-up" data-aos-duration="3000" src="Myfan.jpg" alt="MyfanPoster" className="h-48 md:h-96 rounded-xl object-contain" />
        </div>
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0">
          <div className="text-center md:text-left ml-5">
            <p data-aos="fade-left" data-aos-duration="1500" className="text-white text-sm md:text-lg ml-2">
              ผลงาน Music Video ที่มีชื่อว่า "Myแฟน" เป็นการทำ Music Video ในระหว่างที่เรียนอยู่ที่มหาลัยมหาสารคาม
            </p>
            <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0 z-20">
              <div data-aos="fade-left" data-aos-duration="2000" className="text-center md:text-left">
                <Link href="/sorsala" className="btn-main mt-5 w-34 h-9 mx-auto md:mx-0 text-center text-xs md:text-lg ">
                  <span>Sorsala Studio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-28 bg-black">

      </section>
      {/* Section 3 */}
      <h1 className=" text-center text-3xl mb-12 font-bold bg-black">My Personal History</h1>
      <section
        className=" h-screen bg-black flex justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, black, transparent 80%),linear-gradient(to top, black, transparent 80%), url('/Desert.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center md:ml-60 md:mr-10 w-full md:w-auto">
          <img className="w-40 mb-5 rounded-xl" src="Lio.jpg" alt="" />
          <p className="text-center">
              My nickname Lio I'm 19 years old.
          </p>
        </div>
      </section>
    </div>
  );
}