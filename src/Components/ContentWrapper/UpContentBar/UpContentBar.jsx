import React from "react"
import s from './UpContentBar.module.css'
import SvgIcon from "@material-ui/core/SvgIcon";
import time from "@material-ui/icons/TimerRounded";
import classnames from "classnames";

const UpContentBar = () => {
    return (
        <div className={s.up_content_bar}>
            <div className={s.main_menu}>
                <div className={s.menu}>Главная</div>
                <div className={classnames(s.menu, s.active_menu)}>Параметры</div>
                <div className={s.menu}>Управление расчётом</div>
                <div className={s.menu}>Результат</div>
                <div className={s.menu}>Визуализация</div>
                <div className={s.menu}>Графики</div>
            </div>
            <div className={s.time}>
                <span className={s.time_text}>5 минут назад</span>
                <SvgIcon className={s.icon} component={time}/>
            </div>
        </div>
    )
}

export default UpContentBar