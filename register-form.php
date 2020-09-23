<style type="text/css">
	#collapscat-5{
		display:none !important;
	}
	#primary #main{
		margin-left:0 !important;
	}
</style>

<?php

/*
If you would like to edit this file, copy it to your current theme's directory and edit it there.
Theme My Login will always look in your theme's directory first, before using this default template.
*/
?>
<center>
<div class="tml tml-register" style="min-width:600px !important; width:600px !important;" id="theme-my-login<?php $template->the_instance(); ?>">
	<?php $template->the_action_template_message( 'register' ); ?>
	<?php $template->the_errors(); ?>
	<form name="registerform" id="registerform<?php $template->the_instance(); ?>" action="<?php $template->the_action_url( 'register', 'login_post' ); ?>" method="post">
		<?php if ( 'email' != $theme_my_login->get_option( 'login_type' ) ) : ?>
		<p class="tml-user-login-wrap">
			<label for="user_login<?php $template->the_instance(); ?>"><?php _e( 'Имя пользователя (Логин, содержит только латинские символы) *', 'theme-my-login' ); ?></label>
			<input type="text" name="user_login" id="user_login<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'user_login' ); ?>" size="20" placeholder="Обязательное поле" />
		</p>
		<?php endif; ?>

		<p class="tml-user-email-wrap">
			<label for="user_email<?php $template->the_instance(); ?>"><?php _e( 'E-mail *', 'theme-my-login' ); ?></label>
			<input type="text" name="user_email" id="user_email<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'user_email' ); ?>" size="20" placeholder="Обязательное поле" />
		</p>

<p>
	<label for="org_name<?php $template->the_instance(); ?>"><?php _e( 'Организация *', 'theme-my-login' ) ?></label>
	<input type="text" name="org_name" id="org_name<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'org_name' ); ?>" size="20" placeholder="Обязательное поле" />
</p>
<p>
	<label for="inn_name<?php $template->the_instance(); ?>"><?php _e( 'ИНН (10 цифр для юр.лиц, 12 цифр для ИП)*', 'theme-my-login' ) ?></label>
	<input type="text" name="inn_name" id="inn_name<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'inn_name' ); ?>" size="20" placeholder="Обязательное поле" />
</p>
<p>
	<label for="city_name<?php $template->the_instance(); ?>"><?php _e( 'Область, город *', 'theme-my-login' ) ?></label>
	<input type="text" name="city_name" id="city_name<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'city_name' ); ?>" size="20" placeholder="Обязательное поле" />
</p>
<p>
	<label for="post_name<?php $template->the_instance(); ?>"><?php _e( 'Почтовый адрес', 'theme-my-login' ) ?></label>
	<input type="text" name="post_name" id="post_name<?php $template->the_instance(); ?>" class="input" value="<?php $template->the_posted_value( 'post_name' ); ?>" size="20" />
</p>
<p>
	<label for="first_name<?php $template->the_instance(); ?>"><?php _e( 'Имя *', 'theme-my-login' ) ?></label>
	<input type="text" name="first_name" id="first_name<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'first_name' ); ?>" size="20" placeholder="Обязательное поле" />
</p>
<p>
	<label for="last_name<?php $template->the_instance(); ?>"><?php _e( 'Фамилия *', 'theme-my-login' ) ?></label>
	<input type="text" name="last_name" id="last_name<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'last_name' ); ?>" size="20" placeholder="Обязательное поле" />
</p>
<p>
	<label for="phone_name<?php $template->the_instance(); ?>"><?php _e( 'Тел/факс *', 'theme-my-login' ) ?></label>
	<input type="text" name="phone_name" id="phone_name<?php $template->the_instance(); ?>" class="inputbox1" value="<?php $template->the_posted_value( 'phone_name' ); ?>" size="20" placeholder="Обязательное поле" />
</p>			
	<p>
	<label for="hobby_name<?php $template->the_instance(); ?>"><?php _e( 'Вид деятельности *', 'theme-my-login' ) ?></label>
	<select name="hobby_name" size="1"  class="inputbox1" style="height:36px; line-height:34px; font-size:16px;">
        <option value="" disabled selected style="line-height:34px; font-family: Tahoma; font-size:16px;">Обязательное поле, выберите значение</option>
        <option value="Дилеры" style="line-height:34px; font-family: Tahoma; font-size:16px;">Дилеры</option>
        <option value="Дистрибьюторы" style="line-height:34px; font-family: Tahoma; font-size:16px;">Дистрибьюторы</option>
        <option value="Инфраструктура" style="line-height:34px; font-family: Tahoma; font-size:16px;">Инфраструктура</option>
        <option value="Проектные институты" style="line-height:34px; font-family: Tahoma; font-size:16px;">Проектные институты</option>
		<option value="Промышленные предприятия" style="line-height:34px; font-family: Tahoma; font-size:16px;">Промышленные предприятия</option>
		<option value="Розничные магазины" style="line-height:34px; font-family: Tahoma; font-size:16px;">Розничные магазины</option>
		<option value="Сети" style="line-height:34px; font-family: Tahoma; font-size:16px;">Сети</option>
		<option value="Строительно-монтажные организации" style="line-height:34px; font-family: Tahoma; font-size:16px;">Строительно-монтажные организации</option>
		<option value="Щитовики" style="line-height:34px; font-family: Tahoma; font-size:16px;">Щитовики</option>
		<option value="Другое" style="line-height:34px; font-family: Tahoma; font-size:16px;">Другое</option>

    <?php $template->the_instance(); ?>
    </select><label>Выбрано: <?php $template->the_posted_value( 'hobby_name' );?></label>
</p>
<p>
	<label for="shop_name<?php $template->the_instance(); ?>"><?php _e( 'Приобретали ли вы продукцию НТЗ Волхов?', 'theme-my-login' ) ?></label>
	<select name="shop_name" size="1" style="height:36px; line-height:34px; font-size:16px;">
        <option value="0" selected style="line-height:34px; font-family: Tahoma; font-size:16px;"></option>
        <option value="Да" style="line-height:34px; font-family: Tahoma; font-size:16px;">Да</option>
        <option value="Нет" style="line-height:34px; font-family: Tahoma; font-size:16px;">Нет</option>
    <?php $template->the_instance(); ?><?php $template->the_posted_value( 'shop_name' ); ?> 
    </select>
</p>			
<p>
	<label for="manage_name<?php $template->the_instance(); ?>"><?php _e( 'Ваш ведущий менеджер', 'theme-my-login' ) ?></label>
	<select name="manage_name" size="1" style="height:36px; line-height:34px; font-size:16px;">
        <option value="" selected style="line-height:34px; font-family: Tahoma; font-size:16px;"></option>
        <option value="Абраамян Атом Гарикович" style="line-height:34px; font-family: Tahoma; font-size:16px;">Абраамян Атом Гарикович</option>
        <option value="Акопян Андраник Пайлакович" style="line-height:34px; font-family: Tahoma; font-size:16px;">Акопян Андраник Пайлакович</option>
        <option value="Акопджанян Араик Гагикович" style="line-height:34px; font-family: Tahoma; font-size:16px;">Акопджанян Араик Гагикович</option>
        <option value="Великанов Алексей Викторович" style="line-height:34px; font-family: Tahoma; font-size:16px;">Великанов Алексей Викторович</option>
        <option value="Вишневская Мария Степановна" style="line-height:34px; font-family: Tahoma; font-size:16px;">Вишневская Мария Степановна</option>
        <option value="Дворина Лидия Валерьевна" style="line-height:34px; font-family: Tahoma; font-size:16px;">Дворина Лидия Валерьевна</option>
        <option value="Захарова Ирина Владимировна" style="line-height:34px; font-family: Tahoma; font-size:16px;">Захарова Ирина Владимировна</option>
        <option value="Ибрагимов Турал Агамирза оглы" style="line-height:34px; font-family: Tahoma; font-size:16px;">Ибрагимов Турал Агамирза оглы</option>
        <option value="Паншин Антон Николаевич<" style="line-height:34px; font-family: Tahoma; font-size:16px;">Паншин Антон Николаевич</option>
        <option value="Прокофьева Елена Борисовна" style="line-height:34px; font-family: Tahoma; font-size:16px;">Прокофьева Елена Борисовна</option>
        <option value="Саркисова Лина Карленовна" style="line-height:34px; font-family: Tahoma; font-size:16px;">Саркисова Лина Карленовна</option>
        <option value="Солнышков Михаил Андреевич" style="line-height:34px; font-family: Tahoma; font-size:16px;">Солнышков Михаил Андреевич</option>
        <option value="Филина Светлана Николаевна" style="line-height:34px; font-family: Tahoma; font-size:16px;">Филина Светлана Николаевна</option>
        <option value="Хачатрян Ваагн Юрикович" style="line-height:34px; font-family: Tahoma; font-size:16px;">Хачатрян Ваагн Юрикович</option>
    <?php $template->the_instance(); ?><?php $template->the_posted_value( 'manage_name' ); ?> 
    </select>
</p>			
	<p>
	<label for="kind_name<?php $template->the_instance(); ?>"><?php _e( 'Какая продукция Вас интересует?', 'theme-my-login' ) ?></label>
    <label><input type="checkbox" name="kind_name[]" value="Трансформаторы тока опорные" id="0" />Трансформаторы тока опорные</label>
    <label><input type="checkbox" name="kind_name[]" value="Трансформаторы тока проходные" id="1" />Трансформаторы тока проходные</label>
    <label><input type="checkbox" name="kind_name[]" value="Трансформаторы шинные" id="2" />Трансформаторы шинные</label>
    <label><input type="checkbox" name="kind_name[]" value="Трансформаторы тока нулевой последовательности" id="3" />Трансформаторы тока нулевой последовательности</label>
    <label><input type="checkbox" name="kind_name[]" value="Комбинированные трансформаторы" id="4" />Комбинированные трансформаторы</label>
    <label><input type="checkbox" name="kind_name[]" value="Трансформаторы силовые" id="5" />Трансформаторы силовые</label>
    <label><input type="checkbox" name="kind_name[]" value="Изоляторы" id="6" />Изоляторы</label>
    <label><input type="checkbox" name="kind_name[]" value="Трансформаторы напряжения" id="7" />Трансформаторы напряжения</label>
    <?php $template->the_instance(); ?><?php $template->the_posted_value( 'kind_name' ); ?>
    </p>	

		<?php do_action( 'register_form' ); ?>

		<p class="tml-registration-confirmation" id="reg_passmail<?php $template->the_instance(); ?>"><?php echo apply_filters( 'tml_register_passmail_template_message', __( 'Registration confirmation will be e-mailed to you.', 'theme-my-login' ) ); ?></p>

		<p class="tml-submit-wrap">
			<input type="submit" name="wp-submit" id="wp-submit<?php $template->the_instance(); ?>" value="<?php esc_attr_e( 'Register', 'theme-my-login' ); ?>" />
			<input type="hidden" name="redirect_to" value="<?php $template->the_redirect_url( 'register' ); ?>" />
			<input type="hidden" name="instance" value="<?php $template->the_instance(); ?>" />
			<input type="hidden" name="action" value="register" />
		</p>
	</form>
	<?php $template->the_action_links( array( 'register' => false ) ); ?>
</div>
</center>
