// let title = 'Shokhzoda';
// console.log(title.length +''+ 'salom')
// let num = '12345654389'
//  let start = title.slice(4,7);
//  console.log(start)
// let end = num.slice(-2)
// console.log(end)
//  let res=start+'*****'+end;
// console.log(res)
//  console.log(Math.ceil(Math.random()*10));

//  Math.min(100,20,50,-3,70,-100)
//  console.log(
//     Math.min(100,20,50,-3,70,-100))
//     console.log(
//        Math.max(12000,20,50,-3,70,-100))
//     console.log(Math.ceil(Math.sqrt(96)))   
//   let son = 20;
//    console.log(son.toString())
//     let sona = 20.9856325;
//       console.log(sona.toFixed(2))
//       let r='2'
//      console.log(+r)
//           console.log(--r)
//       let d = new Date()
//       console.log(d.toUTCString())
//         let cars = ['Saab','Volvo','BMW']
//       console.log(cars[1])
//        let car = cars[0]='malibu'

//      console.log(cars.toString())

//      let yoga = 'Salom,Hayr,boldi';
//      console.log(yoga.split())
//      let ar = ['tog','daraxt','tosh',12,5]
//      console.log(ar.join())
//     console.log(ar.push(5))
//     let x=7
//     // x++
//     x--
//      let y=1
//     let z=x
//     console.log(!(x>y))
//     console.log(x=1) 
//      console.log(z) 
//     let married = 'widowe'
//     if(married === 'yes'){
//                  console.log('you will accept')
        
//     }
//      else if(married=='widowed'){
//          console.log('not accepted')
        
//     }
//      else if(married ='engaged'){
//         console.log('you can apply after wedding')
//      }
//      else{console.log('Invalid answer');
//      }
    



//      let abroad = 'ha'
//      let abroad1 = 0
//      switch(abroad){
//      case 'yes':
//     case 'ha': {
//        console.log(abroad1 = 'you do not accepted')
//        break;    }
//      case 'no':{
//         console.log(abroad1 = 'you can go')
//     }
//      default:{
//          console.log('wrong answer')    }
//  }


// // // node new.js
// // // let par='salom1'
// // // console.log(par.padEnd(8,'55'))

// let d=21/6
// console.log(d.toFixed(5))

// console.log(12+ +'12k')

// num = 23654123965874125n
// console.log(num * 2n/5n)

// let sonlar= [12,3,56,89,1,0,45]

// console.log((Math.min(...sonlar)))
// console.log((Math.min(12,5,6,3)))
// console.log((Math.min(+sonlar)))

// let g = -25.612563
// console.log(Math.abs(g))

// let grendeur = true {
// console.log(grendeur? 'Sotib olaman' : 'Boshqasini olishni oylab koraman' ) 

// let f = '123654'
// console.log(Number(f.length))

// let a='12345679'
// console.log(a.slice(-3))
// }
// let e = 'erimni'
// let e1='sevaman'
// console.log(e.concat(' ',e1))

// let xz = 256;
// let xs = 253;
// console.log(xz+xs)


// obj ={
//     name:'Shokhzoda',
//     surname: 'Panjizoda',
//     age: 35
// }

// console.log( obj.name +' '+ obj.surname+' '+ 'is' +' '+ obj.age + ' '+ 'years old')

// let web = ['Shukurov', 'Sobir','is',39,'years old']
// console.log(web[2])
// console.log(...web)
// console.log(web.pop('LOVE'))
// console.log(web.push('LOVE'))

 let fnc1= (a) => {
    if(a>10){
       b= a+3;
        return b
    }
    else if(a<10){
        b=a*2
        return b

    }
    else{
        return 22;
    }    }

// console.log(fnc1(10));

let func2=(a)=>{
    let b =a/3
    return Math.floor(b)
}
// console.log(func2(16))

let fnc3=(a)=>{
    b=a%3
return b
}
// console.log(fnc3(7))

let fnc4=(a)=>{
    if(a%2===0){
        return 'juft'
    }
    else{
        return 'toq'
    }
}
// console.log(fnc3(7))

let func5=(a,b)=>{
    if(a<b){
        return b
    }
    else if(a=b){
return 'Voy ular teng'
    }
}
// console.log(func5(4,4))

let func6=(a,b,c)=>{
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
return'katta son b=7'
    }
    else{
        return c
    }
}
// console.log(func6(4,7,5))

let func7=(a)=>{
    if(a>0){
        return 'musbat'
    }
    else if(a<0){
return'manfiy'
    }
    else{
        return 0
    }
}

// console.log(func7(0))

let func8=(a)=>{
    if(a%5===0){
        return 'true'
    }
    else if(a%5!==0){
return'false'
    }
   
}

// console.log(func8(15))

let func9=(a)=>{
    if(a%3===0 || a%4===0){
        return 'true'
    }
    else{
return'false'
    }
   
}

// console.log(func9(14))


let func10=(a)=>{
    if(a%4===0 || a%400===0){
        return 'true'
    }
    else if(a%100!==0){
return'false'
    }
   
}

// console.log(func10(2000))

let func11=(c)=>{
    if(Number(c)){
        return 'son'
    }
    else if(isNaN(c)
    ){
return 'alpha'}
}
// console.log(func11(23))

let func12=(c)=>{
    if(c>='A' && c>='Z'){
        return 'upperCase'}

    else if(c>='a' && c>='z'){
        return 'lowerCase'
    }
else{
    return 'nono'
}
}
// console.log(func12(2))


let func13=(a)=>{
    if(a===1){
        return 'Dushanba'
    }
    else if(a===2){
        return 'Seshanba'
    }
    else if(a===3){
        return 'Chorshanba'
    }
    else if(a===4)
    {
        return 'Payshanba'
    }
    else if(a===4){
        return 'Juma'
    }
    else if(a===6){
        return 'Shanba'
    }
    else if(a===7){
        return 'Yakshanba'
    }
    else{
        return none
    }

}
// console.log(func13(6))


