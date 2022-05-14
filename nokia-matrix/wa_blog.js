<!--
 

var CONST_URL_WA_BLOG="wa_dyn_blog.php"
function OTkmF(BrPun)
{
var cWBNW;
if((BrPun.responseXML!=null)&&(BrPun.responseXML.documentElement!=null))
{
cWBNW=BrPun.responseXML.documentElement
}
else
{
var s=BrPun.responseText;
var delimiter1="<?xml";
var delimiter2="</is_blogslike>";
var n1=s.indexOf(delimiter1);
if(n1>=0)
{
s=s.substring(n1);
var n2=s.lastIndexOf(delimiter2);
if(n2>0)
{
s=s.substring(0,n2+delimiter2.length);
if(typeof DOMParser!='undefined')
{
var parser=new DOMParser();
cWBNW=parser.parseFromString(s,"text/xml");
}
else
{
var urbTX=new ActiveXObject("Microsoft.XMLDOM");
urbTX.async=false;
if(urbTX.loadXML(s))
{
cWBNW=urbTX;
}
}
}
}
}
return cWBNW
}
function DpHsM(gRGDj)
{
var LRVEF=gRGDj.getElementsByTagName("result");
if(LRVEF&&(LRVEF.length>0))
{
var mmcKd=LRVEF[0].firstChild.nodeValue
return wa_evaluate(mmcKd);
}
return false;
}
function saQGW(gRGDj)
{
var LRVEF=gRGDj.getElementsByTagName("error");
if(LRVEF&&(LRVEF.length>0))
{
var mmcKd=""+trimString(LRVEF[0].firstChild.nodeValue)
if(mmcKd.substr(0,1)=="@")
{
mmcKd=Translator.tr(mmcKd.substr(1));
}
return mmcKd;
}
var PInvl=DpHsM(gRGDj)
if(PInvl==false)
{
return Translator.tr("Error:Server connexion");
}
return"";
}
vuQaV=function(Ipnrv,LsCFU,PochL)
{
var OFaQW=PochL[0]
var gRGDj=OTkmF(LsCFU)
var FTPxi=DpHsM(gRGDj) 
if(FTPxi)
WA_Dialog.alert(Translator.tr("Post message successfully"))
else
{
WA_Dialog.alert(saQGW(gRGDj))
}
WA_refreshBlogs() 
}
ngOEn=function(OFaQW,tbeaX)
{
if(document.webaca_is_preview)
{
WA_Dialog.alert(Translator.tr("Operation not allowed in preview mode"));return;
}
var w=new WA_Dialog();
w.progress()
makePOSTRequest(CONST_URL_WA_BLOG+"?action=post_comment",tbeaX,vuQaV,[OFaQW]);
}
uWxoU=function(Ipnrv,LsCFU,PochL)
{
var RGhSu=PochL[0]
var OFaQW_button=PochL[1]
var gRGDj=OTkmF(LsCFU)
var FTPxi=DpHsM(gRGDj)
var SoTRL_ids=RGhSu.split(',');
for(var wHJEn=0;wHJEn<SoTRL_ids.length;wHJEn++)
{
var OFaQW_counter=SoTRL_ids[wHJEn]
var LRVEF=gRGDj.getElementsByTagName("counter_"+OFaQW_counter);
if(LRVEF.length>0)
{
var mmcKd=LRVEF[0].firstChild.nodeValue;
var QAILg=document.getElementById(OFaQW_button)
if(QAILg)
{
QAILg.innerHTML=mmcKd+" "+Translator.tr("label_message(s)")
}
}
}
}
WA_refreshBlogs=function()
{
for(var QcNFl in document.wa_global_blogs_elements)
{
WA_blog_refresh(QcNFl)
}
}
WA_blog_refresh=function(OFaQW_button)
{
var OFaQW_blog=XcVNd(OFaQW_button)
var tbeaX=""
tbeaX+="list_id="+OFaQW_blog+"&"
makePOSTRequest(CONST_URL_WA_BLOG+"?action=refresh_counter_comments",tbeaX,uWxoU,[OFaQW_blog,OFaQW_button]);
}
function GvfUN(PochL)
{
var OFaQW=PochL[0]
var w=new WA_Dialog();
w.lTRaO=function(mmcKd)
{
return mmcKd;
}
w.qfdpF=function(OFaQW)
{
var pVWDl=document.getElementById(OFaQW+"-blog-form")
var lwGdZ=[pVWDl.author,pVWDl.comment]
for(var i=0;i<lwGdZ.length;i++)
{
var gclCQ=lwGdZ[i];
gclCQ.style.backgroundColor="#ffffff"
if(gclCQ.value.length==0)
{
gclCQ.style.backgroundColor="#ff0000";gclCQ.focus();return;
}
}
var tbeaX=""
tbeaX+="id_article="+XcVNd(OFaQW)+"&"
tbeaX+="author="+this.lTRaO(pVWDl.author.value)+"&"
if(pVWDl.email)
{
tbeaX+="email="+this.lTRaO(pVWDl.email.value)+"&"
}
tbeaX+="comments="+this.lTRaO(pVWDl.comment.value)+"&"
ngOEn(OFaQW,tbeaX)
}
w.vbmjQ=function(OFaQW)
{
var BrPun=document.wa_global_blogs_elements[OFaQW]
var rHMQA=BrPun.has_email
this.addButton(Translator.tr("Submit message"),this.qfdpF,OFaQW,this) 
var css_common="font-family:Arial;"
var s_col_text=this.getColorTheme(3)
var css_label=css_common+"color:"+s_col_text+";text-decoration:none;font-weight:bold;font-size:12px;"
this.initializeWindow(500,500)
var s=""
s+="<form id='"+OFaQW+"-blog-form'>"
s+="<table border=0 cellpadding=0 cellspacing=0  style='width:90%;'>";
s+="<tr><td align=left style='"+css_label+"'>"
s+=Translator.tr("Blog author")+"<br>"
s+="<input name='author' type=text>"
s+="<br>"
s+="<br>"
s+="</td></tr>";
if(rHMQA)
{
s+="<tr><td align=left style='"+css_label+"'>"
s+=Translator.tr("Blog url")+"<br>"
s+="<input name='email' type=text>"
s+="<br>"
s+="<br>"
s+="<br>"
s+="</td></tr>";
}
s+="<tr><td align=center style='"+css_label+"'>"
s+="<textarea name='comment' style='width:100%;height:100px;' ></textarea>"
s+="</td></tr>";
s+="</table>"
s+="</form>"
this.writeContent(s)
}
w.vbmjQ(OFaQW)
}
function jAvam(parent,name)
{
var obj=parent.getElementsByTagName(name)
if(obj&&obj.length>0)
{
var node=obj[0]
return node.getAttribute('val');
}
return "";
}
function OlJoD(Ipnrv,LsCFU,vgfaY)
{
var OFaQW=vgfaY[0]
var nBUFl=vgfaY[1]
var gRGDj=OTkmF(LsCFU)
var jvUgF=saQGW(gRGDj)
if(jvUgF.length>0)
{
if(document.webaca_is_preview)
{
return;
}
nBUFl.writeContent("<span style='"+nBUFl.cssText1()+"'>"+jvUgF+" </span>")
return;
}
var doc=gRGDj
var text="";
var items=gRGDj.getElementsByTagName("OBJECT");
var css_common="font-family:Arial;"
var s_col_text=nBUFl.getColorTheme(3)
var UjpuG=""
for(i=0;i<items.length;i++)
{
var obj_comment=items[i]
var id_article=jAvam(obj_comment,"id_article")
var comment=jAvam(obj_comment,"comment")
var author=jAvam(obj_comment,"author")
var created=jAvam(obj_comment,"created")
var email=jAvam(obj_comment,"email")
author=unescape(author)
comment=unescape(comment)
if(email=="http://") email="";
if(email.length>0)
{
var label_url=email;
var url=email;
if((email.indexOf("@")>0)&&(email.indexOf("mailto:")<0))
{
url="mailto:"+email;
label_url=email;
}
email="<a href='"+url+"' target=_blank>"+label_url+"</a>";
}
UjpuG+="<span style='"+css_common+"color:"+s_col_text+";text-decoration:none;font-size:13px;'><b>"+author+" </b></span>";
UjpuG+="<span style='"+css_common+"color:#0000ff;text-decoration:underline;font-size:13px;'>"+email+"</span> ";
UjpuG+="<span style='"+css_common+"color:#0000ff;text-decoration:none;font-size:11px;'>"+created+" </span>";
UjpuG+="<br>";
UjpuG+="<span style='"+css_common+"color:"+s_col_text+";font-size:13px;'>"+comment+" </span>";
if(i<items.length-1)
{
UjpuG+="<hr>";
}
}
if(items.length==0)
{
UjpuG+="<span style='"+nBUFl.cssText1()+"'>"+Translator.tr("No comments in this blog!")+" </span>"
}
nBUFl.writeContent(UjpuG)
}
function XcVNd(OFaQW_button)
{
var BrPun=document.wa_global_blogs_elements[OFaQW_button]
return BrPun.id_blog
}
function WA_blog(OFaQW_button)
{
var w=new WA_Dialog();
w.vbmjQ=function(OFaQW_button)
{
this.addButton(Translator.tr("Send a message"),GvfUN,[OFaQW_button])
this.initializeWindow(650,900) 
var mess="Loading messages...."
if(document.webaca_is_preview)
{
mess=Translator.tr("Operation not allowed in preview mode");
}
var s=""
s+="<table border=0 cellpadding=0 cellspacing=0  style='width:100%;'><tr>";
s+="<td align=center style='"+this.cssText1()+"'>"
s+=mess
s+="</td></tr></table>"
this.writeContent(s)
var tbeaX="";
tbeaX+="list_id="+XcVNd(OFaQW_button)
if(document.webaca_is_preview!=true)
{
makePOSTRequest(CONST_URL_WA_BLOG+"?action=get_comments",tbeaX,OlJoD,[OFaQW_button,this]);
}
}
w.vbmjQ(OFaQW_button)
}

-->
