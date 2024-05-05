document.getElementById('depoBtn').addEventListener('click', function(){
    // access input number
    const depositeAmount =getvaluebyLeble('depoField');
    // input amount validation 
    const dataValid = validData(depositeAmount);
   if (!dataValid){
        return;
   }
    //access previous deposite amount
    const previousDepositeamount= getvaluebyInnertext('deposite');
    // access previous clear amount
    const previousClearbalance=getvaluebyInnertext('clearBlance');
    // make deposite
    const newDeposite=depositeAmount+previousDepositeamount;
    // update value deposite  section
    insertValue('deposite',newDeposite);

    // update clear balance
    const newClearbalance=depositeAmount+previousClearbalance;
    insertValue('clearBlance',newClearbalance);
    // make log
    insertLog(depositeAmount,'deposite',newClearbalance)

})
