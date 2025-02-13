'use client'
import Link from "next/link";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
export default function MyWork() {
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
        <source src="/Myแฟน.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* ปุ่มควบคุมความดัง */}
      <div className="fixed bottom-4 right-4 bg-black-0 p-1 rounded-lg flex items-center space-x-2 z-50">
        <label htmlFor="volume" className="">
          <img
            src="/volume.png"
            alt="Studio Logo"
            className="w-5"
          />
        </label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-10 md:w-24"
        />
      </div>
      {/* Section 1 */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/sorsala_bg.jpg')",
        }}>

        {/* ใช้ pseudo-element สำหรับจางพื้นหลัง */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* รูปภาพ */}
        <img
          src="/sorsala_logo.png"
          alt="Studio Logo"
          className="w-60 h-60 object-contain z-10"
        />
        {/* ข้อความ */}
        <h1 className="text-2xl md:text-5xl font-bold text-center text-white z-10">
          Welcome to S.Sorsala Studio
        </h1>
        <div className="w-full md:w-2/3 flex items-center mt-4 md:mt-0 justify-center z-20">
          <div className="text-center md:text-left">
            <Link href="/" className="btn-main mt-5 w-34 h-9 mx-auto md:mx-0 text-center text-xs md:text-lg ">
              <span>Main Page</span>
            </Link>
          </div>
        </div>
      </section>



      {/* Section 2 */}
      <section className="bg-black flex justify-center px-10 z-30 py-10">
        <div className="w-full max-w-6xl">
          <h1 className="text-center text-2xl md:text-5xl font-bold text-white mb-8 md:mb-12">
            Members
          </h1>
          {/* Grid สำหรับสมาชิก 3x3 */}
          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {/* สมาชิกที่ 1 */}
            <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Namtan.png"
                  alt="Member 1"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Namtarn</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>

            {/* สมาชิกที่ 2 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Chokun.png"
                  alt="Member 2"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Chokun</p>
                <p className="text-gray-400">ตำแหน่ง เด้ง 1</p>
                <p className="text-gray-400">093-447-7712</p>
              </div>
            </div>

            {/* สมาชิกที่ 3 */}
            <div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Film.jpg"
                  alt="Member 3"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Film</p>
                <p className="text-gray-400">ตำแหน่ง เด้ง 2</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>

            {/* สมาชิกที่ 4 */}
            <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Best.png"
                  alt="Member 4"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Best</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>

            {/* สมาชิกที่ 5 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Prim.png"
                  alt="Member 5"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Prim</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
                <p className="text-gray-400">062-479-3097</p>
              </div>
            </div>

            {/* สมาชิกที่ 6 */}
            <div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Punch.png"
                  alt="Member 6"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Punch</p>
                <p className="text-gray-400">ตำแหน่ง -</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>
            {/* สมาชิกที่ 7 */}
            <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/p_atom2.jpg"
                  alt="Member 7"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Atom</p>
                <p className="text-gray-400">ตำแหน่ง Gay</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>
            {/* สมาชิกที่ 8 */}
            <div data-aos="fade-up" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/p_pie.jpg"
                  alt="Member 7"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Pie</p>
                <p className="text-gray-400">ตำแหน่ง MooDeng</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>
            {/* สมาชิกที่ 9 */}
            <div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/p_bom.jpg"
                  alt="Member 7"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Bom</p>
                <p className="text-gray-400">ตำแหน่ง แย่ละ</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-black flex justify-center px-10 z-30 py-10">
        <div className="w-full max-w-6xl">
          {/* Grid สำหรับสมาชิก 3x3 */}
          <div className="grid grid-cols-3 grid-rows-3 gap-6">
            {/* สมาชิกที่ 10 */}
            <div data-aos="fade-right" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/p_ton.jpg"
                  alt="Member 1"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Ton</p>
                <p className="text-gray-400">ตำแหน่ง นอน</p>
                <p className="text-gray-400">000-000-0000</p>
              </div>
            </div>

            

            {/* สมาชิกที่ ว่าง */}
            <div>
            </div>
            {/* สมาชิกที่ 16 */}
            <div data-aos="fade-left" data-aos-duration="3000" className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-44 md:h-44 relative mb-4">
                <Image
                  src="/Lio2.png"
                  alt="Member 7"
                  fill
                  className="rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="text-center">
                <p className="text-white text-xl font-semibold">Lio</p>
                <p className="text-gray-400">ตำแหน่ง ไม่บอก</p>
                <p className="text-gray-400">093-830-4299</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-screen bg-cover bg-center z-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, black, transparent 20%), linear-gradient(to top, black, transparent 20%) ,url('/Myfan_poster.jpg')",
        }}>
      </section>
    </div>
  );
}
