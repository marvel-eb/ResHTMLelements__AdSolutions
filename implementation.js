var eid = "ASI_"+(new Date().getTime());
document.write('<div id="'+eid+'"></div>');

const ePo = document.getElementById(eid);
ePo.style.display = 'inline-block';
ePo.style.width = '990px';
ePo.style.height = '130px';
ePo.style.backgroundColor = 'purple';

////////////////////////////
ePo.style.padding =  '0px';
ePo.style.margin = '0px';
ePo.style.clip = 'auto';

// ES6 Variable Declaration (adding const)
const ePl = document.body.insertBefore(document.createElement("div"), document.body.firstChild);
const ePr = document.body.insertBefore(document.createElement("div"), document.body.firstChild);

setTimeout(function(){
    var pageContent = document.querySelector('.page-content .container');
    var pagePos = pageContent.getBoundingClientRect();

    ePl.style.backgroundColor = 'blue';
    ePl.style.position = 'absolute';
    ePl.style.left = 0+'px';
    ePl.style.right = pagePos.left+'px';
    ePl.style.width = '100%';
    ePl.style.height = '130vh';

////////////////////////////
    ePl.style.left = '0px';
    ePl.style.top = '120px';
    ePl.style.padding =  '0px';
    ePl.style.margin = '0px';
    ePl.style.clip = 'rect(0px, 23.5vw, 130vh, 0px)';
    ePl.style.display= 'block';

// Conditional Responsive by using JS
    // if (screen.width >= 380) {
    //     ePl.style.width = '20%';
    //     ePl.style.clip = 'rect(0px, 420px, 130vh, 0px)';
    //     ePl.style.display= 'block'
    // }

////////////////////////////
    ePr.style.backgroundColor = 'green';
    ePr.style.position = 'absolute';
    ePr.style.left = pagePos.right+'px';
    ePr.style.width = '100%';
    ePr.style.height = '130vh';


    ////////////////////////////
    ePr.style.right = '0px';
    ePr.style.top = '120px';
    ePr.style.padding = '0px';
    ePr.style.margin = '0px';
    ePr.style.clip = 'rect(0px, 23.5vw, 130vh, 0px)';
    ePr.style.display = 'block';
 
}, 20);

////////////////////////////
// Inserting HTML content --- Disbaled Since the above codes works correctly

// const elements = document.getElementsByClassName('.page-content .container');
// elements.appendChild(ePo);
// elements.appendChild(ePl);
// elements.appendChild(ePr);


