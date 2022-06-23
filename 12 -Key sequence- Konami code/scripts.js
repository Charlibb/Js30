const pressedKeys = [];
const secretCode = "konami";

window.addEventListener('keydown', (e)=> {
    console.log(e);
    pressedKeys.push(e.key);
    pressedKeys.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressedKeys.join('').includes(secretCode)){
         console.log("you got it!");
         cornify_add()
    }
    console.log(pressedKeys)
})