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

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault()
  let phone = document.getElementById('phone').value.trim()
  let email = document.getElementById('email').value.trim()
  console.log('Phone input:', phone)
  if (!phone.replace(/\s+/g, '').match(/^\+1\(\d{3}\)\d{3}-\d{4}$/)) {
    alert("Phone number must be in the format +1(XXX)XXX-XXXX")
    return
  }
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    alert("Please enter a valid email address")
    return
  }
  const formData = new FormData(this)
  
  fetch('http://test/', { 
    method: 'POST', 
    body: formData 
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem('formResponse', JSON.stringify(data))
      window.location.href = "pages/thankyou.html"
      return
    } else {
      alert("Error: " + data.message)
    }
  })
  .catch(error => { alert("Error: " + error.message) })
})