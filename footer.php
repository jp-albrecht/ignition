<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #page and #content div and any content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package ignition-2.0-2-0-2.0
 * @since 1.0
 * @version 1.0
 */

?>

</div><!-- #site-content -->

<footer id="colophon" class="site-footer" role="contentinfo">
    <div class="container">
		<?php
		get_template_part( 'template-parts/footer/footer', 'widgets' );

		get_template_part( 'template-parts/footer/site', 'info' );
		?>
    </div><!-- .wrap -->
</footer><!-- #colophon -->

</div><!-- #page -->

<button aria-label="Toggle Right Panel" data-toggle="open" data-target="#panel-right" aria-expanded="false" class="panel-right-toggle"><span class="sidebar-icon"></span></button>

</div><!-- .site-container -->

<?php wp_footer(); ?>


<div id="outdated">
    <h6><?php _e( 'Your browser is out-of-date!', 'ignition-2.0-2-0' ); ?></h6>
    <p><?php _e( 'Update your browser to view this website correctly.', 'ignition-2.0-2-0' ); ?> <a id="btnUpdateBrowser"
                                                                                            href="http://outdatedbrowser.com/"><?php _e( 'Update
			my browser now', 'ignition-2.0-2-0' ); ?></a></p>
    <p class="last"><a data-toggle="hidden" data-target="#outdated" href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
</div>

</body>
</html>
