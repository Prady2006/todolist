import Typed from 'typed.js' 
var typed = new Typed('#type',{
    stringsElement: '#typed-strings',
    smartBackspace: true ,
    typeSpeed : 100 , 
    startDelay: 50,
    backSpeed: 70
});
module.exports = typed;
console.log('js loaded');