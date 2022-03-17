const webSocket = require('ws')

module.exports = (server) => {
    const wss = new webSocket.Server({ server }) // express와 포트 공유
    // const wss = new webSocket.Server({ port:3006 }) // 포트 분리

    // ------------- ws 통신연결됨 ----------------

    // 웹소켓 객체 안에서 eventListener를 만들어줌
    // connection 이벤트가 일어났을 때의 웹소켓 동작 : 커넥션이 일어났을 때의 시점을 잡기 위한 이벤트!
    let sockets = []
    wss.on('connection', (ws, req) => { // 연결된 시점을 잡음. 콜백의 ws 인자는 웹소켓통신을 연결한 사람을 나타냄. wss와 ws를 구분해주기. req는 헤더정보(http의 request header)
        // 커넥션이 한번 일어난 후에는 누가 먼저 요청을 보내고, 몇번을 보내고 이런게 상관없이 자유롭게 통신가능함
        console.log('접속이 되었니?')
        sockets.push(ws)
        ws.id = req.headers['sec-websoket-key'] // ws 생길때마다 새로운 key값이 할당됨 이 key값을 id로 저장
        console.log(sockets.length)

        ws.on('close', (code, reason) => {
            console.log('연결끊김')
            // 창을 닫으면 sockets 배열에서 삭제
            sockets.filter(v => {
                return v.id !== ws.id
            })

        })

        let layout = {
            event: 'init',
            msg: '서버에서 클라이언트에 보내는 메세지😎 in 객체'
        }

        let example = {
            event: 'hello',
            msg: 'hello socket'
        }

        let returnMsg = {
            event: 'rtn',
            msg: 'msmsmsg'
        }

        // 클라이언트에 메세지 보냄
        // ws.send('서버에서 클라이언트에 보내는 메세지😎') // string
        // ws.send(JSON.stringify(layout)) // object -> json
        // ws.send(JSON.stringify(example)) // object -> json
        // ws.send(JSON.stringify(returnMsg))
        ws.on('message', (response) => {
            // console.log(data) : Buffer로 들어옴
            //ws.send(data.toString('utf-8'))
            let msgObj = JSON.parse(response.toString('utf-8'))
            let { type, data } = msgObj
            switch (type) {
                case 'send_message':
                    sockets.forEach(v => {
                        v.send(data.msg)
                    })
                    break;
            }

        })


    })
    // wss 이벤트는 2가지 : on (듣기), send (말하기)
}

