function LoadGraph() { 
        var azimuth;
        var slope;
        var path;
        azimuth    = document.navform.azimuth.options[document.navform.azimuth.selectedIndex].value;
	    slope      = document.navform.slope.options[document.navform.slope.selectedIndex].value;
	    path     = 'images/49'+slope+azimuth+'.gif';
        document.images[0].src = path;
    }

   

