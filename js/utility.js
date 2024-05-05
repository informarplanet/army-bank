function getvaluebyLeble (amountValue){
        const getAmount=document.getElementById(amountValue);
        const getAmountvalue=getAmount.value;
        const finalamount=parseFloat(getAmountvalue);
        getAmount.value="";
        return finalamount;
}
// checking valid amount
function validData(value){
    if(isNaN(value)){
        alert('Please input number');
    }else if(value>10000){
        alert('you don"t deposite / widthdraw upto 10000');
    }else{
        return value;
    }
}

function getvaluebyInnertext(amountText){
    const gettext=document.getElementById(amountText);
    const gettextvalue= parseFloat(gettext.innerText);
    return gettextvalue;
}
function insertValue(location,amount){
   const validLocation= document.getElementById(location);
   validLocation.innerText=amount;
}
