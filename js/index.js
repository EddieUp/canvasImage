	var bas = document.getElementById("basic");
	var baspart = document.getElementById("basicpart");
	var bor = document.getElementById("border");
	var borpart = document.getElementById("borderpart");
	var flo = document.getElementById("flower");
	var flopart = document.getElementById("flowerpart");

	bas.addEventListener('click', function(){
		bas.style.opacity = 1;
		bor.style.opacity = 0.6;
		flo.style.opacity = 0.6;
		baspart.style.display = "block";
		borpart.style.display = "none";
		flopart.style.display = "none";
	}, false);
	bor.addEventListener('click', function(){
		bas.style.opacity = 0.6;
		bor.style.opacity = 1;
		flo.style.opacity = 0.6;
		baspart.style.display = "none";
		borpart.style.display = "block";
		flopart.style.display = "none";
	}, false);
	flo.addEventListener('click', function(){
		bas.style.opacity = 0.6;
		bor.style.opacity = 0.6;
		flo.style.opacity = 1;
		baspart.style.display = "none";
		borpart.style.display = "none";
		flopart.style.display = "block";
	}, false);


	var contag = document.getElementById("contag");
	var conwholePer = document.getElementById("conwholePer");
	var concurPer = document.getElementById("concurPer");
	//Progress conbar
	contag.onmousedown = function(ev){
		var ev = ev || window.event;
		disXs = ev.clientX - contag.offsetLeft;
		document.onmouseover = function(){
			var ev = ev || window.event;
			var le = ev.clientX - disXs;
			if(le < 0 ){
				le = 0;
			}
			else if(le > conwholePer.offsetWidth - contag.offsetWidth){
				le = conwholePer.offsetWidth - contag.offsetWidth;
			}
			contag.style.left = le + "px";
			concurPer.style.width = le + 10 + "px";

			var scale = le/(conwholePer.offsetWidth - contag.offsetWidth);
		};
		document.onmouseup = function(){
			document.onmouseover = null;
		};
		return false;
	};

	var ligtag = document.getElementById("ligtag");
	var ligwholePer = document.getElementById("ligwholePer");
	var ligcurPer = document.getElementById("ligcurPer");
	//Progress ligbar
	ligtag.onmousedown = function(ev){
		var ev = ev || window.event;
		disXs = ev.clientX - ligtag.offsetLeft;
		document.onmouseover = function(){
			var ev = ev || window.event;
			var le = ev.clientX - disXs;
			if(le < 0 ){
				le = 0;
			}
			else if(le > ligwholePer.offsetWidth - ligtag.offsetWidth){
				le = ligwholePer.offsetWidth - ligtag.offsetWidth;
			}
			ligtag.style.left = le + "px";
			ligcurPer.style.width = le + 10 + "px";

			var scale = le/(ligwholePer.offsetWidth - ligtag.offsetWidth);
		};
		document.onmouseup = function(){
			document.onmouseover = null;
		};
		return false;
	};

	var botag = document.getElementById("botag");
	var bowholePer = document.getElementById("bowholePer");
	var bocurPer = document.getElementById("bocurPer");
	//Progress bonbar
	botag.onmousedown = function(ev){
		var ev = ev || window.event;
		disXs = ev.clientX - botag.offsetLeft;
		document.onmouseover = function(){
			var ev = ev || window.event;
			var le = ev.clientX - disXs;
			if(le < 0 ){
				le = 0;
			}
			else if(le > bowholePer.offsetWidth - botag.offsetWidth){
				le = bowholePer.offsetWidth - botag.offsetWidth;
			}
			botag.style.left = le + "px";
			bocurPer.style.width = le + 10 + "px";

			var scale = le/(bowholePer.offsetWidth - botag.offsetWidth);
		};
		document.onmouseup = function(){
			document.onmouseover = null;
		};
		return false;
	};

// 	function previewImage(file) 
// 	{  
// 		var MAXWIDTH = 260; 
// 		var MAXHEIGHT = 180;  
// 		var div = document.getElementById('picposition'); 
// 		if (file.files && file.files[0]) 
// 		{  
// 		div.innerHTML ='<img id=picselected>';  
// 		var img = document.getElementById('butpic'); 
// 		img.onload = function(){ 
// 		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);  
// 		img.width = rect.width; 
// 		img.height = rect.height;  
// 		img.style.marginLeft = rect.left+'px';  
// 		img.style.marginTop = rect.top+'px'; 
// 		}  
// 		var reader = new FileReader();  
// 		reader.onload = function(evt){img.src = evt.target.result;}  
// 		reader.readAsDataURL(file.files[0]); 
// 	}  
// }
	function previewImage(file){
		var picselected = document.getElementById("picselected");
 	var img = document.getElementById('butpic'); 
		img.onload = function(){ 
		var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);  
		img.width = rect.width; 
		img.height = rect.height;  
		img.style.marginLeft = rect.left+'px';  
		img.style.marginTop = rect.top+'px'; 
		
		}  
		var reader = new FileReader();  
		reader.onload = function(evt){img.src = evt.target.result;}  
		reader.readAsDataURL(file.files[0]); 
		picselected.src  = img.src;
	}
 	
 
 
 