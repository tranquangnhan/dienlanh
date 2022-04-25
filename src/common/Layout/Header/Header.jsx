
import React from 'react';
import './Header.scss';
import avt from './img/avt.png';
import useToken from '../../../useToken';
export const Header = ()=> {
    const { token,getName} = useToken();
    function logout(){
        localStorage.clear();
        window.location.reload();
    }

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
                    {token === 1 ? '': getName()}
                    <span>{token === 1 ? 'ADMIN': 'MANAGER'}</span>
                    <span onClick={()=>logout()}>Đăng Xuất ?</span>
                </div>
            </div>
        </div>
    )
};

