<?php
include("dbconfig.php");

if (isset($_REQUEST['table']) && $_REQUEST['table'] != ""){
	$connection = mysql_connect(DBSERV, DBUSER, DBPASS);
    if (!$connection) { 
      echo "Ошибка подключения к базе данных. Код ошибки: ".mysqli_connect_error(); 
      exit; 
    } 

    mysql_select_db(DBNAME) or die(mysql_error());  

    $query = "SET names UTF8";
    $result = mysql_query($query, $connection) or die(mysql_error());
	 
	$query = "show tables";
	$result = mysql_query($query, $connection) or die(mysql_error());

	$table = "";
	for ($x = 0; $x < mysql_num_rows($result); $x++){
		if ($_REQUEST['table'] == mysql_result($result, $x, 0))
			$table = mysql_result($result, $x, 0);
	}
	$ljoin = "";
	$on = "";
	$mark = "";
	if (isset($_REQUEST['ljoin']) && $_REQUEST['ljoin'] != ""){
	  for ($x = 0; $x < mysql_num_rows($result); $x++){
		if ($_REQUEST['ljoin'] == mysql_result($result, $x, 0))
			$ljoin = mysql_result($result, $x, 0);
	  }
	  if (isset($_REQUEST['on']) && $_REQUEST['on'] != ""){
		  $on = $_REQUEST['on'];
		  $on = str_replace("exit", "", $on);
		  $on = str_replace("quit", "", $on);
		  $on = str_replace(";", "", $on);
		  $on = str_replace("drop", "", $on);
		  $on = str_replace("delete", "", $on);
		  $on = str_replace("alter", "", $on);
		  $on = str_replace("_eq_", "=", $on);
		  $on = str_replace("__", " ", $on);
	  }	  
	  $ljoin = "LEFT JOIN ".$ljoin." ON ".$on;
	}
	if (isset($_REQUEST['mark']) && $_REQUEST['mark'] != ""){
	  $mark = $_REQUEST['mark'];
	  $mark = str_replace("exit", "", $mark);
	  $mark = str_replace("quit", "", $mark);
	  $mark = str_replace(";", "", $mark);
	  $mark = str_replace("drop", "", $mark);
	  $mark = str_replace("delete", "", $mark);
	  $mark = str_replace("alter", "", $mark);
	  $mark = str_replace("_eq_", "=", $mark);
	  $mark = str_replace("__", " ", $mark);
	}
	if ($table != ""){
		
      $case = "1 = 1";
		
	  if (isset($_REQUEST['case']) && $_REQUEST['case'] != ""){
		  $case = $_REQUEST['case'];
		  $case = str_replace("exit", "", $case);
		  $case = str_replace("quit", "", $case);
		  $case = str_replace(";", "", $case);
		  $case = str_replace("drop", "", $case);
		  $case = str_replace("delete", "", $case);
		  $case = str_replace("alter", "", $case);
		  $case = str_replace("_lteq_", "<=", $case);
		  $case = str_replace("_gteq_", ">=", $case);
		  $case = str_replace("_eq_", "=", $case);
		  $case = str_replace("_lt_", "<", $case);
		  $case = str_replace("_gt_", ">", $case);
		  $case = str_replace("_and_", " AND ", $case);
		  $case = str_replace("_or_", " OR ", $case);
		  $case = str_replace("_not_", " NOT ", $case);
		  $case = urldecode($case);
		  $case = str_replace("_lk_", " LIKE '%", $case);
		  if (strpos($case, "LIKE '%")>1) $case = $case."%'";
	  }	  
	  $query = "SELECT DISTINCT * FROM $table $ljoin WHERE $case LIMIT 1";
	  //echo '<h1>query='.$query.'</h1>';

/*      if (isset($_REQUEST['column0']) && $_REQUEST['column0'] == "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT * FROM $table WHERE $case";
	  } */
	  if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && isset($_REQUEST['column1']) && $_REQUEST['column1'] != "") {
		  $column0 = $_REQUEST['column0']; 
		  $column1 = $_REQUEST['column1'];
		  $query = "SELECT DISTINCT $column0,$column1 FROM $table $ljoin WHERE $case";
		  //echo '<h1>query 01='.$query.'</h1>';
	      //$result = mysql_query($query, $connection) or die(mysql_error());

	      //echo '<select>';

	      //echo '</select>';
	  }
      else{
        if (isset($_REQUEST['column0']) && $_REQUEST['column0'] != "" && $_REQUEST['column0'] != "*") {
		  $column0 = $_REQUEST['column0']; 
		  $query = "SELECT DISTINCT $column0 FROM $table $ljoin WHERE $case";
	      //$result = mysql_query($query, $connection) or die(mysql_error());

		  //echo '<select placeholder="строка">';

	      //echo '</select>';
	    }
	  }

	$query = "SELECT t1.name,t1.count,t1.prim,t2.name,t2.id,t1.able,t1.time,t1.coast,t1.id,t1.session_id,t1.manager,t1.object,t1.address,t1.mail,t1.phone,t1.inn, t3.naimen,t1.org,t1.number,t1.date_in FROM $table t1 LEFT JOIN status_prep t2 ON t1.status = t2.id LEFT JOIN nomenklatura t3 ON t1.nomenid = t3.id WHERE $case";			  
//echo $query;
	$result = mysql_query($query, $connection) or die(mysql_error());

		//$rov = mysql_fetch_array($result, MYSQL_NUM);
		$n = 0;
	  	$colors = array('red', 'orange', 'yellow', 'orange', 'orange', 'yellow', 'yellow', 'olive', 'olive', 'green', 'green', 'darkgreen');

		$text = '<table style="border-collapse:collapse;border:1px solid gray;" border="1px">';
		$text .= '<tr><td style="text-align:right;">Заказ:</td><td colspan="3">'.mysql_result($result, $n, 18).'</td><td style="text-align:right;">Дата:</td><td colspan="3">'.mysql_result($result, $n, 19).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Заказчик:</td><td colspan="7">'.mysql_result($result, $n, 17).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">ИНН:</td><td colspan="7">'.mysql_result($result, $n, 15).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Адрес:</td><td colspan="7">'.mysql_result($result, $n, 12).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Ф.И.О сотрудника:</td><td colspan="7">'.mysql_result($result, $n, 10).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">E-mail:</td><td colspan="7">'.mysql_result($result, $n, 13).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:right;">Тел.:</td><td colspan="7">'.mysql_result($result, $n, 14).'</td></tr>';
		$text .= '<tr><td style="background:lightgray;text-align:center;">Объект</td><td style="background:lightgray;text-align:center;">Заказываемая конфигурация</td><td style="background:lightgray;text-align:center;">Кол-во</td><td style="background:lightgray;text-align:center;">Комментарий</td><td style="background:lightgray;text-align:center;">Статус заказа</td><td style="background:lightgray;text-align:center;">Наличие в справочнике</td><td style="background:lightgray;text-align:center;">Тип запроса</td><td style="background:lightgray;text-align:center;">Опросный лист в pdf</td></tr>';

	for ($n = 0; $n < mysql_num_rows($result); $n++){
			
        $text .= '<tr>';
		$selab = '';
		$col = $colors[mysql_result($result, $n, 4)-1];
		$selab = (mysql_result($result, $n, 5) == 1)?'checked disabled':' disabled';
		//$selab = (mysql_result($result, $n, 5) == 1)?'checked disabled':' disabled';
		//$selab .= ($row[4] == 1)?' disabled':'';
		//$selab = (mysql_result($result, $n, 4) == 12)?' disabled':$selab;
		$selab = (mysql_result($result, $n, 5) == 1)?'Возможность':'';
		//$seltm = (mysql_result($result, $n, 6) == 1)?'checked disabled':' disabled';  
		$seltm = (mysql_result($result, $n, 6) == 1)?'Сроки':'';  
		//$selct = (mysql_result($result, $n, 7) == 1)?'checked disabled':' disabled';
		$selct = (mysql_result($result, $n, 7) == 1)?'Стоимость':'';

		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 11)).'</td>';
		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 0)).'</td>';
		$text .= '<td>'.mysql_result($result, $n, 1).'</td>';
		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 2)).'</td>';
		$text .= '<td><p style="color:'.$col.'">'.mysql_result($result, $n, 3).'</p></td>';
		$text .= '<td>'.htmlspecialchars(mysql_result($result, $n, 16)).'</td>';
		$text .= '<td class="tdsmaltxt"><p class="check">'.$selab.'<p class="check">'.$seltm.'<p class="check">'.$selct.'</td>';
		$text .= '<td><p></p></td>';
        $text .='</tr>';
	}

      $text .= '</table>';

	}
	

mysql_close($connection);	 	

//echo $text;
}
	


define('FPDF_FONTPATH','fpdf_font/');

require('fpdf.php');

//function hex2dec
//returns an associative array (keys: R,G,B) from a hex html code (e.g. #3FE5AA)
function hex2dec($couleur = "#000000"){
    $R = substr($couleur, 1, 2);
    $rouge = hexdec($R);
    $V = substr($couleur, 3, 2);
    $vert = hexdec($V);
    $B = substr($couleur, 5, 2);
    $bleu = hexdec($B);
    $tbl_couleur = array();
    $tbl_couleur['R']=$rouge;
    $tbl_couleur['G']=$vert;
    $tbl_couleur['B']=$bleu;
    return $tbl_couleur;
}

//conversion pixel -> millimeter in 72 dpi
function px2mm($px){
    return $px*25.4/72;
}

function txtentities($html){
    $trans = get_html_translation_table(HTML_ENTITIES);
    $trans = array_flip($trans);
    return strtr($html, $trans);
}
////////////////////////////////////

class PDF extends FPDF
{
//variables of html parser
protected $B;
protected $I;
protected $U;
protected $HREF;
protected $fontList;
protected $issetfont;
protected $issetcolor;

function __construct($orientation='P', $unit='mm', $format='A4')
{
    //Call parent constructor
    parent::__construct($orientation,$unit,$format);

    //Initialization
    $this->B=0;
    $this->I=0;
    $this->U=0;
    $this->HREF='';

    $this->tableborder=0;
    $this->tdbegin=false;
    $this->tdwidth=0;
    $this->tdheight=0;
    $this->tdalign="L";
    $this->tdbgcolor=false;

    $this->oldx=0;
    $this->oldy=0;

    $this->fontlist=array("arial","times","courier","helvetica","symbol");
    $this->issetfont=false;
    $this->issetcolor=false;
}

//////////////////////////////////////
//html parser

function WriteHTML($html)
{
    $html=strip_tags($html,"<b><u><i><a><img><p><br><strong><em><font><tr><blockquote><hr><td><tr><table><sup>"); //remove all unsupported tags
    $html=str_replace("\n",'',$html); //replace carriage returns with spaces
    $html=str_replace("\t",'',$html); //replace carriage returns with spaces
    $a=preg_split('/<(.*)>/U',$html,-1,PREG_SPLIT_DELIM_CAPTURE); //explode the string
    foreach($a as $i=>$e)
    {
        if($i%2==0)
        {
            //Text
            if($this->HREF)
                $this->PutLink($this->HREF,$e);
            elseif($this->tdbegin) {
                if(trim($e)!='' && $e!="&nbsp;") {
                    $this->Cell($this->tdwidth,$this->tdheight,$e,$this->tableborder,'',$this->tdalign,$this->tdbgcolor);
                }
                elseif($e=="&nbsp;") {
                    $this->Cell($this->tdwidth,$this->tdheight,'',$this->tableborder,'',$this->tdalign,$this->tdbgcolor);
                }
            }
            else
                $this->Write(5,stripslashes(txtentities($e)));
        }
        else
        {
            //Tag
            if($e[0]=='/')
                $this->CloseTag(strtoupper(substr($e,1)));
            else
            {
                //Extract attributes
                $a2=explode(' ',$e);
                $tag=strtoupper(array_shift($a2));
                $attr=array();
                foreach($a2 as $v)
                {
                    if(preg_match('/([^=]*)=["\']?([^"\']*)/',$v,$a3))
                        $attr[strtoupper($a3[1])]=$a3[2];
                }
                $this->OpenTag($tag,$attr);
            }
        }
    }
}

function OpenTag($tag, $attr)
{
    //Opening tag
    switch($tag){

        case 'SUP':
            if( !empty($attr['SUP']) ) {    
                //Set current font to 6pt     
                $this->SetFont('','',6);
                //Start 125cm plus width of cell to the right of left margin         
                //Superscript "1" 
                $this->Cell(2,2,$attr['SUP'],0,0,'L');
            }
            break;

        case 'TABLE': // TABLE-BEGIN
            if( !empty($attr['BORDER']) ) $this->tableborder=$attr['BORDER'];
            else $this->tableborder=0;
            break;
        case 'TR': //TR-BEGIN
            break;
        case 'TD': // TD-BEGIN
            if( !empty($attr['WIDTH']) ) $this->tdwidth=($attr['WIDTH']/4);
            else $this->tdwidth=40; // Set to your own width if you need bigger fixed cells
            if( !empty($attr['HEIGHT']) ) $this->tdheight=($attr['HEIGHT']/6);
            else $this->tdheight=6; // Set to your own height if you need bigger fixed cells
            if( !empty($attr['ALIGN']) ) {
                $align=$attr['ALIGN'];        
                if($align=='LEFT') $this->tdalign='L';
                if($align=='CENTER') $this->tdalign='C';
                if($align=='RIGHT') $this->tdalign='R';
            }
            else $this->tdalign='L'; // Set to your own
            if( !empty($attr['BGCOLOR']) ) {
                $coul=hex2dec($attr['BGCOLOR']);
                    $this->SetFillColor($coul['R'],$coul['G'],$coul['B']);
                    $this->tdbgcolor=true;
                }
            $this->tdbegin=true;
            break;

        case 'HR':
            if( !empty($attr['WIDTH']) )
                $Width = $attr['WIDTH'];
            else
                $Width = $this->w - $this->lMargin-$this->rMargin;
            $x = $this->GetX();
            $y = $this->GetY();
            $this->SetLineWidth(0.2);
            $this->Line($x,$y,$x+$Width,$y);
            $this->SetLineWidth(0.2);
            $this->Ln(1);
            break;
        case 'STRONG':
            $this->SetStyle('B',true);
            break;
        case 'EM':
            $this->SetStyle('I',true);
            break;
        case 'B':
        case 'I':
        case 'U':
            $this->SetStyle($tag,true);
            break;
        case 'A':
            $this->HREF=$attr['HREF'];
            break;
        case 'IMG':
            if(isset($attr['SRC']) && (isset($attr['WIDTH']) || isset($attr['HEIGHT']))) {
                if(!isset($attr['WIDTH']))
                    $attr['WIDTH'] = 0;
                if(!isset($attr['HEIGHT']))
                    $attr['HEIGHT'] = 0;
                $this->Image($attr['SRC'], $this->GetX(), $this->GetY(), px2mm($attr['WIDTH']), px2mm($attr['HEIGHT']));
            }
            break;
        case 'BLOCKQUOTE':
        case 'BR':
            $this->Ln(5);
            break;
        case 'P':
            $this->Ln(10);
            break;
        case 'FONT':
            if (isset($attr['COLOR']) && $attr['COLOR']!='') {
                $coul=hex2dec($attr['COLOR']);
                $this->SetTextColor($coul['R'],$coul['G'],$coul['B']);
                $this->issetcolor=true;
            }
            if (isset($attr['FACE']) && in_array(strtolower($attr['FACE']), $this->fontlist)) {
                $this->SetFont(strtolower($attr['FACE']));
                $this->issetfont=true;
            }
            if (isset($attr['FACE']) && in_array(strtolower($attr['FACE']), $this->fontlist) && isset($attr['SIZE']) && $attr['SIZE']!='') {
                $this->SetFont(strtolower($attr['FACE']),'',$attr['SIZE']);
                $this->issetfont=true;
            }
            break;
    }
}

function CloseTag($tag)
{
    //Closing tag
    if($tag=='SUP') {
    }

    if($tag=='TD') { // TD-END
        $this->tdbegin=false;
        $this->tdwidth=0;
        $this->tdheight=0;
        $this->tdalign="L";
        $this->tdbgcolor=false;
    }
    if($tag=='TR') { // TR-END
        $this->Ln();
    }
    if($tag=='TABLE') { // TABLE-END
        $this->tableborder=0;
    }

    if($tag=='STRONG')
        $tag='B';
    if($tag=='EM')
        $tag='I';
    if($tag=='B' || $tag=='I' || $tag=='U')
        $this->SetStyle($tag,false);
    if($tag=='A')
        $this->HREF='';
    if($tag=='FONT'){
        if ($this->issetcolor==true) {
            $this->SetTextColor(0);
        }
        if ($this->issetfont) {
            $this->SetFont('arial');
            $this->issetfont=false;
        }
    }
}

function SetStyle($tag, $enable)
{
    //Modify style and select corresponding font
    $this->$tag+=($enable ? 1 : -1);
    $style='';
    foreach(array('B','I','U') as $s) {
        if($this->$s>0)
            $style.=$s;
    }
    $this->SetFont('',$style);
}

function PutLink($URL, $txt)
{
    //Put a hyperlink
    $this->SetTextColor(0,0,255);
    $this->SetStyle('U',true);
    $this->Write(5,$txt,$URL);
    $this->SetStyle('U',false);
    $this->SetTextColor(0);
}

}//end of class


$html='You can now easily print text mixing different styles: <b>bold</b>, <i>italic</i>, <u>underlined</u>, or <b><i><u>all at once</u></i></b>!<br><br>You can also insert links on text, such as <a href="http://www.fpdf.org">www.fpdf.org</a>, or on an image: click on the logo.';

//$pdf=new FPDF('P','mm','A4');
$pdf=new PDF();
$pdf->AddPage();
//$pdf->SetFont('Arial','B',14);
$pdf->AddFont('ArialMT','','arialmt.php');
$pdf->SetFont('ArialMT','',10);
//$pdf->Cell(40,10,'Hello World!');
$pdf->SetFontSize(14);
//$pdf->WriteHTML($html);
//

$pdf->WriteHTML($text);

//$text = iconv('utf-8', 'windows-1251', $text);

$pdf->Output();

?>