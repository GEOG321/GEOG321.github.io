var i = 41;
var reverse_sign = 1;
var animation = false;

function LoadGraph() { 
        var latitude;
        var path;
        latitude    = document.navform.latitude.options[document.navform.latitude.selectedIndex].value;
	    path     = 'images/'+latitude+'.gif';
	    i = document.navform.latitude.selectedIndex;
        document.images[0].src = path;
    }

function animate(){

        if (animation) {

        var timeout = 250;
        var latitude;
        var path;

        i=i+reverse_sign;
        
        if (i >= 181) {
         i = i-1;
         reverse_sign = -1;
         timeout = 2000;
        }
        
        if (i < 0) {
         i = i+1;
         reverse_sign = 1;
         timeout = 2000;
        }
        
        latitude    = document.navform.latitude.options[i].value;
	    path     = 'images/'+latitude+'.gif';
        document.images[0].src = path;
        document.navform.latitude.selectedIndex = i;
        
        }

        junk = setTimeout("animate();", timeout);

}

