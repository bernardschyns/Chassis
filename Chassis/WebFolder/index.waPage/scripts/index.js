
WAF.onAfterInit = function onAfterInit() {// @lock
	var files = [];
	var file = [];
	var compteur = -1;
	//mémorisons la position du preview
	var previewLeft = $('#preview').position().left;
	//	$('#fileUpload2').css("display",false);
	document.getElementById("fileUpload1").addEventListener("drop", drop, false);

	function drop(e) {
	    debugger;
	    e.stopPropagation();
	    e.preventDefault();
	    files.push(e.dataTransfer.files);
//	    
	    miseJourVignette(e);

	}

	function miseJourVignette(e) {
	    compteur += 1;
	    i = compteur
	    //debugger;
	    //nous avons accès à la hauteur et au top de la liste popup par
	    var fileUpload1Height = $('#fileUpload1').height();
	    var fileUpload1Top = $('#fileUpload1').position().top;
	    var container1Height = $('#container1').height();
	    //debugger;
	    var myNewPhoto = [];
	    file = files[i];
	    if(i == 0) {
	        var img = document.createElement("img");
	        img.classList.add("obj");
	        //        img.file = file;
	        img.setAttribute('width', '100%');
	        img.setAttribute('height', '100%');
	        $('#preview').css('top', fileUpload1Height + container1Height + fileUpload1Height + 10);
	        document.getElementById('preview').appendChild(img); // "preview" is a container  where the image will be previewed.
	        $('#preview').prop('top', fileUpload1Height + container1Height + fileUpload1Height + 10);
	    }
	    if(i > 0) {
	        var monObj = $('#preview').clone().appendTo($('body'));
	        monObj = monObj.css("left", previewLeft + i * 60);
	        img = monObj.children();
	        //        img.file = file;
	    }
	    //Read content of the file into image object
	    //    debugger;
	    var reader = new FileReader();
	    reader.onload = (function(aImg) {
	        return function(e) {
	            if(i == 0) {
	                aImg.src = e.target.result;
	            }
	            else {
	                aImg[0].src = e.target.result;
	            }
	    
	        };
	    })(img);
	    //        })();
	    reader.readAsDataURL(file[0]);
	}

// @region namespaceDeclaration// @startlock
	var fileUpload1 = {};	// @fileUpload
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	fileUpload1.filesExists = function fileUpload1_filesExists (event)// @startlock
	{// @endlock
		debugger;
	};// @lock

	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
		debugger;
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
			//on tente de régler le problème des capitalize
			String.prototype.capitalize = function() {
			    //			return this.length > 1 ? this[0].toUpperCase() + this.substring(1).toLowerCase() : this.toUpperCase()
			    return this.length > 1 ? this[0].toUpperCase() + this.substring(1) : this.toUpperCase()

			}
			// update elements dimensions
			// call wPaint('resize')
//			debugger;
			$(window).resize(function() {
			    $('#wPaint').css({
			        width: $('#wPaint').width(),
			        height: $('#wPaint').height()
			    }).wPaint('resize');
			})

			// init size based on browser dimensions
			$(window).resize();

			//on crée le tableau des images de fond dans la variable [images]
			var images = ["./../maison2.jpg" ,'/PROJECT/maison.jpg', '/test/uploads/maison.jpg', '/test/uploads/imgres.jpg'];

			//on crée la fonction saveImg()
			function saveImg(image) {
			    var _this = this;

			}

			//on crée la fonction loadBg
			function loadImgBg() {

			    // internal function for displaying background images modal
			    // where images is an array of images (base64 or url path)
			    // NOTE: that if you can't see the bg image changing it's probably
			    // becasue the foregroud image is not transparent.
			    this._showFileModal('bg', images);
			}

			//on crée la fonction loadFg
			function loadImgFg() {

			    // internal function for displaying foreground images modal
			    // where images is an array of images (base64 or url path)
			    this._showFileModal('fg', images);
			}

			// set test image
			// get from tapping enter below
			$('#wPaint').wPaint({
			    menuOffsetLeft: 0,
			    menuOffsetTop: 0,
			    saveImg: saveImg,
			    loadImgBg: loadImgBg,
			    loadImgFg: loadImgFg,
//			    image: '/test/uploads/maison.jpg'
			    image: '/test/uploads/maison.jpg'

			});
//			debugger;
//			wheelzoom3(document.querySelector('.wPaint-canvas-bg'), {
//			    //c'est dans wheelzoom3 que l'on dessinera le Canvas
//			    zoom: 0.05,
//			    type: "CANVAS",
//			    image: '/test/uploads/maison.jpg',
//			    monContextCanvas: []
//			});

			

		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("fileUpload1", "filesExists", fileUpload1.filesExists, "WAF");
	WAF.addListener("fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
