<div id="max_t" style="display:none;">
</div>
<div id="min_t" style="display:none;">
</div>
<div id="tok_term" style="display:none;">
</div>
<div id="tok_term0" style="display:none;">
</div>
<div id="tok_stand" style="display:none;">
</div>
<div id="tok_per" style="display:none;">
</div>
<div id="per" style="display:none;">
</div>
<div id="tokper_stand" style="display:none;">
</div>
<div id="tokper_term" style="display:none;">
</div>
<div id="bar" style="display:none;">
</div>
<div id="max_vyv" style="display:none;">
</div>
<div class="form-row">
	<!-- Tab nav -->
	<ul class="nav nav-tabs flex-column flex-sm-row" id="tt-tab" role="tablist">
		<li class="nav-item">
			<a class="nav-link active" id="tt-general-tab" data-toggle="tab" href="#tt-general" role="tab" aria-controls="tt-general" aria-selected="true">Общие характеристики</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" id="tt-prim-tab" data-toggle="tab" href="#tt-prim" role="tab" aria-controls="tt-prim" aria-selected="false">Первичная обмотка</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" id="tt-sec-tab" data-toggle="tab" href="#tt-sec" role="tab" aria-controls="tt-sec" aria-selected="false">Вторичные обмотки</a>
		</li>
	</div>	
	<!-- Tab content -->
	<div class="tab-content" id="tt-tab-content">
		<div class="tab-pane show active" id="tt-general" role="tabpanel" aria-labelledby="tt-general-tab">
			<div class="form-row">
			<!-- <div class="form-group col-6 col-md-3" id="klass"></div> -->
				<div class="form-group col-6 col-md-3" colspan="2">
					<label for="napr">Класс напряжения, кВ</label>
					<select id="napr" class="form-control custom-select">
						<option value="">...</option>
						<?php
						$tip                 = isset($_REQUEST['tabl']) ? $_REQUEST['tabl'] : '1';
						$_REQUEST['table']   = 'tip_ispoln';
						$_REQUEST['column0'] = 'napr';
						$_REQUEST['case']    = 'tip_id_eq_' . $tip;

						include __DIR__ . '\res2sel.php';
						?>
					</select>
				</div>
				<div class="form-group col-6 col-md-3">
					<label for="gab" class="text-truncate">Конструктивное исполнение</label>
					<select id="gab" class="form-control custom-select">
					</select>
					<p><input id="gab_nt" type="checkbox" disabled />неточно</p>
				</div>
				<div class="form-group col-6 col-md-3">
					<label for="klim_kat" class="text-truncate">Климатическое исполнение</label>
					<select id="klim_kat" class="form-control custom-select">
					</select>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-6 col-md-3">
					<label class="text-truncate">Исполнение вторичных выводов</label>
					<fieldset id="var_v_v" ></fieldset>
					<p><input id="var_v_v_nt" type="checkbox" disabled />неточно</p>
				</div>
				<div class="form-group col-6 col-md-3">
					<div id="gib_v" style="display: none;">
						<label for="">Длина гибких выводов, м</label>
						<input id="gib_vv" type="number" class="form-control col-md-6" value="" step="0.1"  min="0.1" max="10"/>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane" id="tt-prim" role="tabpanel" aria-labelledby="tt-prim-tab">
			<div class="form-group">
				<div class="form-check">
					 <input type="checkbox" class="form-check-input" id="bar_v">
					 <label for="bar_v">Наличие барьеров</label>
					<p><input id="bar_v_nt" type="checkbox" disabled />неточно</p>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-6 col-md-3">
					<label for="">Номинальный первичный ток, А</label>
					<select id="per_t" class="form-control custom-select">
					</select>
				</div>
				<div class="form-group col-6 col-md-3">
					<label for="">Ток терм.стойкости, кА</label>
					<select id="term_t" class="form-control custom-select">
					</select>
					<p><input id="term_t_nt" type="checkbox" disabled />неточно</p>
				</div>
				<div class="form-group col-6 col-md-3">
					<label for="">Время протекания, с</label>
					<input id="vrem_pr" readonly class="form-control-plaintext" type="text" value="">
				</div>
				<div class="form-group col-6 col-md-3" colspan="2">
					<label for="">Расширенный диапазон первичного тока, %</label>
					<select id="ras" class="form-control custom-select" >
						<option>120</option>
						<option>150</option>
						<option>200</option>
					</select>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group form-check">
					<div id="perpert" >
						<input class="form-check-input" type="checkbox" id="perek" value="" disabled="true" />
						<label for="perek">Переключение по первичному току</label>
					</div>
				</div>
				<div class="form-group col-6 col-md-3"> </div>
			</div>
			<div class="form-row">
				<div class="form-group col-6 col-md-3">
					<div id="perpert1" style="display:none;">
					</div>
				</div>
				<div class="form-group col-6 col-md-3">
					<div id="perpert2" style="display:none;">
					</div>
				</div>
				<div class="form-group col-6 col-md-3"></div>
				<div class="form-group col-6 col-md-3"></div>
				<div class="form-group col-6 col-md-3"></div>
			</div>
		</div>
		<div class="tab-pane" id="tt-sec" role="tabpanel" aria-labelledby="tt-sec-tab">
			<p id="countvyv" class="text-muted"></p>
			<table id="a00" class="table table-sm table-hover">
				<thead>
					<tr>
						<th width="12.5">№ Обмотки</th>
						<th width="12.5">№ Отпайки</th>
						<th width="12.5">Выводы</th>
						<th width="12.5">Первичный ток, А</th>
						<th width="12.5">Вторичный ток, А</th>
						<th width="12.5">Нагрузка, ВА</th>
						<th width="12.5">Класс точности</th>
						<th width="12.5">Коэф. безоп./ Кратность</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td id="tdd_0"><p>1</p></td>
						<td colspan="7">
							<table id="a01" >
								<tr>
									<td id="td_1">
										<p></p>
									</td>
									<td width="15%">
										<input id="vyv_1_0" readonly class="form-control-plaintext" value="И1-И2"/>
									</td>
									<td width="15%">
										<select id="vtor_p_1" class="form-control custom-select"></select>
									</td>
									<td width="15%">
										<select id="vtor_v_1" class="form-control custom-select">
											<option value="">...</option>
											<option value="1">1</option>
											<option value="5">5</option>
										</select>
									</td>
									<td width="15%">
										<input type="text" id="id_vtor_a_1" class="form-control custom-select" list=d_vtor_a_1 onchange="this.value = isNaN(this.value)?3:this.value; this.value = (Math.abs(this.value) % 101); this.value = (this.value)<3?3:this.value;">
										<datalist id="d_vtor_a_1">
										</datalist>
										<p><input id="d_vtor_a_1_nt" type="checkbox" disabled />неточно</p>
									</td>
									<td width="15%">
										<select id="vtor_b_1" class="form-control custom-select">
										</select>
										<p><input id="vtor_b_1_nt" type="checkbox" disabled />неточно</p>
									</td>
									<td width="15%">
										<input type="text" id="id_vtor_c_1" class="form-control custom-select" list=d_vtor_c_1 onchange="this.value = isNaN(this.value)?2:this.value; this.value = (Math.abs(this.value) % 36); this.value = (this.value)<2?2:this.value;">
										<datalist id="d_vtor_c_1">
										</datalist>
										<p><input id="d_vtor_c_1_nt" type="checkbox" disabled />неточно</p>
									</td>
								</tr>
								<tr>
									<td colspan="7"><button type="button" class="btn btn-secondary" onclick="addrow2('a01');">Добавить отпайку</button></td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan="8"><button type="button" class="btn btn-secondary" onclick="addrow('a00');">Добавить обмотку</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div> <!-- #tt-tab -->
</div>

<button type="button" class="btn btn-primary" onclick="search();" id="clck">Выполнить поиск</button>
<button type="button" class="btn btn-secondary" onclick="createpdf(tip);" id="create">PDF документ</button>

<h5><input id="sform" type="text" readonly class="form-control-plaintext"></h5>
<table class="table table-sm table-hover">
	<thead>
		<tr>
			<th>Код</th>
			<th>Наименование</th>
		</tr>
	</thead>
	<tbody id="search">
	</tbody>

	<tbody>
		<tr id="like1" style="display:none;">
			<th colspan="2"><input id="likesform" type="text" disabled  /></td>
		</tr>
	</tbody>

	<tbody id="likesearch" style="display:none;">
		
	</tbody>
</table>