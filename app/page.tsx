'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} className="text-4xl font-bold mb-6">🌙 MoonFinder</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="text-gray-300 mb-10">
        پیدا کردن موقعیت ماه با AR و قطب‌نما
      </motion.p>
      <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.5}} className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/finder" className="bg-blue-600 rounded-xl py-3 text-lg font-semibold text-white">شروع جستجو</Link>
        <Link href="/phase" className="bg-gray-800 rounded-xl py-3 text-lg font-semibold text-white">فاز ماه امروز</Link>
      </motion.div>
    </div>
  );
}