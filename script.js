
classes = ["LetterRed", "LetterBlue", "LetterItalic", "LetterSerif"]

function makeLetters(item)
{
    let text = item.innerText;
    let elements = "";
    for(let i = 0; i < text.length; i ++)
    {
         elements += "<text class='"+classes[i % classes.length] +"'>"+text.charAt(i)+"</text>";

    }
    return elements;
}


function applyFonts(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        let item = arr[i];

    }
}


function  consoleText(words, console, id, colors) {
    if (colors === undefined) colors = ['#111'];
    let visible = true;
    let con = document.getElementById(console);
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    let target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    let i = 0;
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                let usedColor = colors.shift();
                colors.push(usedColor);
                let usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;


            }, 500)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                if (i >= 2) {

                    return;
                }
                x = -1;
                letterCount += x;
                waiting = false;
                i++;


            }, 500)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 60);
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;

        } else {
            con.className = 'console-underscore';

            visible = true;
        }
    }, 400)
}