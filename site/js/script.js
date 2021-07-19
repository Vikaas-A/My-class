document.addEventListener("DOMContentLoaded",
	function (event){
		function P(num){
		
			if (num==0){
				return null;
			}
			if (num==1||num==2){
				return "Prime";
			}
			for (var i = 2;i<num;i++){
				if (num%i == 0){
					return null
				}
			}
			return "Prime";
		};
        function d(){
        var num = document.getElementById("Num").value;
        if (num == 0){
        	var p = "Its zero";
        }
        else if (num ==1){
        	var p = "Its one";
        }
        else{
        if (P(num)===null){
            var p = "Its not Prime";
        }
        else{
        	var p = "Its Prime";
        }
    }
        document
         .getElementById("content")
         .innerHTML = p;
	};
	    function e(){
	    	var num = document.getElementById("Num1").value;
	    	if (num%2==0){
	    		var i = "Even";
	    	}
	    	else{
	    		var i = "Odd"; 
	    	}
	    	
	    	document.getElementById("content2").innerHTML = i;
	    };
	document.querySelector("button")
      .addEventListener("click", d);
    document.querySelector(".T")
      .addEventListener("click", e);  
}
);