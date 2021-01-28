import React from 'react'
import s from './UpperBar.module.css'
import SvgIcon from "@material-ui/core/SvgIcon"
import menu from "@material-ui/icons/MenuRounded"



const UpperBar = () => {
    return (
        <div className={s.main_menu}>
            <SvgIcon className={s.icon} component={menu}/>
            <div className={s.name}>Интеграл-Д</div>
            <div className={s.alert}>2</div>
            <div className={s.group_name}>Группировка для Байкала, 23ФР23ГШ-В2</div>
            <div className={s.account_name}>Петроглифов М.Ю.</div>
        </div>
    )
}

export default UpperBar