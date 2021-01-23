import React from 'react'
import s from './SideBar.module.css'
import classnames from 'classnames'
import SvgIcon from "@material-ui/core/SvgIcon"
import square from "@material-ui/icons/Dashboard"
import earth from "@material-ui/icons/PublicRounded"
import time from "@material-ui/icons/TimerRounded"
import star from "@material-ui/icons/StarOutlineRounded"
import flash from "@material-ui/icons/FlashOnSharp"
import settings from "@material-ui/icons/TuneRounded"
import question from "@material-ui/icons/HelpOutlineRounded"


const SideBar = () => {
    return (
        <div className={s.side_bar}>
            <div className={s.up_icons}>
                <div className={s.icon_wrapper}><SvgIcon component={square} className={s.icon}/></div>
                <div className={classnames(s.icon_wrapper, s.active_icon_wrapper)}><SvgIcon component={earth} className={s.icon}/></div>
                <div className={s.icon_wrapper}><SvgIcon component={time} className={s.icon}/></div>
                <div className={s.icon_wrapper}><SvgIcon component={star} className={s.icon}/></div>
                <div className={s.icon_wrapper}><SvgIcon component={flash} className={s.icon}/></div>
            </div>
            <div className={s.down_icons}>
                <div className={s.icon_wrapper}><SvgIcon component={settings} className={s.icon}/></div>
                <div className={s.icon_wrapper}><SvgIcon component={question} className={s.icon}/></div>
            </div>
        </div>
    )
}

export default SideBar