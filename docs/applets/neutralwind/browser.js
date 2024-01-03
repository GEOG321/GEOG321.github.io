function LoadGraph() { 
        var ustar;
        var z0;
        var path;
        ustar      = document.navform.ustar.options[document.navform.ustar.selectedIndex].value;
        z0         = document.navform.z0.options[document.navform.z0.selectedIndex].value;
	    path          = 'images/'+ustar+'_'+z0+'.gif';
        document.images[1].src = path;
    }