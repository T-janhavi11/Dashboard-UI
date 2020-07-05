$(document).ready(function(){
	$("input[type='checkbox']").change(function() {
		console.log("hi");
    	if (this.checked) {
    	  $('body').css({
    		"color":"black",
    		"backgroundColor":"white"
    		})
    		$('.card').css("backgroundColor","#F0F8FF");
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
