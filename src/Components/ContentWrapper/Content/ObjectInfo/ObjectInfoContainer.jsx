import {connect} from "react-redux"
import ObjectInfo from "./ObjectInfo";
import {
    cancelChangeAC,
    deleteObjAC,
    delWarnChangeAC,
    editModChangeAC,
    newObjCreateConfirmAC, objChangeAC,
    saveChangeAC
} from "../../../../Redux/Reducer";

const mapStateToProps = (state) => {
    let obj
    if (state.objects_obj.obj_info.edit_mod === 1) {
        obj = state.objects_obj.temporary_obj
    } else {
        state.objects_obj.objects.forEach((el, i) => {
            if (state.objects_obj.cur_obj_id === el.id) {
                obj = state.objects_obj.objects[i]
            }
        })
    }
    return {
        obj: obj,
        create_mod: state.objects_obj.obj_info.create_mod,
        edit_mod: state.objects_obj.obj_info.edit_mod,
        delete_warn: state.objects_obj.obj_info.delete_warn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        delWarnChangeAC: () => {
            dispatch(delWarnChangeAC())
        },
        deleteObjAC: (id) => {
            dispatch(deleteObjAC(id))
        },
        editModChangeAC: () => {
            dispatch(editModChangeAC())
        },
        saveChangeAC: () => {
            dispatch(saveChangeAC())
        },
        newObjCreateConfirmAC: () => {
            dispatch(newObjCreateConfirmAC())
        },
        cancelChangeAC: () => {
            dispatch(cancelChangeAC())
        },
        objChangeAC: (field_name, field_value) => {
            dispatch(objChangeAC(field_name, field_value))
        }
    }
}

const ObjectInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ObjectInfo)

export default ObjectInfoContainer