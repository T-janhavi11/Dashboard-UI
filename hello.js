$(document).ready(function(){
	$("input[type='checkbox']").change(function() {
		console.log("hi");
    	if (this.checked) {
    	  $('body').css({
    		"color":"black",
    		"backgroundColor":"white"
    		})
    		$('.card').css("backgroundColor","black");
        }
        else{
        	$('body').css({
    		"color":"white",
    		"backgroundColor":"black"
    		})
    		$('.card').css("backgroundColor","#191970");
    	}
        	
    })
})
