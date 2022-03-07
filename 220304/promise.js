function fetch(url, params) {
    const { method, headers } = params
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({ userid: 'admin' })
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, tru)
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send(data)

    })
}