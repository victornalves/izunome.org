<?php


function template_part( $tpl, $params = array()){
    $full_path =  $tpl . '.php';

    extract( $params );

    include(locate_template( $full_path ));
}

function get_asset_uri( $path ){
    return get_stylesheet_directory_uri() . '/dist/' . $path;
}

// Echoes the HTML of default thumbnail structure of an image in ACF
// Requires the ACF image to return the ID of attachment, not image URL
function the_field_image( $key, $size = 'large', $class = '' ){
    $attachment_id = get_field( $key );
    echo wp_get_attachment_image( $attachment_id, $size, false , array('class' => 'img ' . $class));
}


/**
 * Filter the except length to 35 words.
 *
 * @param int $length Excerpt length.
 * @return int (Maybe) modified excerpt length.
 */
function wpdocs_custom_excerpt_length( $length ) {
    return 35;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

/**
 * Filter the excerpt "read more" string.
 *
 * @param string $more "Read more" excerpt string.
 * @return string (Maybe) modified "read more" excerpt string.
 */
function wpdocs_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'wpdocs_excerpt_more' );


/* PAGINACAO PARA CPTS e POSTS */
function news_pagination($pages = '', $range = 2)
{
     $showitems = ($range);

     global $paged;
     if(empty($paged)) $paged = 1;

     if($pages == '')
     {
         global $wp_query;
         $pages = $wp_query->max_num_pages;
         if(!$pages)
         {
             $pages = 1;
         }
     }

     if(1 != $pages)
     {
         echo "<div class='pagination'><ul>";
        //  if($paged > 2 && $paged > $range+1 && $showitems < $pages) echo "<a href='".get_pagenum_link(1)."'>&laquo; a</a>";
        //  if($paged > 1 && $showitems < $pages) echo "<li><a href='".get_pagenum_link($paged - 1)."'>&lsaquo; b</a></li>";
         if($paged > 1) echo "<li><a href='".get_pagenum_link($paged - 1)."'>&lt;</a></li>";

         for ($i=1; $i <= $pages; $i++)
         {
             if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
             {
                 echo ($paged == $i)? "<li class='__active'>".$i."</li>":"<li><a href='".get_pagenum_link($i)."' class='inactive' >".$i."</a></li>";
             }
         }

         if ($paged < $pages) echo "<li><a href='".get_pagenum_link($paged + 1)."'>&gt;</a></li>";
        //  if ($paged < $pages && $showitems < $pages) echo "<li><a href='".get_pagenum_link($paged + 1)."'>&rsaquo;</a></li>";
        //  if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) echo "<a href='".get_pagenum_link($pages)."'>&raquo;</a>";
         echo "</ul></div>\n";
     }
}


// Tries to Fix JSON format and decodes it as associative array
function json_clear_decode($json){

$json = str_replace('&quot;', '"', $json);
$json = iconv('UTF-8', 'UTF-8//IGNORE', utf8_encode($json));

// This will remove unwanted characters.
// Check http://www.php.net/chr for details
for ($i = 0; $i <= 31; ++$i) {
    $json = str_replace(chr($i), "", $json);
}
$json = str_replace(chr(127), "", $json);

// This is the most common part
// Some file begins with 'efbbbf' to mark the beginning of the file. (binary level)
// here we detect it and we remove it, basically it's the first 3 characters
if (0 === strpos(bin2hex($json), 'efbbbf')) {
   $json = substr($json, 3);
}

return json_decode($json, true);

}

//controla visualização de posts
function wpb_set_post_views($postID) {
    $count_key = 'wpb_post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}
//To keep the count accurate, lets get rid of prefetching
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
