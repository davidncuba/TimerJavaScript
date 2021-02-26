function cron() {
  function createHourSecconds (secconds) {
    const data = new Date(secconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    })
  }
  const timer = document.querySelector('#cronometro')
  let secconds = 0
  let cron

  document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('start')) {
      cron = setInterval(function () {
        secconds++
        timer.innerHTML = createHourSecconds(secconds)
      }, 1000)
    }
    if (el.classList.contains('pause')) {
      clearInterval(cron)
    }
    if (el.classList.contains('stop')) {
      timer.innerHTML = '00:00:00'
      secconds = 0
    }
  })
}
cron()
