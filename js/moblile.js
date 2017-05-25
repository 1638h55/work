(function getAdapte(){
    var dpr ,rem,scale;
    var docEl=document.documentElement||document.body;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');
    console.log(docEl.clientWidth);
    dpr = window.devicePixelRatio;
    rem = docEl.clientWidth*dpr/10;
    scale = 1/dpr;
    docEl.setAttribute('data-dpr',dpr);
    metaEl.setAttribute('content', 'width=' + dpr*docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML ='html{font-size:'+rem+'px!important}';
    window.rem =rem;
    window.dpr=dpr;
    console.log(dpr);
    console.log(rem); 
 })()

