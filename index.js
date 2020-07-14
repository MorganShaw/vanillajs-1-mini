console.log("hello, world!")

let count = 0;
let counter = document.getElementById('counter');

function increase(){
    count++;
    counter.innerText = count;
}

function decrease(){
    count--;
    counter.innerText = count;
}

function reset() {
    count = 0;
    counter.innerHTML = "<mark>" + count + "</mark>";
}

function selectTheme(theme){
    // document.getElementsByTagName('body').className = theme

    // Another way to do this.\:
    let body = document.getElementsByTagName('body')
    body[0].className = theme
    let main = documet.querySelector('main');
    main.className = theme;
    let buttons = document.getElementsByTagName('button')
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
    // another option instead of for loop that might work:
    // buttons.forEach(button, i, arr){
    //     arr[i].className = theme;
    }
}