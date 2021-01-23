import {connect} from "react-redux"
import ObjectInfo from "./ObjectInfo";
import {
    blackDegreeChangeAC, cancelChangeAC,
    dateTimeChangeAC,
    deleteObjAC,
    delWarnChangeAC, dragCoefChangeAC,
    eccentricityChangeAC,
    editModChangeAC, linSizChangeAC, masChangeAC,
    nameChangeAC, newObjCreateConfirmAC,
    nodLongChangeAC,
    objCntChangeAC,
    orbitalInclChangeAC,
    perArgChangeAC,
    planeCntChangeAC,
    priorityChangeAC,
    saveChangeAC,
    semiMajAxisChangeAC, trueAnomalyChangeAC
} from "../../../../Redux/Reducer";

const mapStateToProps = (state) => {
    let obj
    let wrong_values
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
        nameChangeAC: (name) => {
            dispatch(nameChangeAC(name))
        },
        dateTimeChangeAC: (date_time) => {
            dispatch(dateTimeChangeAC(date_time))
        },
        priorityChangeAC: (priority) => {
            dispatch(priorityChangeAC(priority))
        },
        planeCntChangeAC: (plane_cnt) => {
            dispatch(planeCntChangeAC(plane_cnt))
        },
        objCntChangeAC: (obj_cnt) => {
            dispatch(objCntChangeAC(obj_cnt))
        },
        orbitalInclChangeAC: (orbital_incl) => {
            dispatch(orbitalInclChangeAC(orbital_incl))
        },
        perArgChangeAC: (per_arg) => {
            dispatch(perArgChangeAC(per_arg))
        },
        semiMajAxisChangeAC: (semi_maj_axis) => {
            dispatch(semiMajAxisChangeAC(semi_maj_axis))
        },
        eccentricityChangeAC: (eccentricity) => {
            dispatch(eccentricityChangeAC(eccentricity))
        },
        nodLongChangeAC: (nod_long) => {
            dispatch(nodLongChangeAC(nod_long))
        },
        trueAnomalyChangeAC: (true_anomaly) => {
            dispatch(trueAnomalyChangeAC(true_anomaly))
        },
        blackDegreeChangeAC: (black_degree) => {
            dispatch(blackDegreeChangeAC(black_degree))
        },
        linSizChangeAC: (lin_siz) => {
            dispatch(linSizChangeAC(lin_siz))
        },
        masChangeAC: (mas) => {
            dispatch(masChangeAC(mas))
        },
        dragCoefChangeAC: (drag_coef) => {
            dispatch(dragCoefChangeAC(drag_coef))
        },
        newObjCreateConfirmAC: () => {
            dispatch(newObjCreateConfirmAC())
        },
        cancelChangeAC: () => {
            dispatch(cancelChangeAC())
        }
    }
}

const ObjectInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ObjectInfo)

export default ObjectInfoContainer