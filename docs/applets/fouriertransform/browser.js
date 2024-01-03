function LoadGraph() { 
        var sig1;
        var sig2;
        var path_sig1;
        var path_sig2;
        var path;
        sig1    = document.navform.sig1.options[document.navform.sig1.selectedIndex].value;
        sig2    = document.navform.sig1.options[document.navform.sig2.selectedIndex].value;
        path_sig1     = 'images/'+sig1+'.gif';
        document.images[0].src = path_sig1;
        path_sig2     = 'images/'+sig2+'.gif';
        document.images[1].src = path_sig2;
	    path          = 'images/'+sig1+'_'+sig2+'.gif';
        document.images[2].src = path;
    }

