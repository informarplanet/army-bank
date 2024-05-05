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

// create log
function insertLog(amount, type, clearAmount){
    // get tabele
    const table=document.getElementById("log");
    //create tavle row
    const tr=document.createElement('tr');

    // create table data for date 
    const tdDate=document.createElement('td');
    tdDate.innerText=new Date().toLocaleString();
    tr.appendChild(tdDate);

    // create table data for amount
    const tdAmount=document.createElement('td');
    tdAmount.innerText=amount;
    tr.appendChild(tdAmount);

    // create table data for type
    const tdType=document.createElement('td');
    tdType.innerText=type;
    tr.appendChild(tdType);

    // create table data for Clear amount
    const tdCamount=document.createElement('td');
    tdCamount.innerText=clearAmount;
    tr.appendChild(tdCamount);

    // set  row into tabe
    table.appendChild(tr);

}
