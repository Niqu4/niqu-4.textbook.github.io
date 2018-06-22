if (prevParentDir == undefined ) { var prevParentDir = "./levels/"; } 

function loadScripts(){
	$('.load_link').on('click',function(e){
		e.preventDefault();
		var link = $(this).attr("href");
		var parentDir =  link.match(/^(.*[\\\/])/)[1];
		var navbar = parentDir + "navbar.html";
		var sub_navbar = parentDir + "sub_navbar.html";
		var parent = $(this).parent();
		var siblings = parent.siblings();
		parent.addClass('active');
		siblings.removeClass('active');
		$("#page").load(link); 
		if (prevParentDir != parentDir) {
			$("#navbar_container").load(navbar); 
			prevParentDir = parentDir;
			$("#sub_navbar_container").load(sub_navbar, function(response, status, xhr){
		  		if(status == "error") $("#sub_navbar_container").html('');
			});
		}
		
		
	});
}
loadScripts();