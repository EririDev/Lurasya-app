import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';

const Minimarket = () => {
    const [minimarketAktif,setMinimarketAktif]= useState('Yogyakarta')
    const activeLinkMinimarket = (kategori) =>
    kategori === minimarketAktif
        ? 'bg-[#e7f2ff] border-1 border-[#1fa0e2] rounded-3xl p-2 pl-5 pr-5 text-[#1fa0e2] flex justify-center items-center'
        : 'bg-white border-1 border-[#c1c1c1] rounded-3xl p-2 pl-5 pr-5 text-[#c1c1c1] justify-center items-center';
    const handleMinimarketClick = (kategori)=>{
          setMinimarketAktif(kategori)
        }
  return (
    <div>
      <div className="rekomendasi-atm flex w-full flex-col border-t-4 h-[310px] justify-between pl-4 pr-4">
       <div className="kata">
       <h2 className='font-medium text-md'>Kebutuhan Sehari-hari dalam Genggaman</h2>
        <p className='text-[10px]'>Dapatkan semua kebutuhan sehari-hari Anda dengan mudah dari toko-toko terdekat. Temukan toko terbaik yang menyediakan produk berkualitas dan harga terjangkau agar Anda dapat berbelanja dengan nyaman dan praktis.  </p>
       </div>
        <div className="kategori text-xs flex overflow-scroll gap-2">
          <NavLink
            className={activeLinkMinimarket('Yogyakarta')}
            onClick={() => handleMinimarketClick('Yogyakarta')}
          >
            <button>Yogyakarta</button>
          </NavLink>
          <NavLink
            className={activeLinkMinimarket('Malang')}
            onClick={() => handleMinimarketClick('Malang')}
          >
            <button>Malang</button>
          </NavLink>
          <NavLink
            className={activeLinkMinimarket('Surabaya')}
            onClick={() => handleMinimarketClick('Surabaya')}
          >
            <button>Surabaya</button>
          </NavLink>
          <NavLink
            className={activeLinkMinimarket('Bandung')}
            onClick={() => handleMinimarketClick('Bandung')}
          >
            <button className='w-24'>Bandung</button>
          </NavLink>
          <NavLink
            className={activeLinkMinimarket('Kafe')}
            onClick={() => handleMinimarketClick('Kafe')}
          >
            <button>Kafe</button>
          </NavLink>
        </div>
        <div className="card flex gap-2 overflow-scroll w-full h-[190px] items-start ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
      </div>
    </div>
  )
}

export default Minimarket
