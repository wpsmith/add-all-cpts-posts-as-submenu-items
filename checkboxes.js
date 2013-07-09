jQuery(document).ready(function($) {
	// ID tracker field
	var IDtracker = $('<input>').attr({
		type: 'hidden',
		id: aacptpasiParams.idtracker,
		name: aacptpasiParams.idtracker,
		value: ''
	}).prependTo('#update-nav-menu');

	console.log(IDtracker);
	
	function aacptpasi_add_checkbox( item ) {
		console.log(item);
		
		// Skip items that are already modified or are known to not be hierarchical
		if ( $(item).is('.aacptpasi-checked') ) { //.menu-item-custom, .menu-item-post_tag
			console.log('skipped');
			return;
		}

		// Don't check this item again
		$(item).addClass('aacptpasi-checked');

		var itemID = parseInt( $(item).attr('id').replace('menu-item-', ''), 10 );

		// Gotta figure it out in PHP, so use an AJAX call
		jQuery.post(
			ajaxurl,
			{
				action: aacptpasiParams.ajaxaction,
				id: itemID
			},
			function( response ){
				console.log( itemID );
				console.log( response );
				if ( response && response.add ) {
					// Track IDs to check the POST for
					IDtracker.val( IDtracker.val() + ',' + itemID );

					// Add the checkbox
					var checkboxid = aacptpasiParams.checkboxprefix + itemID;
					var type = $(item).find('.menu-item-data-object').val();
					var desc = aacptpasiParams.checkboxdesc;
					if ( type == 'custom' )
						desc = aacptpasiParams.checkboxdesccustom;
					$(item).find('.menu-item-actions .item-delete').before('<p><label><input type="checkbox" id="' + checkboxid + '" name="' + checkboxid + '" value="1" /> ' + desc + '</label></p>');

					if ( response.checked ) {
						$('#' + checkboxid).prop('checked', true);
					}
				}
			},
			'json'
		);
	}

	// Try adding checkboxes to all existing menu items
	$('.menu-item').each(function(){
		aacptpasi_add_checkbox( this );
	});

	// When hovering over a menu item added using Javascript, try adding a checkbox to it.
	// Props DD32 for mouseover hack to get around return false; inside other click bound event.
	$('.menu-item.pending').live('mouseover', function(){
		aacptpasi_add_checkbox( this );
	});
});