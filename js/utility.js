function getvaluebyLeble (amountValue){
        const getAmount=document.getElementById(amountValue);
        const getAmountvalue=getAmount.value;
        const finalamount=parseFloat(getAmountvalue);
        getAmount.value="";
        return finalamount;
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