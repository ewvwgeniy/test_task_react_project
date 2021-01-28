import React from 'react'
import s from './ObjectInfo.module.css'
import classnames from 'classnames'
import {SvgIcon} from "@material-ui/core"
import warning from "@material-ui/icons/ErrorOutline"

const ObjectInfo = (props) => {
//////////////////// условие если приходит пустой объект    ////////////////////
    if (typeof props.obj === "undefined") {
        return null
    }
////////////////////    проверка элемента      ////////////////////
    const isUndefined = (obj) => {
        return typeof obj === "undefined"

    }
////////////////////    преобразование даты в строку    ////////////////////
    let date = ''
    if (isUndefined(props.obj.date_time) === false && props.obj.date_time !== '') {
        let month = props.obj.date_time.getMonth() + 1
        if (month < 10) {
            month = `0${month}`
        } else {
            month = `${month}`
        }

        let date_1_31 = props.obj.date_time.getDate()
        if (date_1_31 < 10) {
            date_1_31 = `0${date_1_31}`
        } else {
            date_1_31 = `${date_1_31}`
        }

        let hours = props.obj.date_time.getHours()
        if (hours < 10) {
            hours = `0${hours}`
        } else {
            hours = `${hours}`
        }

        let minutes = props.obj.date_time.getMinutes()
        if (minutes < 10) {
            minutes = `0${minutes}`
        } else {
            minutes = `${minutes}`
        }

        let seconds = props.obj.date_time.getSeconds()
        if (seconds < 10) {
            seconds = `0${seconds}`
        } else {
            seconds = `${seconds}`
        }

        let milli_seconds = props.obj.date_time.getMilliseconds()
        if (milli_seconds < 100) {
            milli_seconds = `0${milli_seconds}`
        } else if (milli_seconds < 10) {
            milli_seconds = `0${milli_seconds}`
        } else {
            milli_seconds = `${milli_seconds}`
        }

        date = `${props.obj.date_time.getFullYear()}-${month}-${date_1_31}T${hours}:${minutes}:${seconds}.${milli_seconds}`
    }
////////////////////    уведомления при создании объекта /// кнопка ОТМЕНА   ////////////////////
    let cancelChange = () => {
        props.cancelChangeAC()
    }
    const NewObjAlert1 = (props) => {
        if (props.create_mod === 1 || isUndefined(props.is_temporary) === false) {
            return (
                <div className={classnames(s.element_warn, s.element_warn_1)}>
                    <SvgIcon className={s.icon} component={warning}/>
                    <span
                        className={s.alert_text}>Будет создано {props.cnt} объектов</span>
                </div>
            )
        }
        return null
    }
    const NewObjAlert2 = (props) => {
        if (props.create_mod === 1 || isUndefined(props.is_temporary) === false) {
            return (
                <div className={classnames(s.element_warn, s.element_warn_2)}>
                    <SvgIcon className={s.icon} component={warning}/>
                    <span
                        className={s.alert_text}>Будет создано {props.cnt} объектов</span>
                </div>
            )
        }
        if (props.edit_mod === 1) {
            return (
                <div className={classnames(s.element, s.element_btn_cancel)}>
                    <button className={s.cancel_create_button} onClick={cancelChange}>ОТМЕНА</button>
                </div>
            )
        }
        return null
    }
////////////////////    кнопка редактировать/создать/сохранить    ////////////////////
    let editModChange = () => {
        props.editModChangeAC()
    }
    let saveChange = () => {
        props.saveChangeAC()
    }
    let newObjCreateConfirm = () => {
        props.newObjCreateConfirmAC()
    }
    let create_edit_button
    if (props.create_mod === 1) {
        create_edit_button =
            <div className={classnames(s.element, s.element_btn_create)}>
                <button className={s.create_button} onClick={newObjCreateConfirm}>СОЗДАТЬ ГРУППУ ОБЪЕКТОВ</button>
            </div>
    } else {
        if (props.edit_mod === 0) {
            create_edit_button =
                <div className={classnames(s.element, s.element_btn_create)}>
                    <button className={s.create_button} onClick={editModChange}>РЕДАКТИРОВАТЬ ГРУППУ ОБЪЕКТОВ</button>
                </div>
        } else {
            create_edit_button =
                <div className={classnames(s.element, s.element_btn_create)}>
                    <button className={s.create_button} onClick={saveChange}>СОХРАНИТЬ</button>
                </div>
        }
    }
////////////////////    кнопка удалить      ////////////////////
    let deleteObj = () => {
        props.deleteObjAC(props.obj.id)
    }
    let delWarnChange = () => {
        props.delWarnChangeAC()
    }
    const DeleteButtons = (props) => {
        if (props.delete_warn === 0) {
            return null
        }
        return (
            <div className={s.delete_alert}>
                <button className={s.delete_true_btn} onClick={deleteObj}>да</button>
                <button className={s.delete_false_btn} onClick={delWarnChange}>нет</button>
            </div>
        )
    }
////////////////////    событие при изменении имени      ////////////////////
    let name = React.createRef()
    let nameChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('name', name.current.value)
        }
    }
////////////////////    событие при изменении даты     ////////////////////
    let date_time = React.createRef()
    let dateTimeChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            let d = new Date()
            d.setFullYear(parseInt(date_time.current.value.split('-')[0], 10))
            d.setMonth(parseInt(date_time.current.value.split('-')[1], 10) + 1)
            d.setDate(parseInt(date_time.current.value.split('-')[2].split('T')[0], 10))
            d.setHours(parseInt(date_time.current.value.split('T')[1].split(':')[0], 10))
            d.setMinutes(parseInt(date_time.current.value.split(':')[1], 10))
            d.setSeconds(parseInt(date_time.current.value.split(':')[2].split('.')[0], 10))
            d.setMilliseconds(parseInt(date_time.current.value.split('.')[1], 10))
            props.objChangeAC('date_time', d)
        }
    }
////////////////////    событие при изменении приоритета      ////////////////////
    let priority = React.createRef()
    let priorityChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('priority', priority.current.value)
        }
    }
////////////////////    событие при изменении кол-ва плоскостей      ////////////////////
    let plane_cnt = React.createRef()
    let planeCntChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('plane_cnt', plane_cnt.current.value)
        }
    }
////////////////////    событие при изменении кол-ва объектов на плоскости      ////////////////////
    let obj_cnt = React.createRef()
    let objCntChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('obj_cnt', obj_cnt.current.value)
        }
    }
////////////////////    событие при изменении наклонения орбиты      ////////////////////
    let orbital_incl = React.createRef()
    let orbitalInclChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('orbital_incl', orbital_incl.current.value)
        }
    }
////////////////////    событие при изменении аргумента перицентра      ////////////////////
    let per_arg = React.createRef()
    let perArgChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('per_arg', per_arg.current.value)
        }
    }
////////////////////    событие при изменении большой полуоси      ////////////////////
    let semi_maj_axis = React.createRef()
    let semiMajAxisChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('semi_maj_axis', semi_maj_axis.current.value)
        }
    }
////////////////////    событие при изменении эксцентриситета      ////////////////////
    let eccentricity = React.createRef()
    let eccentricityChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('eccentricity', eccentricity.current.value)
        }
    }
////////////////////    событие при изменении долготы восходящего узла      ////////////////////
    let nod_long = React.createRef()
    let nodLongChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('nod_long', nod_long.current.value)
        }
    }
////////////////////    событие при изменении истинной аномалии      ////////////////////
    let true_anomaly = React.createRef()
    let trueAnomalyChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            //props.trueAnomalyChangeAC(true_anomaly.current.value)
            props.objChangeAC('true_anomaly', true_anomaly.current.value)
        }
    }
////////////////////    событие при изменении степени черноты      ////////////////////
    let black_degree = React.createRef()
    let blackDegreeChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('black_degree', black_degree.current.value)
        }
    }
////////////////////    событие при изменении линейного размера      ////////////////////
    let lin_siz = React.createRef()
    let linSizChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('lin_siz', lin_siz.current.value)
        }
    }
////////////////////    событие при изменении массы       ////////////////////
    let mas = React.createRef()
    let masChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('mas', mas.current.value)
        }
    }
////////////////////    событие при изменении коэффициента лобового сопроотивления      ////////////////////
    let drag_coef = React.createRef()
    let dragCoefChange = () => {
        if (props.edit_mod === 1 || props.create_mod === 1) {
            props.objChangeAC('drag_coef', drag_coef.current.value)
        }
    }

////////////////////    неправильное название      ////////////////////
    const NameAlert = (props) => {
        if (props.wrong_values.has('name'))
            return <span className={s.wrong_info}>Введите название</span>
        else
            return null
    }
////////////////////    неправильная дата      ////////////////////
    const DateTimeAlert = (props) => {
        if (props.wrong_values.has('date_time'))
            return <span className={s.wrong_info}>Введите дату</span>
        else
            return null
    }
////////////////////    неправильный приоритет      ////////////////////
    const PriorityAlert = (props) => {
        if (props.wrong_values.has('priority'))
            return <span className={s.wrong_info}>Введите значение от 0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const PlaneCntAlert = (props) => {
        if (props.wrong_values.has('plane_cnt'))
            return <span className={s.wrong_info}>Введите значение от 0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const ObjCntAlert = (props) => {
        if (props.wrong_values.has('obj_cnt'))
            return <span className={s.wrong_info}>Введите значение от 0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const OrbitalInclAlert = (props) => {
        if (props.wrong_values.has('orbital_incl'))
            return <span className={s.wrong_info}>Введите значение от 0 до 180°</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const PerArgAlert = (props) => {
        if (props.wrong_values.has('per_arg'))
            return <span className={s.wrong_info}>Введите значение от 0 до 360°</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const SemiMajAxisAlert = (props) => {
        if (props.wrong_values.has('semi_maj_axis'))
            return <span className={s.wrong_info}>Введите значение от 6480 до 40000 км</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const EccentricityAlert = (props) => {
        if (props.wrong_values.has('eccentricity'))
            return <span className={s.wrong_info}>Введите значение от 0,0 до 1,0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const NodLongAlert = (props) => {
        if (props.wrong_values.has('nod_long'))
            return <span className={s.wrong_info}>Введите значение от 0 до 180°</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const TrueAnomalyAlert = (props) => {
        if (props.wrong_values.has('true_anomaly'))
            return <span className={s.wrong_info}>Введите значение от 0 до 180°</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const BlackDegreeAlert = (props) => {
        if (props.wrong_values.has('black_degree'))
            return <span className={s.wrong_info}>Введите значение от 0,0 до 1,0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const LinSizAlert = (props) => {
        if (props.wrong_values.has('lin_siz'))
            return <span className={s.wrong_info}>Введите значение от 0,0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const MasAlert = (props) => {
        if (props.wrong_values.has('mas'))
            return <span className={s.wrong_info}>Введите значение от 0,0</span>
        else
            return null
    }
////////////////////    неправильное кол-во плоскостей     ////////////////////
    const DragCoefAlert = (props) => {
        if (props.wrong_values.has('drag_coef'))
            return <span className={s.wrong_info}>Введите значение от 0,0 до 2,0</span>
        else
            return null
    }

    return (
        <div className={s.obj_info_wrapper}>
            <div className={s.obj_info}>
                <div className={classnames(s.row, s.row_1)}>
                    <div className={classnames(s.text_info_wrapper)}>
                        <span className={s.text_info}>Создание регулярной группы целевых объектов</span>
                    </div>
                    <div className={classnames(s.text_delete_wrapper)}>
                        <span className={s.text_delete} onClick={delWarnChange}>удалить</span>
                        <DeleteButtons delete_warn={props.delete_warn}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_2)}>
                    <div className={classnames(s.element, s.element_name)}>
                        <span className={s.characteristic_text}>ЗАДАЙТЕ НАЗВАНИЕ ОБЪЕКТА</span>
                        <input className={s.input_char} type="text" placeholder="Название объекта"
                               value={props.obj.name} onChange={nameChange} ref={name}/>
                        <NameAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_3)}>
                    <div className={classnames(s.element, s.element_date)}>
                        <span className={s.characteristic_text}>ДАТА И ВРЕМЯ ОТСЧЕТА</span>
                        <input className={s.input_char} value={date} type="datetime-local" step=".1"
                               onChange={dateTimeChange} ref={date_time}/>
                        <DateTimeAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_priority)}>
                        <span className={s.characteristic_text}>ПРИОРИТЕТ ПОИСКА (ОТ 1)</span>
                        <input className={s.input_char} value={props.obj.priority} type="number" placeholder="От 1"
                               min="1"
                               onChange={priorityChange} ref={priority}/>
                        <PriorityAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_4)}>
                    <div className={classnames(s.element, s.element_plane_cnt)}>
                        <span className={s.characteristic_text}>КОЛИЧЕСТВО ПЛОСКОСТЕЙ</span>
                        <input className={s.input_char} value={props.obj.plane_cnt} type="number" placeholder="От 0"
                               min="0"
                               onChange={planeCntChange} ref={plane_cnt}/>
                        <PlaneCntAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_obj_cnt)}>
                        <span className={s.characteristic_text}>КОЛИЧЕСТВО ОБЪЕКТОВ НА ПЛОСКОСТИ</span>
                        <input className={s.input_char} value={props.obj.obj_cnt} type="number" placeholder="От 0"
                               min="0"
                               onChange={objCntChange} ref={obj_cnt}/>
                        <ObjCntAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <NewObjAlert1 create_mod={props.create_mod} is_temporary={props.obj.is_temporary}
                                  cnt={props.obj.plane_cnt * props.obj.obj_cnt}/>
                </div>
                <div className={classnames(s.row, s.row_5)}>
                    <div className={classnames(s.element, s.element_orbital_incl)}>
                        <span className={s.characteristic_text}>НАКЛОНЕНИЕ ОРБИТЫ</span>
                        <input className={s.input_char} value={props.obj.orbital_incl} type="number"
                               placeholder="От 0 до 180°" min="0" max="180"
                               onChange={orbitalInclChange} ref={orbital_incl}/>
                        <OrbitalInclAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_per_arg)}>
                        <span className={s.characteristic_text}>АРГУМЕНТ ПЕРИЦЕНТРА</span>
                        <input className={s.input_char} value={props.obj.per_arg} type="number"
                               placeholder="От 0 до 360°" min="0" max="360"
                               onChange={perArgChange} ref={per_arg}/>
                        <PerArgAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_semi_maj_axis)}>
                        <span className={s.characteristic_text}>БОЛЬШАЯ ПОЛУОСЬ</span>
                        <input className={s.input_char} value={props.obj.semi_maj_axis} type="number"
                               placeholder="От 6480 до 40000 км" min="6480" max="40000"
                               onChange={semiMajAxisChange} ref={semi_maj_axis}/>
                        <SemiMajAxisAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_6)}>
                    <div className={classnames(s.element, s.element_eccentricity)}>
                        <span className={s.characteristic_text}>ЭКСЦЕНТРИСИТЕТ</span>
                        <input className={s.input_char} value={props.obj.eccentricity} type="number"
                               placeholder="От 0,0 до 1,0" min="0" max="1"
                               onChange={eccentricityChange} ref={eccentricity}/>
                        <EccentricityAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_nod_long)}>
                        <span className={s.characteristic_text}>ДОЛГОТА ВОСХОДЯЩЕГО УЗЛА</span>
                        <input className={s.input_char} value={props.obj.nod_long} type="number"
                               placeholder="От 0 до 180° первого объекта" min="0" max="180"
                               onChange={nodLongChange} ref={nod_long}/>
                        <NodLongAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_true_anomaly)}>
                        <span className={s.characteristic_text}>ИСТИННАЯ АНОМАЛИЯ</span>
                        <input className={s.input_char} value={props.obj.true_anomaly} type="number"
                               placeholder="От 0 до 180° первого объекта" min="0" max="180"
                               onChange={trueAnomalyChange} ref={true_anomaly}/>
                        <TrueAnomalyAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_7)}>
                    <div className={classnames(s.element, s.element_black_degree)}>
                        <span className={s.characteristic_text}>СТЕПЕНЬ ЧЕРНОТЫ</span>
                        <input className={s.input_char} value={props.obj.black_degree} type="number"
                               placeholder="От 0,0 до 1,0" min="0" max="1"
                               onChange={blackDegreeChange} ref={black_degree}/>
                        <BlackDegreeAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_lin_siz)}>
                        <span className={s.characteristic_text}>ЛИНЕЙНЫЙ РАЗМЕР</span>
                        <input className={s.input_char} value={props.obj.lin_siz} type="number"
                               placeholder="От 0,0 метра" min="0"
                               onChange={linSizChange} ref={lin_siz}/>
                        <LinSizAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                    <div className={classnames(s.element, s.element_mas)}>
                        <span className={s.characteristic_text}>МАССА</span>
                        <input className={s.input_char} value={props.obj.mas} type="number"
                               placeholder="От 0,0 килограмма" min="0"
                               onChange={masChange} ref={mas}/>
                        <MasAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_8)}>
                    <div className={classnames(s.element, s.element_drag_coef)}>
                        <span className={s.characteristic_text}>КОЭФФИЦИЕНТ ЛОБОВОГО СОПРОТИВЛЕНИЯ</span>
                        <input className={s.input_char} value={props.obj.drag_coef} type="number"
                               placeholder="От 0,0 до 2,0" min="0" max="2"
                               onChange={dragCoefChange} ref={drag_coef}/>
                        <DragCoefAlert wrong_values={props.obj.wrong_values}/>
                    </div>
                </div>
                <div className={classnames(s.row, s.row_9)}>
                    {create_edit_button}
                    <NewObjAlert2 create_mod={props.create_mod} edit_mod={props.edit_mod} is_temporary={props.obj.is_temporary}
                                  cnt={props.obj.plane_cnt * props.obj.obj_cnt}/>
                </div>
            </div>
        </div>
    )
}

export default ObjectInfo