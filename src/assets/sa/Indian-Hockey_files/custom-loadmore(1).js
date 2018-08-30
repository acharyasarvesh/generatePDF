// jQuery(function($){
// 	$('#load-more-posts').click(function(){
 
//  		var posts = '<?php echo json_encode( $wp_query->query_vars ); ?>';
// 		var max_page = '<?php echo $wp_query->max_num_pages; ?>';
// 		var current_page = "<?php get_query_var( 'paged' ) ? get_query_var('paged') : 1; ?>";

// 		var button = $(this),
// 		    data = {
// 			'action': 'loadmore',
// 			'query': '<?php echo json_encode( $wp_query->query_vars ); ?>',
// 			'page' : '<?php get_query_var( "paged" ) ? get_query_var( "paged" ) : 1; ?>'
// 		};

// 		console.log(data)
 
// 		$.ajax({
// 			url : '<?php echo site_url(); ?>' + '/wp-admin/admin-ajax.php',
// 			data : data,
// 			type : 'POST',
// 			beforeSend : function ( xhr ) {
// 				button.text('Loading...');
// 			},
// 			success : function( data ) {
// 				if( data ) { 
// 					button.text( 'More posts' ).prev().before(data);
// 					current_page++;
 
// 					if ( current_page == max_page ) 
// 						button.remove();
// 				} else {
// 					button.remove();
// 				}
// 			}
// 		})
// 	})
// })