<!--

function Delegate(){}
Delegate.create=function(o,f){
var Hcvbs=new Array();
var WwFRJ=arguments.length;
for(var i=2;i<WwFRJ;i++) Hcvbs[i-2]=arguments[i];
return function(){
var vsiAX=[].concat(arguments,Hcvbs);
f.apply(o,vsiAX);
}
}
Tween=function(obj,prop,func,begin,finish,duration,suffixe){
this.init(obj,prop,func,begin,finish,duration,suffixe)
}
var t=Tween.prototype;
t.obj=new Object();
t.prop='';
t.func=function(t,b,c,d){return c*t/d+b;};
t.begin=0;
t.change=0;
t.prevTime=0;
t.prevPos=0;
t.looping=false;
t.eFlKd=0;
t.nNDRd=0;
t.PxCvj=0;
t.UVDED=0;
t.vSEJP=0;
t.SVOkH=0;
t.QieRo=false;
t.name='';
t.suffixe='';
t.njTHE=new Array();
t.setTime=function(t){
this.prevTime=this.nNDRd;
if(t>this.getDuration()){
if(this.looping){
this.rewind(t-this.eFlKd);
this.update();
this.wSTDq('onMotionLooped',{target:this,type:'onMotionLooped'});
}else{
this.nNDRd=this.eFlKd;
this.update();
this.stop();
this.wSTDq('onMotionFinished',{target:this,type:'onMotionFinished'});
}
}else if(t<0){
this.rewind();
this.update();
}else{
this.nNDRd=t;
this.update();
}
}
t.isRunning=function(){
return this.QieRo;
}
t.getTime=function(){
return this.nNDRd;
}
t.setDuration=function(d){
this.eFlKd=(d==null||d<=0)?100000:d;
}
t.getDuration=function(){
return this.eFlKd;
}
t.setPosition=function(p){
this.prevPos=this.PxCvj;
var a=this.suffixe!=''?this.suffixe:'';
this.obj[this.prop]=Math.round(p)+a;
this.PxCvj=p;
this.wSTDq('onMotionChanged',{target:this,type:'onMotionChanged'});
}
t.getPosition=function(t){
if(t==undefined) t=this.nNDRd;
return this.func(t,this.begin,this.change,this.eFlKd);
};
t.setFinish=function(f){
this.change=f-this.begin;
};
t.geFinish=function(){
return this.begin+this.change;
};
t.init=function(obj,prop,func,begin,finish,duration,suffixe){
if(!arguments.length) return;
this.njTHE=new Array();
this.addListener(this);
if(suffixe) this.suffixe=suffixe;
this.obj=obj;
this.prop=prop;
this.begin=begin;
this.PxCvj=begin;
this.setDuration(duration);
if(func!=null&&func!=''){
this.func=func;
}
this.setFinish(finish);
}
t.start=function(){
this.rewind();
this.startEnterFrame();
this.wSTDq('onMotionStarted',{target:this,type:'onMotionStarted'});
}
t.rewind=function(t){
this.stop();
this.nNDRd=(t==undefined)?0:t;
this.fixTime();
this.update();
}
t.fforward=function(){
this.nNDRd=this.eFlKd;
this.fixTime();
this.update();
}
t.update=function(){
this.setPosition(this.getPosition(this.nNDRd));
}
t.startEnterFrame=function(){
this.stopEnterFrame();
this.QieRo=true;
this.onEnterFrame();
}
t.onEnterFrame=function(){
if(this.QieRo){
this.nextFrame();
wa_timeout(Delegate.create(this,this.onEnterFrame),0);
}
}
t.nextFrame=function(){
this.setTime((this.getTimer()-this.vSEJP)/1000);
}
t.stop=function(){
this.stopEnterFrame();
this.wSTDq('onMotionStopped',{target:this,type:'onMotionStopped'});
}
t.stopEnterFrame=function(){
this.QieRo=false;
}
t.continueTo=function(finish,duration){
this.begin=this.PxCvj;
this.setFinish(finish);
if(this.eFlKd!=undefined)
this.setDuration(duration);
this.start();
}
t.resume=function(){
this.fixTime();
this.startEnterFrame();
this.wSTDq('onMotionResumed',{target:this,type:'onMotionResumed'});
}
t.yoyo=function(){
this.continueTo(this.begin,this.nNDRd);
}
t.addListener=function(o){
this.removeListener(o);
return this.njTHE.push(o);
}
t.removeListener=function(o){
var a=this.njTHE;
var i=a.length;
while(i--){
if(a[i]==o){
a.splice(i,1);
return true;
}
}
return false;
}
t.wSTDq=function(){
var arr=new Array();
for(var i=0;i<arguments.length;i++){
arr.push(arguments[i])
}
var e=arr.shift();
var a=this.njTHE;
var l=a.length;
for(var i=0;i<l;i++){
if(a[i][e])
a[i][e].apply(a[i],arr);
}
}
t.fixTime=function(){
this.vSEJP=this.getTimer()-this.nNDRd*1000;
}
t.getTimer=function(){
return new Date().getTime()-this.nNDRd;
}
Tween.backEaseIn=function(t,b,c,d,a,p){
if(s==undefined) var s=1.70158;
return c*(t/=d)*t*((s+1)*t-s)+b;
}
Tween.backEaseOut=function(t,b,c,d,a,p){
if(s==undefined) var s=1.70158;
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
}
Tween.backEaseInOut=function(t,b,c,d,a,p){
if(s==undefined) var s=1.70158;
if((t/=d/2)<1) return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
}
Tween.elasticEaseIn=function(t,b,c,d,a,p){
if(t==0) return b;
if((t/=d)==1) return b+c;
if(!p) p=d*.3;
if(!a||a<Math.abs(c)){
a=c;var s=p/4;
}
else
var s=p/(2*Math.PI)*Math.asin(c/a);
return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
}
Tween.elasticEaseOut=function(t,b,c,d,a,p){
if(t==0) return b;if((t/=d)==1) return b+c;if(!p) p=d*.3;
if(!a||a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);
}
Tween.elasticEaseInOut=function(t,b,c,d,a,p){
if(t==0) return b;if((t/=d/2)==2) return b+c;if(!p) var p=d*(.3*1.5);
if(!a||a<Math.abs(c)){var a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
if(t<1) return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
}
Tween.bounceEaseOut=function(t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;
}else if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;
}else{
return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;
}
}
Tween.bounceEaseIn=function(t,b,c,d){
return c-Tween.bounceEaseOut(d-t,0,c,d)+b;
}
Tween.bounceEaseInOut=function(t,b,c,d){
if(t<d/2) return Tween.bounceEaseIn(t*2,0,c,d)*.5+b;
else return Tween.bounceEaseOut(t*2-d,0,c,d)*.5+c*.5+b;
}
Tween.strongEaseInOut=function(t,b,c,d){
return c*(t/=d)*t*t*t*t+b;
}
Tween.regularEaseIn=function(t,b,c,d){
return c*(t/=d)*t+b;
}
Tween.regularEaseOut=function(t,b,c,d){
return-c*(t/=d)*(t-2)+b;
}
Tween.regularEaseInOut=function(t,b,c,d){
if((t/=d/2)<1) return c/2*t*t+b;
return-c/2*((--t)*(t-2)-1)+b;
}
Tween.strongEaseIn=function(t,b,c,d){
return c*(t/=d)*t*t*t*t+b;
}
Tween.strongEaseOut=function(t,b,c,d){
return c*((t=t/d-1)*t*t*t*t+1)+b;
}
Tween.strongEaseInOut=function(t,b,c,d){
if((t/=d/2)<1) return c/2*t*t*t*t*t+b;
return c/2*((t-=2)*t*t*t*t+2)+b;
}
OpacityTween.prototype=new Tween();
OpacityTween.prototype.constructor=Tween;
OpacityTween.superclass=Tween.prototype;
function OpacityTween(obj,func,fLgub,bNUBC,eFlKd){
this.targetObject=obj;
this.init(new Object(),'a',func,fLgub,bNUBC,eFlKd);
this.onMotionChanged=function(evt){
var v=evt.target.PxCvj;
var t=this.targetObject;
v=Math.round(v*100)/100
t.style['opacity']=v/100;
t.style['-moz-opacity']=v/100;
html_SetOpacity(t,v/100);
}
}
function html_canvas(OFaQW,hBJkw,jItZb)
{
return "<canvas id='"+OFaQW+"' width='"+hBJkw+"' height='"+jItZb+"'></canvas>"
}
function WA_canvas(OFaQW,hBJkw,jItZb)
{
document.write(html_canvas(OFaQW,hBJkw,jItZb))
}
function bSfES(GThRl,x0,y0,lx0,ly0)
{
var x=x0+lx0/2;var y=y0+ly0/2;var lx=lx0/2;var ly=ly0/2;var radius=lx0/2;var yRadius=ly0/2;
GThRl.beginPath();
var theta,xrCtrl,yrCtrl,angleMid,px,py,cx,cy;
theta=Math.PI/4;xrCtrl=radius/Math.cos(theta/2);yrCtrl=yRadius/Math.cos(theta/2);var angle=0;
GThRl.moveTo(x+radius,y);
for(var i=0;i<8;i++){
angle+=theta;angleMid=angle-(theta/2);cx=x+Math.cos(angleMid)*xrCtrl;cy=y+Math.sin(angleMid)*yrCtrl;px=x+Math.cos(angle)*radius;py=y+Math.sin(angle)*yRadius;
GThRl.quadraticCurveTo(cx,cy,px,py);
}
}
function WlxtS(c,x,y,lx,ly,arc,clowckwise)
{
c.beginPath()
ESKKL(c,x,y,lx,ly,arc,clowckwise)
}
function ESKKL(c,x,y,lx,ly,arc,clowckwise)
{
if(clowckwise)
{
c.moveTo(x+arc,y);c.lineTo(x+lx-arc,y);c.quadraticCurveTo(x+lx,y,x+lx,y+arc);c.lineTo(x+lx,y+ly-arc);c.quadraticCurveTo(x+lx,y+ly,x+lx-arc,y+ly);c.lineTo(x+arc,y+ly);c.quadraticCurveTo(x,y+ly,x,y+ly-arc);c.lineTo(x,y+arc);c.quadraticCurveTo(x,y,x+arc,y);
return;
}
c.moveTo(x,y+arc);c.lineTo(x,y+ly-arc);c.quadraticCurveTo(x,y+ly,x+arc,y+ly);c.lineTo(x+lx-arc,y+ly);c.quadraticCurveTo(x+lx,y+ly,x+lx,y+ly-arc);c.lineTo(x+lx,y+arc);c.quadraticCurveTo(x+lx,y,x+lx-arc,y);c.lineTo(x+arc,y);c.quadraticCurveTo(x,y,x,y+arc);
}
function isWebKit()
{
if(navigator.userAgent.match(/webkit/i)) return true;
return false;
}
function isMSIE()
{
return BrowserDetect.browser=="Explorer" 
}
function isMSIE8()
{
if((BrowserDetect.browser=="Explorer")&&(BrowserDetect.version==8))
{
return true;
}
return false;
}
function DefdE()
{
return isWebKit();
}
function isMobileWithoutFlash()
{
return isIPhone();
}
function isMobileBrowser()
{
return isIPhone();
}
function isIPhone()
{
if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))
return true;
return false;
}
function IPsET(lx,ly,parent,id_suffixe)
{
var ABfGQ=document.createElement('canvas');ABfGQ.width=lx;ABfGQ.height=ly;
return ABfGQ;
}
function VbWZk(eKXYS)
{
var TlqKu=(-eKXYS+45);
return new Point(Math.cos(TlqKu*(2*Math.PI)/360),Math.sin(TlqKu*(2*Math.PI)/360))
}
function TYODR(c,eKXYS)
{
var offset=VbWZk(eKXYS)
c.shadowOffsetX=2*offset.x;
c.shadowOffsetY=2*offset.y;
c.shadowBlur=4;
}
function WA_over_img_html(SlJfF,jpmDw,xwpOf)
{
if(!SlJfF.src)
{
var OJHnV=SlJfF.getElementsByTagName("IMG")
if(OJHnV.length==1)SlJfF=OJHnV[0]
}
if(SlJfF.src1==undefined)
{
SlJfF.src1=SlJfF.src;
SlJfF.src2=jpmDw;
}
if(xwpOf)
{
SlJfF.src=SlJfF.src2;
}
else
{
SlJfF.src=SlJfF.src1;
}
}
function WA_over_img(id,xwpOf)
{
var el=document.getElementById(id+"-canvas") 

var SlJfF=(xwpOf)?el.wa_s_img[1]:el.wa_s_img[0]
WA_img(id,el.wa_lx,el.wa_ly,el.wa_arc,el.wa_bord_siz,el.wa_bord_col,[SlJfF,SlJfF],el.wa_shadow,el.wa_rot,el.wa_reflex,xwpOf)
}
function HnrUa(OFaQW,lx,ly,arc,side)
{
this.id=OFaQW;
this.lx=lx;
this.ly=ly;
this.arc=arc;
var nSide=side
this.side=nSide
var reflexion=0.25
var sizeReflex=ly*reflexion;
this.decX=0
this.decY=0
this.sX=0;
this.sY=ly-sizeReflex;
this.sLx=lx;
this.sLy=sizeReflex;
this.gradX1=0
this.gradY1=this.sY
this.gradX2=0
this.gradY2=ly 

if(nSide==2)
{
this.decY=1 
}
if(nSide==1)
{
sizeReflex=lx*reflexion;
this.sX=lx-sizeReflex;
this.sY=0;
this.sLx=sizeReflex;
this.sLy=ly;
this.gradX1=this.sX
this.gradY1=0
this.gradX2=lx
this.gradY2=0
this.decX=1
}
if(nSide==0)
{
sizeReflex=ly*reflexion;
this.sX=0;
this.sY=0;
this.sLx=lx;
this.sLy=sizeReflex;
this.gradX1=0
this.gradY1=sizeReflex
this.gradX2=0
this.gradY2=0
this.decY=-1
}
if(nSide==3)
{
sizeReflex=lx*reflexion;
this.sX=0;
this.sY=0;
this.sLx=sizeReflex;
this.sLy=ly;
this.gradX1=sizeReflex
this.gradY1=0
this.gradX2=0
this.gradY2=0
this.decX=-1
}
this.sHIga=function(canv2)
{
if(isIPhone()) return;
if(/opera/i.test(navigator.userAgent)) return;
if(navigator.userAgent.match(/Firefox/i))
{
var div=document.getElementById(this.id)
if(div.style.MozTransform===undefined) return;
}
var ueLAq=document.getElementById(this.id+"-reflex")
var NraPH=ueLAq.getContext('2d');

var isFae=0;
var AZLKT=0;
if(this.side==2)
{
isFae=this.lx;
AZLKT=-this.ly*0.75;
}
else
if(this.side==0)
{
isFae=this.lx;
}
else
if(this.side==3)
{
isFae=0.25*this.lx;
}
else
if(this.side==1)
{
isFae=this.lx;
}
NraPH.translate(isFae,AZLKT)
NraPH.scale(-1,1)
NraPH.beginPath()
WlxtS(NraPH,1,1,this.lx-2,this.ly-2,this.arc)
NraPH.clip() 

NraPH.drawImage(canv2,this.sX,this.sY,this.sLx,this.sLy,this.sX,this.sY,this.sLx,this.sLy);
NraPH.globalCompositeOperation="destination-out";
var gradient=NraPH.createLinearGradient(this.gradX1,this.gradY1,this.gradX2,this.gradY2);
gradient.addColorStop(0,"rgba(255, 255, 255, 1)");
gradient.addColorStop(1,"rgba(255, 255, 255, 0.1)");
NraPH.fillStyle=gradient;
NraPH.beginPath()
NraPH.rect(this.sX-this.decX,this.sY-this.decY,this.sLx,this.sLy);
NraPH.fill();
NraPH.globalCompositeOperation="source-over";
NraPH.scale(-1,1)
NraPH.translate(-isFae,-AZLKT) 
}
}
function extractNum(st)
{
var len=st.length
if((len>0)&&(st.substring(len-2,len)=="px"))
{
return wa_evaluate(st.substring(0,len-2))
}
return 0;
}
function ghxRf(c2,lx,ly,bHFMI,bord_col,arc,arc2)
{
if(bHFMI>0)
{
c2.beginPath()
c2.fillStyle=bord_col;
c2.beginPath()
WlxtS(c2,0,0,lx,ly,arc)
ESKKL(c2,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2,true)
c2.fill()
}
}
function cieoH()
{
this.tx=0
this.ty=0
this.rotation=0
}
function XdXOo(id,lx,ly,rot,c2,canv2,shadow,matrix)
{
if(navigator.userAgent.match(/Firefox/i)||navigator.userAgent.match(/opera/i))
{
var div=document.getElementById(id)
if(div.style.MozTransform!=undefined) return;
if(matrix==undefined)
{
matrix=new cieoH()
}
div.style.webkitTransformOrigin="0 0"
div.style.webkitTransform="rotate(0deg)";
if(div.style.MozTransform!=undefined)
{
div.style.MozTransform="rotate(0deg)";
div.style.MozTransformOrigin="top left"
}
rot=Math.round(rot/90)*90 
var cYcSK=0;
if(shadow)cYcSK=6
var LaMie=id+"-canvas"
var el=document.getElementById(LaMie)
if(div.wa_pos==undefined)
{
div.wa_pos=new Point(extractNum(div.style.left),extractNum(div.style.top))
}
if(div.wa_size==undefined)
{
div.wa_size=new Size(extractNum(div.style.width),extractNum(div.style.height))
}
if(rot==90)
{
html_SetPosition(div,div.wa_pos.x-(ly)-cYcSK,div.wa_pos.y-cYcSK)
html_SetCanvasSize(el,div.wa_size.height+2*cYcSK,div.wa_size.width+2*cYcSK)
html_SetCanvasSize(canv2,div.wa_size.height+4*cYcSK,div.wa_size.width+4*cYcSK)
html_SetSize(div,div.wa_size.height+2*cYcSK,div.wa_size.width+2*cYcSK) 
matrix.tx=ly+2*cYcSK
matrix.ty=2*cYcSK
}
if(rot==180)
{
html_SetPosition(div,div.wa_pos.x-lx,div.wa_pos.y-ly)
matrix.tx=lx
matrix.ty=ly
}
if(rot==270)
{
html_SetPosition(div,div.wa_pos.x-cYcSK,div.wa_pos.y-lx-cYcSK)
html_SetCanvasSize(el,div.wa_size.height+2*cYcSK,div.wa_size.width+2*cYcSK)
html_SetCanvasSize(canv2,div.wa_size.height+4*cYcSK,div.wa_size.width+4*cYcSK)
html_SetSize(div,div.wa_size.height+2*cYcSK,div.wa_size.width+2*cYcSK) 
matrix.tx=2*cYcSK
matrix.ty=lx+2*cYcSK
}
matrix.rotation=rot*2*Math.PI/360
c2.translate(matrix.tx,matrix.ty)
c2.rotate(matrix.rotation)
}
}
function WA_img(id,lx,ly,arc,bHFMI,bord_col,s_img,shadow,rot,rXbmD,b_over)
{
var LaMie=id+"-canvas"
var el=document.getElementById(LaMie)
var c=el.getContext('2d');
var XWoUs=false;
if((rXbmD!=undefined)&&(rXbmD!=-1))
{
XWoUs=new HnrUa(LaMie,lx,ly,arc,rXbmD)
}
var cYcSK=0;
if(shadow)cYcSK=6 


if(el.wa_lx==undefined)
{
el.wa_lx=lx
el.wa_ly=ly
el.wa_arc=arc
el.wa_bord_siz=bHFMI
el.wa_bord_col=bord_col
el.wa_s_img=s_img
el.wa_shadow=shadow
el.wa_rot=rot
el.wa_reflex=rXbmD
c.translate(cYcSK,cYcSK)
}
var BrPun_img=document.getElementById(id+"-cache")
BrPun_img.onload=function()
{
c.clearRect(0,0,lx+2*cYcSK,ly+2*cYcSK)
var arc2=arc-bHFMI;
if(arc2<0)arc2=0;
this.width=lx-2*bHFMI
this.height=ly-2*bHFMI
if(isMSIE())
{
if(shadow) FVnLP(c,0,0,lx,ly,arc,false,rot)
var wfqcs=c.createPattern(this,'no-repeat');
c.fillStyle=wfqcs;
c.beginPath()
WlxtS(c,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2)
c.translate(bHFMI,bHFMI)
c.fill()
c.translate(-bHFMI,-bHFMI)
ghxRf(c,lx,ly,bHFMI,bord_col,arc,arc2)
}
else
if(navigator.userAgent.match(/Firefox/i)&&(shadow))
{
var VdVjf=new  cieoH()
XdXOo(id,lx,ly,rot,c,el,shadow,VdVjf)
if(shadow) FVnLP(c,0,0,lx,ly,arc,false,rot)
var c2=c
ghxRf(c2,lx,ly,bHFMI,bord_col,arc,arc2)
c2.beginPath()
WlxtS(c2,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2)
c2.clip()
c2.drawImage(this,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI);
c2.rotate(-VdVjf.rotation)
c2.translate(-VdVjf.tx,-VdVjf.ty)
}
else
{
var canv2=IPsET(lx,ly,el,"bis2");
var c2=canv2.getContext('2d');
var VdVjf=new  cieoH()
XdXOo(id,lx,ly,rot,c2,canv2,shadow,VdVjf)
c.clearRect(-cYcSK,-cYcSK,lx+2*cYcSK,ly+2*cYcSK)
ghxRf(c2,lx,ly,bHFMI,bord_col,arc,arc2)
c2.beginPath()
WlxtS(c2,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2)
c2.clip()
c2.drawImage(this,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI);
c2.rotate(-VdVjf.rotation)
c2.translate(-VdVjf.tx,-VdVjf.ty)
if(shadow) TYODR(c,rot)
c.drawImage(canv2,0,0);
c2.translate(VdVjf.tx,VdVjf.ty)
c2.rotate(VdVjf.rotation)
if(XWoUs)
{
XWoUs.sHIga(canv2)
}
}
}
BrPun_img.src=s_img[0];
}
function GerHA(aIeIN,eKXYS,okbQT,uVlLO)
{
aIeIN.style.left=okbQT+"px"
aIeIN.style.top=uVlLO+"px"
aIeIN.style.webkitTransformOrigin="0 0"
aIeIN.style.webkitTransform="rotate("+eKXYS+"deg)";
}
function RnLxD(c,type,lx,ly,corner)
{
if(type==1)
bSfES(c,0,0,lx,ly)
else
WlxtS(c,0,0,lx,ly,corner)
}
function XmAXr(el,c,type,lx,ly,corner,bg,rnNVV,rot)
{
if(DefdE()==false)
{
c.fillStyle=bg;
RnLxD(c,type,lx,ly,corner)
c.fill()
}
else
{
var canv2=IPsET(lx,ly,el,"bis");
var c2=canv2.getContext('2d');
c2.fillStyle=bg;
RnLxD(c2,type,lx,ly,corner)
c2.fill()
if(rnNVV) TYODR(c,rot)
c.drawImage(canv2,0,0);
c.shadowOffsetX=0;
c.shadowOffsetY=0;
c.shadowBlur=0;
}
}
function liCxp(c,type,lx,ly,jdSCX,bg,GaZDA,UjpuG_glow)
{
if(GaZDA)
{
var x1=GaZDA[0];var y1=GaZDA[1];var lx1=GaZDA[2];var ly1=GaZDA[3];var WWWIN=GaZDA[4];
var kHZmh=c.createLinearGradient(x1,y1,x1,y1+ly1);
kHZmh.addColorStop(0,"rgba(255,255,255,0.7)");kHZmh.addColorStop(1,"rgba(255,255,255,0.1)");
c.fillStyle=kHZmh;
if(type==1) bSfES(c,x1,y1,lx1,ly1)
else
WlxtS(c,x1,y1,lx1,ly1,WWWIN)
c.fill()
}
if(UjpuG_glow)
{
var x2=UjpuG_glow[0];var y2=UjpuG_glow[1];var lx2=UjpuG_glow[2];var ly2=UjpuG_glow[3];
var hNoch=UjpuG_glow[4];
var NlFBm_glow=new RGBColor(UjpuG_glow[5]);
NlFBm_glow.a=0;
var col1=UjpuG_glow[5];
var col2=NlFBm_glow.toRGB();
var jFBgf=c.createLinearGradient(x2,y2,x2,y2+ly2);
jFBgf.addColorStop(0,col2);
jFBgf.addColorStop(0.2,col2);
jFBgf.addColorStop(1,col1);
c.fillStyle=jFBgf;
if(type==1) bSfES(c,x2,y2,lx2,ly2)
else
WlxtS(c,x2,y2,lx2,ly2,hNoch)
c.fill()
}
}
function lLVDJ(sxeMg,OFaQW,PfSOd,hBJkw,jItZb,jdSCX,JgmYG,GaZDA,UjpuG_glow,rnNVV,eKXYS)
{
sxeMg.OFaQW=OFaQW;sxeMg.PfSOd=PfSOd;
sxeMg.hBJkw=hBJkw;sxeMg.jItZb=jItZb;
sxeMg.jdSCX=jdSCX;sxeMg.JgmYG=JgmYG,sxeMg.GaZDA=GaZDA;
sxeMg.UjpuG_glow=UjpuG_glow;sxeMg.rnNVV=rnNVV;sxeMg.eKXYS=eKXYS;
}
function WA_but_over(OFaQW,nQOQh,NlFBm_glow)
{
var gclCQ=document.getElementById(OFaQW) 
if(gclCQ&&gclCQ.jNGCr)
with(gclCQ.jNGCr)
{
var UjpuG_glow_over;
if(UjpuG_glow&&NlFBm_glow)
{
UjpuG_glow_over=new Array();
for(var FvRjp=0;FvRjp<UjpuG_glow.length;FvRjp++)UjpuG_glow_over[FvRjp]=UjpuG_glow[FvRjp];
UjpuG_glow_over[5]=NlFBm_glow;
}
WA_but(OFaQW,PfSOd,hBJkw,jItZb,jdSCX,nQOQh,GaZDA,UjpuG_glow_over,rnNVV,eKXYS);
}
var Tcbkd=document.getElementById(OFaQW+"-div0")
if(Tcbkd)html_SetVisibility(Tcbkd,false);
var FatrN=document.getElementById(OFaQW+"-div1")
if(FatrN)html_SetVisibility(FatrN,true);
}
function WA_but_out(OFaQW)
{
var gclCQ=document.getElementById(OFaQW)
with(gclCQ.jNGCr)
{
WA_but(OFaQW,PfSOd,hBJkw,jItZb,jdSCX,JgmYG,GaZDA,UjpuG_glow,rnNVV,eKXYS);
}
var Tcbkd=document.getElementById(OFaQW+"-div0")
if(Tcbkd)html_SetVisibility(Tcbkd,true);
var FatrN=document.getElementById(OFaQW+"-div1")
if(FatrN)html_SetVisibility(FatrN,false);
}
function WA_but(id,type,lx,ly,corner,bg,top_light,s_glow,rnNVV,rot)
{
var el=document.getElementById(id)
if(el.jNGCr==undefined)
{
el.jNGCr=new Array();
lLVDJ(el.jNGCr,id,type,lx,ly,corner,bg,top_light,s_glow,rnNVV,rot);
}
var c=el.getContext('2d');
var cYcSK=0;
if(rnNVV)cYcSK=6 
c.fillStyle="#000000";
c.fillRect(0,0,lx+2*cYcSK,ly+2*cYcSK) 
c.clearRect(0,0,lx+2*cYcSK,ly+2*cYcSK) 
var bg2=bg
if(bg2.substring(0,1)=="(")
{
bg2=bg2.substring(1)
bg2=bg2.substring(0,bg2.length-1)
var img=new Image();
img.onload=function()
{
if(DefdE()==false)
{
c.translate(cYcSK,cYcSK)
img.width=lx
img.height=ly 
if(rnNVV)
FVnLP(c,0,0,lx,ly,corner,(type==1),rot)
if(navigator.userAgent.match(/Firefox/i))
{
c.beginPath()
RnLxD(c,type,lx,ly,corner)
c.clip()
c.drawImage(img,0,0,lx,ly);
}
else
{
var ptrn=c.createPattern(img,'no-repeat');
c.fillStyle=ptrn;
c.beginPath()
RnLxD(c,type,lx,ly,corner)
c.fill()
}
liCxp(c,type,lx,ly,corner,bg,top_light,s_glow)
c.translate(-cYcSK,-cYcSK)
}
else
{
var canv2=IPsET(lx,ly,el,"bis");
var c2=canv2.getContext('2d');
c2.beginPath()
RnLxD(c2,type,lx,ly,corner)
c2.clip()
c2.drawImage(img,0,0,lx,ly);
liCxp(c2,type,lx,ly,corner,bg,top_light,s_glow)
if(rnNVV) TYODR(c,rot) 
c.drawImage(canv2,cYcSK,cYcSK);
}
}
img.src=bg2;
return;
}
c.translate(cYcSK,cYcSK) 
if(rnNVV&&(DefdE()==false))
{
var RYhsZ=new RGBColor(bg);
if(RYhsZ.a>0)
{
FVnLP(c,0,0,lx,ly,corner,(type==1),rot)
}
}
XmAXr(el,c,type,lx,ly,corner,bg2,rnNVV,rot)
liCxp(c,type,lx,ly,corner,bg,top_light,s_glow)
c.translate(-cYcSK,-cYcSK)
}
function FVnLP(c,x0,y0,lx0,ly0,corner,is_circle,rot)
{
var decShadow=2;
var offset=VbWZk(rot)
c.translate(decShadow*offset.x,decShadow*offset.y)
var dec_init=2;
var x=x0-dec_init;var y=y0-dec_init;var lx=lx0+2*dec_init;var ly=ly0+2*dec_init;var opacity=0.1;
for(var n=0;n<4;n++)
{
c.beginPath()
if(is_circle) bSfES(c,x,y,lx,ly);else WlxtS(c,x,y,lx,ly,corner);
c.fillStyle="rgba(0,0,0, "+opacity+")"
c.fill()
x+=1;y+=1;lx-=2;ly-=2;opacity+=0.04
}
c.translate(-decShadow*offset.x,-decShadow*offset.y)
}
function nAQdB(id,x,y,lx,ly,arc,bHFMI,bord_col,bg,shadow,rot,VfNUI,XDrfZ)
{
if(XDrfZ==undefined)XDrfZ=true;
var el=document.getElementById(id)
var c=el.getContext('2d');
if(VfNUI==undefined)VfNUI=1.0;
var cYcSK=0;
c.shadowOffsetX=0;
c.shadowOffsetY=0;
c.shadowBlur=0;
if(shadow)
{
cYcSK=6;
}
if(XDrfZ) c.clearRect(0,0,el.width,el.height)
c.globalAlpha=VfNUI 
var x_rect0=0;
var y_rect0=0;
var bg1=bg[0]
var fill_obj=false;
if(bg1.substring(0,1)=="(")
{
bg1=bg1.substring(1);
bg1=bg1.substring(0,bg1.length-1)
var SoTRL=bg1.split(";");
var x1=parseFloat(SoTRL[0]);
var y1=parseFloat(SoTRL[1]);
var x2=parseFloat(SoTRL[2]);
var y2=parseFloat(SoTRL[3]);
var col1=SoTRL[4];
var col2=SoTRL[5];
var grad=c.createLinearGradient(x1,y1,x2,y2);
grad.addColorStop(0,col1);
grad.addColorStop(1,col2);
fill_obj=grad
}
else
{
if(bg1.length==0)bg1='rgba(0,0,0,0)'
fill_obj=bg1;
}
var arc2=arc-bHFMI;
if(arc2<0)arc2=0
var canv2=false;
var c2=c;
{
if(shadow) FVnLP(c,cYcSK,cYcSK,lx,ly,arc,false,rot)
}
if(bHFMI>0)
{
c2.fillStyle=bord_col;
WlxtS(c2,x,y,lx,ly,arc)
ESKKL(c2,x+bHFMI,y+bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2,true)
c2.fill()
}


c2.fillStyle=fill_obj 
WlxtS(c2,x+bHFMI,y+bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2)
c2.fill();
}
function YSoab(nafGT,UReEu,EmNed)
{
return new Point(Math.round(nafGT*Math.cos(EmNed)-UReEu*Math.sin(EmNed)),Math.round(nafGT*Math.sin(EmNed)+UReEu*Math.cos(EmNed)))
}
function OxJcR(c,x,y,lx,ly,arc,clowckwise,eKXYS)
{
c.beginPath()
Elvjt(c,x,y,lx,ly,arc,clowckwise,eKXYS)
}
function Elvjt(c,x,y,lx,ly,arc,clowckwise,eKXYS)
{
if(clowckwise)
{
c.moveTo(x+arc,y);
c.lineTo(x+lx-arc,y);
c.quadraticCurveTo(x+lx,y,x+lx,y+arc);
c.lineTo(x+lx,y+ly-arc);
c.quadraticCurveTo(x+lx,y+ly,x+lx-arc,y+ly);
c.lineTo(x+arc,y+ly);
c.quadraticCurveTo(x,y+ly,x,y+ly-arc);
c.lineTo(x,y+arc);
c.quadraticCurveTo(x,y,x+arc,y);
return;
}
var oNuTX=[[x,y+arc],[x,y+ly-arc],[x,y+ly],[x+arc,y+ly],[x+lx-arc,y+ly],[x+lx,y+ly],[x+lx,y+ly-arc],[x+lx,y+arc],[x+lx,y],[x+lx-arc,y],[x+arc,y],[x,y],[x,y+arc]];
var theta=eKXYS*2*Math.PI/360
for(var n=0;n<oNuTX.length;n++)
{
var NZXFb=oNuTX[n][0]
var CLpEX=oNuTX[n][1]
oNuTX[n][0]=NZXFb*Math.cos(theta)-CLpEX*Math.sin(theta);
oNuTX[n][1]=NZXFb*Math.sin(theta)+CLpEX*Math.cos(theta);
}
var n=0;
c.moveTo(oNuTX[n][0],oNuTX[n++][1]);
c.lineTo(oNuTX[n][0],oNuTX[n++][1]);
c.quadraticCurveTo(oNuTX[n][0],oNuTX[n++][1],oNuTX[n][0],oNuTX[n++][1]);
c.lineTo(oNuTX[n][0],oNuTX[n++][1]);
c.quadraticCurveTo(oNuTX[n][0],oNuTX[n++][1],oNuTX[n][0],oNuTX[n++][1]);
c.lineTo(oNuTX[n][0],oNuTX[n++][1]);
c.quadraticCurveTo(oNuTX[n][0],oNuTX[n++][1],oNuTX[n][0],oNuTX[n++][1]);
c.lineTo(oNuTX[n][0],oNuTX[n++][1]);
c.quadraticCurveTo(oNuTX[n][0],oNuTX[n++][1],oNuTX[n][0],oNuTX[n++][1]);
}
function NFNiP(a,b,x,y)
{
return(a*x-y+b)/(Math.sqrt(1+a*a))
}
function daMbP(new_a1,new_b1,PlQtO,multi)
{
var d=0;
for(var i=0;i<PlQtO.length;i++)
{
var ljDup=PlQtO[i]
var d1=NFNiP(new_a1,new_b1,ljDup.x,ljDup.y)
if(multi<0)
{
if(d1<0) d=Math.max(d,-d1);
}
else
{
if(d1>0) d=Math.max(d,d1);
}
}
return d;
}
function ndtni(o1,o2)
{
if(o1<o2) return-1
if(o1>o2) return 1
return 0
}
function pNZuQ(c,lx,ly,bg1)
{
var fill_obj=false;
var SPXLa=false;
var YtOlK=false;
var PlQtO=false
if(bg1.substring(0,1)=="(")
{
bg1=bg1.substring(1);
bg1=bg1.substring(0,bg1.length-1)
var SoTRL=bg1.split(";");
var ONDHk=new Point(parseFloat(SoTRL[0]),parseFloat(SoTRL[1]));
var jbmQw=new Point(parseFloat(SoTRL[2]),parseFloat(SoTRL[3]));
SPXLa=ONDHk.clone()
YtOlK=jbmQw.clone()
var col1=SoTRL[4];
var col2=SoTRL[5];
var grad=c.createLinearGradient(SPXLa.x,SPXLa.y,YtOlK.x,YtOlK.y);
if(isMSIE())
{
SPXLa=ONDHk.clone()
YtOlK=jbmQw.clone() 
var kHZmh=0;
var jFBgf=1;
{
PlQtO=[{x:0,y:0},{x:lx,y:0},{x:lx,y:ly},{x:0,y:ly}]
var d1=0;
var d2=0;
var a=(YtOlK.y-SPXLa.y)/(YtOlK.x-SPXLa.x);
var b=SPXLa.y-a*SPXLa.x;
var diff=1;
if(a==Infinity)
{
d1=(SPXLa.y)
d2=(ly-YtOlK.y)
}
else
if(a==0)
{
d1=(SPXLa.x)
d2=(lx-YtOlK.x)
}
else
{
var new_a1=-1/a;
var new_b1=SPXLa.y-new_a1*SPXLa.x;
d1=daMbP(new_a1,new_b1,PlQtO,-1)
var new_b2=YtOlK.y-new_a1*YtOlK.x;
d2=daMbP(new_a1,new_b2,PlQtO,1)
if(new_a1<0)diff=-1;
}
var d=Math.sqrt(Math.pow(YtOlK.x-SPXLa.x,2)+Math.pow(YtOlK.y-SPXLa.y,2))
var total=(d1+d+d2)
kHZmh=d1/total;
jFBgf=(d1+d)/total;
var pt_prod0=new Point(YtOlK.x-SPXLa.x,YtOlK.y-SPXLa.y)
var pt_prod1=new Point(0,100)
var prod=(pt_prod0.x*pt_prod1.y-pt_prod1.x*pt_prod0.y);
if(prod*diff<0)
{
kHZmh=d2/total;
jFBgf=(d2+d)/total;
}
}
grad.addColorStop(kHZmh,col1);
grad.addColorStop(jFBgf,col2);

}
else
{
grad.addColorStop(0,col1);
grad.addColorStop(1,col2);
}
fill_obj=grad
}
else
{
fill_obj=bg1;
}
return fill_obj;
}
function WA_bg3(id,lx,ly,arc,bHFMI,bord_col,bg,shadow,rot,mGALj,EjlpE,VfNUI,XDrfZ)
{


var theta=rot*2*Math.PI/360 
if(XDrfZ==undefined)XDrfZ=true;
if(VfNUI==undefined)VfNUI=1.0;
var el=document.getElementById(id)
if(!el)return
var c=el.getContext('2d');
var cYcSK=(el.width-lx)/2;
if(XDrfZ) c.clearRect(0,0,el.width,el.height)
var x_rect0=cYcSK;
var y_rect0=cYcSK;
var bg1=bg[0]
var fill_obj=false;
var SPXLa=false;
var YtOlK=false;
var PlQtO=false
fill_obj=pNZuQ(c,lx,ly,bg1) 
if(VfNUI==undefined)VfNUI=1.0;
var arc2=arc-bHFMI;
if(arc2<0)arc2=0
var canv2=false;
var c2=c;
if(shadow)
{
c2.translate(mGALj+6,EjlpE+6)
}
else
{
c2.translate(mGALj,EjlpE)
}
c2.fillStyle=fill_obj;
OxJcR(c2,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2,false,rot)
c2.fill();
}
function WA_bg(id,lx,ly,arc,bHFMI,bord_col,bg,shadow,rot,VfNUI,XDrfZ)
{

if(XDrfZ==undefined)XDrfZ=true;
if(VfNUI==undefined)VfNUI=1.0;
var el=document.getElementById(id)
if(!el)return
var c=el.getContext('2d');
var cYcSK=(el.width-lx)/2;
if(XDrfZ) c.clearRect(0,0,el.width,el.height) 

var fill_obj=pNZuQ(c,lx,ly,bg[0])
if(bg.length>1)
{
var bg2=bg[1]
var img=new Image();
img.onload=function()
{
var ptrn=c.createPattern(img,'repeat');
c.fillStyle=ptrn;
c.beginPath()
aiclo(c,el,lx,ly,arc,bHFMI,bord_col,ptrn,shadow,rot,VfNUI)
}
img.src=bg2;
}
else
{
aiclo(c,el,lx,ly,arc,bHFMI,bord_col,fill_obj,shadow,rot,VfNUI)
}
}
function aiclo(c,el,lx,ly,arc,bHFMI,bord_col,fill_obj,shadow,rot,VfNUI)
{
if(VfNUI==undefined)VfNUI=1.0;
var arc2=arc-bHFMI;
if(arc2<0)arc2=0
var cYcSK=(el.width-lx)/2;
var x_rect0=cYcSK;
var y_rect0=cYcSK;
var canv2=false;
var c2=c;
c.globalAlpha=VfNUI
if(DefdE()==true)
{
canv2=IPsET(lx,ly);
c2=canv2.getContext('2d');
c2.globalAlpha=VfNUI
}
else
{
c2.translate(cYcSK,cYcSK)
if(shadow) FVnLP(c,0,0,lx,ly,arc,false,rot)
}
if(bHFMI>0)
{
c2.fillStyle=bord_col;
WlxtS(c2,0,0,lx,ly,arc)
ESKKL(c2,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2,true)
c2.fill()
}
c2.fillStyle=fill_obj;
WlxtS(c2,bHFMI,bHFMI,lx-2*bHFMI,ly-2*bHFMI,arc2)
c2.fill();
if(DefdE()==true)
{
if(shadow) TYODR(c,rot)
c.drawImage(canv2,cYcSK,cYcSK);
}
else
{
c2.translate(-cYcSK,-cYcSK)
}
}
function WA_div_offset(id,x,y)
{
if(isMSIE())
{
var el=document.getElementById(id)
if(el.filters)
{
el.style.left=""+x+"px";el.style.top=""+y+"px";
}
}
}


function Size(lx,ly)
{
this.width=lx;this.height=ly;
this.clone=function(){return new Size(this.width,this.height)}
this.greaterThan=function(UjpuG){return(this.width>UjpuG.width)&&(this.height>UjpuG.height)}
this.scale=function(ChViW,vaBXe)
{
if(!vaBXe)vaBXe=false
var JKLvk=this;
var AloOd=JKLvk.width
var vwFZW=JKLvk.height
var p1=AloOd*ChViW.height;
var p2=ChViW.width*vwFZW;
var r1=AloOd/vwFZW;
var r2=vwFZW/AloOd;
var newSize1=new Size(ChViW.height*r1,ChViW.height);
var newSize2=new Size(ChViW.width,ChViW.width*r2);
if(p2>p1)
{
if((vaBXe==true)||((newSize1.width<=JKLvk.width)&&(newSize1.height<=JKLvk.height)))
{
JKLvk.width=Math.round(newSize1.width);
JKLvk.height=Math.round(newSize1.height);
}
}
else
{
if((vaBXe==true)||((newSize2.width<=JKLvk.width)&&(newSize2.height<=JKLvk.height)))
{
JKLvk.width=Math.round(newSize2.width);
JKLvk.height=Math.round(newSize2.height);
}
}
this.width=JKLvk.width;
this.height=JKLvk.height;
return true;
}
}
function Point(p_x,p_y){this.x=p_x;this.y=p_y;
this.translate=function(nafGT,UReEu){this.x+=nafGT;this.y+=UReEu;}
this.clone=function(){return new Point(this.x,this.y)}
}
function Rect(p_x,p_y,lx,ly)
{
this.x=p_x;this.y=p_y;this.width=lx;this.height=ly;
this.clone=function(){return new Rect(this.x,this.y,this.width,this.height)}
this.equals=function(aIeIN){return(this.x==aIeIN.x)&&(this.y==aIeIN.y)&&(this.width==aIeIN.width)&&(this.height==aIeIN.height);}
this.copy=function(aIeIN){this.x=aIeIN.x;this.y=aIeIN.y;this.width=aIeIN.width;this.height=aIeIN.height;}
this.translate=function(nafGT,UReEu){this.x+=nafGT;this.y+=UReEu;}
this.isValid=function(){return(this.width>0)&&(this.height>0);}
}
function html_getLayer(aIeIN)
{
if(typeof(aIeIN)=="string")return document.getElementById(aIeIN);
return aIeIN;
}
function html_SetPosition(aIeIN,nafGT,UReEu){
aIeIN=html_getLayer(aIeIN);
aIeIN.style.left=nafGT+"px";aIeIN.style.top=UReEu+"px";
}
function html_SetSize(lpHKd,hBJkw,jItZb){
aIeIN=html_getLayer(lpHKd);
aIeIN.style.width=hBJkw+"px";aIeIN.style.height=jItZb+"px";
}
function html_SetRect(aIeIN,JUcuk){html_SetGeometry(aIeIN,JUcuk.x,JUcuk.y,JUcuk.width,JUcuk.height);}
function html_SetGeometry(aIeIN,nafGT,UReEu,hBJkw,jItZb){html_SetPosition(aIeIN,nafGT,UReEu);html_SetSize(aIeIN,hBJkw,jItZb);}
function html_SetVisibility(aIeIN,RKVbH){aIeIN=html_getLayer(aIeIN);aIeIN.style.visibility=(RKVbH)?"visible":"hidden";}
function html_SetDisplay(aIeIN,RKVbH){aIeIN=html_getLayer(aIeIN);aIeIN.style.display=(RKVbH)?"block":"none";}
function html_SetCanvasSize(aIeIN,hBJkw,jItZb){aIeIN=html_getLayer(aIeIN);aIeIN.width=hBJkw;aIeIN.height=jItZb;}
function html_writeContent(aIeIN,UjpuG){aIeIN=html_getLayer(aIeIN);aIeIN.innerHTML=UjpuG;}
function html_SetOpacity(aIeIN,Hcvbs)
{
aIeIN=html_getLayer(aIeIN);
aIeIN.style['opacity']=Hcvbs;
aIeIN.style['-moz-opacity']=Hcvbs;
aIeIN.style.filter=(Hcvbs==1)?'':'alpha(opacity='+(Hcvbs*100)+')';
}
var RMcIu=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"o",l:["ö","ô"]}
];
function removeAccentsFromString(s)
{
var res=s.toLowerCase();
for(var i=0;i<RMcIu.length;i++)
{
var array2=RMcIu[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,RMcIu[i].acc)
}
}
return res;
}
function trimString(str)
{
return str.replace(/^\s*|\s*$/g,"");
}
function IsNumeric(SdGoC)
{
var FkHRK="0123456789.";var btpae=true;var PJDXb;
for(FvRjp=0;FvRjp<SdGoC.length&&btpae==true;FvRjp++){PJDXb=SdGoC.charAt(FvRjp);if(FkHRK.indexOf(PJDXb)==-1) btpae=false;}
return btpae;
}
function getWindowScroll()
{
var x=0;var y=0;
if(typeof(window.pageYOffset)=='number'){
x=window.pageXOffset;y=window.pageYOffset;
}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){
x=document.body.scrollLeft;y=document.body.scrollTop;
}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){
x=document.documentElement.scrollLeft;y=document.documentElement.scrollTop;
}
return new Point(x,y);
}
function getWindowSize()
{
var lx=0;var ly=0;;
if(isMSIE())
{
lx=document.documentElement.clientWidth;ly=document.documentElement.clientHeight;
if((lx==0)&&(ly==0))
{
if(document.body&&(document.body.clientWidth)){
lx=document.body.clientWidth;ly=document.body.clientHeight;
}
}
}
else
if(typeof(window.innerWidth)=='number')
{
lx=window.innerWidth;
if(document.documentElement.clientWidth>0)lx=document.documentElement.clientWidth
ly=window.innerHeight;
if(document.documentElement.clientHeight>0)ly=document.documentElement.clientHeight
}
if(isIPhone())
if(typeof(window.innerWidth)=='number')
{
lx=window.innerWidth;ly=window.innerHeight;
}
return new Size(lx,ly);
}
function getWindowFullSize()
{
var lx=0;var ly=0;;
if(isMSIE())
{
lx=document.documentElement.clientWidth;ly=document.documentElement.clientHeight;
if((lx==0)&&(ly==0))
{
if(document.body&&(document.body.clientWidth)){
lx=document.body.clientWidth;ly=document.body.clientHeight;
}
}
}
else
if(typeof(window.innerWidth)=='number'){
lx=window.innerWidth;
if(document.documentElement.clientWidth>0)lx=document.documentElement.clientWidth
ly=window.innerHeight;
if(document.documentElement.clientHeight>0)ly=document.documentElement.clientHeight
}
return new Size(lx,ly);
}
function urlSuffixe(jVHOr)
{
var UwTeN=jVHOr*60;
var xkZvn=new Date();
var IbFsO=0;
IbFsO+=xkZvn.getYear()*12*31*24*60*60;
IbFsO+=xkZvn.getMonth()*31*24*60*60;
IbFsO+=xkZvn.getDate()*24*60*60;
IbFsO+=xkZvn.getHours()*60*60;
IbFsO+=xkZvn.getMinutes()*60;
IbFsO+=xkZvn.getSeconds();
if(UwTeN!=0)
{
IbFsO=Math.floor(IbFsO/UwTeN)*UwTeN
}
return "-"+IbFsO;
}
function urlAntiCacheForPreview()
{
if(document.webaca_is_preview) return urlSuffixe(0);
return "";
}
function html_findPos(obj)
{
var Hcvbs=YbkUo(obj)
return new Point(Hcvbs[0],Hcvbs[1])
}
function YbkUo(obj)
{
var curleft=curtop=0;
if(obj.offsetParent)
{
do
{
curleft+=obj.offsetLeft;curtop+=obj.offsetTop;
}while(obj=obj.offsetParent);
}
return [curleft,curtop];
}
function Wa_search_input(XDQZl,hBJkw,jItZb)
{
document.write("<input id='"+XDQZl+"' type=search results=0 placeholder='' style='width:"+hBJkw+"px;height:"+jItZb+"px;'>")
}
function OBPPp()
{
var OJHnV=document.getElementsByTagName("A");
for(var FvRjp=0;FvRjp<OJHnV.length;FvRjp++)
{
var aIeIN=OJHnV[FvRjp];
if(aIeIN.onmouseover)aIeIN.onmouseover=null;
if(aIeIN.onmouseout)aIeIN.onmouseout=null;
}
}
function SjiWe()
{
for(var wHJEn in document.wa_global_list_element)
{
var OFaQW=document.wa_global_list_element[wHJEn]
var gclCQ=document.getElementById(OFaQW)
gclCQ.onclick=function()
{
WA_focus(this)
}
}
}
function WA_declare(OFaQW)
{
if(!document.wa_global_list_element)
{
document.wa_global_list_element=new Array();;
}
document.wa_global_list_element.push(OFaQW)
}
function cpmlE()
{
var qbcjf=window.location.search;
if(qbcjf.substr(0,1)=="?")qbcjf=qbcjf.substr(1);
if(qbcjf.length==0)return;
var lEIXJ=new Array();
var ofAnL=qbcjf.split("&");
for(var i=0;i<ofAnL.length;i++)
{
var inoZu=ofAnL[i].split("=");lEIXJ[inoZu[0]]=inoZu[1];
}
var UjpuG_info=lEIXJ["crbst_info"];
if(!UjpuG_info)return;
var ObSbb=new Array();
ObSbb.m_unid=UjpuG_info;
ObSbb.m_index_item=-1;
var EDZgS_info=UjpuG_info.indexOf("-");
if(EDZgS_info!=-1)
{
ObSbb.m_unid="wa-id-"+UjpuG_info.substring(0,EDZgS_info);
ObSbb.m_index_item=parseInt(UjpuG_info.substring(EDZgS_info+1));
}
document.wa_global_query_info=ObSbb;
}
function IS_onload_WA()
{

if(isMSIE8())
{
wa_timeout("IS_onload_ui()",0)
}
else
{
IS_onload_ui()
}
if(isIPhone())
{
OBPPp()
}
else
{
SjiWe()
}
cpmlE();

gSuoa()
}
function gSuoa()
{
var YrGjV=0;
var oNELe=document.webaca_banner_height;
if(document.webaca_page_is_centered)
{
var RrIkY=getWindowSize().width
var mhbMH=document.webaca_width_page
if(RrIkY>mhbMH)YrGjV=(RrIkY-mhbMH)/2;
}
document.body.style.backgroundPosition=YrGjV+"px "+oNELe+"px";
}


function WA_loadMessages()
{
for(var k in CONST_WA_TR)
{
var key=CONST_WA_TR[k]
Translator.m_tr[key[0]]=key[1]
}
for(var n=0;n<CONST_WA_COUNTRIES.codes.length;n++)
{
var MJfGc=CONST_WA_COUNTRIES.codes[n]
var bIZZV=CONST_WA_COUNTRIES.labels[n]
Translator.m_countries[MJfGc]=bIZZV
}
}
function Translator()
{
}
Translator.m_tr=new Array();
Translator.m_countries=new Array();
Translator.tr=function(k)
{
try
{
var v=Translator.m_tr[k]
if((v==undefined)||(v.length==0))return "@"+k;
v=v.replace(/\n/g,"<br>")
return v
}
catch(e){}
return k;
}
Translator.country=function(k)
{
try
{
var v=Translator.m_countries[k]
if((v==undefined)||(v.length==0))return "@"+k;
return v
}
catch(e){}
return k;
}
function WA_GraphicElement(OFaQW,lqsEV,rnNVV)
{
this.OFaQW=OFaQW;
this.lqsEV=lqsEV
this.rnNVV=rnNVV;
this.OFaQW_div=this.OFaQW+"-div"
this.OFaQW_canvas=this.OFaQW+"-canvas"
this.TjSkA=new Rect(0,0,0,0)
this.eZYqS=false;
this.Wddqc=false;
this.cYcSK=6;
this.SlJfF_src=false;
this.SlJfF_clip=false;
this.SlJfF_rot=false;
this.TDkVR="";
this.shadow=function()
{
return this.rnNVV;
}
this.marginShadow=function()
{
return this.cYcSK;
}
this.rect=function()
{
return this.TjSkA;
}
this.canvasId=function()
{
return this.OFaQW_canvas;
}
this.divId=function()
{
return this.OFaQW_div;
}
this.opacity=function()
{
return this.vXFFN;
}
this.img_clip=function()
{
return this.SlJfF_clip;
}
this.img_src=function()
{
return this.SlJfF_src;
}
this.toHtml=function()
{
var UjpuG=""
UjpuG+="<div id='"+this.OFaQW_div+"' style=\"";
UjpuG+="position:absolute;";
if(this.TDkVR.length>0)
{
UjpuG+="cursor:pointer;";
}
if(this.rect.x>0)UjpuG+="left:"+this.rect.x+"px;";
if(this.rect.y>0)UjpuG+="top:"+this.rect.y+"px;";
if(this.rect.width>0)UjpuG+="width:"+this.rect.width+"px;";
if(this.rect.height>0)UjpuG+="height:"+this.rect.height+"px;";
if(lqsEV)
UjpuG+="z-index:"+lqsEV+";";
UjpuG+="\" ";
if(this.TDkVR.length>0)
{
UjpuG+="onclick=\""+this.TDkVR+"\" "
}
UjpuG+=">";
if((this.rect.width>0)&&this.shadow())
{
UjpuG+=html_canvas(this.OFaQW_canvas,this.rect.width+2*this.cYcSK,this.rect.height+2*this.cYcSK)+"</div>";
}
else
{
UjpuG+=html_canvas(this.OFaQW_canvas,0,0)+"</div>";
}
return UjpuG
}
this.setImage=function(ZUeIh,bgVXi,eKXYS)
{
if(eKXYS==undefined)eKXYS=0;
if((ZUeIh==this.SlJfF_src)&&(this.SlJfF_clip&&this.SlJfF_clip.equals(bgVXi))&&(this.SlJfF_rot==eKXYS))
{
return;
}
this.SlJfF_rot=eKXYS;
this.SlJfF_src=ZUeIh;
this.SlJfF_clip=bgVXi;
this.EafFc()
}
this.registerDynamicCanvas=function()
{
registerDynamicCanvas(this.OFaQW_canvas);
this.Wddqc=true;
this.setRect(this.TjSkA.x,this.TjSkA.y,this.TjSkA.width,this.TjSkA.height)
}
this.EafFc=function()
{
if((this.TjSkA.width>0)&&(this.TjSkA.height>0))
{
this.draw()
}
this.eZYqS=true
};
this.draw=function(){};
this.setPosition=function(nafGT,UReEu)
{
this.TjSkA.x=nafGT;this.TjSkA.y=UReEu;
if(this.Wddqc==false)return
html_SetPosition(this.OFaQW_div,this.TjSkA.x,this.TjSkA.y)
if(this.eZYqS==false)
{
this.EafFc()
}
}
this.setOnClick=function(UjpuG)
{
this.TDkVR=UjpuG
}
this.width=function(){return this.TjSkA.width;}
this.height=function(){return this.TjSkA.height;}
this.setSize=function(hBJkw,jItZb)
{
this.TjSkA.width=hBJkw;this.TjSkA.height=jItZb;
var BQVER=hBJkw
var sNBjQ=jItZb
if(this.rnNVV)
{
BQVER+=2*this.cYcSK
sNBjQ+=2*this.cYcSK
}
if(this.Wddqc==false)return
html_SetSize(this.OFaQW_div,BQVER,sNBjQ)
html_SetCanvasSize(this.OFaQW_canvas,hBJkw,jItZb)
this.EafFc()
}
this.setRect=function(nafGT,UReEu,hBJkw,jItZb)
{
this.TjSkA.x=nafGT;this.TjSkA.y=UReEu;this.TjSkA.width=hBJkw;this.TjSkA.height=jItZb;
var BQVER=hBJkw
var sNBjQ=jItZb
var uHDnl=nafGT
var mtAkU=UReEu
if(this.rnNVV)
{
BQVER+=2*this.cYcSK
sNBjQ+=2*this.cYcSK
uHDnl-=this.cYcSK
mtAkU-=this.cYcSK
}
if(this.Wddqc==false)return 
html_SetGeometry(this.OFaQW_div,uHDnl,mtAkU,BQVER,sNBjQ);
html_SetCanvasSize(this.OFaQW_canvas,BQVER,sNBjQ)
try{this.EafFc()}catch(e){
alert(e.message)
}
}
this.setVisible=function(RKVbH)
{
if(this.Wddqc==false)return
html_SetVisibility(this.OFaQW_div,RKVbH)
}
this.setOpacity=function(Hcvbs)
{
this.vXFFN=Hcvbs 
if(this.Wddqc==false)return
this.EafFc()
}
}

function is_onresize()
{
WA_Dialog.resizeUI()
try
{
if(WA_PhotoAlbum_resizeUI)WA_PhotoAlbum_resizeUI()
}
catch(e){}
gSuoa()
}
function is_onscroll()
{
centerFullPageContainer();
}
function registerDynamicCanvas(id)
{
if(isMSIE())
G_vmlCanvasManager.initElement(document.getElementById(id));
}
function WA_openDialogAction(wHJEn)
{
var nBUFl=WA_Dialog.aijkr;
if(wHJEn==-1){nBUFl.closeWin();return;}
var fcnwF=nBUFl.rnESN(wHJEn);
if(fcnwF[5])
{
fcnwF[4].call(fcnwF[6],fcnwF[5])
}
else
{
fcnwF[4](fcnwF[5]);
}
}
function WA_Dialog(RKVbH_close_button)
{
this.dBPWU=0;
this.lCaGm=0;
this.ChViW_win_width=600;
this.sZudo=400;
this.GTcWY=new Array();
this.kcuhY="wa-dialog-but-";
this.LZjGe=this.kcuhY+"div-";
this.jwIBC=this.kcuhY+"canvas-";
this.BUTTON_HEIGHT=22;
this.Cekjq=CONST_WA_GLOBAL_COLOR_THEME;
this.RKVbH_close_button=RKVbH_close_button;
this.OiBrh=6;
this.GrOBx=function()
{
if(this.RKVbH_close_button==undefined)this.RKVbH_close_button=true;
this.cDwjW();
}
this.resetButtons=function()
{
this.cDwjW();
}
this.idealHeight=function()
{
return this.UTdWE
}
this.displayWindowWithAutoResize=function(bvNdR,NnXeN)
{
this.aRGRU=false
this.UTdWE=bvNdR
this.NlHhd=NnXeN 
this.resetButtons();
NnXeN.call(this)
var l=document.getElementById('wa-dialog-content');
if(this.aRGRU==false)
if(l.scrollHeight>200)
{
this.aRGRU=true
this.UTdWE=l.scrollHeight+150
this.resetButtons();
NnXeN.call(this)
}
}
this.initializeWindow=function(ChViW_lx,ChViW_ly)
{
if(WA_Dialog.aijkr)WA_Dialog.aijkr.closeWin()
WA_Dialog.aijkr=this;
this.ChViW_win_width=ChViW_lx;
this.sZudo=ChViW_ly;
this.UWKsD()
}
this.progress=function()
{
this.initializeWindow(300,100)
this.writeContent("<div width=100% align=center><img src='wa_loading.gif'></div>")
}
this.VOKNE=function(mess)
{


this.initializeWindow(450,130)
var s=""
s+="<table border=0 style='width:100%;'><tr>";
s+="<td align=center style='"+this.cssText1()+"'>"
s+=mess
s+="</td></tr></table>"
this.writeContent(s)
}
this.addButton=function(bIZZV,ZxTGo,BrPun,PochL)
{
var IrjGk=this.GTcWY.length
if(this.RKVbH_close_button==true)
{
IrjGk--;
}
var hBJkw=Math.max((bIZZV.length*8)*1.2+30,80)
var JKLvk=new Size(hBJkw,this.BUTTON_HEIGHT);
this.qMsDS("action_"+IrjGk,IrjGk,bIZZV,ZxTGo,JKLvk,BrPun,PochL)
}
this.cDwjW=function()
{
this.GTcWY=new Array();
if(this.RKVbH_close_button)
{

var JKLvk=new Size(50,20);
this.qMsDS("close",-1,"X",null,JKLvk)
}
}
this.qMsDS=function(FvGEE,IrjGk,bIZZV,ZxTGo,JKLvk,BrPun,PochL)
{
var fcnwF=[FvGEE,JKLvk,IrjGk,bIZZV,ZxTGo,BrPun,PochL];
this.GTcWY.push(fcnwF);
}
this.writeContent=function(s)
{
var l=document.getElementById('wa-dialog-content');
l.innerHTML=s
}
this.rnESN=function(FvGEE)
{
for(var wHJEn=0;wHJEn<this.GTcWY.length;wHJEn++)
{
var fcnwF=this.GTcWY[wHJEn];
if((fcnwF[0]==FvGEE)||(fcnwF[2]+""==FvGEE+""))
return fcnwF;
}
return undefined;
}
this.lihpk=function(FvGEE)
{
var fcnwF=this.rnESN(FvGEE);
return fcnwF[1]
}
this.getColorTheme=function(wHJEn)
{
return this.Cekjq[wHJEn];
}
this.JUjWq=function(IYKHA)
{
var fcnwF=this.rnESN(IYKHA);
var FvGEE=fcnwF[0];
var IrjGk=fcnwF[2];
var NlFBm_text=this.Cekjq[4]
var NlFBm_bg=this.Cekjq[5]
var NlFBm_glow=this.Cekjq[7]
if(IrjGk==-1)
{
NlFBm_text=this.Cekjq[10]
NlFBm_bg=this.Cekjq[8]
NlFBm_glow=this.Cekjq[11]
}
var iCBHU=this.LZjGe+FvGEE;
var dJcoT=this.jwIBC+FvGEE;
var JKLvk=this.lihpk(IYKHA)
var OKHxg=0;
var s=""
s+="<a href='javascript:WA_openDialogAction("+IYKHA+")' ";
var NlFBm=new RGBColor(NlFBm_bg);
var NlFBm_hsl=NlFBm.toHsl();
NlFBm.fromHsl(NlFBm_hsl[0],NlFBm_hsl[1],NlFBm_hsl[2]+0.2)
NlFBm_bg=NlFBm.toRGB();
var pFEYw_glow=new RGBColor(NlFBm_glow);
var pFEYw_glow_hsl=pFEYw_glow.toHsl();
pFEYw_glow.fromHsl(pFEYw_glow_hsl[0],pFEYw_glow_hsl[1],pFEYw_glow_hsl[2]+0.2)
NlFBm_glow=pFEYw_glow.toRGB();
s+="onmouseover=\"WA_but_over('"+dJcoT+"','"+NlFBm_bg+"','"+NlFBm_glow+"')"+"\" ";
s+="onmouseout=\""+"WA_but_out('"+dJcoT+"')"+"\" ";
s+="style='text-decoration:none;'>";
s+="<div id='"+this.LZjGe+FvGEE+"' style='position:absolute;cursor:pointer;left:0px;top:0px;height:"+JKLvk.height+"px;width:"+JKLvk.width+"px;' >";
s+="<div style='position:absolute;left:"+(-OKHxg)+"px;top:"+(-OKHxg)+"px;height:"+JKLvk.height+"px;'>"
s+="<canvas id='"+this.jwIBC+FvGEE+"' width="+(JKLvk.width+OKHxg*2)+" height="+(JKLvk.height+OKHxg*2)+" ></canvas>";
s+="</div>"
s+="<div align=center style='position:absolute;left:0px;top:"+(0)+"px;vertical-align:middle;width:100%;height:"+(JKLvk.height)+"px;line-height:"+(JKLvk.height)+"px;font-family:arial;font-size:13px;font-weight:bold;color:"+NlFBm_text+"'>"
s+=fcnwF[3];
s+="</div>"
s+="</div>"
s+="</a>"
return s;
}
this.DFLIX=function(FvGEE)
{
var fcnwF=this.rnESN(FvGEE);
var IrjGk=fcnwF[2];
var NlFBm_bg=this.Cekjq[5]
var NlFBm_glow=this.Cekjq[7]
var NlFBm_text=this.Cekjq[3]
if(IrjGk==-1)
{
NlFBm_bg=this.Cekjq[8]
NlFBm_glow=this.Cekjq[11]
NlFBm_text=this.Cekjq[10]
}
var MJfGc=this.jwIBC+FvGEE;
registerDynamicCanvas(MJfGc);
var JKLvk=this.lihpk(FvGEE);
var jdSCX=JKLvk.height*0.25;
var WevVk=true;
jdSCX=0;
WevVk=false;
var RNbRc=0;
var PFNPX=(JKLvk.width-2);
var JVZfD=JKLvk.height*0.45;

var SoTRL_top=[1,1,PFNPX,JVZfD,RNbRc];
var qKdNn=JKLvk.width-2;
var MOSvW=JKLvk.height*0.45;
var KYkeu=NlFBm_glow;
var wfbUl=NlFBm_glow;
var gmVqY=0;

var SoTRL_bottom=[(JKLvk.width-qKdNn)/2,JKLvk.height-MOSvW-1,qKdNn,MOSvW,gmVqY,KYkeu,wfbUl];
WA_but(MJfGc,0,JKLvk.width,JKLvk.height,jdSCX,NlFBm_bg,SoTRL_top,SoTRL_bottom,WevVk,0)
}
this.fEsRR=function(FvGEE)
{
var fcnwF=this.rnESN(FvGEE)
if(fcnwF)
{
var MJfGc=this.LZjGe+fcnwF[0];
return document.getElementById(MJfGc);
}
return undefined
}
this.UWKsD=function()
{
var l=document.getElementById('wa-dialog-container');
l.style.display="block" 

var s="";
var ggcmD=document.webaca_banner_height
s+="<div  style='position:absolute;left:0px;top:"+ggcmD+"px;width:100%;height:100%;background-color:#000000;filter:alpha(opacity=50);-moz-opacity:0.5;opacity:0.5;'></div>"
s+="<div id='wa-dialog-main' style='position:absolute;left:0px;top:"+ggcmD+"px;width:100px;height:100px;' >"
s+="<div style='position:absolute;left:0px;top:0px;width:100px;height:100px;' ><canvas id='wa-dialog1' width=100 height=100 ></canvas></div>"
for(var FvRjp in this.GTcWY)
{
s+=this.JUjWq(this.GTcWY[FvRjp][2]);
}
s+="<div id='wa-dialog-content' style='position:absolute;left:0px;top:0px;width:100px;" 
s+="overflow:auto;' ></div>"
s+="</div>"
l.innerHTML=s 
WA_exec_callback_opera_compliant(this,this.EhClV)
}
this.EhClV=function()
{
registerDynamicCanvas('wa-dialog1');
for(var FvRjp in this.GTcWY)
{
this.DFLIX(this.GTcWY[FvRjp][0])
}
this.laxlm()
if(this.adhQp())
{
document.body.scrollLeft=0
document.body.scrollTop=0
}
}
this.intern_closeWin=function()
{
var l=document.getElementById('wa-dialog-container');
l.style.display="none"
WA_Dialog.aijkr=false
}
this.closeWin=function()
{
this.intern_closeWin()
}
this.cssText1=function()
{
return "font-family:Arial;font-size:15px;color:"+this.Cekjq[3]+";";
}
this.onCustomKeypress=function(QcNFl)
{
if((this.GTcWY.length==1)&&(QcNFl==13))
{
this.closeWin()
return true;
}
return false;
}
this.onkeypress=function(QcNFl)
{
return this.onCustomKeypress(QcNFl)
}
this.onkeydown=function(QcNFl)
{
if(QcNFl==27)
{
this.closeWin()
return true;
}
return this.onCustomKeypress(QcNFl) 
}
this.customUpdate=function(){}
this.adhQp=function()
{
return isIPhone();
}
this.laxlm=function()
{
var kCSrZ=document.webaca_width_page;
var qTCJQ=document.webaca_height_page;
var eeTWP=getWindowSize().width
var rxbLH=getWindowSize().height
var JWlLF=getWindowFullSize().width
var nPhfh=getWindowFullSize().height
var IopgT=550;
var BEjpM=400;
eeTWP=Math.max(eeTWP,IopgT);
rxbLH=Math.max(rxbLH,BEjpM);
if(this.adhQp())
{
eeTWP=600;
rxbLH=700;
}
this.dBPWU=Math.min(eeTWP*0.9,this.ChViW_win_width)
this.lCaGm=Math.min(rxbLH*0.9,this.sZudo)
var FWpVr=document.getElementById('wa-dialog1');
FWpVr.width=this.dBPWU+10
FWpVr.height=this.lCaGm+10
var nafGT=getWindowScroll().x+(eeTWP-FWpVr.width)/2
var UReEu=getWindowScroll().y+(rxbLH-FWpVr.height)/2
nafGT=(eeTWP-FWpVr.width)/2
UReEu=(rxbLH-FWpVr.height)/2
nafGT=Math.max(0,nafGT)
UReEu=Math.max(0,UReEu)
if(this.adhQp())
{
nafGT=0
UReEu=0;
}
var AVUSx=document.getElementById('wa-dialog-main');
html_SetGeometry('wa-dialog-main',nafGT,UReEu,FWpVr.width,FWpVr.height);
var IoJJj_bg="(0;0;0;"+this.lCaGm*0.25+";"+this.Cekjq[1]+";"+this.Cekjq[2]+")";
var RAgXK=4;
WA_bg('wa-dialog1',this.dBPWU,this.lCaGm,RAgXK,3,this.Cekjq[0],[IoJJj_bg],true,0)
var swnqZ=10;
var QAILg_close=this.fEsRR(-1)
if(QAILg_close)
{
var gBShG=this.lihpk(-1) 
var marginClose=3
html_SetPosition(QAILg_close,this.dBPWU-gBShG.width-marginClose+this.OiBrh-1,marginClose+this.OiBrh-1)
}
var aowwB=this.GTcWY.length;
if(this.RKVbH_close_button==true)
{
aowwB--;
}
var RumDC=10;
var fBGls=0;
for(var FvRjp=0;FvRjp<aowwB;FvRjp++)
{
if(FvRjp>0) fBGls+=RumDC;
var JKLvk_but=this.lihpk(FvRjp);
fBGls+=JKLvk_but.width;
}
var vtAIH=(this.dBPWU-fBGls)/2
for(var FvRjp=0;FvRjp<aowwB;FvRjp++)
{
if(FvRjp>0) vtAIH+=RumDC;
var QAILg_div=this.fEsRR(FvRjp);
var JKLvk_but=this.lihpk(FvRjp);
html_SetPosition(QAILg_div,vtAIH+this.OiBrh,+this.OiBrh+this.lCaGm-JKLvk_but.height-2*swnqZ)
vtAIH+=JKLvk_but.width;
}
var SHjdF=45;
var SmuPm=this.BUTTON_HEIGHT+2*swnqZ;
if(aowwB==0)
{
SmuPm=0;
}
var DKfES=(this.lCaGm-SHjdF-SmuPm)-swnqZ
var CXksA=document.getElementById('wa-dialog-content');
var nBUFl_content=Math.round(this.dBPWU-2*swnqZ)
var KhOfe=Math.round(DKfES)
this.m_content_lx=nBUFl_content
this.m_content_ly=KhOfe
html_SetGeometry('wa-dialog-content',Math.round(5+(this.dBPWU-nBUFl_content)/2),Math.round(5+SHjdF+(DKfES-KhOfe)/2),nBUFl_content,KhOfe);
this.customUpdate() 
var liXYj=document.getElementById('wa-dialog-container');
var ZjjbK=nPhfh
ZjjbK=Math.max(ZjjbK,rxbLH) 
var QlbJN=JWlLF
QlbJN=Math.max(QlbJN,eeTWP)
if(this.adhQp())
{
QlbJN=Math.max(QlbJN,kCSrZ)
ZjjbK=Math.max(ZjjbK,qTCJQ)
}
html_SetSize('wa-dialog-container',QlbJN,ZjjbK);
centerFullPageContainer();
}
this.GrOBx();
}
function centerFullPageContainer()
{
var gRKIn=WA_Dialog.getCurrent() 
var kCSrZ=document.webaca_width_page;
var qTCJQ=document.webaca_height_page;
var liXYj=document.getElementById('wa-dialog-container');
var JWlLF=getWindowSize().width 
var nPhfh=getWindowSize().height
var UReEu_bg=getWindowScroll().y;
var obgBE=gRKIn&&gRKIn.adhQp();
if(obgBE)
{
UReEu_bg=0
}
UReEu_bg=Math.min(UReEu_bg,qTCJQ-nPhfh+1)
UReEu_bg=Math.max(UReEu_bg,0)
var NfIvZ=getWindowScroll().x;
if(obgBE)
{
NfIvZ=0
}
NfIvZ=Math.min(NfIvZ,kCSrZ-JWlLF+1)
NfIvZ=Math.max(NfIvZ,0)
html_SetPosition('wa-dialog-container',NfIvZ,UReEu_bg,JWlLF,nPhfh);
}
function isOperaBrowser()
{
return(/opera/i.test(navigator.userAgent))
}
function WA_exec_callback_opera_compliant(BrPun,GgvJJ)
{
if(/opera/i.test(navigator.userAgent))
WA_exec_delayedCallback(BrPun,GgvJJ)
else
GgvJJ.call(BrPun)
}
function WA_exec_delayedCallback(BrPun,GgvJJ)
{
wa_timeout(Delegate.create(BrPun,GgvJJ),0);
}
WA_Dialog.getCurrent=function()
{
return WA_Dialog.aijkr;
}
WA_Dialog.aijkr=false;
WA_Dialog.resizeUI=function()
{
if(WA_Dialog.aijkr)
{
var gRKIn=WA_Dialog.aijkr
if(gRKIn.adhQp()==false)
{
gRKIn.laxlm()
}
}
}
WA_Dialog.alert=function(s)
{
var w=new WA_Dialog();
w.VOKNE(s)
}
WA_Dialog.progress=function()
{
var w=new WA_Dialog(false);
w.progress()
}

function getXMLHttpRequest(fct_callback,PochL)
{
var http_request=false;
if(window.XMLHttpRequest){
http_request=new XMLHttpRequest();
if(http_request.overrideMimeType){
}
}else if(window.ActiveXObject){
try{http_request=new ActiveXObject("Msxml2.XMLHTTP");
}catch(e){
try{http_request=new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
}
if(!http_request)
{
alert('Cannot create XMLHTTP instance');
return false;
}
http_request.ZxTGo_callback=fct_callback
http_request.PochL=PochL
http_request.onreadystatechange=function()
{
var req=this 
if(req.readyState==4)
{
this.ZxTGo_callback(true,this,this.PochL) 

}
};
return http_request;
}
function makePOSTRequest(url,parameters,callback,tbeaX)
{
var http_request=getXMLHttpRequest(callback,tbeaX);
http_request.open('POST',url,true);
http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
http_request.setRequestHeader("Content-length",parameters.length);
http_request.setRequestHeader("Connection","close");
http_request.send(parameters);
}
function intern_WA_responseForm(Ipnrv,LsCFU,PochL)
{
var result=LsCFU.responseText
var n=result.indexOf("BEGIN_IS_PHP=1")
if(n==-1)
{
WA_Dialog.alert(Translator.tr("Error:No php on server"));
}
else
{
n=result.indexOf("mail_sended=1")
if(n>-1)
{
var CteBt=PochL[0] 
WA_Dialog.alert(Translator.tr("Success:Mail sended"));
var form=document.getElementById(CteBt);
form.reset()
}
else
{
var PQaQH="error_string="
n=result.indexOf(PQaQH)
if(n>-1)
{
result=result.substring(n+PQaQH.length)
n=result.indexOf("END_IS_PHP")
if(n>-1)
{
result=result.substring(0,n)
}
WA_Dialog.alert(result);
}
else
{
WA_Dialog.alert("*error send mail!");
}
}
}
}
function WA_form_action(id_form,action,b_email_is_valid)
{
var form=document.getElementById(id_form);
var poststr=""
for(var i=0;i<form.elements.length;i++)
{
var el=form.elements[i];
el.style.backgroundColor="#ffffff"
if((trimString(el.value).length==0)&&(el.name.indexOf("_mandatory")>-1))
{
el.style.backgroundColor="#ff0000";el.focus();return;
}
var mmcKd=el.value
mmcKd=encodeURI(mmcKd)
mmcKd=mmcKd.replace(/&/g,escape("&")) 
poststr+=el.name.replace("_mandatory","")+"="+mmcKd+"&"
}
if(b_email_is_valid==false)
{
WA_Dialog.alert(Translator.tr("Email have to be filled in order to the form works correctly"));return;
}
if(document.webaca_is_preview)
{
WA_Dialog.alert(Translator.tr("Operation not allowed in preview mode"));return;
}
WA_Dialog.progress();
makePOSTRequest(action,poststr,intern_WA_responseForm,[id_form]);
}
function WA_form_submit(MVuXb)
{
var pVWDl=document.getElementById(MVuXb);
pVWDl.submit() 
}
function vjRNB(OFaQW,PochL)
{
var QcNFl=PochL[0]
if(QcNFl==13)
{
var MVuXb=OFaQW+"-form";
var pVWDl=document.getElementById(MVuXb);
for(var i=0;i<pVWDl.elements.length;i++)
{
var gclCQ=pVWDl.elements[i];
if((gclCQ.type=="textarea")&&(gclCQ.focused))return true;
}
WA_form_submit(MVuXb);
return false;
}
return true;
}
function WA_addFormDeclaration(OFaQW,PvpAB)
{
return WA_addHandler(OFaQW,"keypress",vjRNB)
}
function WA_form_bg(id,lx,ly,arc,bHFMI,bord_col,bg,shadow,eKXYS,VTTVm)
{
WA_bg(id,lx,ly,arc,bHFMI,bord_col,bg,shadow,eKXYS,1.0,true) 
var NqNKD=VTTVm.x;
var ItvNA=0;
var YZxXC=VTTVm.cells
for(var n=0;n<YZxXC.length;n++)
{
var ZhfnD=YZxXC[n]
var arc2=0
nAQdB(id,NqNKD,ItvNA+ZhfnD.y,VTTVm.w,ZhfnD.h,arc2,1,VTTVm.border,[''],false,0,1.0,false)
nAQdB(id,NqNKD,ItvNA+ZhfnD.y,ZhfnD.w,ZhfnD.h,arc2,1,"rgba(0,0,0,0)",[VTTVm.bg],false,0,1.0,false)
}
}
function WA_form_reset(id_form)
{
var form=document.getElementById(id_form);
form.reset() 
}
var BrowserDetect={
init:function(){
this.browser=this.searchString(this.dataBrowser);
if(this.browser==undefined)
{
if(navigator.appName.search(/explorer/i)!=-1) this.browser="Explorer";
}
if(this.browser==undefined)
{
this.browser="An unknown browser";
}
this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";
this.OS=this.searchString(this.dataOS)||"an unknown OS";
},searchString:function(data){
for(var i=0;i<data.length;i++){
var dataString=data[i].string;var dataProp=data[i].prop;
this.versionSearchString=data[i].versionSearch||data[i].identity;
if(dataString){
if(dataString.indexOf(data[i].subString)!=-1)
return data[i].identity;
}
else if(dataProp)
return data[i].identity;
}
},searchVersion:function(dataString){
var index=dataString.indexOf(this.versionSearchString);
if(index==-1) return;
return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
},
dataBrowser:[
{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},
{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}
],dataOS:[
{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}
]
};
BrowserDetect.init();
function RGBColor(ZjQVL)
{
this.ok=false;this.a=1.0;
if(ZjQVL.charAt(0)=='#'){ZjQVL=ZjQVL.substr(1);}
ZjQVL=ZjQVL.replace(/ /g,'');
ZjQVL=ZjQVL.toLowerCase();
var UQTTo=[
{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,2}\.*\d{0,2})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3]),parseFloat(""+bits[4]) ];}},{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,_process:function(bits){return [ parseInt(bits[1]),parseInt(bits[2]),parseInt(bits[3])];}},{re:/^(\w{2})(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16),Math.round(parseInt(bits[4],16)*100/255)/100 ];}},{re:/^(\w{2})(\w{2})(\w{2})$/,_process:function(bits){return [ parseInt(bits[1],16),parseInt(bits[2],16),parseInt(bits[3],16) ];}}
];
for(var i=0;i<UQTTo.length;i++){
var jbcVt=UQTTo[i].re;
var TkQqA=UQTTo[i]._process;
var rurhK=jbcVt.exec(ZjQVL);
if(rurhK){
var DUHUp=TkQqA(rurhK);
this.r=DUHUp[0];this.g=DUHUp[1];this.b=DUHUp[2];this.a=DUHUp[3];
this.ok=true;
}
}
this.r=(this.r<0||isNaN(this.r))?0:((this.r>255)?255:this.r);
this.g=(this.g<0||isNaN(this.g))?0:((this.g>255)?255:this.g);
this.b=(this.b<0||isNaN(this.b))?0:((this.b>255)?255:this.b);
this.a=(this.a>1||isNaN(this.a))?1:((this.a<0)?0:this.a);
this.toRGB=function()
{
if(this.a==1)return 'rgb('+this.r+', '+this.g+', '+this.b+')';
return 'rgba('+this.r+', '+this.g+', '+this.b+','+this.a+')';
}
this.toRGB_opaque=function()
{
return 'rgb('+this.r+', '+this.g+', '+this.b+')';
}
this.toHsl=function(){
var r=this.r;var g=this.g;var b=this.b;r/=255,g/=255,b/=255;
var max=Math.max(r,g,b),min=Math.min(r,g,b);
var h,s,l=(max+min)/2;
if(max==min){h=s=0;
}else{
var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);
switch(max){
case r:h=(g-b)/d+(g<b?6:0);break;
case g:h=(b-r)/d+2;break;
case b:h=(r-g)/d+4;break;
}
h/=6;
}
return [h,s,l];
}
this.wegxZ=function(p,q,t)
{
if(t<0) t+=1;if(t>1) t-=1;if(t<1/6) return p+(q-p)*6*t;if(t<1/2) return q;if(t<2/3) return p+(q-p)*(2/3-t)*6;
return p;
};
this.fromHsl=function(h,s,l){
if(l>1.0)l=1.0
var r,g,b;
if(s==0){r=g=b=l;
}else{
var q=l<0.5?l*(1+s):l+s-l*s;
var p=2*l-q;
r=this.wegxZ(p,q,h+1/3);g=this.wegxZ(p,q,h);b=this.wegxZ(p,q,h-1/3);
}
r=r*255;g=g*255;b=b*255;
r=Math.round(r);g=Math.round(g);b=Math.round(b);
if(r<0)r=-r;if(g<0)g=-g;if(b<0)b=-b
this.r=r;this.g=g;this.b=b;
};
}
function iHoDi(PfSOd_event,PochL)
{
if(document.wa_global_handlers!=undefined)
{
var OFaQW=WA_focused_element()
if(OFaQW)
{
var ZxTGo=document.wa_global_handlers[OFaQW+"-"+PfSOd_event]
if(ZxTGo) return ZxTGo([OFaQW],PochL)
}
}
return true;
}
function ooehU(e)
{
if(window.event){return e.keyCode;}
else 
if(e.which) return  e.which;
return-1;
}
function WA_onkeypress(e)
{
var QcNFl=ooehU(e);
if(WA_Dialog.aijkr)
{
if(WA_Dialog.aijkr.onkeypress(QcNFl))
{
return false;
}
}
return iHoDi("keypress",[QcNFl]);
}
function WA_ondblclick(e)
{
return iHoDi("dblclic",[""]);
}
function WA_onkeydown(e)
{
var QcNFl=ooehU(e)
if(WA_Dialog.aijkr)
{
if(WA_Dialog.aijkr.onkeydown(QcNFl))
{
return false;
}
}
if(QcNFl==13) return true;

if(wa_global_photo_album&&wa_global_photo_album.fullpage_object)
{
var BrPun=wa_global_photo_album.fullpage_object
return BrPun.onFullScreenKeydown(QcNFl) 
}
return iHoDi("keydown",[QcNFl]);
}
function WA_genericMouseWheelHandler(e)
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
var b_default=false;
if(delta)
{
if(document.wa_global_handlers!=undefined)
{
var OFaQW=this.id
var ZxTGo=document.wa_global_handlers[OFaQW+"-mousewheel"]
if(ZxTGo)
{
if(ZxTGo([OFaQW],[delta]))
{
b_default=true;
}
}
}
}
if(b_default)
if(e.preventDefault)
e.preventDefault();
e.returnValue=!b_default;
}
function WA_addHandler(OFaQW,PfSOd_event,GgvJJ)
{
if(document.wa_global_handlers==undefined) document.wa_global_handlers=new Array()
if(PfSOd_event=="mousewheel")
{
var xKZmm=document.getElementById(OFaQW);
if(xKZmm.addEventListener)
xKZmm.addEventListener('DOMMouseScroll',WA_genericMouseWheelHandler,false);
xKZmm.onmousewheel=WA_genericMouseWheelHandler
}
document.wa_global_handlers[OFaQW+"-"+PfSOd_event]=GgvJJ
}
function WA_loadPhotoAlbum(OFaQW,KDhSQ,JKLvk,OFaQW_modif)
{
if(typeof(wa_global_photo_album[OFaQW])=="undefined")
{
var o=new Array();
o.src_folder=KDhSQ
o.size_container=JKLvk
o.id_modif=OFaQW_modif
wa_global_photo_album[OFaQW]=o;
}
}
function WA_focused_element()
{
return document.wa_global_focused_element
}
function WA_focus(BrPun)
{
document.wa_global_focused_element=BrPun.id
}
function WA_loadScript(url,callback,params)
{
var e=document.createElement("script");
e.src=url;
e.type="text/javascript";
e.onerror=function(){callback(params,false);}
if(/msie/i.test(navigator.userAgent)&&!/opera/i.test(navigator.userAgent)){
e.onreadystatechange=function(){
if((this.readyState=='complete')||(this.readyState=='loaded')){
callback(params,true);
}
}
}else
{
e.onload=function(){
if(/opera/i.test(navigator.userAgent))
wa_timeout(callback,0,params,true);
else
callback(params,true);
}
}
document.getElementsByTagName("head")[0].appendChild(e);
}
function WA_blog_declare(OFaQW_blog,OFaQW_button,rHMQA)
{
if(!document.wa_global_blogs_elements)document.wa_global_blogs_elements=new Array()
if(!document.wa_global_blogs_buttons)document.wa_global_blogs_buttons=new Array()
if(!document.wa_global_blogs_elements[OFaQW_button])document.wa_global_blogs_elements[OFaQW_button]=new Array()
document.wa_global_blogs_elements[OFaQW_button].id_blog=OFaQW_blog
document.wa_global_blogs_elements[OFaQW_button].has_email=rHMQA
}
function WA_addSearchHandler(OFaQW)
{
return WA_addHandler(OFaQW,"keypress",FUsYG)
}
function FUsYG(OFaQW,PochL)
{
var QcNFl=PochL[0]
if(QcNFl==13)
{
var OFaQW_input=OFaQW+"-search-input";
WA_onSearch(OFaQW_input)
return false;
}
return true;
}
function WA_declareSearchIndex(kDLac,doIKn)
{
document.const_wa_search_js=kDLac
document.const_wa_search_index_js=doIKn
}
function WA_onSearch(OFaQW_input)
{
var dWOaM=document.getElementById(OFaQW_input);
if(document.wa_search_js_loaded==true)
{
WA_openSearchDialog(dWOaM,document.const_wa_search_index_js)
}
else
{
WA_Dialog.progress();
Yxjhs(dWOaM)
}
}
function XPxWm(PochL)
{
document.wa_search_js_loaded=true
WA_openSearchDialog(PochL[0],document.const_wa_search_index_js)
}
function Yxjhs(dWOaM_field)
{
WA_loadScript(document.const_wa_search_js,XPxWm,[dWOaM_field])
}
function APiSM(offset){
var endstr=document.cookie.indexOf(";",offset);
if(endstr==-1)
endstr=document.cookie.length;
return unescape(document.cookie.substring(offset,endstr));
}
function WA_GetCookie(name)
{
var arg=name+"=";
var alen=arg.length;
var clen=document.cookie.length;
var i=0;
while(i<clen)
{
var j=i+alen;
if(document.cookie.substring(i,j)==arg)
return APiSM(j);
i=document.cookie.indexOf(" ",i)+1;
if(i==0) break;
}
return "";
}
function WA_SetCookie(name,value){
var argv=WA_SetCookie.arguments;
var argc=WA_SetCookie.arguments.length;
var expires=(argc>2)?argv[2]:null;
var path=(argc>3)?argv[3]:null;
var domain=(argc>4)?argv[4]:null;
var secure=(argc>5)?argv[5]:false;
document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}
function WA_bg_menu(OFaQW)
{
var expub=document.wa_global_menu_declaration[OFaQW]
WA_bg(OFaQW,expub.root_lx,expub.root_ly,expub.root_corner,expub.root_border,expub.root_col_border,[expub.root_bg],false,0)
var gclCQ=document.getElementById(expub.id)
if(!gclCQ)return;
var c=gclCQ.getContext('2d');
c.lineWidth=1
c.strokeStyle=expub.root_col_separator
var PxCvj=0.5;

var OJiqI=expub.root_sizes.length
if(expub.root_extend==false)
{
OJiqI--;
}
var xbxBr=3;
for(var i=0;i<OJiqI;i++)
{
var JKLvk=expub.root_sizes[i] 

c.beginPath();
if(expub.root_vertical==false)
{
PxCvj+=(JKLvk-1)
c.moveTo(PxCvj,xbxBr)
c.lineTo(PxCvj,expub.root_ly-xbxBr)
}
else
{
PxCvj+=(JKLvk)
c.moveTo(xbxBr,PxCvj-1,0)
c.lineTo(expub.root_lx-xbxBr,PxCvj-1)
}
c.closePath();
c.stroke()
}
}
function WA_declare_menu(OFaQW,expub)
{
if(!document.wa_global_menu_declaration)document.wa_global_menu_declaration=new Array();
expub.id=OFaQW
document.wa_global_menu_declaration[OFaQW]=expub
WA_bg_menu(OFaQW)
}
function WA_declareMarket(OFaQW,kCdHK,OFaQW_modif)
{
if(typeof(wa_global_market.markets[kCdHK])=="undefined")
{
var o=new Array();
o.src_folder=kCdHK
o.id_modif=OFaQW_modif 

o.id=OFaQW
wa_global_market.markets[kCdHK]=o;
}
}
function WA_button_market_declare(OFaQW,bIZZV)
{
if(!document.wa_global_button_market_declaration)document.wa_global_button_market_declaration=new Array();
document.wa_global_button_market_declaration[OFaQW]=bIZZV
}
function PYsGO(c,img,nafGT,UReEu,hBJkw,jItZb,bgVXi,VfNUI,XDrfZ)
{
c.globalAlpha=VfNUI
if(XDrfZ) c.clearRect(0,0,hBJkw,jItZb) 
if(VfNUI==0)return;
if(bgVXi)
{
c.drawImage(img,bgVXi.x,bgVXi.y,bgVXi.width,bgVXi.height,nafGT,UReEu,hBJkw,jItZb)
}
else
{
c.drawImage(img,nafGT,UReEu,hBJkw,jItZb)
}
}
function WA_drawImage(id,ZUeIh,nafGT,UReEu,hBJkw,jItZb,bgVXi,VfNUI,XDrfZ)
{
if(XDrfZ==undefined)XDrfZ=true;
if(VfNUI==undefined)VfNUI=1.0;
var el=document.getElementById(id)
if(!el)return
var c=el.getContext('2d');
c.shadowOffsetX=0;c.shadowOffsetY=0;c.shadowBlur=0;
if(c.old_src==ZUeIh)
{
PYsGO(c,c.jxUIv,nafGT,UReEu,hBJkw,jItZb,bgVXi,VfNUI,XDrfZ)
return;
}
var img=new Image();
img.AVVVl=el.AVVVl
img.onload=function()
{
c.old_src=ZUeIh
c.jxUIv=this;
PYsGO(c,this,nafGT,UReEu,hBJkw,jItZb,bgVXi,VfNUI,XDrfZ)
}
img.src=ZUeIh;
}

-->
