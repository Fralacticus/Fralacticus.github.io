<!--
 
function TTxIu(c,p_x,p_y,lx,b_right)
{
var factor=lx/100;
var yAxe=Math.round(50*factor);
var x1=Math.round(80*factor);var y1=0*factor;var x2=Math.round(55*factor);var y2=Math.round(25*factor);
var x3=Math.round(47*factor);var y3=Math.round(17*factor);var x4=Math.round(60*factor);var y4=Math.round(5*factor);
var x5=Math.round(22*factor);var y5=y4;
if(b_right==false)
{
x1=lx-x1;x2=lx-x2;x3=lx-x3;x4=lx-x4;x5=lx-x5;
}
c.beginPath()
c.moveTo(p_x+x1,p_y+yAxe-y1);c.lineTo(p_x+x2,p_y+yAxe-y2);c.lineTo(p_x+x3,p_y+yAxe-y3);c.lineTo(p_x+x4,p_y+yAxe-y4);c.lineTo(p_x+x5,p_y+yAxe-y5);
c.lineTo(p_x+x5,p_y+yAxe+y5);c.lineTo(p_x+x4,p_y+yAxe+y4);
c.lineTo(p_x+x3,p_y+yAxe+y3);c.lineTo(p_x+x2,p_y+yAxe+y2);c.lineTo(p_x+x1,p_y+yAxe+y1);
c.fill()
}
function uglrk(c,x,y,lx,size,epais)
{
x=Math.round(x+(lx-size)/2);y=Math.round(y+(lx-size)/2);c.fillRect(x,y+(size-epais)/2,size,epais);c.fillRect(x+(size-epais)/2,y,epais,size);
}
function UHGOJ(c,x,y,lx,col)
{
var old_fill=c.fillStyle;
var size=16;x=Math.round(x+(lx-size)/2);y=Math.round(y+(lx-size)/2);var x2=9;
c.beginPath();c.moveTo(x+x2,y);c.lineTo(x+x2+6,y+7);c.lineTo(x+x2,y+14);c.fill();
var grad=c.createLinearGradient(x,y,x+8,y);
var pFEYw=new RGBColor(col)
pFEYw.a=0
grad.addColorStop(1,col);grad.addColorStop(0,pFEYw.toRGB());
c.fillStyle=grad;
c.beginPath();c.rect(x,y,8,14);c.fill()
c.fillStyle=old_fill
}
function aacMv(c,x,y,lx,col)
{
var old_fill=c.fillStyle;
var size=16;
x=Math.round(x+(lx-size)/2);
y=Math.round(y+(lx-size)/2);
c.fillStyle=col;
c.beginPath();
c.rect(x,y,size,size);
c.fill()
c.fillStyle=old_fill
}
function rwInv(name,mmcKd,JKLvk)
{
var n=mmcKd.indexOf("%")
if(n>-1)
{
mmcKd=wa_evaluate(mmcKd.replace("%","/100"))
return Math.round(mmcKd*JKLvk)
}
mmcKd=parseFloat(mmcKd)
return Math.round(mmcKd)
}
function LPDuo(JUcuk,hBJkw,jItZb)
{
var x=rwInv("x",JUcuk.x,hBJkw)
var y=rwInv("y",JUcuk.y,jItZb)
if(JUcuk.x.indexOf("%")==-1)hBJkw=hBJkw-x
if(JUcuk.y.indexOf("%")==-1)jItZb=jItZb-y 

var lx=rwInv("lx",JUcuk.lx,hBJkw)
var ly=rwInv("ly",JUcuk.ly,jItZb)
return new Rect(x,y,lx,ly)
}
function WA_change_tool_button(OFaQW,wHJEn,over)
{
var BrPun=XwEDG(OFaQW)
if(BrPun&&BrPun.sDtFF)
{
var JesRW=BrPun.sDtFF[wHJEn]
if(JesRW)
{
JesRW.rpqPi=over
JesRW.draw()
}
}
}
function WA_toolbar_button(id,lx,ly,type,col,shadow)
{
var el=document.getElementById(id)
var c=el.getContext('2d');
c.clearRect(0,0,lx,ly) 
var current_col=col;
c.fillStyle=current_col;
if(type=="<")
{
TTxIu(c,0,0,lx,false)
}
if(type==">")
{
TTxIu(c,0,0,lx,true)
}
if(type=="down")
{
c.rotate(-Math.PI/2);c.translate(-lx,0);
TTxIu(c,0,0,lx,false)
c.translate(lx,0);c.rotate(Math.PI/2);
}
if(type=="up")
{
c.rotate(Math.PI/2);c.translate(0,-ly);
TTxIu(c,0,0,lx,false);
c.translate(0,ly);c.rotate(-Math.PI/2);
}
if(type=="+")
{
uglrk(c,0,0,lx,12,4)
}
if(type=="diapo")
{
UHGOJ(c,0,0,lx,current_col)
}
if(type=="stop")
{
aacMv(c,0,0,lx,current_col)
}
}
hmLCY.prototype=new Tween();
hmLCY.prototype.constructor=Tween;
hmLCY.superclass=Tween.prototype;
function hmLCY(obj,aHWkU,fLgub,bNUBC,eFlKd)
{
this.targetObject=obj;
this.init(new Object(),'a',aHWkU,fLgub,bNUBC,eFlKd);
this.onMotionChanged=function(evt)
{
var v=evt.target.getPosition();
var aIeIN=this.targetObject;
v=Math.round(v*100)/100
aIeIN.setOpacity(v/100);
}
}
function onMouseOnPreviewComment(OFaQW,oWWeo,VSkvP)
{
var BrPun=XwEDG(OFaQW)
var QTcHN=BrPun.PdJLM_preview_obj 
var old=BrPun.QFmSc
BrPun.QFmSc=oWWeo;
QTcHN.LQlfX=oWWeo
if(BrPun.QFmSc)
BrPun.ImZjn=-1;

if(VSkvP)
wa_timeout(Delegate.create(QTcHN,QTcHN.hcEqf),200);
else
wa_timeout(Delegate.create(QTcHN,QTcHN.ceOTB),200);
}
RwIVN.prototype=new Tween();
RwIVN.prototype.constructor=Tween;
RwIVN.superclass=Tween.prototype;
function RwIVN(obj,aHWkU,fLgub,bNUBC,eFlKd)
{
this.targetObject=obj;
this.init(new Object(),'a',aHWkU,fLgub,bNUBC,eFlKd);
this.onMotionChanged=function(evt)
{
var v=evt.target.getPosition();
var QTcHN=this.targetObject;
QTcHN.hANuO=v
QTcHN.Iskik()
}
this.onMotionFinished=function(evt)
{
var QTcHN=this.targetObject;
if(QTcHN.FHDqX==false)
{
QTcHN.Qvaxo.setVisible(false)
html_SetVisibility(QTcHN.OqUEd,false)
}
QTcHN.setOverflow(QTcHN.LQlfX)
}
}
function XUEbJ(OFaQW,ZkrZP)
{
this.jtFvC=OFaQW
this.ZkrZP=ZkrZP
this.OqUEd=this.ZkrZP+"comment-text-div"
this.LQlfX=false;
this.FHDqX=false;
this.hANuO=0;
this.toHtml=function()
{
var UjpuG=""
this.Qvaxo=new WA_GraphicElement(this.ZkrZP+"-graphic-comment-bg",500,false)
this.Qvaxo._objPreview=this
this.Qvaxo.draw=function()
{
if(this._objPreview.FHDqX)
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,0,0,'',['rgba(0,0,0,0.6)'],this.shadow(),0,this.opacity())
}
}
UjpuG+=this.Qvaxo.toHtml() 
UjpuG+="<div id='"+this.OqUEd+"' ";
UjpuG+="onmouseover=\"javascript:onMouseOnPreviewComment('"+this.jtFvC+"',true)\" ";
UjpuG+="onmouseout=\"javascript:onMouseOnPreviewComment('"+this.jtFvC+"',false)\" ";
UjpuG+=" style=\"font-family:Arial;font-size:13px;color:#ffffff;margin:2px;text-align:center;"
UjpuG+="overflow:auto;visibility:hidden;"
UjpuG+="position:absolute;"
UjpuG+="z-index:5250;"
UjpuG+="\">";
UjpuG+="</div>";
return UjpuG
}
this.aLruM=function()
{
this.Qvaxo.registerDynamicCanvas();
}
this.wdsEr=function(nafGT,UReEu,hBJkw,jItZb)
{
this.HULgT=new Rect(nafGT,UReEu,hBJkw,jItZb)
this.bUUin(nafGT,UReEu,hBJkw,jItZb)
}
this.bUUin=function(nafGT,UReEu,hBJkw,jItZb)
{
if(jItZb<=0)
{
this.Qvaxo.setVisible(false)
html_SetVisibility(this.OqUEd,false)
return;
}
this.Qvaxo.setRect(nafGT,UReEu,hBJkw,jItZb)
html_SetGeometry(this.OqUEd,nafGT,UReEu,hBJkw,jItZb)
}
this.setOverflow=function(RKVbH)
{
var aIeIN=html_getLayer(this.OqUEd)
var PPqNw=((RKVbH)?"auto":"hidden")
aIeIN.style.overflow=PPqNw 
}
this.WYZCd=function()
{
this.FOvgl=true
clearTimeout(this.timerProgress)
this.timerProgress=wa_timeout(Delegate.create(this,this.dJOEx),300);
}
this.dJOEx=function()
{
if(this.FOvgl!=true)return;
this.FOvgl=false
this.Ctukc("chargement en cours...")
}
this.Ctukc=function(UjpuG)
{
this.FOfaf=UjpuG
this.XQUQL(UjpuG)
}
this.qhGVw=function(UjpuG)
{
this.FOvgl=false
this.iNZju=0;
this.FHDqX=true
this.XQUQL(UjpuG)
}
this.XQUQL=function(UjpuG)
{
this.FOfaf=UjpuG
var JUcuk=this.HULgT 
if(!JUcuk)return;
var aIeIN=html_getLayer(this.OqUEd)
aIeIN.style.overflow="hidden" 
this.bUUin(JUcuk.x,JUcuk.y+JUcuk.height-1,JUcuk.width,1)
html_writeContent(this.OqUEd,this.FOfaf)
if(isMSIE())
{
WA_exec_delayedCallback(this,this.tOHYW)
}
else
{
this.tOHYW()
}
}
this.tOHYW=function()
{
var JUcuk=this.HULgT
var aIeIN=html_getLayer(this.OqUEd)
this.iNZju=aIeIN.scrollHeight+4;
this.iNZju=Math.min(this.iNZju,JUcuk.height*0.8);
this.hANuO=0
this.hcEqf()
}
this.Iskik=function()
{
var UjpuG=this.FOfaf;
var JUcuk=this.HULgT
var aIeIN=html_getLayer(this.OqUEd)
var AGxFf=this.hANuO
var jItZb=AGxFf 
this.bUUin(JUcuk.x,JUcuk.y+JUcuk.height-jItZb,JUcuk.width,jItZb)
WA_exec_delayedCallback(this,this.XUDHR)
}
this.hcEqf=function()
{
this.qibgP(true)
}
this.ceOTB=function()
{
this.qibgP(false)
}
this.qibgP=function(bDEqb)
{
var JUcuk=this.HULgT
if(this.pBUPB)
{
this.pBUPB.stop()
this.pBUPB=false;
}
var ChViW=Math.min(JUcuk.height*0.2,this.iNZju);
ChViW=Math.min(40,ChViW);
if(this.LQlfX)ChViW=this.iNZju
var bZjJn=this.hANuO;
var uFSjn=ChViW;
if(this.FHDqX==false)
{
bZjJn=this.hANuO;
uFSjn=0;
}

if(bDEqb)
{
this.setOverflow(false)
}
if(this.LQlfX!=true)
{
var aIeIN=html_getLayer(this.OqUEd)
aIeIN.scrollTop=0
}
this.pBUPB=new RwIVN(this,Tween.strongEaseOut,bZjJn,uFSjn,0.5)
this.pBUPB.start()
}
this.XUDHR=function(RKVbH)
{
var FHDqX=this.FHDqX
if(RKVbH==false)
{


FHDqX=false;
}
this.Qvaxo.setVisible(FHDqX)
html_SetVisibility(this.OqUEd,FHDqX)
}
}
function WA_photoAlbumActionThumb(OFaQW,wHJEn,OMhSS)
{
var BrPun=XwEDG(OFaQW)
if(BrPun.mprnY()==false)return 
var REswi=BrPun.SlJfF_preview_id;
var gclCQ_img=document.getElementById(REswi)
if(wHJEn==-1) wHJEn=0;
var SlJfF=PrIOn(OFaQW)[wHJEn]
var IkAbb=BrPun.BSvsL()
var BwBrk=IkAbb.border_size 
if(OMhSS!=true)
if(BrPun.NEkTH==wHJEn)
{
return;
}
if(BrPun.KeTJc) return;
BrPun.KeTJc=true 
var ChViW_size=new Size(BrPun.TjSkA_preview.width-2*BwBrk,BrPun.TjSkA_preview.height-2*BwBrk) 

var SQaXf=BrPun.sPlfh.max_img_resolution
var src_folder=cwOqg(OFaQW)
var JKLvk=new Size(SlJfF.size.w,SlJfF.size.h)
JKLvk.scale(ChViW_size)
if(SQaXf>0)
{
var ChViW_size_album=new Size(SQaXf,SQaXf)
JKLvk.scale(ChViW_size_album)
}
var eVinM=new Image();
if(isMSIE())
{
eVinM=document.getElementById(BrPun.SlJfF_preview_id_cache) 
eVinM.width=JKLvk.width
eVinM.height=JKLvk.height
}
BrPun.YGwfB=eVinM
eVinM.CPpSr=0.2
eVinM.hHXPL=0.2
eVinM.IrjGk_img=wHJEn
eVinM.SlJfF_info=SlJfF
eVinM.PdJLM_preview_obj=BrPun.PdJLM_preview_obj
eVinM.QSrVX=BrPun.QSrVX
eVinM.PfSOd_transition=Tween.strongEaseOut
eVinM.gclCQ_img=gclCQ_img
eVinM.rPhXY=document.getElementById(BrPun.QSrVX.divId())
eVinM.BrPun=BrPun 
eVinM.DIaSH=JKLvk;
eVinM.loaded=false;
BrPun.PdJLM_preview_obj.WYZCd()
eVinM.onload=function()
{
qcTvP(this,this.gclCQ_img)
}
eVinM.onerror=function()
{
pouXZ(this,false)
}
eVinM.onabort=function()
{
pouXZ(this,false)
}
eVinM.src=src_folder+"/"+SlJfF.th+"?v="+SlJfF.mod;

}
function qcTvP(ZpRJt,gclCQ_img)
{
clearTimeout(ZpRJt.BrPun.PdJLM_preview_obj.timerProgress) 
if(isMobileBrowser())
{
var BrPun=ZpRJt.BrPun
BrPun.NEkTH=ZpRJt.IrjGk_img
ZpRJt.QSrVX.setOpacity(1);
html_SetOpacity(ZpRJt.gclCQ_img,1)
xqOQX(ZpRJt)
pouXZ(ZpRJt,true)
return;
}
var WPmAx=new hmLCY(ZpRJt.QSrVX,ZpRJt.PfSOd_transition,100,0,ZpRJt.CPpSr);
WPmAx.ZpRJt=ZpRJt
WPmAx.gclCQ_img=gclCQ_img
WPmAx.onMotionFinished=tNboR
var HFMVx=new OpacityTween(gclCQ_img,ZpRJt.PfSOd_transition,100,0,ZpRJt.CPpSr);
HFMVx.ZpRJt=ZpRJt
HFMVx.gclCQ_img=gclCQ_img
WPmAx.start()
HFMVx.start()
}
function tNboR()
{
var ZpRJt=this.ZpRJt 
var wHJEn=ZpRJt.IrjGk_img
var BrPun=ZpRJt.BrPun
BrPun.NEkTH=wHJEn
var gclCQ_img=ZpRJt.gclCQ_img 
gclCQ_img.ZpRJt=ZpRJt
xqOQX(ZpRJt) 
if(isMSIE()||isOperaBrowser())
{
var IuFIW=new hmLCY(ZpRJt.QSrVX,ZpRJt.PfSOd_transition,0,100,ZpRJt.hHXPL);
IuFIW.ZpRJt=ZpRJt
IuFIW.gclCQ_img=this.gclCQ_img
IuFIW.onMotionFinished=uSXbo
var STpkY=new OpacityTween(this.gclCQ_img,this.ZpRJt.PfSOd_transition,0,100,this.ZpRJt.hHXPL);
STpkY.ZpRJt=this.ZpRJt
STpkY.gclCQ_img=this.gclCQ_img
STpkY.start()
IuFIW.start()
}
else
{
gclCQ_img.onload=function()
{
var ZpRJt=this.ZpRJt
var gclCQ_img=ZpRJt.gclCQ_img
var IuFIW=new hmLCY(ZpRJt.QSrVX,ZpRJt.PfSOd_transition,0,100,ZpRJt.hHXPL);
IuFIW.ZpRJt=ZpRJt
IuFIW.gclCQ_img=gclCQ_img
IuFIW.onMotionFinished=uSXbo
var STpkY=new OpacityTween(gclCQ_img,ZpRJt.PfSOd_transition,0,100,ZpRJt.hHXPL);
STpkY.ZpRJt=ZpRJt
STpkY.gclCQ_img=gclCQ_img
STpkY.start()
IuFIW.start()
}
}
}
function uSXbo()
{
pouXZ(this.ZpRJt,true)
}
function pouXZ(ZpRJt,Ipnrv)
{
var wHJEn=ZpRJt.IrjGk_img
var BrPun=ZpRJt.BrPun
BrPun.KeTJc=false;
var wHJEn=BrPun.NEkTH 
{
BrPun.ErPIR=Math.floor(wHJEn/(BrPun.LDiWM*BrPun.Sgmko))
mDLER(BrPun.OFaQW)
}
BrPun.VlAqL()
BrPun.TqhCe()
var PdJLM=BrPun.WABqn()
if(PdJLM.length==0)
{
BrPun.PdJLM_preview_obj.XUDHR(false)
}
BrPun.wKvav()
}
function xqOQX(ZpRJt)
{
var gclCQ_img=ZpRJt.gclCQ_img
var BrPun=ZpRJt.BrPun
var JKLvk=ZpRJt.DIaSH
BrPun.rOsuL.width=JKLvk.width
BrPun.rOsuL.height=JKLvk.height
gclCQ_img.width=JKLvk.width;
gclCQ_img.height=JKLvk.height;
gclCQ_img.src=ZpRJt.src;
gclCQ_img.BrPun=BrPun
gclCQ_img.JKLvk=JKLvk
BrPun.wKvav()
var PdJLM=BrPun.WABqn()
if(PdJLM.length>0)
{
BrPun.dxnQb()
BrPun.PdJLM_preview_obj.qhGVw(PdJLM)
}
else
{
BrPun.PdJLM_preview_obj.XUDHR(false);
}
}
function WA_photoAlbumChangeImageSize(gclCQ_img,JKLvk,ijfgS)
{
var dec=3
gclCQ_img.width=JKLvk
gclCQ_img.height=JKLvk
gclCQ_img.style.borderWidth=ijfgS
}
function WA_photoAlbumThumbOver(gclCQ,OFaQW,wHJEn)
{
var BrPun=XwEDG(OFaQW)
var SlJfF_def=PrIOn(OFaQW)[wHJEn]
var REswi=BrPun.nkUAB(wHJEn)
var gclCQ_img=document.getElementById(REswi)
gclCQ.BrPun=BrPun;
gclCQ.gclCQ_img=gclCQ_img
var dec=2
WA_photoAlbumChangeImageSize(gclCQ_img,BrPun.JKLvk_thumb-2*dec,BrPun.JKLvk_border_thumbnail+dec)
}
function WA_photoAlbumThumbOut(gclCQ)
{
var gclCQ_img=gclCQ.gclCQ_img;
var BrPun=gclCQ.BrPun
WA_photoAlbumChangeImageSize(gclCQ_img,BrPun.JKLvk_thumb,BrPun.JKLvk_border_thumbnail) 
}
function RYhPk(OFaQW,FpuSi)
{
this.OFaQW=OFaQW;
this.XwZkt=25;
this.aCQLL=FpuSi;
this.OFaQW_canv_bg_toolbar="photo-album-toolbar-"+this.OFaQW
this.UeqRN=("photo-album-scroll-content"+this.OFaQW)
this.TjSkA_selector_slider=null;
this.TjSkA_selector_toolbar=null;
this.TjSkA_preview=null;
this.LDiWM=0;
this.Sgmko=0;
this.lSgkw=new Array()
this.ErPIR=0;
this.TSqTk=1
this.NRUsa=true;
this.fNcPF=false
this.bjlja=40
this.rOsuL=new Size(0,0)
this.eGVpv=false;
this.ImZjn=-1;
this.NEkTH=-1;
this.fGajs=this.aCQLL.def.length
this.hLpOT=false;
this.TjSkA_container=new Rect(0,0,100,100)
this.sPlfh=vJgkT(this.OFaQW)
var ggOXv=this.sPlfh
if(ggOXv.diaporama&&(ggOXv.diaporama.startup))this.hLpOT=true;
this.skFcp=false;
this.LeNEL=false;
this.jiCFf=0;
this.RRjTJ=function()
{
if(this==this.aCQLL.album_object) return true;
return false;
}
this.ZkrZP=function()
{
return this.OFaQW+this.jiCFf
}
this.dxnQb=function()
{
var BrPun=this
var JKLvk=new Size(BrPun.rOsuL.width,BrPun.rOsuL.height)
var IkAbb=BrPun.BSvsL()
var spXIF=new RGBColor(IkAbb.border_col)
var BwBrk=IkAbb.border_size
if(spXIF.a==0) BwBrk=0;
var JUcuk_preview=BrPun.TjSkA_preview 
var x0=Math.round((JUcuk_preview.width-(JKLvk.width+2*BwBrk))/2)
var y0=Math.round((JUcuk_preview.height-(JKLvk.height+2*BwBrk))/2) 


BrPun.PdJLM_preview_obj.wdsEr(x0+BwBrk,y0+BwBrk,JKLvk.width,JKLvk.height);

}
this.wKvav=function()
{
var BrPun=this
var JKLvk=new Size(BrPun.rOsuL.width,BrPun.rOsuL.height)
var IkAbb=BrPun.BSvsL()
var spXIF=new RGBColor(IkAbb.border_col)
var BwBrk=IkAbb.border_size
if(spXIF.a==0) BwBrk=0;
var JUcuk_preview=BrPun.TjSkA_preview 
var x0=Math.round((JUcuk_preview.width-(JKLvk.width+2*BwBrk))/2)
var y0=Math.round((JUcuk_preview.height-(JKLvk.height+2*BwBrk))/2)
BrPun.QSrVX.setRect(x0,y0,JKLvk.width+2*BwBrk,JKLvk.height+2*BwBrk) 
var xKZmm_img=document.getElementById(BrPun.xKZmm_img_preview_id)
html_SetPosition(xKZmm_img,BwBrk+x0,BwBrk+y0)
}
this.WABqn=function()
{
var ZpRJt=this.YGwfB
var MsclB=this.sPlfh
var PdJLM=""
var url=ZpRJt.SlJfF_info.url
if(MsclB.disp_comment)
{
if(MsclB.disp_comment_img_number)
PdJLM+="<b>"+(ZpRJt.IrjGk_img+1)+"/"+this.fGajs+"</b>"
if(MsclB.disp_comment_img_fn)
{
if(PdJLM.length>0)PdJLM+="<br>"
PdJLM+="("+ZpRJt.SlJfF_info.fn+")"
}
if(ZpRJt.SlJfF_info.comment.length>0)
{
if(PdJLM.length>0)PdJLM+="<br>"
PdJLM+=ZpRJt.SlJfF_info.comment
}
if(url.length>0)
{
if(PdJLM.length>0)PdJLM+="<br>"
PdJLM+="<br><a href='"+url+"' target=_blank "
PdJLM+="style='color:#0000ff;' "
var ChnEb=this.PdJLM_preview_obj.jtFvC
PdJLM+="onmouseover=\"javascript:_onMouseOnPreviewComment('"+ChnEb+"',true)\" ";
PdJLM+=">";
PdJLM+="@ link"
PdJLM+="</a><br><br>"
}
}
return PdJLM;
}
this.lJVpr=function()
{
var ggOXv=vJgkT(OFaQW)
var RiWGW=this.GZxXQ();
this.fNcPF=RiWGW.nav_has_horz_flow
if(this.fNcPF==false)
{
this.lSgkw.push("up")
this.lSgkw.push("down")
}
else
{
this.lSgkw.push("<")
this.lSgkw.push(">")
}
if(this.vmkKN())
{
this.lSgkw.push("+")
}
else
if(this.RLJZU())
{
this.lSgkw.push("-")
}
if(ggOXv.diaporama)
{
this.lSgkw.push("diapo")
}
if((RiWGW.nav_but_orient==5)||(RiWGW.nav_but_orient==3))
{
this.NRUsa=false;
}
var canvas_bg=""
this.YQqoG=new WA_GraphicElement(this.ZkrZP()+"-graphic-selector-bg",50,RiWGW.bg_shadow)
this.YQqoG.draw=function()
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,1,RiWGW.bg_border_col,[RiWGW.bg_col],RiWGW.bg_shadow,0)
}
canvas_bg+=this.YQqoG.toHtml() 
this.YcaEe=new WA_GraphicElement(this.ZkrZP()+"-graphic-toolbar-bg",50,RiWGW.bg_shadow)
this.YcaEe.NRUsa=this.NRUsa 
this.YcaEe.draw=function()
{
var KltrG=false;
if(this.NRUsa)
{
KltrG=Xbkwx(0,0,0,this.rect().height/2,RiWGW.toolbar_bg_col1,RiWGW.toolbar_bg_col2)
}
else
{
KltrG=Xbkwx(0,0,this.rect().width/2,0,RiWGW.toolbar_bg_col1,RiWGW.toolbar_bg_col2)
}
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,1,RiWGW.toolbar_border_col,[KltrG],RiWGW.toolbar_shadow,0)
}
canvas_bg+=this.YcaEe.toHtml() 
this.sDtFF=new Array()
this.sDtFF_by_action=new Array()
for(var n=0;n<this.lSgkw.length;n++)
{
var n_action=this.lSgkw[n]
var JesRW=new WA_GraphicElement(this.ZkrZP()+"-graphic-toolbar-but"+n,70,false)
JesRW.n_action=n_action
JesRW.BrPun=this
JesRW.rpqPi=false
JesRW.XwZkt=this.XwZkt
JesRW.iEYut=RiWGW.toolbar_but_col1
JesRW.QVExu=RiWGW.toolbar_but_col2
JesRW.draw=function()
{
var WwFRJ_but=this.XwZkt
var QAILg=this.n_action
if(QAILg=="diapo")
{
if(this.BrPun.UfqHx())QAILg="stop"
}
var NlFBm=(this.rpqPi)?this.QVExu:this.iEYut
WA_toolbar_button(this.canvasId(),WwFRJ_but,WwFRJ_but,QAILg,NlFBm,true)
}
this.sDtFF.push(JesRW)
var lnFGO=n_action
if(lnFGO=="up")lnFGO="<"
if(lnFGO=="down")lnFGO=">"
this.sDtFF_by_action[lnFGO]=JesRW
canvas_bg+="<div id='"+JesRW.divId()+"-href' onclick=\"javascript:WA_photoAlbumAction('"+this.OFaQW+"',"+n+")\" ";
canvas_bg+="style=\""
canvas_bg+="position:absolute;"
canvas_bg+="z-index:1000;"
canvas_bg+="cursor:pointer;"
canvas_bg+="\" "
canvas_bg+="onmouseover=\"";
canvas_bg+="WA_change_tool_button('"+this.OFaQW+"',"+n+",true)";
canvas_bg+="\" ";
canvas_bg+="onmouseout=\"";
canvas_bg+="WA_change_tool_button('"+this.OFaQW+"',"+n+",false)";
canvas_bg+="\" ";
canvas_bg+=">";
canvas_bg+="</div>";
canvas_bg+=JesRW.toHtml()
}
canvas_bg+="<div id='"+this.UeqRN+"' style=\"";
canvas_bg+="position:absolute;z-index:100;";
canvas_bg+="overflow:hidden;";
canvas_bg+="\"></div>";
return canvas_bg;
}
this.uYFpw=function()
{
var RiWGW=this.GZxXQ();
var r1_rect=this.TjSkA_selector_slider;
var UjpuG="" 
var min_size=Math.min(r1_rect.width,r1_rect.height)
var size_thumb=RiWGW.th_size.size;
if(RiWGW.th_size.percent) size_thumb=Math.round(size_thumb*(min_size)/100);
var image_spacing=Math.max(0,Math.round((RiWGW.th_spacing/100)*size_thumb))
image_spacing=Math.round(image_spacing/2)*2
var nb_cols_real=r1_rect.width/(size_thumb+image_spacing);
var nb_cols=Math.floor(nb_cols_real);
this.LDiWM=Math.max(1,nb_cols);
var nb_rows_real=r1_rect.height/(size_thumb+image_spacing);
var nb_rows=Math.floor(nb_rows_real);
this.Sgmko=Math.max(1,nb_rows);
var size_border_thumbnail=Math.max(1,Math.round((size_thumb)*0.03));
size_thumb-=2*size_border_thumbnail
var nb_images=this.fGajs
var nb_pages=(nb_images/(this.LDiWM*this.Sgmko));
if(nb_pages>Math.floor(nb_pages)) nb_pages=Math.floor(nb_pages)+1;
this.TSqTk=nb_pages
this.JKLvk_thumb=size_thumb;
this.FOITM=image_spacing;
this.JKLvk_border_thumbnail=size_border_thumbnail
var n_image=0;
var nb_item_x=this.LDiWM*nb_pages
var nb_item_y=this.Sgmko;
var nb_item_per_page=this.LDiWM*this.Sgmko 
if(this.fNcPF==false)
{
nb_item_x=this.LDiWM
nb_item_y=this.Sgmko*nb_pages;
}
UjpuG+="<table border=0 cellpadding=0 cellspacing=0 width=100% height=100% >";
UjpuG+="<tr>"
UjpuG+="<td "
if((this.fNcPF==false)||(this.TSqTk==1))
{
UjpuG+="align=center"
}
UjpuG+=">" 
UjpuG+="<table border=0 cellpadding="+(image_spacing/2)+" cellspacing=0  width=10px>";
for(var UReEu=0;UReEu<nb_item_y;UReEu++)
{
UjpuG+="<tr>" 
for(var nafGT=0;nafGT<nb_item_x;nafGT++)
{
UjpuG+="<td>"
var ind_img=0;
var nx_0=Math.floor(nafGT/this.LDiWM)
var diff0=nafGT-nx_0*this.LDiWM;
ind_img=nx_0*nb_item_per_page+(UReEu*this.LDiWM)+diff0
if(ind_img<nb_images)
{
var SlJfF=this.aCQLL.def[ind_img]
var SlJfF_src=this.aCQLL.src_folder+"/th_"+SlJfF.th+"?v="+SlJfF.mod_th
UjpuG+="<a href=\"";
if(this.mprnY())
{
UjpuG+="javascript:WA_photoAlbumActionThumb('"+OFaQW+"',"+ind_img+")"
}
else
{
UjpuG+="javascript:WA_photoAlbumIncrease('"+OFaQW+"',"+ind_img+")"
}
UjpuG+="\" "
UjpuG+="onmouseover=\"WA_photoAlbumThumbOver(this,'"+OFaQW+"',"+ind_img+")\" "
UjpuG+="onmouseout=\"WA_photoAlbumThumbOut(this)\" "
UjpuG+=">"
UjpuG+="<img title='"+SlJfF.tooltip+"' id='"+this.nkUAB(ind_img)+"' width="+size_thumb+"px height="+size_thumb+"px src='"+SlJfF_src+"' ";
UjpuG+="style='";
if(size_border_thumbnail>0)
{
UjpuG+="border-color:"+RiWGW.selector_img_border_color+";";
UjpuG+="border-width:"+size_border_thumbnail+"px;border-style:solid;";
}
UjpuG+="' ";
UjpuG+=">"
UjpuG+="</a>"
n_image++;
}
UjpuG+="</td>"
}
if(this.NRUsa)
if(this.TSqTk>1)
{
for(var nafGT=0;nafGT<this.LDiWM;nafGT++)
{
var YbWVe=size_thumb+2*size_border_thumbnail
UjpuG+="<td>"
UjpuG+="<div  style='width:"+(YbWVe)+"px;height:"+YbWVe+"px;'></div>";
UjpuG+="</td>"
}
}
UjpuG+="</tr>"
}
if(this.NRUsa==false)
if(this.TSqTk>1)
{
for(var UReEu=0;UReEu<this.Sgmko;UReEu++)
{
UjpuG+="<tr>"
var YbWVe=size_thumb+2*size_border_thumbnail
UjpuG+="<td colspan="+this.LDiWM+">"
UjpuG+="<div  style='width:"+(YbWVe)+"px;height:"+YbWVe+"px;'></div>";
UjpuG+="</td>"
UjpuG+="</tr>"
}
}
UjpuG+="</table>" 
UjpuG+="</td>"
UjpuG+="</tr>"
UjpuG+="</table>"
return UjpuG;
}
this.nkUAB=function(wHJEn)
{
return this.ZkrZP()+"-th-img"+wHJEn
}
this.bnMQv=function()
{
var IkAbb=this.BSvsL();
if(IkAbb==false) return;
var SlJfF=this.aCQLL.def[0]
this.SlJfF_preview_id="photo-album-preview-img-"+this.ZkrZP()
this.SlJfF_preview_id_cache=this.SlJfF_preview_id+"-cache"
this.xKZmm_img_preview_id="photo-album-preview-img-div"+this.ZkrZP()
this.SuaWa="photo-album-preview-zone"+this.ZkrZP()
var UjpuG=""
UjpuG+="<div  id='"+this.SuaWa+"' style=\"";
UjpuG+="position:absolute;z-index:500;";
UjpuG+="\" ";
UjpuG+="onclick=\"WA_clickAlbumPreview('"+this.OFaQW+"')\" ";
UjpuG+="onmousemove=\"javascript:WA_mousemoveAlbumPreview(event,'"+this.OFaQW+"')\" ";
UjpuG+="onmouseout=\"javascript:WA_mouseoutAlbumPreview(event,'"+this.OFaQW+"')\" ";
UjpuG+=">";
UjpuG+="<div style='position:absolute;z-index:450;left:0px;top:0px;";
UjpuG+="width:100%;height:100%;background-color:#000000;";
UjpuG+="filter:alpha(opacity=0);-moz-opacity:0;opacity:0;' "
UjpuG+="></div>"
this.PdJLM_preview_obj=new XUEbJ(this.OFaQW,this.ZkrZP());
UjpuG+=this.PdJLM_preview_obj.toHtml() 
this.QSrVX=new WA_GraphicElement(this.ZkrZP()+"-graphic-img-bg",50,IkAbb.shadow)
this.QSrVX.draw=function()
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,0,'',[IkAbb.border_col],this.shadow(),0,this.opacity())
}
UjpuG+=this.QSrVX.toHtml() 
UjpuG+="<div id='"+this.xKZmm_img_preview_id+"' style=\"";
UjpuG+="position:absolute;z-index:100;";
UjpuG+="left:0px;";
UjpuG+="top:0px;";
UjpuG+="\" ";
UjpuG+=">";
UjpuG+="<img  id='"+this.SlJfF_preview_id+"' border=0 >";
if(isMSIE())
{
UjpuG+="<img style='position:absolute;left:0px;top:0px;visibility:hidden;' id='"+this.SlJfF_preview_id_cache+"'>"
}
else
{
UjpuG+="<img style='position:absolute;left:0px;top:0px;display:none;' id='"+this.SlJfF_preview_id_cache+"'>"
}
UjpuG+="</div>";
this.maefc=new WA_GraphicElement(this.ZkrZP()+"-graphic-arrow0",300,true)
this.maefc.setImage("intuisphere.png",new Rect(97,49,46,47))
this.maefc.draw=function()
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,0,'',["#ffffff"],this.shadow(),0,this.opacity(),true)
var hBJkw=Math.round(this.rect().width*0.8);
var jItZb=Math.round(this.rect().height*0.8);
WA_drawImage(this.canvasId(),this.img_src(),6+(this.rect().width-hBJkw)/2,6+(this.rect().height-jItZb)/2,hBJkw,jItZb,this.img_clip(),this.opacity(),false)
}
this.taKRH=new WA_GraphicElement(this.ZkrZP()+"-graphic-arrow1",300,true)
this.taKRH.setImage("intuisphere.png",new Rect(2,49,46,47))
this.taKRH.draw=function()
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,5,0,'',["#ffffff"],this.shadow(),0,this.opacity(),true)
var hBJkw=Math.round(this.rect().width*0.8);
var jItZb=Math.round(this.rect().height*0.8);
WA_drawImage(this.canvasId(),this.img_src(),6+(this.rect().width-hBJkw)/2,6+(this.rect().height-jItZb)/2,hBJkw,jItZb,this.img_clip(),this.opacity(),false)
}
UjpuG+=this.maefc.toHtml()
UjpuG+=this.taKRH.toHtml() 
this.qWWCA=new WA_GraphicElement(this.ZkrZP()+"-graphic-cursor-zoom",400,false)
this.qWWCA.setSize(30,30)
this.qWWCA.setImage("intuisphere.png",new Rect(0,0,48,48))
this.qWWCA.draw=function()
{
WA_drawImage(this.canvasId(),this.img_src(),0,0,this.rect().width,this.rect().height,this.img_clip())
}
UjpuG+=this.qWWCA.toHtml() 
UjpuG+="</div>";
return UjpuG;
}
this.aLruM=function()
{
if(this.MLwxH())
{
this.YQqoG.registerDynamicCanvas();
this.YcaEe.registerDynamicCanvas();
for(var n=0;n<this.sDtFF.length;n++)
{
var JesRW=this.sDtFF[n]
JesRW.registerDynamicCanvas();
}
}
if(this.mprnY())
{
this.PdJLM_preview_obj.aLruM()
this.QSrVX.registerDynamicCanvas();
this.maefc.registerDynamicCanvas();
this.taKRH.registerDynamicCanvas();
this.qWWCA.registerDynamicCanvas();
this.qWWCA.setVisible(false)
}
if(this.ckKUW)
this.ckKUW.registerDynamicCanvas();
this.EVjKB()
}
this.UfqHx=function()
{
return(this.YGSaT)?true:false;
}
this.pxVFW=function()
{
return(this.ErPIR>0)
}
this.vGeTE=function()
{
return(this.ErPIR<this.TSqTk-1)
}
this.JIwJA=function()
{
return(this.NEkTH>0);
}
this.fohPF=function()
{
return(this.NEkTH<this.aCQLL.def.length-1);
}
this.NEwru=function()
{
if(this.MLwxH())
{
var RiWGW=this.GZxXQ() 
var hBJkw=this.TjSkA_container.width
var jItZb=this.TjSkA_container.height
var r0=RiWGW.rect
var r0_rect=LPDuo(r0,hBJkw,jItZb)
r0_rect.x+=this.TjSkA_container.x
r0_rect.y+=this.TjSkA_container.y
var r1_rect=r0_rect.clone() 
var PMbeH=r0_rect.clone()
var aowwB=this.lSgkw.length 
var UAvaU=5
var WwFRJ_size_min=this.XwZkt+UAvaU*2
var WwFRJ_size_max=(aowwB*this.XwZkt)
if(RiWGW.nav_but_orient==1)
{
r1_rect.y+=WwFRJ_size_min;
r1_rect.height-=WwFRJ_size_min;
PMbeH.x=PMbeH.x+(PMbeH.width-WwFRJ_size_max)/2;
PMbeH.width=WwFRJ_size_max
PMbeH.y+=UAvaU;
PMbeH.height=this.XwZkt;
}
if(RiWGW.nav_but_orient==5)
{
r1_rect.width-=WwFRJ_size_min;
PMbeH.y=PMbeH.y+(PMbeH.height-WwFRJ_size_max)/2;
PMbeH.height=WwFRJ_size_max
PMbeH.x+=r1_rect.width+UAvaU;
PMbeH.width=this.XwZkt;
}
if(RiWGW.nav_but_orient==7)
{
r1_rect.height-=WwFRJ_size_min;
PMbeH.x=PMbeH.x+(PMbeH.width-WwFRJ_size_max)/2;
PMbeH.width=WwFRJ_size_max
PMbeH.y+=r1_rect.height+UAvaU;
PMbeH.height=this.XwZkt;
}
if(RiWGW.nav_but_orient==3)
{
r1_rect.width-=WwFRJ_size_min;
r1_rect.x+=WwFRJ_size_min;
PMbeH.y=PMbeH.y+(PMbeH.height-WwFRJ_size_max)/2;
PMbeH.height=WwFRJ_size_max
PMbeH.x+=UAvaU;
PMbeH.width=this.XwZkt;
}
this.TjSkA_selector_slider=r1_rect
this.TjSkA_selector_toolbar=PMbeH 
var ImeoQ=this.TjSkA_selector_slider;
this.YQqoG.setRect(ImeoQ.x,ImeoQ.y,ImeoQ.width,ImeoQ.height)
html_SetRect(this.UeqRN,r1_rect) 
var vcdUV=this.TjSkA_selector_toolbar
this.YcaEe.setRect(vcdUV.x,vcdUV.y,vcdUV.width,vcdUV.height)
var lx_button=this.XwZkt
var ly_button=lx_button
var nafGT_but0=PMbeH.x
var UReEu_but0=PMbeH.y
for(var n=0;n<this.sDtFF.length;n++)
{
var JesRW=this.sDtFF[n]
var nafGT_but=nafGT_but0
var ERiNe=UReEu_but0
if(this.NRUsa)
{
nafGT_but+=n*lx_button;
}
else
{
ERiNe+=n*ly_button;
}
JesRW.setRect(nafGT_but,ERiNe,lx_button,ly_button)
html_SetGeometry(JesRW.divId()+"-href",nafGT_but,ERiNe,lx_button,ly_button)
}
var sCnJw=document.getElementById(this.UeqRN)
if(sCnJw)
{
sCnJw.innerHTML=this.uYFpw();
}
this.TqhCe()
}
}
this.vmkKN=function()
{
if((this.jiCFf==1)&&(this.MLwxH()==true)) return true;
if((this.jiCFf==0)&&(this.sPlfh.has_full_page_config)) return true;
return false;
}
this.RLJZU=function()
{
if(this.jiCFf==1) return true;
if(this.jiCFf==2) return true;
return false;
}
this.YWRXV=function()
{
return this.hLpOT;
}
this.GZxXQ=function()
{
return this.skFcp;
}
this.BSvsL=function()
{
return this.LeNEL;
}
this.MLwxH=function()
{
if(this.GZxXQ()) return true;
return false;
}
this.mprnY=function()
{
if(this.BSvsL()) return true;
return false;
}
this.TqhCe=function()
{
if(this.MLwxH()==false)return
var ZCsVb=this.sDtFF_by_action["<"]
ZCsVb.setVisible(this.pxVFW())
var ELibr=this.sDtFF_by_action[">"]
ELibr.setVisible(this.vGeTE())
}
this.VlAqL=function()
{
var IkAbb=this.BSvsL();
var hBJkw=this.TjSkA_container.width
var jItZb=this.TjSkA_container.height
var ImeoQ=IkAbb.rect
var YdeEW=LPDuo(ImeoQ,hBJkw,jItZb)
if(this.jiCFf==2)
{
YdeEW=new Rect(0,0,hBJkw,jItZb)
}
YdeEW.x+=this.TjSkA_container.x
YdeEW.y+=this.TjSkA_container.y 


if(this.jiCFf!=0)
if((this.jiCFf==2)||((ImeoQ.x=="0%")&&(ImeoQ.y=="0%")&&(ImeoQ.lx=="100%")&&(ImeoQ.ly=="100%")))
{
var dec=8;
YdeEW.x+=dec
YdeEW.y+=dec
YdeEW.width-=2*dec
YdeEW.height-=2*dec 
}
var bZGrL=YdeEW.clone()
this.TjSkA_preview=bZGrL 
html_SetRect(this.SuaWa,this.TjSkA_preview)
this.Wuvrn()
this.oMCxp()
}
this.ivkqJ=function()
{
if(this.UfqHx()) return;
if(this.mprnY()==false)return;
var PfSOd_transition=Tween.regularEaseOut
var eFlKd=0.3
if((!this.Hoarg)||(this.Hoarg.isRunning()==false))
{
if(this.Hoarg)this.Hoarg.stop()
this.Hoarg=new hmLCY(this.maefc,PfSOd_transition,0,100,eFlKd)
this.Hoarg.onMotionFinished=this.jddHg
this.Hoarg.m_count=0
this.Hoarg.start()
}
if((!this.dHsYw)||(this.dHsYw.isRunning()==false))
{
if(this.dHsYw)this.dHsYw.stop()
this.dHsYw=new hmLCY(this.taKRH,PfSOd_transition,0,100,eFlKd)
this.dHsYw.onMotionFinished=this.jddHg
this.dHsYw.m_count=0
this.dHsYw.start()
}
}
this.jddHg=function()
{
if(this.m_count>=3)
{
return;
}
this.yoyo()
this.m_count++}
this.Wuvrn=function()
{
if(this.RRjTJ()==false)return;
if(this.mprnY()==false)return
if(isMobileBrowser())return
var JEUMs=30
var BrPun=this;
var ljDup=BrPun.mmZxI
var n_pos=BrPun.ImZjn;
if((n_pos!=-1)&&(BrPun.eGVpv==false)&&(BrPun.QFmSc!=true))
{
var KSbqF=true;
if(n_pos==0)
{
if(BrPun.JIwJA()==false)KSbqF=false;
BrPun.qWWCA.setImage("intuisphere.png",new Rect(97,49,46,47))
}
else
if(n_pos==1)
{
if(BrPun.RLJZU())
{
BrPun.qWWCA.setImage("intuisphere.png",new Rect(48,0,48,48))
}
else
if(BrPun.vmkKN())
{
BrPun.qWWCA.setImage("intuisphere.png",new Rect(0,0,48,48))
}
else
{
KSbqF=false;
}
}
else
if(n_pos==2)
{
if(BrPun.fohPF()==false)KSbqF=false;
BrPun.qWWCA.setImage("intuisphere.png",new Rect(0,49,46,47))
}
BrPun.qWWCA.setPosition(ljDup.x,ljDup.y,JEUMs,JEUMs);
BrPun.qWWCA.setVisible(KSbqF)
}
else
{
BrPun.qWWCA.setVisible(false)
}
}
this.oMCxp=function()
{
if(this.mprnY()==false)return
if((this.UfqHx()==false)&&(this.rOsuL.width>0))
{
var bjlja=40
var x_arrow0=(this.TjSkA_preview.width-this.rOsuL.width)/2
var x_arrow1=(x_arrow0+this.rOsuL.width-bjlja)
var y_arrow0=(this.TjSkA_preview.height-this.rOsuL.height)/2+(this.rOsuL.height-bjlja)/2 
this.maefc.setRect(x_arrow0,y_arrow0,bjlja,bjlja)
this.taKRH.setRect(x_arrow1,y_arrow0,bjlja,bjlja)
this.maefc.setVisible(this.JIwJA())
this.taKRH.setVisible(this.fohPF())
}
else
{
this.maefc.setVisible(false)
this.taKRH.setVisible(false)
}
this.maefc.setOpacity(0)
this.taKRH.setOpacity(0)
}
this.EVjKB=function()
{
if(this.mprnY())
{
this.VlAqL()
var wHJEn=this.NEkTH 
WA_photoAlbumActionThumb(this.OFaQW,wHJEn,true)
this.VlAqL()
}
this.NEwru()
if(this.ckKUW)
{
this.ckKUW.setRect(0,0,this.TjSkA_container.width,this.TjSkA_container.height);
}
if(this.qHPgp)
{
html_SetGeometry(this.qHPgp,0,0,this.TjSkA_container.width,this.TjSkA_container.height)
}
}
this.iXpjH=function()
{
if(this.mprnY())
{
WA_photoAlbumActionThumb(this.OFaQW,this.NEkTH,true)
}
}
this.fOJWF=function()
{
if(this.mprnY())
{
WA_photoAlbumActionThumb(this.OFaQW,this.NEkTH,false)
}
}
this.BKsoB=function(jPkkt)
{
IBRAJ(this.jiCFf>0)
var UjpuG=""
if(this.MLwxH())
{
UjpuG+=this.lJVpr();
}
if(this.mprnY())
{
UjpuG+=this.bnMQv();
};
if((this.jiCFf==1)||(this.jiCFf==2))
{
if(this.sPlfh.bg_fullpage_img.length>0)
{
this.qHPgp=this.ZkrZP()+"-graphic-fullpage-bg";
UjpuG+="<div id='"+this.qHPgp+"' style=\"";
UjpuG+="position:absolute;z-index:0;";
if(this.sPlfh.bg_fullpage_img_type==0)
{
UjpuG+="background-image:url('"+this.sPlfh.bg_fullpage_img+"');";
UjpuG+="background-repeat: repeat;";
}
UjpuG+="\" ";
UjpuG+=">";
if(this.sPlfh.bg_fullpage_img_type==1)
{
UjpuG+="<img src='"+this.sPlfh.bg_fullpage_img+"' width=100% height=100% border=0 >";
}
UjpuG+="</div>";
}
else
{
var IoJJj=this.sPlfh.bg_fullpage_grad
this.ckKUW=new WA_GraphicElement(this.ZkrZP()+"-graphic-global-bg",0,false)
this.ckKUW.IoJJj=IoJJj
this.ckKUW.draw=function()
{
var IoJJj=this.IoJJj
var IoJJj_bg=false
if(IoJJj.has_gradient)
{
var hBJkw=this.rect().width
var jItZb=this.rect().height
var xg1=IoJJj.pt1.x*hBJkw/100
var yg1=IoJJj.pt1.y*jItZb/100
var xg2=IoJJj.pt2.x*hBJkw/100
var yg2=IoJJj.pt2.y*jItZb/100
IoJJj_bg=Xbkwx(xg1,yg1,xg2,yg2,IoJJj.col1,IoJJj.col2)
}
else
{
IoJJj_bg=IoJJj.col1
}
WA_bg(this.canvasId(),this.rect().width,this.rect().height,0,0,'',[IoJJj_bg],false,0,1)
}
UjpuG+=this.ckKUW.toHtml();
}
}
var CXksA=document.getElementById(jPkkt);
CXksA.innerHTML=UjpuG
CXksA.style.display="block" 
{
WA_registerAlbum(OFaQW)
}
if(this.YWRXV()==false)
{
this.ivkqJ()
}
}
this.fxoNJ=function()
{
var iCBHU="wa-dialog-container"
if(this.vmkKN()==false) return;
if(this.jiCFf==0)
if(this.sPlfh.plugin_fullscreen_url.length>0)
{
window.open(this.sPlfh.plugin_fullscreen_url)
return;
}
this.ImZjn=-1;
this.Wuvrn()
var aCQLL=this.aCQLL
var TjSkA=new Rect(0,0,getWindowSize().width,getWindowSize().height)
var BrPun=new RYhPk(OFaQW,aCQLL)
BrPun.NEkTH=this.NEkTH
if(this.jiCFf==0)
{
BrPun.jiCFf=1
}
else
if(this.jiCFf==1)
{
BrPun.jiCFf=2
}
aCQLL.album_object=BrPun;
BrPun.TjSkA_container.copy(TjSkA)
BrPun.skFcp=aCQLL.layout.selector_fullpage
if(BrPun.jiCFf==2)
{
BrPun.skFcp=false
}
BrPun.LeNEL=aCQLL.layout.preview_fullpage
wa_global_photo_album.fullpage_object=BrPun
BrPun.BKsoB(iCBHU)
return BrPun
}
this.UmJUX=function()
{
if(this.RLJZU()==false) return;
this.cJOGf()
var iCBHU="wa-dialog-container"
var aCQLL=this.aCQLL
aCQLL.album_object=aCQLL.kIwgC;
wa_global_photo_album.fullpage_object=false 
if(this.jiCFf==1)
{
IBRAJ(false)
var CXksA=document.getElementById(iCBHU);
CXksA.innerHTML=""
CXksA.style.display="none" 

WA_exec_delayedCallback(this,this.fOJWF)
return aCQLL.kIwgC
}
if(this.jiCFf==2)
{
aCQLL.album_object.NEkTH=this.NEkTH
return aCQLL.album_object.fxoNJ()
}
}
this.cJOGf=function()
{
if(this.UfqHx())
{
this.hLpOT=false
clearTimeout(this.YGSaT)
this.YGSaT=false;
}
}
this.onFullScreenKeydown=function(k)
{
if(k==27)
{
this.UmJUX()
return false;
}
YWsfI(this.OFaQW,[k])
return false;
}
}
function cCwUa(e)
{
var delta=0;
if(!e) e=window.event;
if(e.wheelDelta){
delta=e.wheelDelta/120;
if(window.opera) delta=-delta;
}else if(e.detail){
delta=-e.detail/3;
}
if(navigator.userAgent.match(/opera/i)) delta=-delta;
var b_default=true;
if(wa_global_photo_album.fullpage_object)
{
var BrPun=wa_global_photo_album.fullpage_object
var OFaQW=BrPun.OFaQW
var QTcHN=BrPun.PdJLM_preview_obj
if(QTcHN.LQlfX)
{
var aIeIN=html_getLayer(QTcHN.OqUEd)
if(aIeIN)
{
var scrollVal=-(3*delta)
if(isMSIE())scrollVal*=3
aIeIN.scrollTop+=scrollVal
}
}
else
{
if(delta>0) tkxSo(OFaQW);
if(delta<0) CBAlR(OFaQW);
}
}
if(b_default)
if(e.preventDefault)
e.preventDefault();
e.returnValue=!b_default;
}
function IBRAJ(RKVbH)
{
if(RKVbH==false)
{
var xKZmm=window;
if(xKZmm.removeEventListener)
xKZmm.removeEventListener('DOMMouseScroll',cCwUa,false);
xKZmm.onmousewheel=document.onmousewheel=null;
}
else
{
var xKZmm=window;
if(xKZmm.addEventListener)
xKZmm.addEventListener('DOMMouseScroll',cCwUa,false);
xKZmm.onmousewheel=document.onmousewheel=cCwUa;
}
}
function Xbkwx(MwnNT,XQgfx,uHDnl,mtAkU,KYkeu,wfbUl)
{
var hSisX=""
hSisX+="(";
hSisX+=MwnNT+";"+XQgfx+";"+uHDnl+";"+mtAkU+";";
hSisX+=KYkeu+";";
hSisX+=wfbUl;
hSisX+=")";
return hSisX;
}
function WA_photoAlbumAction(OFaQW,wHJEn)
{
var BrPun=XwEDG(OFaQW)
var JesRW=BrPun.sDtFF[wHJEn]
var n_action=JesRW.n_action
if((n_action=="<")||(n_action=="up"))
{
BrPun.ErPIR=Math.max(0,BrPun.ErPIR-1)
mDLER(OFaQW)
}
if((n_action==">")||(n_action=="down"))
{
BrPun.ErPIR=Math.min(BrPun.TSqTk-1,BrPun.ErPIR+1)
mDLER(OFaQW)
}
if(n_action=="diapo")
{
CNHvc(OFaQW)
}
if(n_action=="+")
{
BrPun.fxoNJ()
}
}
function WA_photoAlbumIncrease(OFaQW,wHJEn)
{
var BrPun=XwEDG(OFaQW)
BrPun.NEkTH=wHJEn
BrPun.fxoNJ()
}
function CNHvc(OFaQW)
{
var BrPun=XwEDG(OFaQW)
if(BrPun.UfqHx()==false)
{
var lpcbE=0;
var FTlvg=BrPun;
while(FTlvg.vmkKN())
{
FTlvg=FTlvg.fxoNJ()
lpcbE++}
if(lpcbE>0)
{
FTlvg.SEMSN_decrease_view_when_diaporama_stop=lpcbE;
WA_goNextDiaporama(OFaQW)
FTlvg.oMCxp()
return;
}
}
if(BrPun.UfqHx())
{
hKoLF(OFaQW)
}
else
{
WA_goNextDiaporama(OFaQW)
}
if(BrPun.MLwxH())
{
var JesRW=BrPun.sDtFF_by_action["diapo"]
JesRW.draw()
}
}
function hKoLF(OFaQW)
{
var BrPun=XwEDG(OFaQW)
if(BrPun.UfqHx())
{
BrPun.cJOGf()
if(BrPun.SEMSN_decrease_view_when_diaporama_stop)
{
var FTlvg=BrPun;
for(var n=0;n<BrPun.SEMSN_decrease_view_when_diaporama_stop;n++)
{
FTlvg=FTlvg.UmJUX() 
}
return;
}
}
if(BrPun.MLwxH())
{
var JesRW=BrPun.sDtFF_by_action["diapo"]
JesRW.draw()
}
}
function WA_goNextDiaporama(OFaQW)
{
var ggOXv=vJgkT(OFaQW)
var fcnwF=PrIOn(OFaQW)
var BrPun=XwEDG(OFaQW)
var wHJEn=(BrPun.NEkTH+1)%fcnwF.length;
if(ggOXv.diaporama.random)
{
wHJEn=Math.round((fcnwF.length-1)*Math.random());
}
WA_photoAlbumActionThumb(OFaQW,wHJEn)
BrPun.YGSaT=wa_timeout("WA_goNextDiaporama('"+OFaQW+"')",ggOXv.diaporama.time*1000)
}
function rJCTW(OFaQW,wHJEn)
{
var BrPun=XwEDG(OFaQW)
if(wHJEn<0)
{
BrPun.ivkqJ()
return false;
}
if(wHJEn>BrPun.fGajs-1)
{
BrPun.ivkqJ()
return false;
}
WA_photoAlbumActionThumb(OFaQW,wHJEn)
return true;
}
function CBAlR(OFaQW)
{
var BrPun=XwEDG(OFaQW)
if(BrPun.UfqHx()) return false;
return rJCTW(OFaQW,BrPun.NEkTH+1)
}
function tkxSo(OFaQW)
{
var BrPun=XwEDG(OFaQW)
if(BrPun.UfqHx()) return false;
return rJCTW(OFaQW,BrPun.NEkTH-1)
}
function WA_clickAlbumPreview(OFaQW)
{
var BrPun=XwEDG(OFaQW)
if(BrPun.YWRXV()) return;
if(BrPun.UfqHx())
{
hKoLF(OFaQW)
}
var wHJEn_pos=BrPun.ImZjn
if(wHJEn_pos!=-1)
{
if(wHJEn_pos==2)CBAlR(OFaQW)
if(wHJEn_pos==1)
{
if(BrPun.RLJZU())
{
BrPun.UmJUX()
}
else
if(BrPun.vmkKN())
{
BrPun.fxoNJ()
}
}
if(wHJEn_pos==0)tkxSo(OFaQW)
}
}
function WA_mouseoutAlbumPreview(e,OFaQW)
{
var BrPun=XwEDG(OFaQW)
BrPun.qWWCA.setVisible(false)
BrPun.ImZjn=-1;
}
function WA_mousemoveAlbumPreview(e,OFaQW)
{
var posx=0;
var posy=0;
if(!e)  e=window.event;
if(e.pageX||e.pageY){
posx=e.pageX;
posy=e.pageY;
}
else if(e.clientX||e.clientY){
posx=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
posy=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;
}
var BrPun=XwEDG(OFaQW)
var xKZmm_bg=document.getElementById(BrPun.qWWCA.divId())
var pt=html_findPos(xKZmm_bg.offsetParent)
var x=posx-pt.x+1;
var y=posy-pt.y+1;
var n_pos=-1
var LprtQ=false;
var mMuYO=0;
var VafKg=30;
if(BrPun.QFmSc!=true)
if(BrPun.UfqHx()==false)
{
if((x>0)&&(x<BrPun.TjSkA_preview.width))
if((y>0)&&(y<BrPun.TjSkA_preview.height))
{
n_pos=1;
if(x<BrPun.TjSkA_preview.width*0.3)n_pos=0;
if(x>BrPun.TjSkA_preview.width*(1-0.3))n_pos=2;
}
if((x<mMuYO)||(x>BrPun.TjSkA_preview.width-mMuYO-VafKg))LprtQ=true;
if((y<mMuYO)||(y>BrPun.TjSkA_preview.height-mMuYO-VafKg))LprtQ=true;
}
BrPun.mmZxI=new Point(x,y);
BrPun.ImZjn=n_pos;
BrPun.eGVpv=LprtQ;
BrPun.Wuvrn();
}
function mDLER(OFaQW)
{
var BrPun=XwEDG(OFaQW)
var gclCQ=document.getElementById(BrPun.UeqRN)
if(!gclCQ)return;
var RdGDr_name;
var wYhvR=0;
var size_thumb=BrPun.JKLvk_thumb;
var FOITM=BrPun.FOITM;
var cCMDx=0;
var AVHGF=(size_thumb+2*BrPun.JKLvk_border_thumbnail+FOITM);
var xCdLo=BrPun.LDiWM*BrPun.Sgmko;
if(BrPun.fNcPF)
{
cCMDx=BrPun.ErPIR*BrPun.LDiWM*AVHGF
}
else
{
cCMDx=BrPun.ErPIR*BrPun.Sgmko*AVHGF
}
if(BrPun.fNcPF)
{
RdGDr_name="scrollLeft"
wYhvR=gclCQ.scrollLeft
}
else
{
RdGDr_name="scrollTop"
wYhvR=gclCQ.scrollTop
}
if(wYhvR==cCMDx)
{
return;
}
if(BrPun.m_tween_slider)
{
BrPun.m_tween_slider.stop()
}
var eFlKd=0.7;
BrPun.m_tween_slider=new Tween(gclCQ,RdGDr_name,Tween.strongEaseOut,wYhvR,cCMDx,eFlKd);
BrPun.m_tween_slider.onMotionFinished=JmEWV
BrPun.m_tween_slider.BrPun=BrPun
BrPun.m_tween_slider.start() 
}
function JmEWV()
{
var BrPun=this.BrPun
BrPun.TqhCe()
}
function JMBQU(OFaQW)
{
return wa_global_photo_album[OFaQW]
}
function XwEDG(OFaQW)
{
return wa_global_photo_album[OFaQW].album_object
}
function PrIOn(OFaQW)
{
return wa_global_photo_album[OFaQW].def
}
function cwOqg(OFaQW)
{
return wa_global_photo_album[OFaQW].src_folder
}
function vJgkT(OFaQW)
{
return wa_global_photo_album[OFaQW].layout
}
function twDpa(PochL)
{
var OFaQW=PochL[0]
WA_addHandler(OFaQW,"mousewheel",SKBTq)
WA_addHandler(OFaQW,"keydown",YWsfI)
var iCBHU="photo-album-main-"+OFaQW
var aCQLL=JMBQU(OFaQW)
var TjSkA=new Rect()
TjSkA.copy(aCQLL.size_container) 
var BrPun=new RYhPk(OFaQW,aCQLL) 
aCQLL.album_object=BrPun;
aCQLL.kIwgC=BrPun 
BrPun.TjSkA_container.copy(TjSkA)
BrPun.skFcp=aCQLL.layout.selector
BrPun.LeNEL=aCQLL.layout.preview
BrPun.BKsoB(iCBHU) 

var BrPun=XwEDG(OFaQW)
var ObSbb=document.wa_global_query_info
if(ObSbb)
{
if(OFaQW==ObSbb.m_unid)
{
BrPun.NEkTH=ObSbb.m_index_item
BrPun.fxoNJ()
return;
}
}
if(BrPun.YWRXV())
{
CNHvc(OFaQW)
return;
}
}
function WA_registerAlbum(OFaQW)
{
XwEDG(OFaQW).aLruM()
}
function YWsfI(OFaQW,PochL)
{
var QcNFl=PochL[0]
if(QcNFl==37) return tkxSo(OFaQW);
if(QcNFl==39) return CBAlR(OFaQW);
return true;
}
function SKBTq(OFaQW,vgfaY)
{
var vaGli=vgfaY[0] 
var BrPun=XwEDG(OFaQW)
if(BrPun.PdJLM_preview_obj)
{
var QTcHN=BrPun.PdJLM_preview_obj
if(QTcHN.LQlfX)
{
var aIeIN=html_getLayer(QTcHN.OqUEd)
aIeIN.scrollTop+=-(3*vaGli)
return true;
}
}
if(vaGli>0)return tkxSo(OFaQW);
if(vaGli<0)return CBAlR(OFaQW);
return true;
}
function WA_PhotoAlbum_resizeUI()
{
if(wa_global_photo_album.fullpage_object)
{
var BrPun=wa_global_photo_album.fullpage_object
if(wa_global_photo_album.WUprt)
{
clearTimeout(wa_global_photo_album.WUprt);
}
var TjSkA=new Rect(0,0,getWindowSize().width,getWindowSize().height)
BrPun.TjSkA_container.copy(TjSkA)
BrPun.EVjKB()
wa_global_photo_album.WUprt=wa_timeout("WA_PhotoAlbum_delayed_resizeUI()",1000)
}
}
function WA_PhotoAlbum_delayed_resizeUI()
{
if(wa_global_photo_album.fullpage_object)
{
wa_global_photo_album.WUprt=false
var BrPun=wa_global_photo_album.fullpage_object
BrPun.iXpjH()
}
}
function WA_loadPhotoAlbums()
{
for(var QcNFl in wa_global_photo_album)
{
var aCQLL=wa_global_photo_album[QcNFl]
var gISYU=Translator.m_lang_for_filename
if(gISYU.length>0)gISYU="_"+gISYU;
WA_loadScript(aCQLL.src_folder+'/photo-album-definition'+gISYU+'.js?v='+aCQLL.id_modif,twDpa,[QcNFl]);
}
}

-->
