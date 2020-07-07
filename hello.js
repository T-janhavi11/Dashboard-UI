const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

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
