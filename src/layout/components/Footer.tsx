import { memo } from 'react';
import logotype from '../assets/LOGOTYPE.svg';
import first from '../assets/image 8.png';
import second from '../assets/image 7.png';
import i1 from "../assets/i1.svg"
import i2 from "../assets/i2.svg"
import i3 from "../assets/i3.svg"
import i4 from "../assets/i4.svg"
import i5 from "../assets/i5.svg"
import i6 from "../assets/i6.svg"
import i7 from "../assets/i7.svg"
import i8 from "../assets/i8.svg"
import ii1 from "../assets/ii1.svg"
import ii2 from "../assets/ii2.svg"
import ii3 from "../assets/ii3.svg"

const Footer = () => {
  return (
    <footer className="container">
      <div className="p-[30px] flex justify-between bg-[#111] w-[1180px] h-[240px] rounded-[12px] mb-[40px]">
        <div className="flex justify-center flex-col w-[20%]">
          <img src={logotype} className='w-[55px] h-[36px] mb-[48px]' alt="" />
          <img src={first} alt="" className='w-[150px] h-[44px] mb-[8px]' />
          <img src={second} alt="" className='w-[150px] h-[44px]' />
        </div>
        <div className="w-[20%] flex flex-col">
          <p className='text-white text-[16px] font-semibold leading-[125%] tracking-[0.01em] mb-[18px]'>О нас</p>
          <div className="flex gap-[8px] mb-[16px]">
            <img src={i1} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Публичная оферта</p>
          </div>
          <div className="flex gap-[8px] mb-[16px]">
            <img src={i2} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Реклама</p>
          </div>
          <div className="flex gap-[8px] mb-[16px]">
            <img src={i3} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>F.A.Q</p>
          </div>
          <div className="flex gap-[8px]">
            <img src={i4} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Контакты</p>
          </div>
        </div>
        <div className="w-[20%] flex flex-col">
          <p className='text-white text-[16px] font-semibold leading-[125%] tracking-[0.01em] mb-[18px]'>Категории</p>
          <div className="flex gap-[8px] mb-[16px]">
            <img src={i5} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Кино</p>
          </div>
          <div className="flex gap-[8px] mb-[16px]">
            <img src={i6} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Театр</p>
          </div>
          <div className="flex gap-[8px] mb-[16px]">
            <img src={i7} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Концерты</p>
          </div>
          <div className="flex gap-[8px]">
            <img src={i8} alt="" />
            <p className='text-[#a1a1a1] text-[16px] font-semibold leading-[125%] tracking-[0.01em]'>Спорт</p>
          </div>
        </div>
        <div className="w-[20%] flex flex-col justify-between">
          <div className="flex flex-col">
            <p className='text-white text-[16px] font-semibold leading-[125%] tracking-[0.01em] mb-[18px]'>Связаться с нами</p>
            <p className='text-[#c61f1f] text-[20px] font-semibold leading-[120%] tracking-[0.01em]'>+998 (95) 897-33-38</p>
          </div>
          <div className="flex flex-col">
            <p className='text-white text-[16px] font-semibold leading-[125%] tracking-[0.01em] mb-[18px]'>Социальные сети</p>
            <div className="flex gap-[10px] ">
              <img src={ii1} alt="" />
              <img src={ii2} alt="" />
              <img src={ii3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);