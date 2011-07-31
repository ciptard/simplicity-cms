$(document).ready(function(){
	$('[rel=cms]').live('click', function(){
		console.log('editing');
		if($('#currentEdit').length>0)return;//only edit one field at a time
		var val = $(this)[0].innerHTML;//text of this element
		$(this).replaceWith('<textarea style="background-color:grey;color:white; font-size:14px" id="currentEdit" rows="5" cols="50">'+val+'</textarea>');
		$('#currentEdit').data('original', $(this)[0].outerHTML);//store original on this item
		$('#currentEdit').data('id', $(this).attr('id'));//id of this element
  	});
  	
  	$('#currentEdit').live('blur', function(){
  		console.log('updating');
	  	var original = $(this).data('original');
	  	var id = $(this).data('id');
	  	if(id==undefined){
		  	alert('no id set');
		  	return;
	  	}
		var newText = $(this)[0].value;
		$(this).replaceWith($(original).text(newText));
		if(id!=undefined && id!='' && newText!=undefined && newText!='')
			$.post('/test/update.php', {field: id, contentValue: newText});
	});  	 	
	
});