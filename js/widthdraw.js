document.getElementById('widthBtn').addEventListener('click', function(){
    // access input number
    const widthAmount =getvaluebyLeble('widthField');
    //check validation input amount
   const dataValid = validData(widthAmount);
   if (!dataValid){
        return;
   }
        //access previous deposite amount
    const previousWidthdraamount= getvaluebyInnertext('widthdraw');
    // access previous clear amount
    const previousClearbalance=getvaluebyInnertext('clearBlance');
    
    
    if (previousClearbalance>widthAmount){
        // make widthdraw
        const newWidthdraw=widthAmount+previousWidthdraamount;
        // update value deposite  section
        insertValue('widthdraw',newWidthdraw);
        // update clear balance
        const newClearbalance=previousClearbalance-widthAmount;
        insertValue('clearBlance',newClearbalance);
<<<<<<< HEAD
        insertLog(widthAmount,'Widthdra',newClearbalance)
    }else{
        alert('you have not enough money')
    }

})
=======
    }else{
        alert('you have not enough money')
    }
})
>>>>>>> 11994737502c8697c082a70bb67e205c940b970c
