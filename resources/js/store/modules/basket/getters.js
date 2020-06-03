export const basket = state => {
    return state.basket
}

export const basketItemCount = state => {
    return state.basket.length
}

export const basketTotalPrice = state => {
    let total = 0
    state.basket.forEach(item => {
        total += item.product.price * item.quantity
    })
    return total
}
