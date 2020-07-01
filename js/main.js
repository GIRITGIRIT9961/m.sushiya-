function logKey(e) { 
    if(saveX == 0 )
    {
        if(e.clientX === undefined)
        {
            saveX = e.touches[0].clientX;
        }
        else
        {
            saveX = e.clientX;
        }

    }
    if(mousePress)
    {
        
        if(isAnotherFish)
        {
            if(e.clientX === undefined)
            {
                fishSaveLeft -= (saveX - e.touches[0].clientX)/10;
                
            }
            else
            {
                fishSaveLeft += (saveX - e.clientX)/10;
            }
            if(fishSaveLeft < -260)
            {
                fishSaveLeft = -260;
            }
            if(fishSaveLeft > 0)
            {
                fishSaveLeft = 0;
            }


            if( fishSaveLeft > -260 &&  fishSaveLeft < 0 )
            {
                var inputStyle = style + 'position: relative; left:' + fishSaveLeft + 'px;'; 
                document.getElementById('menuList').setAttribute('style',inputStyle);
            }
        }
        else
        {
            if(e.clientX === undefined)
            {
                anotherSaveLeft -= (saveX - e.touches[0].clientX)/10;
            }
            else
            {
                anotherSaveLeft += (saveX - e.clientX)/10;
            }

            if(anotherSaveLeft < fishSaveLeftMax)
            {
                anotherSaveLeft = fishSaveLeftMax;
            }
            if(anotherSaveLeft > 0)
            {
                anotherSaveLeft = 0;
            }

            if( anotherSaveLeft > fishSaveLeftMax &&  anotherSaveLeft < 0 )
            {

                var inputStyle = style + 'position: relative; left:' + anotherSaveLeft + 'px;'; 
                document.getElementById('anotherMenuList').setAttribute('style',inputStyle);
                
            }
        }
        

    }
}


urlcopy.onclick = function ()
{
    var tempElem = document.createElement('textarea');
    tempElem.value = window.document.location.href;  
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);

    alert('링크 복사 완료');

}
