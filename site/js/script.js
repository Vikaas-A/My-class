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
        if (P(num)===null){
            var p = "not Prime";
        }
        else{
        	var p = "Prime";
        }
        document
         .getElementById("content")
         .innerHTML = p;
		
	};
	document.querySelector("button")
      .addEventListener("click", d);
}
);