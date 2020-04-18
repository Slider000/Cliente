import React from 'react';
import {Button} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined} from '@ant-design/icons';
 
import Logo from '../../../assets/img/png/logotipo.png'
import './MenuTop.scss';
 
 
 
export default function MenuTop(props){
    const {menuCollapsed , setMenuCollapsed}=props ;

    return(
        <div className="menu-top">
            <div className="menu-top__left">
               <img className="menu-top__left-logo"
               src={Logo}
               alt=" Web"></img>
               <Button type="link" icon={menuCollapsed ?<MenuFoldOutlined />:<MenuUnfoldOutlined/>    } onClick={()=> setMenuCollapsed(!menuCollapsed)}></Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" icon={<LogoutOutlined   />} onClick={()=> console.log ("Desconexion")} ></Button>
            </div>
        </div>
    ) 
    
}