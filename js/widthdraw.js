document.getElementById('widthBtn').addEventListener('click', function(){
    // access input number
    const widthAmount =getvaluebyLeble('widthField');
    //access previous deposite amount
    const previousWidthdraamount= getvaluebyInnertext('widthdraw');
    // access previous clear amount
    const previousClearbalance=getvaluebyInnertext('clearBlance');
    // make widthdraw
    const newWidthdraw=widthAmount+previousWidthdraamount;
    // update value deposite  section
    insertValue('widthdraw',newWidthdraw);
    // update clear balance
    const newClearbalance=previousClearbalance-widthAmount;
    insertValue('clearBlance',newClearbalance);

})