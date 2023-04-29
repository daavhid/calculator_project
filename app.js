
const roman = {
    1:'i',
    5:'v',
    10:'x',
    50:'l',
    100:'c',
    500:'D',
    1000:'M'
}

const numMap = [1,5,10,50,100,500,1000]


const makeRom  = (str)=>{
    const divList = divide(str);
    let rom =''
    console.log(divList)
    divList.forEach(function(num){
        if(oddRom(num)){
            rom+=oddRom(num)
        }else{
            while(true){
                let i = numMap.length-1
                // console.log(num)
                if(num <=0){
                    break
                }
                while(i >=0){
                     
                    if(num>=numMap[i]){
                        rom+=roman[numMap[i]]
                        
                        num-=numMap[i]
                        break
                    }else{
                        i-=1
                    }
                }
            }
        }
    })
    console.log(rom)
    return rom
}

let s='343'

//divide the number into tokens of different units order

const divide = (str)=>{
    let y = parseInt(str);
    let e = 0
    const list =  []
    while(true){
        if(y===0)break;
        if((y%10)*(10**(e))) list.unshift((y%10)*(10**(e)));
        y=Math.floor(y/10)
        e++
    
    }
    return list
}

// get the odd Roman numbers eg=> 4,9,40,400 e.t.c

const oddRom=(num)=>{
    let f = ''
    for(let i=0;i<=numMap.length;i++){
    // console.log(i)
        for(let j=0;j<=numMap.length;j++){
            if(!(numMap.includes(num)) & (numMap[j]-numMap[i] === num)){
                f+=`${roman[numMap[i]]}${roman[numMap[j]]}`
                console.log(numMap[j],numMap[i],f)
            }        
        }  
    }
    return f
}


const input = document.querySelector('input');
const cont = document.querySelector('.calculator-body');

cont.addEventListener('click',function(e){
    if(e.target.classList.contains('btn') || e.target.classList.contains('btn-red') ){
        input.value += e.target.value
        console.log(e.target)
        // if(input.value===''||parseInt(input.value)){
        //     input.value += e.target.value
        // }
        
    }if(e.target.classList.contains('clear')){
        input.value = ''
        
    }if(e.target.id ==='grow'){
        if(input.value===''||!(parseInt(input.value))){
            

            input.value = ''
         }else if((input.value.split('').some(function(n){return isNaN(n)}))){
            const evals= eval(input.value)
            console.log(true)
            input.value = evals}
         else{
            console.log('else')
           
            input.value = makeRom(input.value)
        
         }
        
    }
    if(e.target.id ==='make'){
        if(input.value===''||!(parseInt(input.value))){
            

            input.value = ''
        
        }else{input.value = makeRom(input.value)}
    }
    // if(e.target.classList.contains('btn')){
    //     if(!parseInt(input.value)){
    //         input.value = ''
    //         console.log(e,input.value)
    //     }
    // }
})

const btn = document.querySelector('#pallete');
const colCon = document.querySelector('.abs');
const contLength = document.querySelectorAll('.cont').length
let activeIndex = 0;
btn.addEventListener('click',function(){
    
    activeIndex++
    if(activeIndex > contLength-1){
        activeIndex = 0
    }
    colCon.style.top = `-${activeIndex * 100}vh`
    
    console.log(colCon,activeIndex,contLength)
})