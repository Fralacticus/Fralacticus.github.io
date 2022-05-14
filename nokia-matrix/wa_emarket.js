<!--

function bYRXN(PochL)
{
var OFaQW=PochL[0]
var AvuPh=wa_global_market.markets[OFaQW]
var RIftq=new RvQNM(AvuPh)
AvuPh.obj=RIftq
RIftq.BKsoB()
var ObSbb=document.wa_global_query_info
if(ObSbb)
{
var PEFjJ="wa-id-"+OFaQW;
if(PEFjJ==ObSbb.m_unid)
{
WA_showMarketProduct(OFaQW,ObSbb.m_index_item)
return;
}
}
}
function WA_loadMarket()
{
for(var QcNFl in wa_global_market.markets)
{
var RIftq=wa_global_market.markets[QcNFl]
if(RIftq)
{
var gISYU=Translator.m_lang_for_filename
if(gISYU.length>0)gISYU="_"+gISYU;
WA_loadScript(RIftq.src_folder+'/market-definition'+gISYU+'.js?v='+RIftq.id_modif,bYRXN,[QcNFl]);
}
}
WA_refreshNumberMarketItemsInCart()
}
function WA_basicFormatPrice(v)
{
v=Math.round(v*100)/100
var result="";
var xixoC=".";
var s=v+"";
s=s.replace(/,/g,".")
var n=s.indexOf(".");
if(n>-1)
{
s=s+"00";
s=s.substring(0,n+3);
}
else
{
s+=xixoC+"00"
}
s=s.replace(/\./g,CONST_WA_GLOBAL_SETTINGS.currency_decimal_symbol)
result=s;
return result;
}
function WA_formatPrice(v)
{
var vnlHq=CONST_WA_GLOBAL_SETTINGS.currency_mnemonic
var result=WA_basicFormatPrice(v);
if((CONST_WA_GLOBAL_SETTINGS.currency_code=="GBP")||(CONST_WA_GLOBAL_SETTINGS.currency_code=="USD"))
{
result=vnlHq+result;
}
else
if(CONST_WA_GLOBAL_SETTINGS.currency_code=="BRL")
{
result=vnlHq+" "+result;
}
else
{
result=result+" "+vnlHq;
}
return result;
}
function ssnxG(c,ax,ay,bx,by,dashLength){
var dx=ax-bx;
var dy=ay-by;
var angle=Math.atan2(dy,dx)/(Math.PI/180)+90;
if(angle>180) angle-=360;
c.moveTo(ax,ay);
for(var i=0;i*dashLength<Math.sqrt(dx*dx+dy*dy);i++){
var cx=ax-(i*dashLength)*Math.sin(angle*(Math.PI/180));
var cy=ay+(i*dashLength)*Math.cos(angle*(Math.PI/180));
if(i%2==0){c.lineTo(cx,cy);
}else{
c.moveTo(cx,cy);
}
}
}
function RLsFI(RIftq,eKpaI,IrjGk,OFaQW)
{
this.uKFGj=function()
{
var UjpuG=""
var AAubF=false;
var xXWOF=this.market.info.folder;

var kUeRd="WA_showMarketProduct('"+xXWOF+"',"+IrjGk+")"
AAubF=new WA_GraphicElement(this.OFaQW+"-sep",60,false)
AAubF.expub=this.expub
AAubF.draw=function()
{
var expub=this.expub
var SPXLa=expub.prod_global_separator_pt1
var YtOlK=expub.prod_global_separator_pt2
var gclCQ=document.getElementById(this.canvasId())
var GThRl=gclCQ.getContext('2d');
GThRl.strokeStyle=expub.prod_global_separator_col
ssnxG(GThRl,SPXLa.x-0.5,SPXLa.y+0.5,YtOlK.x-0.5,YtOlK.y+0.5,2)
GThRl.stroke()
}
AAubF.setOnClick(kUeRd);
var JUcuk=this.expub.r_prod_inner.clone()
JUcuk.translate(this.ATVna.x,this.ATVna.y)
AAubF.setRect(JUcuk.x,JUcuk.y,JUcuk.width+1,JUcuk.height+1)
UjpuG+=AAubF.toHtml()
this.SYpTC.push(AAubF) 

AAubF=new WA_GraphicElement(this.OFaQW+"-zone0",10,false)
AAubF.expub=this.expub
AAubF.draw=function()
{
var expub=this.expub
WA_bg(this.canvasId(),this.rect().width,this.rect().height,expub.prod_global_corner,1,expub.prod_global_border_col,[expub.prod_global_gradient],this.shadow())
}
var JUcuk=this.expub.r_prod_inner.clone()
JUcuk.translate(this.ATVna.x,this.ATVna.y)
AAubF.setRect(JUcuk.x,JUcuk.y,JUcuk.width+1,JUcuk.height+1)
UjpuG+=AAubF.toHtml()
this.SYpTC.push(AAubF)
if(this.expub.lay_rect_desc.isValid())
{


AAubF=new WA_GraphicElement(this.OFaQW+"-zone1",25,false)
AAubF.expub=this.expub
AAubF.draw=function()
{
var expub=this.expub
WA_bg(this.canvasId(),this.rect().width,this.rect().height,expub.prod_desc_corner,1,expub.prod_desc_border_col,[expub.prod_desc_gradient],this.shadow())
}
JUcuk=this.expub.lay_rect_desc.clone()
JUcuk.translate(this.ATVna.x,this.ATVna.y)
AAubF.setRect(JUcuk.x,JUcuk.y,JUcuk.width+1,JUcuk.height+1)
UjpuG+=AAubF.toHtml()
this.SYpTC.push(AAubF) 
JUcuk=this.expub.lay_rect_desc_inner.clone()
JUcuk.translate(this.ATVna.x,this.ATVna.y)
UjpuG+="<div style=\"position:absolute;z-index:50;";
UjpuG+="left:"+JUcuk.x+"px;top:"+JUcuk.y+"px;";
UjpuG+="cursor:pointer;";
UjpuG+="width:"+JUcuk.width+"px;"
UjpuG+="height:"+JUcuk.height+"px;";
UjpuG+="font-family:"+this.expub.prod_desc_font_family+";"
UjpuG+="font-size:"+this.expub.prod_desc_font_size+"px;"
UjpuG+="color:"+this.expub.prod_desc_col+";"
UjpuG+="margin:3px;"
UjpuG+="padding:0px;"
UjpuG+="\" ";
UjpuG+=">";
UjpuG+="<div style=\"";
UjpuG+="font-weight:bold;"
UjpuG+="\">";
UjpuG+=this.eKpaI.title
UjpuG+="</div>";
UjpuG+="<div style=\"";
UjpuG+="\">";
UjpuG+=this.eKpaI.sub_title
UjpuG+="</div>";
UjpuG+="</div>";
}
if(this.expub.lay_rect_price.isValid())
{

AAubF=new WA_GraphicElement(this.OFaQW+"-zone2",25,false)
AAubF.expub=this.expub
AAubF.draw=function()
{
var expub=this.expub
WA_bg(this.canvasId(),this.rect().width,this.rect().height,expub.prod_price_corner,1,expub.prod_price_border_col,[expub.prod_price_gradient],this.shadow())
}
JUcuk=this.expub.lay_rect_price.clone()
JUcuk.translate(this.ATVna.x,this.ATVna.y) 
AAubF.setRect(JUcuk.x+1,JUcuk.y+1,JUcuk.width,JUcuk.height)
UjpuG+=AAubF.toHtml()
this.SYpTC.push(AAubF)
UjpuG+="<div style=\"position:absolute;z-index:50;";
UjpuG+="left:"+JUcuk.x+"px;top:"+JUcuk.y+"px;";
UjpuG+="width:"+JUcuk.width+"px;";
UjpuG+="height:"+JUcuk.height+"px;";
UjpuG+="line-height:"+JUcuk.height+"px;";
UjpuG+="font-family:"+this.expub.prod_desc_font_family+";"
UjpuG+="font-size:"+this.expub.prod_price_font_size+"px;"
UjpuG+="color:"+this.expub.prod_price_col+";"
UjpuG+="text-align:center;"
UjpuG+="\">";
if(this.eKpaI.unavail)
{
UjpuG+="/" 
}
else
{
UjpuG+=WA_formatPrice(this.eKpaI.price)
}
UjpuG+="</div>";
}
if(this.expub.lay_rect_img.isValid())
{

AAubF=new WA_GraphicElement(this.OFaQW+"-zone3",25,this.expub.img_has_shadow)
AAubF.expub=this.expub
AAubF.eKpaI=this.eKpaI
AAubF.draw=function()
{
var expub=this.expub
var eKpaI=this.eKpaI
if(eKpaI.img_thumb.length>0)
{
if(this.shadow())
{
WA_bg(this.canvasId(),this.JKLvk_thumb.width,this.JKLvk_thumb.height,0,0,'',["#000000"],this.shadow(),0,1.0,false)
}
}
else
{
WA_bg(this.canvasId(),this.rect().width,this.rect().height,0,0,'',["rgba(60,60,60,0.2)"],false)
}
}
JUcuk=this.expub.lay_rect_img.clone()
JUcuk.translate(this.ATVna.x,this.ATVna.y)
if(this.eKpaI.img_thumb.length>0)
{
var xDhSq=new Size(JUcuk.width+1,JUcuk.height+1)
AAubF.JKLvk_thumb=this.eKpaI.size_thumb.clone()
if(this.expub.crop_thumb)
{
AAubF.JKLvk_thumb=xDhSq
}
else
{
AAubF.JKLvk_thumb.scale(xDhSq,true)
}
var oFShB=Math.round((JUcuk.width-AAubF.JKLvk_thumb.width)/2);
var NMsXP=Math.round((JUcuk.height-AAubF.JKLvk_thumb.height)/2);
JUcuk.translate(oFShB,NMsXP)
AAubF.setRect(JUcuk.x,JUcuk.y,AAubF.JKLvk_thumb.width,AAubF.JKLvk_thumb.height)
}
else
{
AAubF.setRect(JUcuk.x,JUcuk.y,JUcuk.width+1,JUcuk.height+1)
}
if(this.eKpaI.img_thumb.length>0)
{
UjpuG+="<div style=\"position:absolute;z-index:100;";
UjpuG+="left:"+JUcuk.x+"px;top:"+JUcuk.y+"px;\" >";
UjpuG+="<a href=\"javascript:"+kUeRd+"\" >";
UjpuG+="<img border=0 src='"+this.eKpaI.img_thumb+"' width='"+AAubF.JKLvk_thumb.width+"px' height='"+AAubF.JKLvk_thumb.height+"px'>"
UjpuG+="</a>"
UjpuG+="</div>"
}
UjpuG+=AAubF.toHtml()
this.SYpTC.push(AAubF)
}
return UjpuG;
}
this.aLruM=function()
{
for(var i=0;i<this.SYpTC.length;i++)
{
var AAubF=this.SYpTC[i]
AAubF.registerDynamicCanvas()
}
}
this.OFaQW=OFaQW;
this.id=OFaQW;
this.index=IrjGk
this.eKpaI=eKpaI;
this.market=RIftq;
this.expub=RIftq.expub
this.SYpTC=new Array()
}
function RvQNM(TNiIJ)
{
this.BKsoB=function()
{
var pVAjW="market-main-"+this.OFaQW
var jvZUt=html_getLayer(pVAjW)
var KssjI=this.Nwduq.products
var UJRwD=0;
var ZpXdY=0;
var UjpuG=""
var MSgRL=0;
var NlFBm=0;
var HZMfA=this.expub.r_prod 
for(var i=0;i<KssjI.length;i++)
{
var eKpaI=KssjI[i]
var eSAKR=new RLsFI(this,eKpaI,i,this.OFaQW+"prod"+i)
eKpaI.obj=eSAKR
eSAKR.ATVna=new Point(UJRwD,ZpXdY)
UjpuG+=eSAKR.uKFGj()
NlFBm++;
if(NlFBm==this.expub.cols)
{
NlFBm=0;
MSgRL++;
ZpXdY+=HZMfA.height
UJRwD=0;
}
else
{
UJRwD+=HZMfA.width
}
}
jvZUt.innerHTML=UjpuG
WA_exec_callback_opera_compliant(this,this.laxlm)
}
this.laxlm=function()
{
var KssjI=this.Nwduq.products
for(var i=0;i<KssjI.length;i++)
{
var eKpaI=KssjI[i]
eKpaI.obj.aLruM()
}
}
this.struct=TNiIJ;
this.TNiIJ=TNiIJ;
this.OFaQW=TNiIJ.id;
this.id=TNiIJ.id;
this.Nwduq=TNiIJ.info
this.info=TNiIJ.info
this.expub=TNiIJ.info.design
}
function WA_loadScriptDlgMarket(MJfGc,OFaQW,wHJEn)
{
if(document.wa_dlg_market_js_loaded==true)
{
flrDx([MJfGc,OFaQW,wHJEn])
return;
}
WA_Dialog.progress();
WA_loadScript('wa_dlg_emarket.js?v='+urlAntiCacheForPreview()+wa_global_market.id_modif_dlg_js,flrDx,[MJfGc,OFaQW,wHJEn]);
}
function WA_showMarketCart()
{
WA_loadScriptDlgMarket("show_cart")
}
function WA_showMarketProduct(OFaQW,wHJEn)
{
WA_loadScriptDlgMarket("show_prod",OFaQW,wHJEn)
}
function flrDx(PochL)
{
document.wa_dlg_market_js_loaded=true;
var MJfGc=PochL[0];
if(MJfGc=="show_cart") WA_displayDialogMarketCart()
if(MJfGc=="show_prod") WA_displayDialogMarketProduct(PochL[1],PochL[2])
}
function WA_getNumberMarketItemsInCart()
{
var BrPun=parseInt(WA_GetCookie("crbst-card-nb_items"))
if(isNaN(BrPun)) return 0;
return BrPun;
}
function cYWXx(MJfGc,bIZZV)
{
var jvZUt=html_getLayer(MJfGc)
if(jvZUt)
{
if(!bIZZV)bIZZV=Translator.tr("My card\u0020(%) article(s)");
var CXksA=bIZZV
CXksA=CXksA.replace(/%/g,WA_getNumberMarketItemsInCart())
jvZUt.innerHTML=CXksA
}
}
function WA_refreshNumberMarketItemsInCart()
{
for(var MJfGc in document.wa_global_button_market_declaration)
{
var bIZZV=document.wa_global_button_market_declaration[MJfGc]
if(MJfGc.indexOf("market-cart-link")==0)
{
cYWXx(MJfGc,bIZZV)
}
else
{
var pxpmc=html_getLayer(MJfGc+"-div0"+"-text")
if(!pxpmc)pxpmc=MJfGc+"-div0"
var FPxFN=html_getLayer(MJfGc+"-div1"+"-text")
if(!FPxFN)FPxFN=MJfGc+"-div1"
cYWXx(pxpmc,bIZZV)
cYWXx(FPxFN,bIZZV)
}
}
}

-->
