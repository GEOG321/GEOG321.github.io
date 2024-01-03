var i = 0;
var j = 0;
var animationAmp = false;
var animationPro = false;
    
function ChangeAll() { 
        LoadAmplitude();
        LoadProfile();
        var run;
        var path;
        run    = document.navform.run.options[document.navform.run.selectedIndex].value;
	    path     = 'images/cont'+run+'.gif';
        document.images[3].src = path;
    }
    
function LoadAmplitude() { 
        var depth;
        var run;
        var path;
        depth    = document.navform.depth.options[document.navform.depth.selectedIndex].value;
        run    = document.navform.run.options[document.navform.run.selectedIndex].value;
        i = document.navform.depth.selectedIndex;
	    path     = 'images/amp'+run+depth+'.gif';
        document.images[0].src = path;
    }
    
    
function LoadProfile() { 
        var time;
        var run;
        var path;
        time    = document.navform.time.options[document.navform.time.selectedIndex].value;
        run    = document.navform.run.options[document.navform.run.selectedIndex].value;
        j = document.navform.time.selectedIndex;
	    path     = 'images/prof'+run+time+'.gif';
        document.images[2].src = path;
    }

function animateAmp(){

        if (animationAmp) {

        var timeout = 250;
        var depth;
        var run;
        var path;

        depth  = document.navform.depth.options[i].value;
        run    = document.navform.run.options[document.navform.run.selectedIndex].value;
        path = 'images/amp'+run+depth+'.gif';
        document.images[0].src = path;
        document.navform.depth.selectedIndex = i;
        
        i++;
        
        if (i >= 11) {
         i = 0;
         timeout = 1000;
        }
        
        }

        junk = setTimeout("animateAmp();", timeout);

}


function animatePro(){

        if (animationPro) {

        var timeout = 200;
        var hour;
        var run;
        var path;

        hour = document.navform.time.options[j].value;
        run    = document.navform.run.options[document.navform.run.selectedIndex].value;
        path = 'images/prof'+run+hour+'.gif';
        document.images[2].src = path;
        document.navform.time.selectedIndex = j;
        
        j++;
        
        if (j >= 24) {
         j = 0;
        }
        
        }

        junk = setTimeout("animatePro();", timeout);

}


   

