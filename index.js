//ex 1

for (let i = 0; i<10; i++) console.log(i)
let i = 0
while ( i<= 10) {
    console.log(i++)   
}
let j = 0
do {
    console.log(j++)
}
while (j <=10) 
    
//ex 2

const str = 'string'
for(let i = 0; i < str.length; i++ ) console.log(str[i])
    
//ex 3

const arrowFunc = (num) => {
    for(let i = 0; i <= num; i++) console.log(i)
}
function funcExpress(num) {
    for(let i = 0; i <= num; i++) console.log(i)
}
const funcDeclar = funcion(num) {
    for(let i = 0; i <= num; i++) console.log(i)
}
arrowFunc(7)
funcExpress(8)
funcDeclar(9)

const arrowFunc = (str) => {
    for(let i = 0; i < str.lenght; i++) console.log(str[1])
}

funcExpress(str) {
    for(let i = 0; i < str.lenght; i++) console.log(str[i])
}
const funcDeclar = function(str) {
    for(let i = 0; i < str.length; i++) console.log(str[i])
}
arrowFunc('string')
funcExpress('str')
funcDeclar('str')

