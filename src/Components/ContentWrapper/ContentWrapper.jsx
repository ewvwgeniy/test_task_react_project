import React from "react"
import s from './ContentWrapper.module.css'
import UpContentBar from "./UpContentBar/UpContentBar";
import DownContentBar from "./DownContentBar/DownContentBar";
import Content from "./Content/Content";

const ContentWrapper = () => {
    return (
        <div className={s.content_bar}>
            <UpContentBar className={s.up_content_bar}/>
            <DownContentBar className={s.down_content_bar}/>
            <Content className={s.content}/>
        </div>
    )
}

export default ContentWrapper