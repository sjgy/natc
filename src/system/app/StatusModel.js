export default {
    namespace : 'status',
    state : {
        collapsed: true
    },
    effects : {
        *switchSider({}, {put}) {
            yield put({type: 'switchSiderReducer'});
        }
    },
    reducers : {
        switchSiderReducer(state) {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        }
    }
}
