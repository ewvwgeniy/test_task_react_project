const CUR_OBJ_CHANGE = 'CUR_OBJ_CHANGE'
const DELETE_WARN_CHANGE = 'DELETE_WARN_CHANGE'
const DELETE_OBJ = 'DELETE_OBJ'
const EDIT_MOD_CHANGE = 'EDIT_MOD_CHANGE'
const SAVE_CHANGE = 'SAVE_CHANGE'
const NEW_OBJ_CREATE = 'NEW_OBJ_CREATE'
const NEW_OBJ_CREATE_CONFIRM = 'NEW_OBJ_CREATE_CONFIRM'
const CANCEL_CHANGE = 'CANCEL_CHANGE'
const OBJ_CHANGE = 'OBJ_CHANGE'

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
            true_anomaly: 34,
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

const objIsOk = (obj) => {
    const notOk = new Set()
    for (let i in obj) {
        if (obj[i] === '')
            notOk.add(i)
    }

    if (!(obj.date_time instanceof Date)) {
        notOk.add('date_time')
    }
    if (!(obj.priority >= 1 && Number.isInteger(obj.priority))) {
        notOk.add('priority')
    }
    if (!(obj.plane_cnt >= 0 && Number.isInteger(obj.plane_cnt))) {
        notOk.add('plane_cnt')
    }
    if (!(obj.obj_cnt >= 0 && Number.isInteger(obj.obj_cnt))) {
        notOk.add('obj_cnt')
    }
    if (!(obj.orbital_incl >= 0 && obj.orbital_incl <= 180)) {
        notOk.add('orbital_incl')
    }
    if (!(obj.per_arg >= 0 && obj.per_arg < 360 && obj.per_arg !== '')) {
        notOk.add('per_arg')
    }
    if (!(obj.semi_maj_axis >= 6480 && obj.semi_maj_axis <= 40000)) {
        notOk.add('semi_maj_axis')
    }
    if (!(obj.eccentricity >= 0 && obj.eccentricity <= 1)) {
        notOk.add('eccentricity')
    }
    if (!(obj.nod_long >= 0 && obj.nod_long <= 180)) {
        notOk.add('nod_long')
    }
    if (!(obj.true_anomaly >= 0 && obj.true_anomaly <= 180)) {
        notOk.add('true_anomaly')
    }
    if (!(obj.black_degree >= 0 && obj.black_degree <= 1)) {
        notOk.add('black_degree')
    }
    if (!(obj.lin_siz >= 0)) {
        notOk.add('lin_siz')
    }
    if (!(obj.mas > 0)) {
        notOk.add('mas')
    }
    if (!(obj.drag_coef >= 0 && obj.drag_coef <= 2)) {
        notOk.add('drag_coef')
    }
    return notOk
}

const indexOfCurObjId = (state) => {
    let obj_index = -1
    state.objects.forEach((element, index) => {
        if (element.id === state.cur_obj_id) obj_index = index
    })
    return obj_index
}

const changeAndCheckObjValue = (obj, field_to_change, value_to_change) => {
    if (['name', 'date_time'].includes(field_to_change)) {
        obj[field_to_change] = value_to_change
    } else if (['priority', 'plane_cnt', 'obj_cnt'].includes(field_to_change)) {
        obj[field_to_change] = parseInt(value_to_change, 10)
    } else {
        obj[field_to_change] = parseFloat(value_to_change)
    }

    obj.wrong_values = new Set(obj.wrong_values)
    if (objIsOk(obj).has(field_to_change))
        obj.wrong_values.add(field_to_change)
    else
        obj.wrong_values.delete(field_to_change)
    return obj
}

const Reducer = (state = objects_obj, action) => {
    switch (action.type) {
        case CUR_OBJ_CHANGE: {
            let state_copy = {
                ...state,
                cur_obj_id: action.id,
                obj_info: {...state.obj_info}
            }

            let obj_index = indexOfCurObjId(state_copy)
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
            let obj_index = indexOfCurObjId(state_copy)
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
            let obj_index = indexOfCurObjId(state_copy)
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
            let obj_index = indexOfCurObjId(state_copy)
            if (state_copy.temporary_obj.wrong_values.size === 0) {
                state_copy.objects[obj_index] = {...state.objects[obj_index]}
                state_copy.objects[obj_index] = state_copy.temporary_obj
                state_copy.obj_info.edit_mod = 0
                return state_copy
            } else
                return state
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
            let obj_index = indexOfCurObjId(state)

            let state_copy = {
                ...state,
                objects: [...state.objects],
                obj_info: {...state.obj_info}
            }
            state_copy.objects[obj_index] = {...state.objects[obj_index]}
            state_copy.objects[obj_index].wrong_values = new Set(state.objects[obj_index].wrong_values)

            if (objIsOk(state.objects[obj_index]).size === 0) {
                delete state_copy.objects[obj_index].is_temporary
                state_copy.obj_info.create_mod = 0
                state_copy.obj_info.edit_mod = 0
                state_copy.obj_info.delete_warn = 0
            } else {
                state_copy.objects[obj_index].wrong_values = new Set(objIsOk(state.objects[obj_index]))
            }

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
        case OBJ_CHANGE: {

            const field_to_change = action.obj_field_change.field_name
            const value_to_change = action.obj_field_change.field_value
            let state_copy
            let obj_index = indexOfCurObjId(state)

            if (state.objects[obj_index].is_temporary === true) {
                state_copy = {
                    ...state,
                    objects: [...state.objects]
                }
                state_copy.objects[obj_index] = {...state.objects[obj_index]}

                state_copy.objects[obj_index] = changeAndCheckObjValue(state_copy.objects[obj_index], field_to_change, value_to_change)
            } else {
                state_copy = {
                    ...state,
                    temporary_obj: {...state.temporary_obj}
                }

                state_copy.temporary_obj = changeAndCheckObjValue(state_copy.temporary_obj, field_to_change, value_to_change)
            }
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
export const newObjCreateAC = () => ({type: NEW_OBJ_CREATE})
export const newObjCreateConfirmAC = () => ({type: NEW_OBJ_CREATE_CONFIRM})
export const cancelChangeAC = () => ({type: CANCEL_CHANGE})
export const objChangeAC = (field_name, field_value) => ({type: OBJ_CHANGE, obj_field_change: {
        field_name: field_name,
        field_value: field_value
}})


export default Reducer