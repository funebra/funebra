for(o=0;o<60;o++){
    pScreen.innerHTML+="<div id='o"+o+"' style='position:absolute;top:"+Math.cos(o/8.4)*120+200+"px;left:"+Math.sin(o/8.4)*120+180+"px;color:red;''>&bull;</div>";
    }
    
    function set(){
          
    for(oz = 1; oz <= 59; oz++){
    with(Math){
    eval('o'+oz).style.top = sin((oz)/9.4)*120+(pScreen.innerHeight)+"px"; 
    eval('o'+oz).style.left = cos((oz)/9.4)*120+(pScreen.innerWidth)+"px";
    }}
    }set();