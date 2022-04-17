
import React from 'react';
import './Header.scss';
import avt from './img/avt.png';

export const Header = ()=> {
    return (
        <div className='headerWrapper'>
            <div className='title'>
                
            </div>
            <div className='searchBox'>
                <input type="text" placeholder='Tìm Kiếm'/>    
            </div>
            <div className='boxAvt'>
                <img src={avt} alt="" />
                <div className='text'>
                    Nguyễn Ngọc 
                    <span>MANAGER</span>
                </div>
            </div>
        </div>
    )
};

