import React from "react"
import s from './Object1.module.css'
import classnames from 'classnames'

const Object1 = (props) => {
    let onObjClick = () => {
        props.curObjChange(props.id)
    }

    return (
        <div onClick={onObjClick} className={props.active === 0 ? s.object : s.active_obj}>
            <span className={classnames(s.text, s.text_name)}>{props.is_temporary ? 'Новый объект' : props.name}</span>
            <span className={classnames(s.text, s.text_cnt)}>{props.is_temporary ? '' : props.cnt}</span>
        </div>
    )
}

export default Object1