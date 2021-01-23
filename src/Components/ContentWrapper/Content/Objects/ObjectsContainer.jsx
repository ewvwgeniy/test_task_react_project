import {connect} from "react-redux"
import Objects from "./Objects"
import {curObjChangeAC, newObjCreateAC} from "../../../../Redux/Reducer";

const mapStateToProps = (state) => {
    let mas = []
    state.objects_obj.objects.forEach((i) => {
        mas.push({id: i.id, name: i.name, cnt: i.plane_cnt*i.obj_cnt, is_temporary: i.is_temporary})
    })
    return {
        cur_obj_id: state.objects_obj.cur_obj_id,
        object_mas: mas
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        curObjChange: (id) => {
            dispatch(curObjChangeAC(id))
        },
        newObjCreateAC: () => {
            dispatch(newObjCreateAC())
        }
    }
}

const ObjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Objects)

export default ObjectsContainer