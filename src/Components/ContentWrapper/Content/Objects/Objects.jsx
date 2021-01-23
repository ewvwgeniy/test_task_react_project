import React from "react"
import s from './Objects.module.css'
import classnames from 'classnames'
import Object1 from "./Object1/Object1";

const Objects = (props) => {

    let objects = props.object_mas.map((e) => {
        let is_temporary = false
        if (e.is_temporary === true)
            is_temporary = true
        if (e.id === props.cur_obj_id) {
            return (
                <Object1 active={1} name={e.name} cnt={e.cnt} id={e.id} is_temporary={is_temporary} curObjChange={props.curObjChange}/>
            )
        }
        return (
            <Object1 active={0} name={e.name} cnt={e.cnt} id={e.id} is_temporary={is_temporary} curObjChange={props.curObjChange}/>
        )
    })

    let newObjCreate = () => {
        props.newObjCreateAC()
    }

    return (
        <div className={s.objects}>
            {objects}
            <div className={classnames(s.object, s.btn)}>
                <button className={s.new_object_btn} onClick={newObjCreate}>Добавить объекты</button>
            </div>
        </div>
    )
}

export default Objects