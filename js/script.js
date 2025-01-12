document.getElementById('phone').addEventListener('input', function () {
  let value = this.value.replace(/\D/g, '')

  if (!value.startsWith('1')) {
    value = '1' + value
  }

  if (value.length > 11) {
    value = value.slice(0, 11)
  }

  let formattedValue = '+' + value[0]
  if (value.length > 1) {
    formattedValue += ' (' + value.slice(1, 4)
  }
  if (value.length > 4) {
    formattedValue += ') ' + value.slice(4, 7)
  }
  if (value.length > 7) {
    formattedValue += '-' + value.slice(7, 11)
  }

  this.value = formattedValue
})