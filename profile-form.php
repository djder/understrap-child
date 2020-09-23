<?php
/*
If you would like to edit this file, copy it to your current theme's directory and edit it there.
Theme My Login will always look in your theme's directory first, before using this default template.
*/
?>
<div class="user-profile" id="theme-my-login<?php $template->the_instance(); ?>">
	<div class="container">
		<div class="row">
			<div class="col-md-4 text-center">
				<?php echo get_avatar( $comment , 180 ); ?>
				<h4 id="user-login">
					<?php echo esc_attr( $profileuser->first_name . ' ' . $profileuser->last_name ); ?><br/>
					<small class="text-muted"><?php echo __( $profileuser->user_login ) ?></small>
				</h4>
			</div>
			<div class="col-md-8">
				<?php $template->the_action_template_message( 'profile' ); ?>
				<?php $template->the_errors(); ?>

				<form id="your-profile" action="<?php $template->the_action_url( 'profile', 'login_post' ); ?>" method="post">
					<?php wp_nonce_field( 'update-user_' . $current_user->ID ); ?>

					<input type="hidden" name="from" value="profile" />
					<input type="hidden" name="checkuser_id" value="<?php echo $current_user->ID; ?>" />
					<input type="hidden" name="nickname" value="<?php echo esc_attr( $profileuser->user_login ); ?>" />

					<?php do_action( 'profile_personal_options', $profileuser ); ?>

					<div class="form-row">
						<!-- User first name -->
						<div class="form-group col-md-6 mb-3">
							<label for="first_name">
								<?php _e( 'First Name', 'theme-my-login' ); ?>
							</label>
							<input type="text" class="form-control" name="first_name" id="first_name" value="<?php echo esc_attr( $profileuser->first_name ); ?>"/>
						</div>
						<!-- User last name -->
						<div class="form-group col-md-6 mb-3">
							<label for="last_name">
								<?php _e( 'Last Name', 'theme-my-login' ); ?>
							</label>
							<input type="text" class="form-control" name="last_name" id="last_name" value="<?php echo esc_attr( $profileuser->last_name ); ?>"/>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-6 mb-3">
							<label for="city_name">Область, город</label>

							<input class="form-control" type="text" name="city_name" id="city_name" value="<?php echo esc_attr( $profileuser->city_name); ?>">
						</div>
						<div class="form-group col-md-6 mb-3">
							<label for="phone_name">Телефон/факс</label>

							<input class="form-control" type="text" name="phone_name" id="phone_name" value="<?php echo esc_attr( $profileuser->phone_name); ?>">
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-6 mb-3">
							<label for="org_name">Организация</label>

							<input class="form-control" type="text" name="org_name" id="org_name" value="<?php echo esc_attr( $profileuser->org_name); ?>">
						</div>
						<div class="form-group col-md-6 mb-3">
							<label for="inn_name">ИНН</label>

							<input class="form-control" type="text" name="inn_name" id="inn_name" value="<?php echo esc_attr( $profileuser->inn_name ); ?>">
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-6 mb-3">
							<label for="hobby_name">Вид деятельности</label>
							<select class="form-control custom-select" name="hobby_name">
								<?php 
								$act_list = array(
									'Дилеры',
									'Дистрибьюторы',
									'Инфраструктура',
									'Проектные институты',
									'Промышленные предприятия',
									'Розничные магазины',
									'Сети',
									'Строительно-монтажные организации',
									'Щитовики',
									'Другое'
								);
								$current_act = $profileuser->hobby_name; 

								foreach ($act_list as $act) { ?>
									<option value="<?php echo $act ?>" <?php selected( $act, $current_act )?>><?php echo $act ?></option>
								<?php } ?>
							</select>
						</div>
					</div>
					<div class="form-group">
						<div class="form-check custom-control custom-checkbox">
							<input class="form-check-input" type="checkbox" value="" id="shop_name" <?php checked( $profileuser->shop_name, 'Да' ); ?>>
							<label class="form-check-label" for="shop_name">
							Я покупал продукцию компании НТЗ Волхов
							</label>
						</div>
					</div>
					<div class="form-row">
					</div>

					<!-- Description -->
					<div class="form-group">
						<label for="description"><?php _e( 'Biographical Info', 'theme-my-login' ); ?></label>
						<textarea class="form-control" name="description" id="description" rows="5"><?php echo esc_html( $profileuser->description ); ?></textarea>
						<small class="form-text text-muted"><?php _e( 'Share a little biographical information to fill out your profile. This may be shown publicly.', 'theme-my-login' ); ?></small>
					</div>

					<!-- Account managment -->
					<?php
					$show_password_fields = apply_filters( 'show_password_fields', true, $profileuser );
					if ( $show_password_fields ) :
					?>
					<div class="form-row">
						<h5><?php _e( 'Account Management', 'theme-my-login' ); ?></h5>
					</div>
					<div class="form-row">
						<!-- User display name -->
						<div class="form-group col-md-6 mb-3">
							<label for="display_name"><?php _e( 'Display name publicly as', 'theme-my-login' ); ?></label>

							<select class="form-control custom-select" name="display_name" id="display_name">
							<?php
								$public_display = array();
								$public_display['display_username']  = $profileuser->user_login;

								if ( ! empty( $profileuser->first_name ) )
									$public_display['display_firstname'] = $profileuser->first_name;

								if ( ! empty( $profileuser->first_name ) && ! empty( $profileuser->last_name ) ) {
									$public_display['display_firstlast'] = $profileuser->first_name . ' ' . $profileuser->last_name;
									$public_display['display_lastfirst'] = $profileuser->last_name . ' ' . $profileuser->first_name;
								}

								if ( ! in_array( $profileuser->display_name, $public_display ) )// Only add this if it isn't duplicated elsewhere
									$public_display = array( 'display_displayname' => $profileuser->display_name ) + $public_display;

								$public_display = array_map( 'trim', $public_display );
								$public_display = array_unique( $public_display );

								foreach ( $public_display as $id => $item ) {
							?>
								<option <?php selected( $profileuser->display_name, $item ); ?> ><?php echo $item; ?></option>
							<?php
								}
							?>
							</select>
						</div>

						<div class="form-group col-md-6 mb-3">
							<label for="email"><?php _e( 'E-mail', 'theme-my-login' ); ?> <span class="description"><?php _e( '(required)', 'theme-my-login' ); ?></span></label>
							<input class="form-control" type="email" name="email" id="email" value="<?php echo esc_attr( $profileuser->user_email ); ?>" />
							<?php
							$new_email = get_option( $current_user->ID . '_new_email' );
							if ( $new_email && $new_email['newemail'] != $current_user->user_email ) : ?>
							<div class="updated inline">
							<p><?php
								printf(
									__( 'There is a pending change of your e-mail to %1$s. <a href="%2$s">Cancel</a>', 'theme-my-login' ),
									'<code>' . $new_email['newemail'] . '</code>',
									esc_url( self_admin_url( 'profile.php?dismiss=' . $current_user->ID . '_new_email' ) )
							); ?></p>
							</div>
							<?php endif; ?>
						</div>
					</div>

					<div class="form-group user-pass1-wrap" id="password" name="p-1">
						<label for="pass1"><?php _e( 'New Password', 'theme-my-login' ); ?></label>
						<input class="hidden" value=" " /><!-- #24364 workaround -->
						<button type="button" class="btn btn-secondary wp-generate-pw hide-if-no-js"><?php _e( 'Generate Password', 'theme-my-login' ); ?></button>

						<div class="wp-pwd hide-if-js">
							<span class="password-input-wrapper">
								<input type="password" name="pass1" id="pass1" value="" autocomplete="off" data-pw="<?php echo esc_attr( wp_generate_password( 10, false ) ); ?>" aria-describedby="pass-strength-result" />
							</span>
							<div id="pass-strength-result" aria-live="polite"></div>
							<button type="button" class="btn btn-secondary wp-hide-pw hide-if-no-js" data-toggle="0" aria-label="<?php esc_attr_e( 'Hide password', 'theme-my-login' ); ?>">
								<span class="dashicons dashicons-hidden"></span>
								<span class="text"><?php _e( 'Hide', 'theme-my-login' ); ?></span>
							</button>
							<button type="button" class="btn btn-secondary wp-cancel-pw hide-if-no-js" data-toggle="0" aria-label="<?php esc_attr_e( 'Cancel password change', 'theme-my-login' ); ?>">
								<span class="text"><?php _e( 'Cancel', 'theme-my-login' ); ?></span>
							</button>
						</div>
					</div>
					<div class="form-group user-pass2-wrap hide-if-js">
						<th scope="row"><label for="pass2"><?php _e( 'Repeat New Password', 'theme-my-login' ); ?></label></th>
						<td>
						<input name="pass2" type="password" id="pass2" value="" autocomplete="off" />
						<p class="description"><?php _e( 'Type your new password again.', 'theme-my-login' ); ?></p>
						</td>
					</div>
					<div class="form-group pw-weak">
						<th><?php _e( 'Confirm Password', 'theme-my-login' ); ?></th>
						<td>
							<label>
								<input type="checkbox" name="pw_weak" class="pw-checkbox" />
								<?php _e( 'Confirm use of weak password', 'theme-my-login' ); ?>
							</label>
						</td>
					</div>
					<?php endif; ?>

					<?php //do_action( 'show_user_profile', $profileuser ); ?>
					
					<p class="tml-submit-wrap">
						<input type="hidden" name="action" value="profile" />
						<input type="hidden" name="instance" value="<?php $template->the_instance(); ?>" />
						<input type="hidden" name="user_id" id="user_id" value="<?php echo esc_attr( $current_user->ID ); ?>" />
						<input type="submit" class="btn btn-primary" value="<?php esc_attr_e( 'Update Profile', 'theme-my-login' ); ?>" name="submit" id="submit" />
					</p>
				</form>
				
			</div>
		</div>
	</div>
</div>
