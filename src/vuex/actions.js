//test
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
export const update_currentData = ({commit},attr) => {
    
    commit('UPDATE_CURRENTDATA',attr)
}
