'use client';
import * as SunCalc from 'suncalc';

export default function Phase() {
  const p = SunCalc.getMoonIllumination(new Date());
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <div className="text-4xl mb-6">🌙</div>
      <h1 className="text-3xl font-bold mb-4">فاز ماه امروز</h1>
      <p className="text-gray-300 text-xl">روشنایی: {(p.fraction*100).toFixed(1)}%</p>
      <p className="text-gray-400 mt-2">مرحله: {p.phase.toFixed(3)}</p>
    </div>
  );
}