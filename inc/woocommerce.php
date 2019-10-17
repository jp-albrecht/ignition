<?php

/**
 * Remove woocommerce wrapper so that we can add the primary and main wrappers used in ignition-2.0
 */
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', 'ignition_2_0_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'ignition_2_0_wrapper_end', 10);


/**
 * my_theme_wrapper_start function.
 * 
 * @access public
 * @return void
 */
function ignition_2_0_wrapper_start() {
 ?>
  <div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
      <?php
}


/**
 * ignition_2_0_wrapper_end function.
 * 
 * @access public
 * @return void
 */
function ignition_2_0_wrapper_end() {
  echo '</main> </div>';
}