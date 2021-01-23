import React from "react"
import s from './DownContentBar.module.css'
import classnames from 'classnames'

const DownContentBar = () => {
    return (
        <div className={s.down_content_bar}>
            <div className={s.menu}>
                <div className={s.number_container}><div className={s.number}>1</div></div>
                <div className={s.text}>Параметры задачи</div>
                <hr className={s.line}/>
            </div>
            <div className={s.menu}>
                <div className={s.number_container}><div className={classnames(s.number, s.active_number)}>2</div></div>
                <div className={classnames(s.text, s.active_text)}>Целевые объекты</div>
                <hr className={s.line}/>
            </div>
            <div className={s.menu}>
                <div className={s.number_container}><div className={s.number}>3</div></div>
                <div className={s.text}>Наблюдатели</div>
                <hr className={s.line}/>
            </div>
            <div className={s.menu}>
                <div className={s.number_container}><div className={s.number}>4</div></div>
                <div className={s.text}>Космические аппараты</div>
                <hr className={s.line}/>
            </div>
            <div className={s.menu}>
                <div className={s.number_container}><div className={s.number}>5</div></div>
                <div className={s.text}>Наземные станции</div>
                <hr className={s.line}/>
            </div>
            <div className={s.menu}>
                <div className={s.number_container}><div className={s.number}>6</div></div>
                <div className={s.text}>Параметры качества</div>
            </div>
        </div>
    )
}

export default DownContentBar