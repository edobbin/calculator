class Calculator{

    constructor(prevNum,currNum){
        this.prevNum = prevNum
        this.currNum = currNum
        this.clear()
    }

    delete(){
        this.currNum = this.currNum.substring(0, this.currNum.length -1);
        this.updateDisplay();
    }

    changeSign(number){
        if(Number(number)  <0){
        this.currNum = this.currNum.substring(1, this.currNum.length);    
       
        this.updateDisplay();
        }else{
            this.currNum = "-" + number.toString();
            this.updateDisplay();
        }
    


    }

    clear(){
        this.currNum = ''
        this.prevNum = ''
        
        this.oper = null
        this.tf= false;
        
        this.updateDisplay();
    }

    switchOp(operation){
        console.log("Operator switched to " + operation.toString());
        this.oper = operation;
        this.updateDisplay();
       
    }

    operations(operation){
        if(this.oper != null){
            this.tempop = this.oper;
            this.compute();

        }
        if(this.prevNum == this.ans && this.currNum != ''){
           prevNumber.textContent = this.prevNum.toString();
           currNumber.textContent = this.currNum.toString();
            this.compute();
           

        }
        else{
        //compute();
        this.prevNum = this.currNum.toString();
    }
        this.currNum ='';
        this.oper = operation;

        this.updateDisplay();
    }

    updateCurrNum(number){
        if(number =='.' && this.currNum.includes('.')) return
        this.currNum = this.currNum.toString() + number.toString();

        
        this.updateDisplay();
    }

    convertNums(number){
        let numdisplay = parseFloat(number)
        return numdisplay

    }

    updateDisplay(){
        if(currNumber.textContent == this.ans){
            prevNumber.textContent = this.currNum.toString();
            //this.prevNum = this.currNum;
        }
        currNumber.textContent = this.currNum.toString()
        if(this.prevNum != null){
            prevNumber.textContent = this.prevNum.toString() 
            if(this.oper != null){
                prevNumber.textContent = prevNumber.textContent + this.oper.toString();
            }
        }
        
    }


    compute(){
        
        this.ans = 0;
        const prev = Number(this.prevNum.toString());
        const curr = Number(this.currNum.toString());
        if(isNaN(prev) || isNaN(curr)) return
        if(this.oper.toString() == '+'){
            this.ans = prev + curr;
            
        }
        if(this.oper.toString() == '-'){
            this.ans = prev - curr;
            
        }
        if(this.oper.toString() == '*'){
            
            this.ans = prev * curr;
            
        }
        if(this.oper.toString() == '÷'){
            if(curr == 0){
                this.ans = "ERROR";
            }else{
            this.ans = prev / curr;
            }
        }
        
        

        console.log(this.ans);
       // if(this.prevNum != this.ans){
            //prevNumber.textContent = this.ans.toString() + this.oper.toString();
      //  }
        if(this.prevNum != this.ans){
        prevNumber.textContent = prevNumber.textContent + this.currNum.toString();
        }
        this.oper = null;
        this.tf = true;
        this.currNum = this.ans;

        currNumber.textContent = this.ans;
        
        
        
    }

}

const numBut = document.querySelectorAll(['[data-num]']);
const del = document.querySelector('[data-delete]');
const change = document.querySelector('[data-symbols]');
const opBut = document.querySelectorAll('[data-OpBut]');
const equal = document.querySelector('[data-submit]');
const currNumber = document.querySelector('[data-curNum]');
const prevNumber = document.querySelector('[data-prevNum]');
const clearBut = document.querySelector('[data-clear]')

calc = new Calculator(prevNumber,currNumber);

numBut.forEach(button => {
    button.addEventListener('click',() =>{
        
        

        if(currNumber.textContent == "ERROR"){
            calc.clear();
        }

        let temp = button.innerText;
        
        calc.updateCurrNum(temp);

        
        currNumber.textContent = currNumber.textContent + temp;
     
        
        calc.updateDisplay();
    })
})
    change.addEventListener('click', ()=>{
        if((currNumber.textContent == '' || this.currNum == '')){
            return;
        }
        else{
            console.log("test");
            calc.changeSign(currNumber.textContent);
        }
    })
    del.addEventListener('click', () => {
        calc.delete();
    })

    opBut.forEach(button =>{
        button.addEventListener('click',()=>{
            
            if((currNumber.textContent == '' || this.currNum == '') && prevNumber.textContent == '')
                return;
            if(prevNumber.textContent != '' && button.innerText != this.oper && (currNumber.textContent == '' || this.currNum == '')){
                
                calc.switchOp(button.innerText);
            }
            else{
                
            calc.operations(button.innerText);
            }

        })
    })

    clearBut.addEventListener('click', () =>{
        calc.clear();
    })


    equal.addEventListener('click',() =>{
        calc.compute();
       
        //calc.updateDisplay();

    })