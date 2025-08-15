import { memo } from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import first from '../assets/Main.svg';
import second from '../assets/Transfer.svg';
import third from '../assets/Monitoring.svg';
import fourth from '../assets/Monitoring (1).svg';
import ru from "../assets/RU.svg";
import arrow from "../assets/Arrow.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header_container bg-black/50 max-h-[80px] h-full">
      <nav className='py-[12px] flex justify-between items-center'>
        <img src={logo} alt="" className='cursor-pointer' onClick={() => navigate("/")}/>
        <div className="flex justify-center items-center">
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
          <img src={fourth} alt="" />
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <div className='bg-[#1D1D1D]/50 gap-[8px] flex justify-center items-center rounded-[12px] w-[92px] h-[48px] text-transparent py-[14px] px-[8px]'>
            <img src={ru} alt="" />
            <p className='text-semibold text-white leading-[114%] tracking-[0.01em]'>Ру</p>
            <img src={arrow} alt="" />
          </div>
          <button className='bg-[#C61F1F] rounded-[12px] max-w-[180px] w-full max-h-[56px] h-full text-white leading-[125%] font-semibold text-[16px] text-center py-[18px] px-[67px] tracking-[0.01em]'>Войти</button>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);