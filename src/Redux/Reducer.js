const CUR_OBJ_CHANGE = 'CUR_OBJ_CHANGE'
const DELETE_WARN_CHANGE = 'DELETE_WARN_CHANGE'
const DELETE_OBJ = 'DELETE_OBJ'
const EDIT_MOD_CHANGE = 'EDIT_MOD_CHANGE'
const NAME_CHANGE = 'NAME_CHANGE'
const SAVE_CHANGE = 'SAVE_CHANGE'
const DATE_TIME_CHANGE = 'DATE_TIME_CHANGE'
const PRIORITY_CHANGE = 'PRIORITY_CHANGE'
const PLANE_CNT_CHANGE = 'PLANE_CNT_CHANGE'
const OBJ_CNT_CHANGE = 'OBJ_CNT_CHANGE'
const ORBITAL_INCL_CHANGE = 'ORBITAL_INCL_CHANGE'
const PER_ARG_CHANGE = 'PER_ARG_CHANGE'
const SEMI_MAJ_AXIS_CHANGE = 'SEMI_MAJ_AXIS_CHANGE'
const ECCENTRICITY_CHANGE = 'ECCENTRICITY_CHANGE'
const NOD_LONG_CHANGE = 'NOD_LONG_CHANGE'
const TRUE_ANOMALY_CHANGE = 'TRUE_ANOMALY_CHANGE'
const BLACK_DEGREE_CHANGE = 'BLACK_DEGREE_CHANGE'
const LIN_SIZ_CHANGE ='LIN_SIZ_CHANGE'
const MAS_CHANGE = 'MAS_CHANGE'
const DRAG_COEF_CHANGE = 'DRAG_COEF_CHANGE'
const NEW_OBJ_CREATE = 'NEW_OBJ_CREATE'
const NEW_OBJ_CREATE_CONFIRM = 'NEW_OBJ_CREATE_CONFIRM'
const CANCEL_CHANGE = 'CANCEL_CHANGE'

let now = new Date()

let objects_obj = {
    obj_info: {
        create_mod: 0,
        edit_mod: 0,
        delete_warn: 0,
    },
    cur_obj_id: 0,
    objects: [
        {
            id: 0,
            name: "Случайная группа",
            date_time: now,
            priority: 1,
            plane_cnt: 40,
            obj_cnt: 5,
            orbital_incl: 45,
            per_arg: 67,
            semi_maj_axis: 7000,
            eccentricity: 0.5,
            nod_long: 40,
            true_anomaly: 234,
            black_degree: 0.5,
            lin_siz: 1243,
            mas: 4.5,
            drag_coef: 1.5,
            wrong_values: new Set()
        },
        {
            id: 1,
            name: "Из TLE:",
            date_time: now,
            priority: 2,
            plane_cnt: 1,
            obj_cnt: 31,
            orbital_incl: 35,
            per_arg: 63,
            semi_maj_axis: 7100,
            eccentricity: 0.4,
            nod_long: 30,
            true_anomaly: 324,
            black_degree: 0.05,
            lin_siz: 3.1,
            mas: 422.523,
            drag_coef: 1.545,
            wrong_values: new Set()
        },
        {
            id: 2,
            name: "Кусок непонятно чего",
            date_time: now,
            priority: 3,
            plane_cnt: 1,
            obj_cnt: 1,
            orbital_incl: 25,
            per_arg: 7,
            semi_maj_axis: 10000,
            eccentricity: 0.3,
            nod_long: 20,
            true_anomaly: 4,
            black_degree: 0.35,
            lin_siz: 233.123,
            mas: 342.5,
            drag_coef: 1.342,
            wrong_values: new Set()
        },
        {
            id: 3,
            name: "Гаечный ключ",
            date_time: now,
            priority: 4,
            plane_cnt: 1,
            obj_cnt: 1,
            orbital_incl: 22,
            per_arg: 34,
            semi_maj_axis: 7203,
            eccentricity: 0.2,
            nod_long: 23,
            true_anomaly: 56,
            black_degree: 0.1,
            lin_siz: 333.1,
            mas: 45,
            drag_coef: 0.234,
            wrong_values: new Set()
        },
        {
            id: 4,
            name: "НЛО №12893132",
            date_time: now,
            priority: 5,
            plane_cnt: 31,
            obj_cnt: 1,
            orbital_incl: 56,
            per_arg: 89,
            semi_maj_axis: 9275,
            eccentricity: 0.05,
            nod_long: 38,
            true_anomaly: 83,
            black_degree: 0.34,
            lin_siz: 2354,
            mas: 67,
            drag_coef: 1.2342,
            wrong_values: new Set()
        },
        {
            id: 5,
            name: "Регулярная сетка 5х5",
            date_time: now,
            priority: 6,
            plane_cnt: 5,
            obj_cnt: 5,
            orbital_incl: 78,
            per_arg: 12,
            semi_maj_axis: 12345,
            eccentricity: 0.75,
            nod_long: 56,
            true_anomaly: 174,
            black_degree: 1.5,
            lin_siz: 3454.14545,
            mas: 775,
            drag_coef: 0.5343,
            wrong_values: new Set()
        },
        {
            id: 6,
            name: "НЛО №8931892",
            date_time: now,
            priority: 7,
            plane_cnt: 1,
            obj_cnt: 1,
            orbital_incl: 83,
            per_arg: 38,
            semi_maj_axis: 14729,
            eccentricity: 0.965,
            nod_long: 12,
            true_anomaly: 249,
            black_degree: 0.3455,
            lin_siz: 33.1,
            mas: 7.54,
            drag_coef: 0.432,
            wrong_values: new Set()
        }
    ],
    temporary_obj: {}
}
objects_obj.cur_obj_id = objects_obj.objects[0].id

const nameIsOk = (name) => {
    return name !== '';
}
const dateTimeIsOk = (date) => {
    return date instanceof Date;
}
const priorityIsOk = (priority) => {
    return priority >= 1 && Number.isInteger(priority) && priority !== '';
}
const planeCntIsOk = (plane_cnt) => {
    return plane_cnt >= 0 && Number.isInteger(plane_cnt) && plane_cnt !== '';
}
const objCntIsOk = (obj_cnt) => {
    return obj_cnt >= 0 && Number.isInteger(obj_cnt) && obj_cnt !== '';
}
const orbitalInclIsOk = (orbital_incl) => {
    return orbital_incl >= 0 && orbital_incl <= 180 && orbital_incl !== '';
}
const perArgIsOk = (per_arg) => {
    return per_arg >= 0 && per_arg < 360 && per_arg !== '';
}
const semiMajAxisIsOk = (semi_maj_axis) => {
    return semi_maj_axis >= 6480 && semi_maj_axis <= 40000 && semi_maj_axis !== '';
}
const eccentricityIsOk = (eccentricity) => {
    return eccentricity >= 0 && eccentricity <= 1 && eccentricity !== '';
}
const nodLongIsOk = (nod_long) => {
    return nod_long >= 0 && nod_long <= 180 && nod_long !== '';
}
const trueAnomalyIsOk = (true_anomaly) => {
    return true_anomaly >= 0 && true_anomaly <= 180 && true_anomaly !== '';
}
const blackDegreeIsOk = (black_degree) => {
    return black_degree >= 0 && black_degree <= 1 && black_degree !== '';
}
const linSizIsOk = (lin_siz) => {
    return lin_siz >= 0 && lin_siz !== '';
}
const masIsOk = (mas) => {
    return mas > 0 && mas !== '';
}
const dragCoefIsOk = (drag_coef) => {
    return drag_coef >= 0 && drag_coef <= 2 && drag_coef !== '';
}


const Reducer = (state = objects_obj, action) => {
    switch (action.type) {
        case CUR_OBJ_CHANGE: {
            let state_copy = {
                ...state,
                cur_obj_id: action.id,
                obj_info: {...state.obj_info}
            }
            let obj_index
            state_copy.objects.forEach((element, index) => {
                if (element.id === state_copy.cur_obj_id) obj_index = index
            })
            if (state_copy.objects[obj_index].is_temporary === true)
                state_copy.obj_info.create_mod = 1
            else
                state_copy.obj_info.create_mod = 0
            state_copy.obj_info.delete_warn = 0
            state_copy.obj_info.edit_mod = 0
            return state_copy
        }
        case DELETE_WARN_CHANGE: {
            let state_copy = {
                ...state,
                obj_info: {...state.obj_info}
            }
            if (state_copy.obj_info.delete_warn === 0) {
                state_copy.obj_info.delete_warn = 1
            } else {
                state_copy.obj_info.delete_warn = 0
            }
            return state_copy
        }
        case EDIT_MOD_CHANGE: {
            let state_copy = {
                ...state,
                obj_info: {...state.obj_info}
            }
            let obj_index
            state_copy.objects.forEach((element, index) => {
                if (element.id === state_copy.cur_obj_id) obj_index = index
            })
            state_copy.temporary_obj = {...state.objects[obj_index]}
            state_copy.temporary_obj.wrong_values = new Set(state.objects[obj_index].wrong_values)

            if (state_copy.obj_info.edit_mod === 0) {
                state_copy.obj_info.edit_mod = 1
            } else {
                state_copy.obj_info.edit_mod = 0
            }
            state_copy.obj_info.delete_warn = 0
            return state_copy
        }
        case DELETE_OBJ: {
            let state_copy = {
                ...state,
                objects: [...state.objects],
                obj_info: {...state.obj_info}
            }
            let obj_index
            state_copy.objects.forEach((element, index) => {
                if (element.id === action.id) obj_index = index
            })
            state_copy.objects.splice(obj_index, 1)
            if (obj_index > 0) {
                state_copy.cur_obj_id = state_copy.objects[obj_index - 1].id
            } else {
                if (state_copy.objects.length > 0)
                    state_copy.cur_obj_id = state_copy.objects[0].id
                else
                    state_copy.cur_obj_id = -1
            }
            state_copy.obj_info.delete_warn = 0
            state_copy.obj_info.edit_mod = 0
            state_copy.obj_info.create_mod = 0
            return state_copy
        }
        case SAVE_CHANGE: {
            let state_copy = {
                ...state,
                objects: [...state.objects],
                obj_info: {...state.obj_info}
            }
            let obj_index
            state_copy.objects.forEach((element, index) => {
                if (element.id === state_copy.cur_obj_id) obj_index = index
            })
            if (state_copy.temporary_obj.wrong_values.size === 0) {
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index] = state_copy.temporary_obj
                state_copy.obj_info.edit_mod = 0
                return state_copy
            } else
                return state
        }
        case NAME_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].name = action.name

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!nameIsOk(state_copy.objects[obj_index].name))
                    state_copy.objects[obj_index].wrong_values.add('name')
                else
                    state_copy.objects[obj_index].wrong_values.delete('name')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.name = action.name

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!nameIsOk(state_copy.temporary_obj.name))
                    state_copy.temporary_obj.wrong_values.add('name')
                else
                    state_copy.temporary_obj.wrong_values.delete('name')
                return state_copy
            }
        }
        case DATE_TIME_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].date_time = action.date_time

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!dateTimeIsOk(state_copy.objects[obj_index].date_time))
                    state_copy.objects[obj_index].wrong_values.add('date_time')
                else
                    state_copy.objects[obj_index].wrong_values.delete('date_time')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.date_time = action.date_time

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!dateTimeIsOk(state_copy.temporary_obj.date_time))
                    state_copy.temporary_obj.wrong_values.add('date_time')
                else
                    state_copy.temporary_obj.wrong_values.delete('date_time')
                return state_copy
            }
        }
        case PRIORITY_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].priority = parseInt(action.priority, 10)


                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!priorityIsOk(state_copy.objects[obj_index].priority))
                    state_copy.objects[obj_index].wrong_values.add('priority')
                else
                    state_copy.objects[obj_index].wrong_values.delete('priority')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.priority = parseInt(action.priority, 10)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!priorityIsOk(state_copy.temporary_obj.priority))
                    state_copy.temporary_obj.wrong_values.add('priority')
                else
                    state_copy.temporary_obj.wrong_values.delete('priority')
                return state_copy
            }
        }
        case PLANE_CNT_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].plane_cnt = parseInt(action.plane_cnt, 10)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!planeCntIsOk(state_copy.objects[obj_index].plane_cnt))
                    state_copy.objects[obj_index].wrong_values.add('plane_cnt')
                else
                    state_copy.objects[obj_index].wrong_values.delete('plane_cnt')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.plane_cnt = parseInt(action.plane_cnt, 10)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!planeCntIsOk(state_copy.temporary_obj.plane_cnt))
                    state_copy.temporary_obj.wrong_values.add('plane_cnt')
                else
                    state_copy.temporary_obj.wrong_values.delete('plane_cnt')
                return state_copy
            }
        }
        case OBJ_CNT_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].obj_cnt = parseInt(action.obj_cnt, 10)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!objCntIsOk(state_copy.objects[obj_index].obj_cnt))
                    state_copy.objects[obj_index].wrong_values.add('obj_cnt')
                else
                    state_copy.objects[obj_index].wrong_values.delete('obj_cnt')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.obj_cnt = parseInt(action.obj_cnt, 10)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!objCntIsOk(state_copy.temporary_obj.obj_cnt))
                    state_copy.temporary_obj.wrong_values.add('obj_cnt')
                else
                    state_copy.temporary_obj.wrong_values.delete('obj_cnt')
                return state_copy
            }
        }
        case ORBITAL_INCL_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].orbital_incl = parseFloat(action.orbital_incl)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!orbitalInclIsOk(state_copy.objects[obj_index].orbital_incl))
                    state_copy.objects[obj_index].wrong_values.add('orbital_incl')
                else
                    state_copy.objects[obj_index].wrong_values.delete('orbital_incl')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.orbital_incl = parseFloat(action.orbital_incl)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!orbitalInclIsOk(state_copy.temporary_obj.orbital_incl))
                    state_copy.temporary_obj.wrong_values.add('orbital_incl')
                else
                    state_copy.temporary_obj.wrong_values.delete('orbital_incl')
                return state_copy
            }
        }
        case PER_ARG_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].per_arg = parseFloat(action.per_arg)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!perArgIsOk(state_copy.objects[obj_index].per_arg))
                    state_copy.objects[obj_index].wrong_values.add('per_arg')
                else
                    state_copy.objects[obj_index].wrong_values.delete('per_arg')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.per_arg = parseFloat(action.per_arg)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!perArgIsOk(state_copy.temporary_obj.per_arg))
                    state_copy.temporary_obj.wrong_values.add('per_arg')
                else
                    state_copy.temporary_obj.wrong_values.delete('per_arg')
                return state_copy
            }
        }
        case SEMI_MAJ_AXIS_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].semi_maj_axis = parseFloat(action.semi_maj_axis)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!semiMajAxisIsOk(state_copy.objects[obj_index].semi_maj_axis))
                    state_copy.objects[obj_index].wrong_values.add('semi_maj_axis')
                else
                    state_copy.objects[obj_index].wrong_values.delete('semi_maj_axis')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.semi_maj_axis = parseFloat(action.semi_maj_axis)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!semiMajAxisIsOk(state_copy.temporary_obj.semi_maj_axis))
                    state_copy.temporary_obj.wrong_values.add('semi_maj_axis')
                else
                    state_copy.temporary_obj.wrong_values.delete('semi_maj_axis')
                return state_copy
            }
        }
        case ECCENTRICITY_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].eccentricity = parseFloat(action.eccentricity)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!eccentricityIsOk(state_copy.objects[obj_index].eccentricity))
                    state_copy.objects[obj_index].wrong_values.add('eccentricity')
                else
                    state_copy.objects[obj_index].wrong_values.delete('eccentricity')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.eccentricity = parseFloat(action.eccentricity)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!eccentricityIsOk(state_copy.temporary_obj.eccentricity))
                    state_copy.temporary_obj.wrong_values.add('eccentricity')
                else
                    state_copy.temporary_obj.wrong_values.delete('eccentricity')
                return state_copy
            }
        }
        case NOD_LONG_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].nod_long = parseFloat(action.nod_long)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!nodLongIsOk(state_copy.objects[obj_index].nod_long))
                    state_copy.objects[obj_index].wrong_values.add('nod_long')
                else
                    state_copy.objects[obj_index].wrong_values.delete('nod_long')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.nod_long = parseFloat(action.nod_long)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!nodLongIsOk(state_copy.temporary_obj.nod_long))
                    state_copy.temporary_obj.wrong_values.add('nod_long')
                else
                    state_copy.temporary_obj.wrong_values.delete('nod_long')
                return state_copy
            }
        }
        case TRUE_ANOMALY_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].true_anomaly = parseFloat(action.true_anomaly)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!trueAnomalyIsOk(state_copy.objects[obj_index].true_anomaly))
                    state_copy.objects[obj_index].wrong_values.add('true_anomaly')
                else
                    state_copy.objects[obj_index].wrong_values.delete('true_anomaly')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.true_anomaly = parseFloat(action.true_anomaly)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!trueAnomalyIsOk(state_copy.temporary_obj.true_anomaly))
                    state_copy.temporary_obj.wrong_values.add('true_anomaly')
                else
                    state_copy.temporary_obj.wrong_values.delete('true_anomaly')
                return state_copy
            }
        }
        case BLACK_DEGREE_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].black_degree = parseFloat(action.black_degree)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!blackDegreeIsOk(state_copy.objects[obj_index].black_degree))
                    state_copy.objects[obj_index].wrong_values.add('black_degree')
                else
                    state_copy.objects[obj_index].wrong_values.delete('black_degree')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.black_degree = parseFloat(action.black_degree)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!blackDegreeIsOk(state_copy.temporary_obj.black_degree))
                    state_copy.temporary_obj.wrong_values.add('black_degree')
                else
                    state_copy.temporary_obj.wrong_values.delete('black_degree')
                return state_copy
            }
        }
        case LIN_SIZ_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].lin_siz = parseFloat(action.lin_siz)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!linSizIsOk(state_copy.objects[obj_index].lin_siz))
                    state_copy.objects[obj_index].wrong_values.add('lin_siz')
                else
                    state_copy.objects[obj_index].wrong_values.delete('lin_siz')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.lin_siz = parseFloat(action.lin_siz)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!linSizIsOk(state_copy.temporary_obj.lin_siz))
                    state_copy.temporary_obj.wrong_values.add('lin_siz')
                else
                    state_copy.temporary_obj.wrong_values.delete('lin_siz')
                return state_copy
            }
        }
        case MAS_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].mas = parseFloat(action.mas)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!masIsOk(state_copy.objects[obj_index].mas))
                    state_copy.objects[obj_index].wrong_values.add('mas')
                else
                    state_copy.objects[obj_index].wrong_values.delete('mas')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.mas = parseFloat(action.mas)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!masIsOk(state_copy.temporary_obj.mas))
                    state_copy.temporary_obj.wrong_values.add('mas')
                else
                    state_copy.temporary_obj.wrong_values.delete('mas')
                return state_copy
            }
        }
        case DRAG_COEF_CHANGE: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })
            if (state.objects[obj_index].is_temporary === true) {
                let state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index].drag_coef = parseFloat(action.drag_coef)

                state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)
                if (!dragCoefIsOk(state_copy.objects[obj_index].drag_coef))
                    state_copy.objects[obj_index].wrong_values.add('drag_coef')
                else
                    state_copy.objects[obj_index].wrong_values.delete('drag_coef')
                return state_copy
            } else {
                let state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }
                state_copy.temporary_obj.drag_coef = parseFloat(action.drag_coef)

                state_copy.temporary_obj.wrong_values = new Set(state.temporary_obj.wrong_values)
                if (!dragCoefIsOk(state_copy.temporary_obj.drag_coef))
                    state_copy.temporary_obj.wrong_values.add('drag_coef')
                else
                    state_copy.temporary_obj.wrong_values.delete('drag_coef')
                return state_copy
            }
        }
        case NEW_OBJ_CREATE: {
            let state_copy = {
                ...state,
                objects: [...state.objects],
                obj_info: {...state.obj_info}
            }
            let id
            if (state_copy.objects.length > 0)
                id = state_copy.objects[state_copy.objects.length - 1].id + 1
            else
                id = 0
            let obj = {is_temporary: true,
                id: id,
                name: '',
                date_time: '',
                priority: '',
                plane_cnt: '',
                obj_cnt: '',
                orbital_incl: '',
                per_arg: '',
                semi_maj_axis: '',
                eccentricity: '',
                nod_long: '',
                true_anomaly: '',
                black_degree: '',
                lin_siz: '',
                mas: '',
                drag_coef: '',
                wrong_values: new Set()}
            state_copy.objects.push(obj)
            state_copy.cur_obj_id = id
            state_copy.obj_info.create_mod = 1
            return state_copy
        }
        case NEW_OBJ_CREATE_CONFIRM: {
            let obj_index
            state.objects.forEach((element, index) => {
                if (element.id === state.cur_obj_id) obj_index = index
            })

            let state_copy = {
                ...state,
                objects: [...state.objects],
                obj_info: {...state.obj_info}
            }
            state_copy.objects[obj_index] = {...state.objects[obj_index]}
            state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)

            if (nameIsOk(state.objects[obj_index].name))
                if (dateTimeIsOk(state.objects[obj_index].date_time))
                    if (priorityIsOk(state.objects[obj_index].priority))
                        if (planeCntIsOk(state.objects[obj_index].plane_cnt))
                            if (objCntIsOk(state.objects[obj_index].obj_cnt))
                                if (orbitalInclIsOk(state.objects[obj_index].orbital_incl))
                                    if (perArgIsOk(state.objects[obj_index].per_arg))
                                        if (semiMajAxisIsOk(state.objects[obj_index].semi_maj_axis))
                                            if (eccentricityIsOk(state.objects[obj_index].eccentricity))
                                                if (nodLongIsOk(state.objects[obj_index].nod_long))
                                                    if (trueAnomalyIsOk(state.objects[obj_index].true_anomaly))
                                                        if (blackDegreeIsOk(state.objects[obj_index].black_degree))
                                                            if (linSizIsOk(state.objects[obj_index].lin_siz))
                                                                if (masIsOk(state.objects[obj_index].mas))
                                                                    if (dragCoefIsOk(state.objects[obj_index].drag_coef)) {
                                                                        delete state_copy.objects[obj_index].is_temporary
                                                                        state_copy.obj_info.create_mod = 0
                                                                        state_copy.obj_info.edit_mod = 0
                                                                        state_copy.obj_info.delete_warn = 0
                                                                    }
                                                                    else
                                                                        state_copy.objects[obj_index].wrong_values.add('drag_coef')
                                                                else
                                                                    state_copy.objects[obj_index].wrong_values.add('mas')
                                                            else
                                                                state_copy.objects[obj_index].wrong_values.add('lin_siz')
                                                        else
                                                            state_copy.objects[obj_index].wrong_values.add('black_degree')
                                                    else
                                                        state_copy.objects[obj_index].wrong_values.add('true_anomaly')
                                                else
                                                    state_copy.objects[obj_index].wrong_values.add('nod_long')
                                            else
                                                state_copy.objects[obj_index].wrong_values.add('eccentricity')
                                        else
                                            state_copy.objects[obj_index].wrong_values.add('semi_maj_axis')
                                    else
                                        state_copy.objects[obj_index].wrong_values.add('per_arg')
                                else
                                    state_copy.objects[obj_index].wrong_values.add('orbital_incl')
                            else
                                state_copy.objects[obj_index].wrong_values.add('obj_cnt')
                        else
                            state_copy.objects[obj_index].wrong_values.add('plane_cnt')
                    else
                        state_copy.objects[obj_index].wrong_values.add('priority')
                else
                    state_copy.objects[obj_index].wrong_values.add('date_time')
            else
                state_copy.objects[obj_index].wrong_values.add('name')

            return state_copy
        }
        case CANCEL_CHANGE: {
            let state_copy = {
                ...state,
                obj_info: {...state.obj_info}
            }
            state_copy.obj_info.edit_mod = 0
            return state_copy
        }
        default:
            return state
    }
}

export const curObjChangeAC = (id) => ({type: CUR_OBJ_CHANGE, id: id})
export const delWarnChangeAC = () => ({type: DELETE_WARN_CHANGE})
export const editModChangeAC = () => ({type: EDIT_MOD_CHANGE})
export const deleteObjAC = (id) => ({type: DELETE_OBJ, id: id})
export const saveChangeAC = () => ({type: SAVE_CHANGE})
export const nameChangeAC = (name) => ({type: NAME_CHANGE, name: name})
export const dateTimeChangeAC = (date_time) => ({type: DATE_TIME_CHANGE, date_time: date_time})
export const priorityChangeAC = (priority) => ({type: PRIORITY_CHANGE, priority: priority})
export const planeCntChangeAC = (plane_cnt) => ({type: PLANE_CNT_CHANGE, plane_cnt: plane_cnt})
export const objCntChangeAC = (obj_cnt) => ({type: OBJ_CNT_CHANGE, obj_cnt: obj_cnt})
export const orbitalInclChangeAC = (orbital_incl) => ({type: ORBITAL_INCL_CHANGE, orbital_incl: orbital_incl})
export const perArgChangeAC = (per_arg) => ({type: PER_ARG_CHANGE, per_arg: per_arg})
export const semiMajAxisChangeAC = (semi_maj_axis) => ({type: SEMI_MAJ_AXIS_CHANGE, semi_maj_axis: semi_maj_axis})
export const eccentricityChangeAC = (eccentricity) => ({type: ECCENTRICITY_CHANGE, eccentricity: eccentricity})
export const nodLongChangeAC = (nod_long) => ({type: NOD_LONG_CHANGE, nod_long: nod_long})
export const trueAnomalyChangeAC = (true_anomaly) => ({type: TRUE_ANOMALY_CHANGE, true_anomaly: true_anomaly})
export const blackDegreeChangeAC = (black_degree) => ({type: BLACK_DEGREE_CHANGE, black_degree: black_degree})
export const linSizChangeAC = (lin_siz) => ({type: LIN_SIZ_CHANGE, lin_siz: lin_siz})
export const masChangeAC = (mas) => ({type: MAS_CHANGE, mas: mas})
export const dragCoefChangeAC = (drag_coef) => ({type: DRAG_COEF_CHANGE, drag_coef: drag_coef})
export const newObjCreateAC = () => ({type: NEW_OBJ_CREATE})
export const newObjCreateConfirmAC = () => ({type: NEW_OBJ_CREATE_CONFIRM})
export const cancelChangeAC = () => ({type: CANCEL_CHANGE})


export default Reducer