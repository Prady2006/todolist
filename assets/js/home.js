let split ;
var bgcolor = 'white';
var color ;
setTimeout(() => {
    split = Split(['.a', '.b'],{
        gutterSize: 2,
        sizes: [30,70],
        minSize: [300,900],
        // direction: 'vertical',
        cursor: 'col-resize'
    });


}, 4000)

//  for toggle button
function toggle(){
    var classMain = document.querySelector('.main');
    if(classMain.classList.contains('dark')){
        bgcolor = 'black';
        color = "white";
    }else{
        bgcolor = 'white';
        color = 'black';
        // console.log('not dark theme ');
    } 
    document.querySelector('.gutter').style.backgroundColor = bgcolor ;
    document.querySelector('button').style.backgroundColor = bgcolor;
    document.querySelector('button').style.color = color;
    document.getElementById('description').style.caretColor = bgcolor;
    document.getElementById('description').style.color = bgcolor;
    document.getElementById('due-date').style.caretColor = bgcolor;
    document.getElementById('due-date').style.color = bgcolor;
    classMain.classList.toggle('dark');
}


