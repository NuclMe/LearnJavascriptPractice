// function loadScript(src, callback) {
//   debugger
//   let script = document.createElement('script')
//   script.src = src
//   script.onload = () => callback(script)

//   document.head.append(script)
// }

// loadScript('./index.js', (scipt = () => {}))
// alert('iii') // вызовется первым

let name = 'alex'
function hello(name) {
  if (name === ' ') {
    return 'Hello world'
  } else {
    name.charAt(0)
    return `Hello, ${name}`
  }
}

hello()
