<?php

$args = array(
	'blog_id'      => $GLOBALS['blog_id'],
	'role'         => '',
	'role__in'     => array(),
	'role__not_in' => array(),
	'meta_key'     => '',
	'meta_value'   => '',
	'meta_compare' => '',
	'meta_query'   => array(),
	'include'      => array(),
	'exclude'      => array(),
	'orderby'      => 'login',
	'order'        => 'ASC',
	'offset'       => '',
	'search'       => '',
	'search_columns' => array(),
	'number'       => '',
	'paged'        => 1,
	'count_total'  => false,
	'fields'       => 'all',
	'who'          => '',
	'has_published_posts' => null,
	'date_query'   => array() // смотрите WP_Date_Query
);
$users = get_users( $args );
echo '<table class="empty" style="width:100%;max-width:100%;border-collapse:collapse;">';
echo '<tr style="border: 1px solid #a0a0a0;">';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">Логин</th>';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">E-mail</th>';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">Имя</th>';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">Фамилия</th>';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">Организация</th>';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">ИНН</th>';
echo '<th style="background:#304090;border-right: 1px solid #a0a0a0;color:#fff;text-align:center;">Адрес</th>';
echo '<th style="background:#304090;color:#fff;text-align:center;">Телефон</th>';
echo '</tr>';
foreach( $users as $user1 ){
	$user_login = ($user1->user_login)?$user1->user_login:'';
	$user_email = ($user1->user_email)?$user1->user_email:'';
	$user_first_name = ($user1->first_name)?$user1->first_name:'';
	$user_last_name = ($user1->last_name)?$user1->last_name:'';
	$user_org = ($user1->org_name)?$user1->org_name:'';
	$user_inn = ($user1->inn_name)?$user1->inn_name:'';
	$user_post = ($user1->post_name)?$user1->post_name:'';
	$user_phone = ($user1->fhone_name)?$user1->fhone_name:'';
	echo '<tr style="border: 1px solid #a0a0a0;">';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_login.'</td>';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_email.'</td>';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_first_name.'</td>';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_last_name.'</td>';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_org.'</td>';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_inn.'</td>';
	echo '<td style="border-right: 1px solid #a0a0a0;padding:2px;">'.$user_post.'</td>';
	echo '<td>'.$user_phone.'</td>';
	echo '</tr>';
}
echo '</table>';
?>