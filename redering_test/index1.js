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

// Method01
const renderList = async () => {
  const list = await getList()
  
  list.forEach(item => {
      const div = document.createElement('div')
      div.className = 'sunshine'
      div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`
      container.appendChild(div)
  })
}


renderList()
