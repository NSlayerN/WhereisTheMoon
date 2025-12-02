'use client';
import { useEffect, useState } from 'react';
import * as SunCalc from 'suncalc';

export default function Finder() {
  const [heading, setHeading] = useState(0);
  const [moonAz, setMoonAz] = useState(0);
  const [videoStream, setVideoStream] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const h = e.webkitCompassHeading || Math.abs(e.alpha - 360);
      setHeading(h);
    };
    window.addEventListener('deviceorientation', handler);
    return () => window.removeEventListener('deviceorientation', handler);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const m = SunCalc.getMoonPosition(new Date(), pos.coords.latitude, pos.coords.longitude);
      setMoonAz((m.azimuth * 180 / Math.PI + 360) % 360);
    });
  }, []);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }})
      .then(stream => setVideoStream(stream));
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {videoStream && (
        <video autoPlay playsInline ref={(v)=> v && (v.srcObject = videoStream)}
        className="absolute inset-0 w-full h-full object-cover opacity-70"/>
      )}
      <div className="absolute left-1/2 top-1/2 text-5xl"
           style={{transform:`translate(-50%,-50%) rotate(${moonAz-heading}deg)`}}>
        ⭐
      </div>
      <div className="absolute bottom-5 w-full text-center text-lg font-semibold">
        جهت ماه: {Math.round(moonAz)}° — جهت گوشی: {Math.round(heading)}°
      </div>
    </div>
  );
}