<!--

function WA_dynmenuBg(OFaQW)
{
var expub=document.wa_global_menu_declaration[OFaQW]
WA_bg(expub.id,expub.root_lx,expub.root_ly,expub.root_corner,expub.root_border,expub.root_col_border,[expub.root_bg],false,0)
}
function over_menu_off(p_obj,id_menu)
{
olPwh()
var BrPun_menu_root=document.wa_root_obj_menu;
var BrPun_current_menu=BrPun_menu_root.search(id_menu)
var KJSqI=p_obj.offsetParent.offsetParent;
if(KJSqI)
{
var BrPun_menu=KJSqI.BrPun_menu
BrPun_menu.DhHBE=BrPun_current_menu
vTXvq(KJSqI.cur_menu)
mFGxC(p_obj,true)
}
}
function WA_dynmenu_onmouseover_off(p_obj,IUebH)
{
hide_menu();
var DpOmH=document.wa_global_menu_declaration[IUebH]
p_obj.obj_menu=new Numld(IUebH,DpOmH,null,0)
var BrPun_menu=p_obj.obj_menu
document.wa_root_obj_menu=BrPun_menu
mFGxC(p_obj,true)
}
function WA_dynmenu_onmouseout(p_obj)
{
clearTimeout(window.wa_dynmenu_timer);
window.wa_dynmenu_timer=wa_timeout("hide_menu()",1000);
mFGxC(p_obj,false)
}
function over_menu(p_obj,id_menu,YkOpm)
{
var BrPun_menu_root=document.wa_root_obj_menu;
var BrPun_menu=BrPun_menu_root.search(id_menu)
olPwh()
var dyn_cont=document.getElementById('dynmenu-container');
var PxCvj=html_findPos(p_obj)
if(YkOpm==false)
{
var RUBvJ=p_obj.offsetParent.offsetParent;
vTXvq(RUBvJ.cur_menu)
}
var x2=0;
var y2=PxCvj.y;
if(YkOpm)
{
x2=YkOpm.x
y2=YkOpm.y
}
var par_menu=p_obj.offsetParent.offsetParent;
if(par_menu)
{
var NPBZO=par_menu.BrPun_menu
if(NPBZO)
{
var PxCvj_par=NPBZO.PMLdW
x2=PxCvj_par.x+NPBZO.PiVps()-3
}
}

var vSNeQ=(x2+BrPun_menu.PiVps()+40-getWindowScroll().x)-getWindowSize().width
if(vSNeQ>0)
{
x2=x2-vSNeQ 
}
var UReEu_dec=(y2+BrPun_menu.fuLQd()+15-getWindowScroll().y)-getWindowSize().height
if(UReEu_dec>0)
{
y2=y2-UReEu_dec
y2=Math.max(0,y2)
}
var menu=document.getElementById(id_menu);
menu.BrPun_menu=BrPun_menu
BrPun_menu.PMLdW=new Point(x2,y2)
if(par_menu!=undefined)
{
wZUYu(par_menu,menu)
}
html_SetVisibility(menu,true)
html_SetPosition(menu,x2,y2)
BrPun_menu.qibgP()
mFGxC(p_obj,true)
}
function wZUYu(KDCks,KJSqI)
{
KDCks.cur_menu=KJSqI
var NPBZO=KDCks.BrPun_menu
if(NPBZO)
{
NPBZO.DhHBE=KJSqI.BrPun_menu
}
}
function WA_dynmenu_onmouseover(p_obj,OFaQW,DkrUl,YkOpm)
{
var expub=document.wa_global_menu_declaration[OFaQW]
var id_menu="dynmenu-id-var"
var dyn_cont=document.getElementById('dynmenu-container');
var XUOGQ=new Array();
for(var n=0;n<DkrUl.length-1;n++)
{
XUOGQ.push(DkrUl[n])
}
var ahVTH=DkrUl[DkrUl.length-1]
DkrUl=XUOGQ 
p_obj.obj_menu=new Numld(id_menu,expub,DkrUl,null,ahVTH)
var BrPun_menu=p_obj.obj_menu
dyn_cont.innerHTML=BrPun_menu.div_menu(true)
document.wa_root_obj_menu=BrPun_menu
over_menu(p_obj,id_menu,YkOpm)
}
function olPwh()
{
clearTimeout(window.wa_dynmenu_timer);
window.wa_dynmenu_timer=false;
}
function uGpJj(expub,PxCvj)
{
var UReEu=0
for(var i=0;i<expub.root_sizes.length;i++)
{
var JKLvk=expub.root_sizes[i]
UReEu+=JKLvk
if(PxCvj<UReEu)
{
return i;
}
}
return expub.root_sizes.length;
}
function mFGxC(p_obj,b_over)
{
var cNIvR=p_obj.offsetParent.offsetParent
var BrPun_menu=cNIvR.BrPun_menu
var RKVbH_i_root=false;
if(!BrPun_menu)
{
RKVbH_i_root=true;
BrPun_menu=document.wa_root_obj_menu;
}
if(!BrPun_menu) return;
var expub=BrPun_menu.expub
var NlFBm;
var Pding=false;
var jtpik=p_obj
var ogKiw=p_obj.getElementsByTagName("A")
if(ogKiw.length==1)
{
jtpik=ogKiw[0]
}
if(b_over)
{
NlFBm=(RKVbH_i_root)?expub.root_col_text_over:expub.sub_col_text_over
Pding=(RKVbH_i_root)?expub.root_text_u_over:expub.sub_text_u_over
}
else
{
NlFBm=(RKVbH_i_root)?expub.root_col_text:expub.sub_col_text
Pding=(RKVbH_i_root)?expub.root_text_u:expub.sub_text_u
}
jtpik.style.color=NlFBm
jtpik.style.textDecoration=(Pding)?"underline":"none"
if(RKVbH_i_root)
{
WA_bg_menu(expub.id)
if(b_over)
{
var gclCQ=document.getElementById(expub.id)
if(!gclCQ)return;
var c=gclCQ.getContext('2d');
c.fillStyle=expub.root_col_bg_over
c.beginPath()
var PxCvj=html_findPos(p_obj)
var JUcuk=new Rect(0,0,0,0)
if(expub.root_vertical==false)
{
var NEQZQ=html_findPos(cNIvR)
var IrjGk=uGpJj(expub,PxCvj.x-NEQZQ.x+10) 
JUcuk.x=PxCvj.x-NEQZQ.x
JUcuk.y=0
JUcuk.width=p_obj.offsetWidth
JUcuk.height=expub.root_ly
if(IrjGk==0)
{
JUcuk.x+=expub.root_corner
JUcuk.width-=expub.root_corner
}
if(IrjGk==expub.root_sizes.length)
{
JUcuk.width-=expub.root_corner
}
}
else
{
var NEQZQ=html_findPos(cNIvR)
var xiuPf=(PxCvj.y-NEQZQ.y)+p_obj.offsetHeight/2 
var UReEu=0;
JUcuk.x=0
JUcuk.width=p_obj.offsetWidth
for(var i=0;i<expub.root_sizes.length;i++)
{
var JKLvk=expub.root_sizes[i]
UReEu+=JKLvk
if(xiuPf<UReEu)
{
JUcuk.y=UReEu-JKLvk
JUcuk.height=JKLvk
break
}
}
if(JUcuk.height==0)
{
JUcuk.y=UReEu
JUcuk.height=expub.root_ly-UReEu
}
{
JUcuk.x+=expub.root_corner
JUcuk.width-=2*expub.root_corner
}
}
c.fillRect(JUcuk.x+1,JUcuk.y+1,JUcuk.width-2,JUcuk.height-2)
}
}
BrPun_menu.laxlm()
}
function Numld(id_menu,expub,DkrUl,Nwduq,vqFiS)
{
this.toHtml=function()
{
return this.Qvaxo.toHtml()
}
this.search=function(OFaQW)
{
if(this.ogKiw)
for(var i=0;i<this.ogKiw.length;i++)
{
var aIeIN=this.ogKiw[i]
var vteuC=aIeIN.search(OFaQW)
if(vteuC)return vteuC;
}
if(this.IUebH==OFaQW)return this;
return false;
}
this.TAXOc=function()
{
this.Qvaxo.registerDynamicCanvas()
}
this.laxlm=function()
{
this.Qvaxo.draw()
}
this.qibgP=function()
{
this.TAXOc() 
this.Qvaxo.setRect(0,0,this.PiVps(),this.fuLQd())
}
this.fuLQd=function()
{
return this.ogKiw.length*this.lCaGm_sub_menu
}
this.PiVps=function()
{
var w2=150;
var RKVbH_hasChild=false;
if(!this.nmntc)
{
var gStPa=w2;
for(var i=0;i<this.ogKiw.length;i++)
{
var IaDuK=this.ogKiw[i]
if(IaDuK.sFCqQ())RKVbH_hasChild=true
var OFaQW_sub_menu=(this.IUebH+"-submenu"+i)
var cfBWe_menu=document.getElementById(OFaQW_sub_menu);
if(cfBWe_menu)
{
if(isMSIE())
{
gStPa=Math.max(gStPa,cfBWe_menu.clientWidth)
}
else
{
gStPa=Math.max(gStPa,cfBWe_menu.offsetWidth)
}
}
}
if(isMSIE())
{

}
gStPa=(gStPa+6)
for(var i=0;i<this.ogKiw.length;i++)
{
var OFaQW_sub_menu=(this.IUebH+"-submenu"+i)
var cfBWe_menu=document.getElementById(OFaQW_sub_menu);
if(cfBWe_menu)
{
cfBWe_menu.style.width=gStPa+"px";
}
}
if(RKVbH_hasChild)
{
gStPa+=10
}
if(this.htTPL=="right")
{
gStPa+=4
}
this.nmntc=gStPa
w2=gStPa 
var KJSqI=document.getElementById(this.IUebH);
KJSqI.style.width=gStPa+"px";
}
else
{
w2=this.nmntc
}
return w2
}
this.sFCqQ=function()
{
return(this.cMsfX)?true:false;
}
this.div_menu=function(b_visible,tHBCv)
{
var param_menu=this.cMsfX
var design=this.expub;
if(tHBCv==undefined)tHBCv=0;
var LtmYI=this.LtmYI
var UjpuG="";
var swtQu=400
if(isMSIE())
{
swtQu=this.vqFiS
}
UjpuG+="<div id=\""+this.IUebH+"\" ";
UjpuG+="style=\"";
if(b_visible==false)
{
UjpuG+="visibility:hidden;";
}
UjpuG+="position:absolute;";
UjpuG+="width:"+swtQu+"px;";
UjpuG+="z-index:"+(tHBCv*10);
UjpuG+="\">";
UjpuG+=this.Qvaxo.toHtml()
UjpuG+="<div style='position:absolute;left:0px;top:0px;";
UjpuG+="z-index:100;" 
UjpuG+="'>";
LtmYI+="position:relative;"
LtmYI+="height:"+this.lCaGm_sub_menu+"px;";
LtmYI+="line-height:"+this.lCaGm_sub_menu+"px;"
LtmYI+="cursor:"+this.lCaGm_sub_menu+"px;"
if(this.htTPL=="center")
{
LtmYI+="text-align:center;";
}
else
{
LtmYI+="text-align:"+this.htTPL+";";
LtmYI+="padding-"+this.htTPL+":4px;";
}
this.ogKiw=new Array()
for(var i=0;i<param_menu.length;i++)
{
var OFaQW_sub_menu=this.IUebH+"-"+i
var o=param_menu[i];
var Nwduq=o[0]
var ahVTH=Nwduq[3] 
this.ogKiw.push(new Numld(OFaQW_sub_menu,design,o[1],Nwduq,ahVTH))
}
for(var i=0;i<param_menu.length;i++)
{
var IaDuK=this.ogKiw[i]
var info=IaDuK.Nwduq
var bIZZV=info[0] 
var BLcqR=info[1]
var asaYJ=info[2]
if(BLcqR.length>0)
{
UjpuG+="<a href='"+BLcqR+"' style='text-decoration:none;cursor:pointer;' ";
if(asaYJ.length>0)UjpuG+="target="+asaYJ;
UjpuG+=">";
}
UjpuG+="<div id='"+(this.IUebH+"-submenu"+i)+"' style='"+LtmYI+"' "
if(IaDuK.cMsfX)
{
UjpuG+="onmouseover=\u0022javascript:over_menu(this,'"+IaDuK.IUebH+"',false)\u0022 ";
}
else
{
UjpuG+="onmouseover=\u0022javascript:over_menu_off(this,'"+IaDuK.IUebH+"')\u0022 ";
}
UjpuG+="onmouseout=\u0022javascript:WA_dynmenu_onmouseout(this)\u0022 ";
UjpuG+=">";
UjpuG+=bIZZV;
UjpuG+="</div>";
if(BLcqR.length>0)
{
UjpuG+="</a>";
}
}
UjpuG+="</div>";
UjpuG+="</div>";
for(var i=0;i<param_menu.length;i++)
{
var IaDuK=this.ogKiw[i]
if(IaDuK.cMsfX)
{
UjpuG+=IaDuK.div_menu(false,tHBCv+1)
}
}
return UjpuG;
}

this.cMsfX=DkrUl
this.vqFiS=vqFiS
this.Nwduq=Nwduq
this.expub=expub
this.JKLvk_border=1
this.NlFBm_border=expub.sub_col_border
this.LtmYI=expub.sub_style_text
this.djoaa=expub.sub_col_text
this.htTPL=expub.sub_align_text
this.lCaGm_sub_menu=expub.sub_menu_height
this.IUebH=id_menu
this.Qvaxo=new WA_GraphicElement(id_menu+"-bg",50,expub.sub_menu_shadow)
this.Qvaxo.BrPun_menu=this;
this.Qvaxo.expub=expub;
this.Qvaxo.draw=function()
{
var BrPun=this.BrPun_menu
var expub=this.expub
var hBJkw=this.rect().width
var jItZb=this.rect().height
var JgmYG=expub.sub_col_bg.col1
if(expub.sub_col_bg.has_gradient)
{
var IoJJj=expub.sub_col_bg
var MwnNT=IoJJj.pt1.x*hBJkw/100
var XQgfx=IoJJj.pt1.y*jItZb/100
var uHDnl=IoJJj.pt2.x*hBJkw/100
var mtAkU=IoJJj.pt2.y*jItZb/100
JgmYG="("+MwnNT+";"+XQgfx+";"+uHDnl+";"+mtAkU+";"+IoJJj.col1+";"+IoJJj.col2+")";
}
WA_bg(this.canvasId(),hBJkw,jItZb,expub.sub_menu_corner,1,BrPun.NlFBm_border,[JgmYG],this.shadow(),0)
var el=document.getElementById(this.canvasId())
if(!el)return;
var c=el.getContext('2d');
c.fillStyle=BrPun.djoaa;
var w=BrPun.PiVps()
var h=BrPun.lCaGm_sub_menu
var VkLfh=8
var GxOqg=6
var YgGTY=Math.max(2,expub.sub_corner-2);
var NqNKD=0;
var ItvNA=0;
if(this.shadow())
{
NqNKD+=6;
ItvNA+=6;
}
var UReEu=ItvNA+Math.round((h-VkLfh)/2);
var nafGT=NqNKD+w-GxOqg-4;
c.shadowOffsetX=0;
c.shadowOffsetY=0;
c.shadowBlur=0;
for(var i=0;i<BrPun.ogKiw.length;i++)
{
var cfBWe=BrPun.ogKiw[i]
if(BrPun.DhHBE==cfBWe) 
{
var uHDnl=nafGT-30
c.fillStyle=expub.sub_col_bg_over
c.beginPath()
c.fillRect(NqNKD+YgGTY/2,ItvNA+YgGTY/2,w-YgGTY,BrPun.lCaGm_sub_menu-YgGTY)
}
if(cfBWe.sFCqQ())
{
c.fillStyle=BrPun.djoaa;
c.beginPath()
c.moveTo(nafGT,UReEu);
c.lineTo(nafGT+GxOqg,UReEu+VkLfh/2);
c.lineTo(nafGT,UReEu+VkLfh);
c.lineTo(nafGT,UReEu);
c.fill()
}
ItvNA+=BrPun.lCaGm_sub_menu
UReEu+=BrPun.lCaGm_sub_menu
}
}
}
function vTXvq(KJSqI)
{
if(KJSqI==undefined) return
if(KJSqI.cur_menu!=undefined)
{
vTXvq(KJSqI.cur_menu)
}
html_SetVisibility(KJSqI,false)
}
function hide_menu()
{
olPwh()
var QrWic=document.getElementById('dynmenu-container');
QrWic.innerHTML=""
}

-->
