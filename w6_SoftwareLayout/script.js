var toggle = document.querySelector(`#toggle`)
var tray = document.querySelector(`.tray`)

var tabs = Array.from(document.querySelectorAll(`nav a`))
var p = document.querySelector(`#editor p`)

toggle.addEventListener(`click`, (e)=>{
    e.preventDefault();
    tray.classList.toggle(`closed`)
})

for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, selectTab);
}

function selectTab(e)
{
    for(let i=0; i<tabs.length; i++)
    {
        tabs[i].style.backgroundColor = `#373737`
    }
    e.target.style.backgroundColor = `#161616`
    p.innerHTML =  `<a href=#>Words</a> > 
                    <a href=#>Words</a> >
                    <a href=#>Words</a> >
                    <a href=#>Tab ${tabs.indexOf(e.target)+1}</a>`
}

// for (let i = 0; i < a.length; i++) {
//     tabs[i].addEventListener(`click`, (e) => {
//         e.preventDefault()

//         for (let i = 0; i < a.length; i++) {
//             tabs[i].style.backgroundColor = `#999`
//         }

//         e.target.style.backgroundColor = `black`

//         p.innerHTML = `<a href=#>SE 137</a> >> 
//                     <a href=#>w6</a> >>
//                     <a href=#>Homework</a> >>
//                     <a href=#>Tab ${e.target.innerHTML}</a>`
//     })
// }