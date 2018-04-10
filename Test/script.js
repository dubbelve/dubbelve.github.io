formConfirm = () => {
	// prevent default action and bubbling
	event.preventDefault();
	event.stopPropagation();
	 $.ajax({
		 type: 'POST',
		 success: function (data, responseText) {
			 var overlay = document.createElement('div');
			 overlay.className = "w_overlay";
			 	var dialog = document.createElement('div');
			 	dialog.className = "w_dialog";
			 	var node = ("<h3>Tack!</h3>" +
									 '<p>Mer information har skickats till din inkorg.</p>');
			 	dialog.innerHTML = node;
			 	overlay.appendChild(dialog);
			 	document.getElementById('w_form').appendChild(overlay);
		 },
		 error: function (errorThrown) {
				alert("Error");
			 console.log(errorThrown);
		 }
	 });
}