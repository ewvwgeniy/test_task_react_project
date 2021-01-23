import React from "react"
import s from './Content.module.css'
import classnames from 'classnames'
import SvgIcon from "@material-ui/core/SvgIcon"
import question from "@material-ui/icons/HelpOutlineRounded"
import double_arrow from "@material-ui/icons/DoubleArrowSharp"
import ObjectsContainer from "./Objects/ObjectsContainer";
import ObjectInfoContainer from "./ObjectInfo/ObjectInfoContainer";


const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.content_info}>
                <div className={s.info_1}>
                    <div className={classnames(s.text, s.first_text)}>ДОБАВЬТЕ ЦЕЛЕВЫЕ ОБЪЕКТЫ И ОПРЕДЕЛИТЕ ИХ ПАРАМЕТРЫ</div>
                    <div className={s.icon_wrapper}><SvgIcon component={question} className={classnames(s.icon, s.question)}/></div>
                </div>
                <div className={s.info_2}>
                    <div className={classnames(s.text, s.second_text)}>свернуть</div>
                    <div className={s.icon_wrapper}><SvgIcon component={double_arrow} className={classnames(s.icon, s.double_arrow)}/></div>
                </div>
            </div>
            <div className={s.objects}>
                <ObjectsContainer/>
            </div>
            <div className={s.object_info}>
                <ObjectInfoContainer/>
            </div>
        </div>
    )
}

export default Content