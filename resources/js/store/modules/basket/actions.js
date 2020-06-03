export const getBasket = ({commit}) => {
    axios.get('/api/cart').then(res => {
        commit('AddToBasketFromDb', res.data)
    })
}

export const AddProductToBasket = ({commit}, {product_id, quantity}) => {
    axios.post('/api/cart', {product_id, quantity}).then(res => {
        commit('AddToBasket', res.data.product)
    })
}

export const removeItemFromBasket = ({commit}, product) => {
    axios.delete('/api/cart/', product.id).then(res => {
        commit('RemoveToBasket', product.id)
    })
}

export const DestroyBasket = ({commit}) => {
    axios.delete('/api/cart')
}
