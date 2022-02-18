const getList = () => {
  return new Promise((resolve, reject) => {

    var ajax = new XMLHttpRequest();
    ajax.open('get', 'http://127.0.0.1:8000');
    ajax.send();
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        resolve(JSON.parse(ajax.responseText))
      }
    }
  })
}

// get `container` element
const container = document.getElementById('container')



// Method02
const renderList = async () => {
  
  const list = await getList()

  const total = list.length
  const page = 0
  const limit = 200
  const totalPage = Math.ceil(total / limit)

  const render = (page) => {
      if (page >= totalPage) return
      setTimeout(() => {
          for (let i = page * limit; i < page * limit + limit; i++) {
              const item = list[i]
              const div = document.createElement('div')
              div.className = 'sunshine'
              div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`
              container.appendChild(div)
          }
          render(page + 1)
      }, 0)
  }
  render(page)
}
renderList()
