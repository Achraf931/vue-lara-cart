export const getProducts = ({commit}) => {
    axios.get('/api/products').then(res => {
        commit('getProducts', res.data)
    })
    .catch(err => {
        console.log(err)
    })
}
