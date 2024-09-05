const displayKSHCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-IN',{
        style : "currency",
        currency : 'KSH',
        minimumFractionDigits : 2
    })

    return formatter.format(num)

}

export default displayKSHCurrency