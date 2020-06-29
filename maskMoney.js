function maskMoney(event) {
    let input = event.target
    let money = event.target.value
    let length = money.length

    money = money.replace(/(\D)/g, '')

    if (length >= 11) return input.value = money.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3,$4')
    if (length >= 10) return input.value = money.replace(/^(\d{3})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 9) return input.value = money.replace(/^(\d{2})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 7) return input.value = money.replace(/^(\d{1})(\d{3})(\d{2})$/, '$1.$2,$3')
    if (length >= 6) return input.value = money.replace(/^(\d{3})(\d{2})$/, '$1,$2')
    if (length >= 5) return input.value = money.replace(/^(\d{2})(\d{2})$/, '$1,$2')
    if (length >= 3) return input.value = money.replace(/^(\d{1})(\d{2})$/, '$1,$2')
}