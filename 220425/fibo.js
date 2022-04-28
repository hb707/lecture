const stack = []
const fibo = n => {
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == 1) { stack.push(1) }
        else {
            stack.push(stack[i - 2] + stack[i - 1])
        }
    }
    console.log(stack)
    console.log(stack[n - 1])
}

fibo(50)