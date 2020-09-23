<?php

define('FPDF_FONTPATH','fpdf_font/');

require('fpdf.php');

//echo $_REQUEST['data'];
//function hex2dec
//returns an associative array (keys: R,G,B) from a hex html code (e.g. #3FE5AA)
function hex2dec($couleur){
    $R = '00';
    $V = '00';
    $B = '00';
    if (strlen($couleur) == 7){
        $R = substr($couleur, 1, 2);
        $V = substr($couleur, 3, 2);
        $B = substr($couleur, 5, 2);
    }
    if (strlen($couleur) == 4){
        $R = substr($couleur, 1, 1);
        $V = substr($couleur, 2, 1);
        $B = substr($couleur, 3, 1);
    }
    $rouge = hexdec($R);
    $vert = hexdec($V);
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

function pers2mm($px){
    return $px*2;
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
protected $tdborder;
public $code;

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
	$this->tdborder=0; //my border

    $this->oldx=0;
    $this->oldy=0;

    $this->fontlist=array("arial","times","courier","helvetica","symbol");
    $this->issetfont=false;
    $this->issetcolor=false;
	$this->code='';
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
                //if(trim($e)!='') {
					//$this->SetLineWidth(0.1);
					//$this->SetDrawColor(128, 128, 128);
                    //$this->Cell($this->tdwidth,$this->tdheight,$e,$this->tableborder,'',$this->tdalign,$this->tdbgcolor);
                    //$this->Cell($this->tdwidth,$this->tdheight,$e,$this->tableborder,0,$this->tdalign,$this->tdbgcolor);
					//$this->MultiCell($this->tdwidth,$this->tdheight,$e,$this->tdborder,$this->tdalign,$this->tdbgcolor);
                    $this->Cell($this->tdwidth,$this->tdheight,$e,$this->tdborder,0,$this->tdalign,$this->tdbgcolor);
                }
                elseif($e=="&nbsp;" && trim($e)=='') {
                //elseif(trim($e)=='') {
					//$this->SetLineWidth(0.1);
					//$this->SetDrawColor(128, 128, 128);
                    //$this->Cell($this->tdwidth,$this->tdheight,'',$this->tableborder,'',$this->tdalign,$this->tdbgcolor);
                    $this->Cell($this->tdwidth,$this->tdheight,' ',$this->tdborder,0,$this->tdalign,$this->tdbgcolor);
                    //$this->Cell($this->tdwidth,$this->tdheight,'',1,0,$this->tdalign,$this->tdbgcolor);
                }
                    //$this->Cell($this->tdwidth,$this->tdheight,$e,$this->tdborder,0,$this->tdalign,$this->tdbgcolor);
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
			if( !empty($attr['BORDER']) ) {$this->tableborder=(strpos($attr['BORDER'],'px'))?px2mm($attr['BORDER']):$attr['BORDER']; $this->tableborder=(strpos($attr['BORDER'],'%'))?pers2mm($attr['BORDER']):$attr['BORDER'];}
			else $this->tableborder=0;
            break;
        case 'TR': //TR-BEGIN
            if( !empty($attr['TOP']) ) $this->SetY = (strpos($attr['TOP'],'px'))?px2mm($attr['TOP']):$attr['TOP'];
            if( !empty($attr['LEFT']) ) $this->SetX = (strpos($attr['LEFT'],'px'))?px2mm($attr['LEFT']):$attr['LEFT'];
            if( !empty($attr['DTOP']) ) $this->SetY = $this->GetY + ((strpos($attr['DTOP'],'px'))?px2mm($attr['DTOP']):$attr['DTOP']);
            if( !empty($attr['DLEFT']) ) $this->SetX = $this->GetX + ((strpos($attr['DLEFT'],'px'))?px2mm($attr['DLEFT']):$attr['DLEFT']);
            break;
        case 'TD': // TD-BEGIN
            if( !empty($attr['WIDTH']) ) {$this->tdwidth=(strpos($attr['WIDTH'],'px'))?px2mm($attr['WIDTH']):$attr['WIDTH']; $this->tdwidth=(strpos($attr['WIDTH'],'%'))?pers2mm($attr['WIDTH']):$attr['WIDTH'];}
            else $this->tdwidth=40; // Set to your own width if you need bigger fixed cells
            if( !empty($attr['HEIGHT']) ) $this->tdheight=($attr['HEIGHT']);
            else $this->tdheight=6; // Set to your own height if you need bigger fixed cells
			if( !empty($attr['BORDER']) ) {
				$this->tdborder=$attr['BORDER'];
			}
			else $this->tdborder=0;
			if( !empty($attr['BORDERWIDTH']) ) {
				$this->SetLineWidth((strpos($attr['BORDERWIDTH'],'px'))?px2mm($attr['BORDERWIDTH']):$attr['BORDERWIDTH']); 
				$this->SetLineWidth((strpos($attr['BORDERWIDTH'],'%'))?pers2mm($attr['BORDERWIDTH']):$attr['BORDERWIDTH']);
			}
			else $this->tdborder=0;
            if( !empty($attr['BORDERCOLOR']) ) {
                $col=hex2dec($attr['BORDERCOLOR']);
                //$this->SetFillColor($col['R'],$col['G'],$col['B']);
				$this->SetDrawColor($col['R'],$col['G'],$col['B']);
				$this->tdbordercol=true;
			}
            else $this->tdbordercol=false; // Set to your own width if you need bigger fixed cells
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
				//$this->SetDrawColor($coul['R'],$coul['G'],$coul['B']);
                $this->tdbgcolor=true;
            }
            else $this->tdbgcolor=false; // Set to your own width if you need bigger fixed cells
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
            if (isset($attr['SIZE']) && $attr['SIZE']!='') {
                $this->SetFont('','',$attr['SIZE']);
                //$this->issetfont=true;
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

//$fpdf=new FPDF('P','mm','A4');
$pdf=new PDF();

$pdf->AddPage();
//$fpdf->AddPage();

//$pdf->SetFont('Arial','B',14);

//$pdf->AddFont('ArialMT','','arialmt.php');
$pdf->AddFont('Calibri','','calibri.php');
$pdf->AddFont('Calibri','B','calibrib.php');
$pdf->AddFont('Calibri','I','calibrii.php');
//$fpdf->AddFont('Calibri','','calibri.php');

//$pdf->SetFont('ArialMT','',10);
$pdf->SetFont('Calibri','',10);
//$fpdf->SetFont('Calibri','',10);

//$pdf->Cell(40,10,'Hello World!');
//$pdf->SetFontSize(14);
//$pdf->WriteHTML($html);
//


if (isset($_REQUEST['data']) && $_REQUEST['data'] != "" && $_REQUEST['data'] != "''"){



$text = $_REQUEST['data'];

$text = urldecode($text);

//$pdf->Image("../wp-content/uploads/2017/11/ntz-volhov2.png", 12, 6, 12, 12);	
$pdf->WriteHTML($text);
//$pdf->Image("../wp-content/uploads/2017/11/ntz-volhov2.png");

//$text = iconv('utf-8', 'windows-1251', $text);

$pdf->Output();
//echo $pdf->code;
}
else{

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
	$mark = "";
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
		  
	  //echo $table;	  
		  
	  $query = "SELECT data FROM $table WHERE $case LIMIT 1";

        //echo $query;
        
	  $result = mysql_query($query, $connection) or die(mysql_error());

	  $text = mysql_result($result, 0, 0);
	  
	  //echo $text;
	  
        $text = urldecode($text);
	
        //$pdf->Image("../wp-content/uploads/2017/11/ntz-volhov2.png", 12, 6, 12, 12);	
        $pdf->WriteHTML($text);

        //$text = iconv('utf-8', 'windows-1251', $text);

        $pdf->Output();
		//echo $pdf->code;
	  }	  


	}
	

  mysql_close($connection);	 	

  //echo $text;
  }

}

?>