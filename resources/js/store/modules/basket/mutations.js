export const AddToBasket = (state, product, quantity) => {
    console.log(state.basket)
    let productInBasket = state.basket.find(item => {
        return item.product.id === product.id
    })

    if (productInBasket) {
        state.basket.push({product, quantity})
        return
    }
    state.basket.push({product, quantity})
}

export const AddToBasketFromDb = (state, basket) => {
    state.basket = basket.basket
}

export const RemoveToBasket = (state, product) => {
    state.basket.splice(state.basket.indexOf(product), 1)
}

export const DestroyBasket = (state) => {
    state.basket = []
}
