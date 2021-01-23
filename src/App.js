import './App.css';
import s from './App.module.css'
import UpperBar from "./Components/Menu/UpperBar/UpperBar";
import SideBar from "./Components/Menu/SideBar/SideBar";
import ContentWrapper from "./Components/ContentWrapper/ContentWrapper";

const App = () => {
    return (
        <div>
            <UpperBar className={s.up_bar}/>
            <div className={s.row}>
                <SideBar className={s.sidebar}/>
                <ContentWrapper className={s.content}/>
            </div>
        </div>
    )
}

export default App;
