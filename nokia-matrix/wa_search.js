<!--

function bmtjG(PochL)
{
document.wa_search_index_js_loaded=true;
var nBUFl=PochL[0]
LQjUX();
nBUFl.GeLvM=false;
nBUFl.isKLr()
}
function WA_onClickSearch()
{
var nBUFl=WA_Dialog.getCurrent()
if(!nBUFl)return;
if(nBUFl.GeLvM==true) return;
nBUFl.isKLr()
}
function oYvfj(dWOaM)
{
var dWOaM_value=dWOaM.value
var fVsvL=dWOaM_value;
fVsvL=removeAccentsFromString(fVsvL);
fVsvL=trimString(fVsvL);
var mAHtX=[",",";","\\.","'",":","/","`","\\?"];
for(var c=0;c<mAHtX.length;c++)
{
var reg=new RegExp(mAHtX[c],"g");
fVsvL=fVsvL.replace(reg," ")
}
var gddmY=fVsvL.toLowerCase().split(" ");
var IhpKM=new Array();
for(var i=0;i<gddmY.length;i++)
{
var w=trimString(gddmY[i]);
if((w!=undefined)&&(w.length>2))
{
IhpKM.push(w);
}
}
IhpKM=IhpKM.sort(WLrlo);
var OJHnV_search=new Array()
for(var i=0;i<IhpKM.length;i++)
{
var w=IhpKM[i];
var wpDsU=""
for(var i2=0;i2<w.length;i2++)
{
var SFcnb=w.charCodeAt(i2);
if((SFcnb>125)||(SFcnb==38)||(SFcnb=='<')||(SFcnb=='>')||(SFcnb=='"'))
{
wpDsU+="&#"+SFcnb+";"
}
else
{
wpDsU+=w.charAt(i2);
}
}
OJHnV_search.push(wpDsU);
}

var BWCAH=new Array();
for(var i=0;i<OJHnV_search.length;i++)
{
var nBUFl=OJHnV_search[i];
var eEEWb=true;
for(var i2=i+1;i2<OJHnV_search.length;i2++)
{
var wpDsU=OJHnV_search[i2];
if(wpDsU.indexOf(nBUFl)>-1)
{
eEEWb=false;
break;
}
}
if(eEEWb) BWCAH.push(nBUFl);
}
return BWCAH;
}
function WA_openSearchDialog(dWOaM,doIKn)
{
var nBUFl=new WA_Dialog();
nBUFl.oklmM=dWOaM
nBUFl.HmbQE=function(dWOaM_value)
{
this.Txjtc='search-dialog-input'
this.Nusmr='search-dialog-select-filter'
this.XDQZl_windows_title_result="wa-result-windows-title"
this.uXbqm="wa-result-windows"
var CNWfL="font-family:Arial;"
var XWxSI=CNWfL+"color:"+this.getColorTheme(3)+";font-weight:bold;font-size:12px;"
this.initializeWindow(600,700)
var UjpuG=""
UjpuG+="<table border=0 cellpadding=0 cellspacing=0  style='width:100%;'>";
UjpuG+="<tr><td align=left style='"+XWxSI+"'>"
UjpuG+="<input type=text results=0 placeholder='' id='"+this.Txjtc+"' >&nbsp;&nbsp;"
UjpuG+="<input type=button value='"+Translator.tr("Search")+"' onclick='WA_onClickSearch()'>"
UjpuG+="&nbsp;&nbsp;"
UjpuG+="<select id='"+this.Nusmr+"' onchange='WA_onClickSearch()'>"
UjpuG+="<option value='-1'>"+Translator.tr("All results")+"</option>"
UjpuG+="<option value='0'>"+Translator.tr("Pages results")+"</option>"
UjpuG+="<option value='2'>"+Translator.tr("Photos results")+"</option>"
UjpuG+="<option value='1'>"+Translator.tr("Articles results")+"</option>"
UjpuG+="</select>"
UjpuG+="<br><br>"
UjpuG+="</td>"
UjpuG+="</tr>";
UjpuG+="</table>"
UjpuG+="<div id='"+this.XDQZl_windows_title_result+"' style='"
UjpuG+="font-family:Arial;color:#ffffff;text-align:right;font-size:13px;";
UjpuG+="height:20px;line-height:20px;width:100%;background-color:"+this.getColorTheme(0)+";"
UjpuG+="' ></div>"
UjpuG+="<div id='"+this.uXbqm+"' style='";
UjpuG+="position:relative;overflow:auto;"
UjpuG+="border-style:solid;border-width:1px;border-color:"+this.getColorTheme(0)+";"
UjpuG+="background-color:#ffffff;width:"+this.hoLvw()+"px;height:"+this.qrpoG()+"px;'></div>"
this.writeContent(UjpuG)
var dWOaM=document.getElementById(this.Txjtc);
dWOaM.value=dWOaM_value
}
nBUFl.dGRNJ=function(UjpuG)
{
var ehjlj_title=document.getElementById(this.XDQZl_windows_title_result);
if(ehjlj_title)
{
ehjlj_title.innerHTML=UjpuG+"&nbsp;"
}
}
nBUFl.closeWin=function()
{
this.oklmM.focus()
this.intern_closeWin()
}
nBUFl.onCustomKeypress=function(QcNFl)
{
if(QcNFl==13)
{
this.isKLr()
return true;
}
if(QcNFl!=27)
{
this.JjPdv("")
this.dGRNJ("");
}
return false;
}
nBUFl.hoLvw=function()
{
return this.m_content_lx-2;
}
nBUFl.qrpoG=function()
{
return this.m_content_ly-80;
}
nBUFl.customUpdate=function()
{
var ehjlj=document.getElementById(this.uXbqm);
if(ehjlj)
{
html_SetSize(this.uXbqm,this.hoLvw(),this.qrpoG());
}
}
nBUFl.JjPdv=function(UjpuG)
{
var ehjlj=document.getElementById(this.uXbqm);
ehjlj.innerHTML=UjpuG
}
nBUFl.isKLr=function()
{
var cQetl_filter=document.getElementById(this.Nusmr);
var fVBUp=cQetl_filter.value
var dWOaM=document.getElementById(this.Txjtc);
this.oklmM.value=dWOaM.value
var OJHnV_query=oYvfj(dWOaM)
var SSKfZ=lBgiv(OJHnV_query,fVBUp)
var UjpuG=""
var CNWfL="font-family:Arial;";
var cogoA="color:#0000ff;text-decoration:underline;font-size:15px;";
var mFdMa="color:#000000;font-size:13px;";
var hfKLV="color:#006600;font-size:13px;";
var YkeKS="color:#990099;font-size:12px;";
var DWSXs="color:#006600;font-size:11px;";
UjpuG+="<table border=0 cellpadding=0 cellspacing=3  style='"+CNWfL+"width:90%;'>";
var l_image=40;
for(var i=0;i<SSKfZ.length;i++)
{
var OoeBi=SSKfZ[i]
var Nwduq=OoeBi.page_reference;
var AHsZZ=Nwduq.aAWdb(OJHnV_query);
var desc=Nwduq.m_description;
var url=Nwduq.url(Translator.m_lang_for_filename)
var VbQNR=false;
if((Nwduq.m_img.length>0))
{
if(isNaN(Nwduq.m_img_lx))
{
VbQNR=new Size(l_image,l_image)
}
else
{
VbQNR=new Size(Nwduq.m_img_lx,Nwduq.m_img_ly)
if(VbQNR.scale(new Size(l_image,l_image))==false)
{
VbQNR=new Size(l_image,l_image)
}
}
}
UjpuG+="<tr valign=top>"
if(VbQNR)
{
UjpuG+="<td width="+l_image+"px  align=center>"
UjpuG+="<a href='"+url+"'><img hspace=0 vspace=3  border=0  width=\""+VbQNR.width+"\" height=\""+VbQNR.height+"\" src=\""+Nwduq.m_img+"\"></a>";
UjpuG+="</td>"
}
UjpuG+="<td"
if(!VbQNR)
{
UjpuG+=" colspan=2"
}
UjpuG+=">"
UjpuG+="<a style='"+cogoA+"' href='"+url+"'>"+AHsZZ+"</a>";
UjpuG+=" <span style='"+DWSXs+"'>"+Translator.tr("Pertinence")+" : "+OoeBi.scoring+"</span>";
UjpuG+="<br>";
if(desc.length>0)
{
UjpuG+="<span style='"+mFdMa+"'>"+Nwduq.rCUgL(OJHnV_query)+"</span><br>";
}
UjpuG+="<a style='"+hfKLV+"' href='"+url+"'>"+url+"</a><br><br>";
UjpuG+="</td>"
UjpuG+="</tr>"
}
UjpuG+="</table>" 
this.JjPdv(UjpuG)
if(SSKfZ.length==0)
{
this.dGRNJ(Translator.tr("No results"))
}
else
{
this.dGRNJ(Translator.tr("Search result")+" : "+SSKfZ.length)
}
dWOaM.focus()
}
nBUFl.HmbQE(dWOaM.value)
if(document.wa_search_index_js_loaded==true)
{
nBUFl.isKLr()
}
else
{
nBUFl.GeLvM=true;
nBUFl.dGRNJ("Loading search index...")
nBUFl.JjPdv("<div width=100% align=center><img src='wa_loading.gif'></div>")
WA_loadScript(doIKn,bmtjG,[nBUFl])
}
}
function lBgiv(OJHnV_query,fVBUp)
{
var ISNAH=false;
var NaeWD=new Array()
var onUII=CONST_WA_SEARCH_INDEX.m_array_index
var txdww=CONST_WA_SEARCH_INDEX.m_array_page_infos 
var OJHnV_search=OJHnV_query
for(var i=0;i<OJHnV_search.length;i++)
{
var w=OJHnV_search[i];
if(w.length>0)
{
NaeWD=new Array();
for(var index in onUII)
{
var RmvYS=index.indexOf(w);
if(RmvYS!=-1)
{
var list_refs=onUII[index];
for(var index_page in list_refs)
{
var ref=list_refs[index_page];
var obj_result=NaeWD[index_page];
if(!obj_result)
{
NaeWD[index_page]=new Object();
obj_result=NaeWD[index_page];
obj_result.list_langs=new Array();
}
var VSAxp=obj_result.list_langs;
for(var lng in ref)
{
var hMYNN=parseInt(ref[lng]);
hMYNN*=EbGng.AScBP(w,index);
if(!VSAxp[lng])
{
VSAxp[lng]=hMYNN;
}
else
{
VSAxp[lng]+=hMYNN;
}
}
}
}
}
if(ISNAH)
{
var JiBoa=new Array();
for(var index in NaeWD)
{
for(var index2 in ISNAH)
{
if(index2==index)
{
JiBoa[index]=NaeWD[index];
break;
}
}
}
NaeWD=JiBoa;
}
ISNAH=NaeWD;
}
}
var SsoPa=new Array();
var key_lang_page=Translator.m_lang;
var FJhbj=0;
for(var index_page in NaeWD)
{
var list_lng=NaeWD[index_page].list_langs;
var key_lang_reference="";
var hRiSF_score=0;
var i=0;
for(var lng in list_lng)
{
if(i==0)
{
key_lang_reference=lng;
hRiSF_score+=list_lng[lng];
}
if(lng==key_lang_page)
{
hRiSF_score+=list_lng[lng];
key_lang_reference=lng;
break;
}
i++;
}
if(key_lang_reference.length==0)
{
key_lang_reference="#";
}
var Nwduq=txdww[index_page][key_lang_reference];
if(Nwduq&&((fVBUp<0)||(fVBUp==Nwduq.m_type)))
{
var OoeBi=new Array();
OoeBi.page_reference=Nwduq;
OoeBi.index_page=index_page;
OoeBi.scoring=hRiSF_score+Nwduq.OIcbA(OJHnV_search);
OoeBi.test_index=FJhbj;
SsoPa.push(OoeBi);
FJhbj++;
}
}
SsoPa=SsoPa.sort(BZNIR);
return SsoPa;
}
function LQjUX()
{
if(CONST_WA_SEARCH_INDEX.initialized==true) return;
CONST_WA_SEARCH_INDEX.initialized=true
CONST_WA_SEARCH_INDEX.m_array_index=new Array()
CONST_WA_SEARCH_INDEX.m_array_page_infos=new Array() 
var IrjGk=CONST_WA_SEARCH_INDEX.index
for(var wHJEn=0;wHJEn<IrjGk.length;wHJEn+=2)
{
var CoIbV=IrjGk[wHJEn]
var JUcuk=IrjGk[wHJEn+1]
var hRiSF_list_2=new Array();
var hRiSF_list=JUcuk.split(",");
for(var IrjGk_ref0 in hRiSF_list)
{
var MSKnv="#";
var IrjGk_ref=hRiSF_list[IrjGk_ref0]
var UjpuG_score="";
var cklkq=IrjGk_ref.indexOf(":");
if(cklkq!=-1)
{
UjpuG_score=IrjGk_ref.substring(cklkq+1);
IrjGk_ref=IrjGk_ref.substring(0,cklkq);
}
var vGCLn="";
var EDZgS_info=IrjGk_ref.indexOf("@");
if(EDZgS_info!=-1)
{
vGCLn=IrjGk_ref.substring(EDZgS_info+1);
IrjGk_ref=IrjGk_ref.substring(0,EDZgS_info);
}
var EDZgS=IrjGk_ref.indexOf("|");
if(EDZgS!=-1)
{
MSKnv=IrjGk_ref.substring(EDZgS+1);
IrjGk_ref=IrjGk_ref.substring(0,EDZgS);
}
var IrjGk_page=IrjGk_ref;
if(vGCLn.length>0)
{
IrjGk_page+="@"+vGCLn;
}
if(!hRiSF_list_2[IrjGk_page])
{
hRiSF_list_2[IrjGk_page]=new Array();
}
var VSAxp=hRiSF_list_2[IrjGk_page];
if(!VSAxp[MSKnv])
{
VSAxp[MSKnv]=UjpuG_score;
}
}
var xjxFm_index=CONST_WA_SEARCH_INDEX.m_array_index
if(!xjxFm_index[CoIbV])
{
xjxFm_index[CoIbV]=hRiSF_list_2;
}
else
{
for(var MSKnv in hRiSF_list_2)
{
xjxFm_index[CoIbV][MSKnv]=hRiSF_list_2[MSKnv];
}
}
}
var GlBOb=CONST_WA_SEARCH_INDEX.page_info;
var GQYwd=CONST_WA_SEARCH_INDEX.m_array_page_infos
for(var wHJEn=0;wHJEn<GlBOb.length;wHJEn++)
{
var cEwhi=GlBOb[wHJEn]
var hRiSF=cEwhi.ref;
if(hRiSF)
{
var Nwduq=new EbGng();
Nwduq.m_ref=hRiSF;
Nwduq.parseAttributes(cEwhi);
if(!GQYwd[hRiSF])
{
GQYwd[hRiSF]=new Array();
}
var bXStu=Nwduq.m_lang;
if(bXStu.length==0)
{
bXStu="#";
}
GQYwd[hRiSF][bXStu]=Nwduq;
}
}
}
function EbGng()
{
this.m_ref="";
this.m_img=""
this.lIUHq=function(UjpuG)
{
if(UjpuG==undefined) return""
return UjpuG
}
this.parseAttributes=function(cEwhi)
{
this.m_lang=cEwhi.lng;
this.m_url=cEwhi.url;
this.m_title=this.lIUHq(cEwhi.title);
this.m_title2=this.lIUHq(cEwhi.title2);
this.m_description=this.lIUHq(cEwhi.desc);
this.m_description2=this.lIUHq(cEwhi.desc2);
this.m_keywords=this.lIUHq(cEwhi.k);
this.m_img=this.lIUHq(cEwhi.img);
var img_size=cEwhi.img_size;
if(!img_size)img_size=""
this.m_type=parseInt(cEwhi.type)
if(isNaN(this.m_type))
{
this.m_type=0;
}
if(img_size.length>0)
{
var list_size=img_size.split(",");
if(list_size.length==2)
{
this.m_img_lx=parseInt(list_size[0])
this.m_img_ly=parseInt(list_size[1])
}
}
}
this.OIcbA=function(OJHnV_search)
{
var res=0;
for(var i=0;i<OJHnV_search.length;i++)
{
var w=OJHnV_search[i];
if(w.length>1)
{
res+=25*EbGng.AScBP(w,this.m_title2);
res+=15*EbGng.AScBP(w,this.m_description2);
res+=30*EbGng.AScBP(w,this.m_keywords);
}
}
return res;
}
this.url=function(lng)
{
if(this.m_lang=="all")
{
if(lng.length==0)
{
return this.m_url.replace(/@lng@/g,"") 
}
else
{
return this.m_url.replace(/@lng@/g,"_"+lng)
}
}
return this.m_url;
}
this.formatStringWithQuery=function(s,OJHnV_search)
{
var title_ref=s;
var title2=removeAccentsFromString(title_ref.toLowerCase());
var result=title_ref;
var result2=title2;
for(var i=0;i<OJHnV_search.length;i++)
{
var w=trimString(OJHnV_search[i]);
var len_w=w.length;
if(len_w>1)
{
var nb=0;
var ind0=0;
var ind_search=0;
var ind=0;
do
{
ind=result2.indexOf(w,ind_search);
if(ind>-1)
{
var index_1=ind+len_w;
var s0=result.substring(ind0,ind);
var sw=result.substring(ind,ind+len_w);
var s1=result.substring(index_1);
var s2_0=result2.substring(ind0,ind);
var s2_1=result2.substring(index_1);
result=s0+"<b>"+sw+"</b>"+s1;
result2=s2_0+"<b>"+w+"</b>"+s2_1;
ind_search=index_1+7;
}
nb++;
}
while(ind>0);
}
}
return result;
}
this.title=function()
{
var title=this.m_title;
if(title.length==0)
{
title="Page "+this.m_ref+"(no title !)";
}
return title;
}
this.aAWdb=function(OJHnV_search)
{
return this.formatStringWithQuery(this.title(),OJHnV_search);
}
this.rCUgL=function(OJHnV_search)
{
return this.formatStringWithQuery(this.m_description,OJHnV_search);
}
}
EbGng.AScBP=function(OLHTN,match_w)
{
var hMYNN=0;
if(OLHTN==match_w)
{
hMYNN=6.2;
}
else
{
var ind=match_w.indexOf(OLHTN);
if(ind==0)
{
hMYNN=5;
}
else
if(ind>0)
{
hMYNN=1;
}
}
return hMYNN;
}
function WLrlo(a,b)
{
if(a.length<b.length) return-1;
else
if(a.length>b.length) return 1;
return 0;
}
function BZNIR(a,b)
{
if(b.scoring<a.scoring) return-1;
else
if(b.scoring>a.scoring) return 1;
if(a.page_reference.m_type<b.page_reference.m_type) return-1;
else
if(a.page_reference.m_type>b.page_reference.m_type) return 1;
return 0;
}

-->
