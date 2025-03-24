function getTotalExpenseCost(expenses) {
    return Object.values(expenses).reduce((categoryAcc, categoryObj) => {
        const categoryTotal = Object.values(categoryObj).reduce((itemAcc, item) => {
            return itemAcc + item.costInDollars * item.multiple;
        }, 0);
        return categoryAcc + categoryTotal;
    }, 0);
}

export { getTotalExpenseCost }