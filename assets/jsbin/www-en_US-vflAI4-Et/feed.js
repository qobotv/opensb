(function(g){var window=this;var Bma=function(a){g.Nk(a);a=g.O(a.currentTarget,"feed-item-collapsed-container");g.dl(a,"collapsed","expanded");g.B("yt-dom-content-change",qV)};var Cma=function(a){g.Nk(a);a=g.O(a.currentTarget,"feed-item-collapsed-container");g.dl(a,"expanded","collapsed");g.B("yt-dom-content-change",qV)};var Dma=function(){"DELAYED_EMBED"in g.Va&&(0,g.A)(g.x("DELAYED_EMBED"),function(a){g.Vf(a.container,a.swf_config)})};
var Ema=function(a){if(a=g.C(a.currentTarget,"feedback-token"))rV(a),sV("hats-title"),sV("hats-dismiss"),sV("hats-content"),a=g.F("hats-thanks",g.E("hats-container")),g.N(a),(a=g.ul(a))&&g.B("a11y-announce",a),g.y(tV,3E3)};var Fma=function(a){if(a=g.C(a.currentTarget,"feedback-token"))rV(a),tV()};var rV=function(a){g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:{feedback_tokens:[a]}})};var tV=function(){var a=g.E("hats-container");g.R(a);g.M(uV);uV.length=0;g.Xh(a);g.nk()};
var sV=function(a){a=g.F(a,g.E("hats-container"));g.R(a)};var Gma=function(a,b){function c(){var a=window.document.forms["i18n-local-languages-feed-promo-form"];a.hl.value=d;a.submit()}var d=g.C(b.currentTarget,"lang-code"),e=g.E("i18n-local-languages-feed-promo"),f=g.C(e,"promo-gl"),e=g.C(e,"current-lang");g.hl("i18n-promo-select",g.$c({gl:f,lang:d,current:e}));(new g.jA(a)).write("write_accept",{T:c,onError:c})};
var Hma=function(a){var b=g.E("i18n-local-languages-feed-promo"),c=g.C(b,"promo-gl"),b=g.C(b,"current-lang"),c=g.$c({gl:c,current:b});g.Gj("i18n-promo-dismiss",c,void 0);g.M(vV);vV=[];(new g.jA(a)).write("write_dismiss")};
var wV=function(a,b){g.u.call(this);this.l=a;this.C=b;this.j=null;this.A=g.E("page");this.j=g.L(g.E("premium-yva-close"),"click",(0,g.q)(this.Wn,this));var c=this.l;g.Of.getInstance().get("HIDDEN_MASTHEAD_ID")==c||g.J(this.A,"masthead-ad-expanded");this.B=g.L(window,"message",(0,g.q)(this.Cx,this))};var xV=function(a){var b=g.Of.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()};
var yV=function(a){if(a&&a.data&&"VideoMasthead"==a.data.source)if("ClickToWatch"==a.data.event){if(a=a.data,a.clickThroughUrl){var b=g.jl(a.clickThroughUrl),b=g.oi(b.adurl),c={};c.adpings=g.kl(a.pings);g.ae(b,c);g.de(a.clickThroughUrl)}}else"CloseAd"==a.data.event&&wV.prototype.Wn()};var Ima=function(a){a=g.O(a.target,"multi-question-shelf-feedback");zV(a);g.nk();g.cc(a,"ui-action-swap-shelf")&&AV(a)};
var Jma=function(a){for(var b=g.O(a.target,"single-question-shelf"),c=[],d=g.F("single-question-shelf-answers",b).getElementsByTagName("input"),e=0;e<d.length;e++)d[e].checked&&c.push(d[e].value);if(0<c.length){g.nk();c&&g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:{feedback_tokens:c,should_merge:1}});if(b=g.O(b,"feed-item-dismissal-notices"))b=g.F("feed-item-dismissal-activate-question",b),g.R(b);a=g.O(a.target,"single-question-shelf-feedback");g.cc(a,"ui-action-swap-shelf")&&
AV(a)}};var Kma=function(a){a=g.O(a.target,"question-shelf-dismissal");g.cc(a,"feedback-token")&&zV(a);g.cc(a,"action")&&"hide"==g.C(a,"action").toLowerCase()&&(g.nk(),a=g.O(a,"feed-item-container"),g.R(a),g.B("yt-dom-content-change",a))};
var AV=function(a){var b=g.C(a,"ui-action-swap-shelf"),c=g.O(a,"swappable-shelf"),d=g.O(a,"question-shelf-package"),b=g.F(b,d);g.N(b);g.R(c);g.cc(a,"final-feedback")&&"true"==g.C(a,"final-feedback").toLowerCase()&&(a=g.F("yt-close-img",d),g.Dl(a,"feedback-token"));g.bA.getInstance().Pd();g.B("yt-dom-content-change",b)};var zV=function(a){g.cc(a,"feedback-token")&&(a={feedback_tokens:[g.C(a,"feedback-token")]},g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:a}))};
var Lma=function(){g.M(BV);g.ll(CV);CV.length=0;(0,g.A)(DV,function(a){g.Ya(a)})};var Mma=function(a){a.preventDefault();a=g.O(a.currentTarget,"branded-page-related-channels-item");EV(a,!0)};var FV=function(a){g.OC(a,{duration:.3,Qa:function(){g.Xh(a)}})};var Nma=function(a){var b=g.P("branded-page-related-channels-item"),c=g.Fa(b,function(b){return g.C(b,"external-id")==a.j});c&&DV.push(g.y(function(){EV(c,!1)},2E3))};
var EV=function(a,b){var c=!!g.F("branded-page-related-channels-featured-badge",a),d=g.C(a,"external-id"),e=g.Uh(a,"ul"),e=g.P("branded-page-related-channels-item",e),e=(0,g.$g)(e,function(a){return g.C(a,"external-id")}),f={};c&&(f.featured=1);g.T("/guide_ajax?action_reload_channel=1",{method:"POST",ea:f,$b:!0,Y:{dismissed_id:d,shown_ids:e.join(),dismiss_old_channel:b},T:function(b,c){var d=c.new_suggested_html;d?(d=g.Xk(g.Tb(d)),g.yl(d,a),g.B("yt-dom-content-change",d),g.NC(d,0,1,{duration:.3})):
FV(a)},onError:function(){FV(a)}})};var Oma=function(a){if(a=g.O(a.target,"yt-uix-toggle-menu-item"))if(a=g.O(a,"yt-uix-toggle-menu-item-container")){var b=g.xl(a)||g.bi(a);b&&(g.R(a),g.N(b))}};var GV=function(a,b){this.G="session_token="+a;(this.j="https://"+window.document.location.hostname)&&"/"!=this.j.charAt(this.j.length-1)&&(this.j+="/");this.A=b;this.B=null;this.D=[];this.C=[];this.L={}};
var Pma=function(a){a=a.getServiceInfo();for(var b in a){var c=g.E(b+"-connected");if(c){var d=a[b],e=g.E(b+"-not-connected"),f=g.E(b+"-display-name"),k=d.is_connected;g.lf(c,k);g.lf(e,!k);g.Zh(f,d.connected_as||"")}}};var Qma=function(){g.bA.getInstance().Pd();g.CC()};var Rma=function(){g.T("/feed_ajax",{method:"POST",ea:{action_pause_watch_history:1},T:HV,onError:IV})};var Sma=function(){g.T("/feed_ajax",{method:"POST",ea:{action_resume_watch_history:1},T:HV,onError:IV})};
var HV=function(a,b){JV(b)||(g.rk(KV,LV),g.Si(KV)?KV.focus():g.Si(LV)&&LV.focus())};var Tma=function(){var a={action_clear_watch_history:1};a.clear_dialog_shown=MV;g.T("/feed_ajax",{method:"POST",ea:a,T:NV,onError:IV})};var Uma=function(){g.T("/feed_ajax",{method:"POST",ea:{action_pause_search_history:1},T:OV,onError:IV})};var Vma=function(){g.T("/feed_ajax",{method:"POST",ea:{action_resume_search_history:1},T:OV,onError:IV})};
var OV=function(a,b){JV(b)||(g.rk(PV,QV),g.Si(PV)?PV.focus():g.Si(QV)&&QV.focus())};var Wma=function(){var a={action_clear_search_history:1};a.clear_dialog_shown=SV;g.T("/feed_ajax",{method:"POST",ea:a,T:NV,onError:IV})};var NV=function(a,b){JV(b.errors)||Xma()};var IV=function(a,b){JV(b)};var JV=function(a){return a&&a.errors&&a.errors.length?((0,g.A)(a.errors,function(a){g.vs(a,TV,UV)}),!0):!1};var Xma=function(){var a=g.P("feed-item-container");(0,g.A)(a,function(a){g.Xh(a)})};var VV=function(){g.W.call(this)};
var WV=function(a){g.cc(a,"feedback-token")&&(a={feedback_tokens:[g.C(a,"feedback-token")]},g.T("/feed_change_ajax?action_give_feedback=1",{method:"POST",Y:a}))};var XV=function(){g.pb.call(this,"www/feed",["www/common"],["feed","index","results"],Yma,Zma)};
var Yma=function(){g.lr(g.bA);g.bA.getInstance().Pd();Dma();"MASTHEAD_ENCRYPTED_ID"in g.Va&&(window.masthead=new wV(g.x("MASTHEAD_ENCRYPTED_ID"),g.x("MASTHEAD_IS_BRANDED")),g.L(window,"message",yV));if("PYV_IFRAME_ID"in g.Va){var a=g.x("PYV_IFRAME_CONTENT"),b=g.E(g.x("PYV_IFRAME_ID"));b&&(b=g.wl(b),b.open(),b.write("<!DOCTYPE html><html><head></head><body>"+a+"</body></html>"),g.D||b.close())}if(a=g.E("i18n-local-languages-feed-promo"))if(b=g.C(a,"column-name")){var c={gl:g.C(a,"promo-gl")},c=g.$c(c);
g.Gj("i18n-promo-show",c,void 0);c=g.r(Hma,b);vV.push(g.Q(null,"click",g.r(Gma,b),"i18n-local-languages-feed-promo-language-option"),g.Q(a,"click",c,"i18n-local-languages-feed-promo-close"))}(a=g.E("page"))&&YV.push(g.Q(a,"click",Ima,"multi-question-shelf-feedback"),g.Q(a,"click",Jma,"single-question-shelf-feedback"),g.Q(a,"click",Kma,"question-shelf-dismissal"));BV=g.Q(window.document.body,"click",Mma,"branded-page-related-channels-item-close");CV.push(g.ml(g.Qt,Nma));(a=g.E("feed"))||(a=g.E("browse-items-primary"));
ZV.push(g.z("yt-uix-load-more-success",Qma));if(b=g.F("individual-feed"))g.C(b,"feed-name"),g.C(b,"feed-type");g.SE(a);g.x("INIT_AUTOSHARE")&&(a=new GV(g.x("XSRF_TOKEN")),a.addServiceChangedCallback(Pma),(b=g.E("facebook-connect-button"))&&a.registerConnectDialogLauncher(b,"facebook",!0),(b=g.E("twitter-connect-button"))&&a.registerConnectDialogLauncher(b,"twitter",!0),(b=g.E("orkut-connect-button"))&&a.registerConnectDialogLauncher(b,"orkut",!0),window.autoshare=a);g.CC();g.OE();(a=qV=g.E("feed"))||
(a=qV=g.E("browse-items-primary"));$V.push(g.Q(a,"click",Bma,"feed-item-expander-button"));$V.push(g.Q(a,"click",Cma,"feed-item-collapser-button"));aW||(aW=!0,bW.push(g.Q(window.document.documentElement,"click",Oma,"yt-uix-toggle-menu-item")));(a=g.E("hats-container"))&&uV.push(g.Q(a,"click",Ema,"hats-option-button"),g.Q(a,"click",Fma,"hats-dismiss-button"));UV=g.E("feed-action-alerts");TV=g.F("ajax-alert",UV);KV=g.E("watch-history-pause-button");LV=g.E("watch-history-resume-button");cW=g.E("watch-history-clear-button");
PV=g.E("search-history-pause-button");QV=g.E("search-history-resume-button");dW=g.E("search-history-clear-button");eW.push(g.L(g.E("watch-history-clear-confirm-button"),"click",Tma));eW.push(g.L(KV,"click",Rma));eW.push(g.L(LV,"click",Sma));eW.push(g.L(g.E("search-history-clear-confirm-button"),"click",Wma));eW.push(g.L(PV,"click",Uma));eW.push(g.L(QV,"click",Vma));g.C(cW,"activate-on-load")&&cW&&g.Cq.getInstance().show(cW);g.C(dW,"activate-on-load")&&dW&&g.Cq.getInstance().show(dW);SV=MV=0;g.x("LOAD_USER_INTERESTS")&&
(a=g.F("recommended-interests"),(new VV).na(a))};var Zma=function(){g.nr(g.bA);g.Sa("DELAYED_EMBED",[]);window.masthead&&(window.masthead.dispose(),g.Qk(window,"message",yV));g.M(vV);vV=[];g.M(YV);YV.length=0;Lma();g.ib(ZV);ZV.length=0;g.XE();g.ib(g.QE);g.QE.length=0;g.M($V);$V.length=0;aW=!1;g.M(bW);bW.length=0;g.M(uV);uV.length=0;g.M(eW);eW.length=0;dW=QV=PV=cW=LV=KV=UV=null;g.FE()};var qV;var $V=[];var uV=[];var vV=[];g.t(wV,g.u);var $ma=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;g.h=wV.prototype;g.h.Cx=function(a){a&&a.origin&&$ma.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Xu()};g.h.R=function(){wV.J.R.call(this);g.M(this.j);g.M(this.B);this.B=this.j=null};
g.h.Xu=function(){g.R("ad_creative_1");g.B("ads-masthead-hide");g.B("yt-dom-content-change");this.C&&g.R("ad_creative_collapse_btn_1");g.N("ad_creative_expand_btn_1");g.K(this.A,"masthead-ad-expanded");xV(this.l);g.Gj("homepage_collapse_masthead_ad",void 0,void 0)};g.h.Wn=function(){g.N("ad_creative_expand_btn_1");g.Xh(g.E("premium-yva"));g.Xh(g.E("video-masthead"));g.B("yt-dom-content-change");xV(this.l)};
g.h.eH=function(){g.dl(window.document.getElementById("premium-yva"),"premium-yva-unexpanded","premium-yva-expanded")};g.h.gH=function(){g.dl(window.document.getElementById("premium-yva"),"premium-yva-expanded","premium-yva-unexpanded")};g.h.ew=function(){g.R("premium-yva");g.K(g.E("premium-yva"),"premium-yva-unexpanded")};g.h.QH=function(){var a=g.Of.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();g.Gj("homepage_expand_masthead_ad",void 0,void 0);g.ce(window.document.location.href)};g.m("yt.flash.embed",g.Vf,void 0);g.m("yt.www.ads.pyv.pyvHomeAfcCallback",g.NE,void 0);g.m("yt.www.ads.MastheadAd",wV,void 0);wV.prototype.autoCollapsePremiumYva=wV.prototype.ew;wV.prototype.collapse_ad=wV.prototype.Xu;wV.prototype.expand_ad=wV.prototype.QH;wV.prototype.userCollapsePremiumYva=wV.prototype.Wn;wV.prototype.userExpandPremiumYva=wV.prototype.eH;wV.prototype.userUnexpandPremiumYva=wV.prototype.gH;var YV=[];var BV,CV=[],DV=[];var aW=!1,bW=[];g.m("yt.sharing.AutoShare",GV,void 0);GV.prototype.Ja=function(a,b,c,d){g.L(a,"click",(0,g.q)(this.K,this));if(a.id)this.L[a.id]={serviceName:b,connectOnly:c},d&&(this.L[a.id].connectOnlyCallback=d);else throw"Connect dialog launch buttons must have an id.";};GV.prototype.registerConnectDialogLauncher=GV.prototype.Ja;GV.prototype.K=function(a){if(a=this.L[a.currentTarget.id]){var b=a.connectOnly;a.connectOnlyCallback&&(b=(0,a.connectOnlyCallback)());this.F(a.serviceName,b)}};
GV.prototype.handleConnectService=GV.prototype.K;GV.prototype.$=function(){this.l()};GV.prototype.doOnLoad=GV.prototype.$;GV.prototype.U=function(a){this.D.push(a)};GV.prototype.addServiceChangedCallback=GV.prototype.U;GV.prototype.ga=function(a){this.C.push(a)};GV.prototype.addCanConnectCallback=GV.prototype.ga;GV.prototype.jc=function(){return this.A};GV.prototype.getServiceInfo=GV.prototype.jc;
GV.prototype.F=function(a,b){for(var c in this.C)if(!(0,this.C[c])(this,a,b))return;g.T(this.j+"autoshare",{ea:{action_ajax_stats_ping:"1",stat:"connect_has_google",service:a}});c=this.j+"autoshare?action_popup_auth=1&service="+a+"&connect_only="+(b?"true":"false");"facebook"==a&&(c+="&permissions="+(0,window.encodeURIComponent)("read_stream,offline_access,manage_pages,publish_stream"));this.S(c,{height:500,width:860})};GV.prototype.connectService=GV.prototype.F;
GV.prototype.W=function(a,b){var c=(0,g.q)(function(a,c){this.A=g.co(c.html_content);this.l();b&&b()},this),d=(0,g.q)(function(){b&&b();this.l()},this),e={action_ajax_connect_service:1};e.return_url=a;g.T(this.j+"autoshare?ajax_connect_service",{format:"XML",method:"POST",ld:g.$c(e)+"&"+this.G,T:c,onError:d})};GV.prototype.connectServiceDone=GV.prototype.W;GV.prototype.wb=function(a){this.X(a)};GV.prototype.disconnectService=GV.prototype.wb;
GV.prototype.Pa=function(a,b){var c=(0,g.q)(function(a,b){this.A=g.co(b.html_content);this.l()},this),d=(0,g.q)(function(){this.l()},this),e={action_ajax_set_connect_only:1};e.service=a;e.connect_only=b?"True":"False";g.T(this.j+"autoshare?ajax_set_connect_only",{format:"XML",method:"POST",ld:g.$c(e)+"&"+this.G,T:c,onError:d})};GV.prototype.setConnectOnly=GV.prototype.Pa;
GV.prototype.X=function(a){var b=(0,g.q)(function(a,b){this.A=g.co(b.html_content);this.l()},this),c=(0,g.q)(function(){this.l()},this),d={action_ajax_disconnect_service:1};d.service=a;g.T(this.j+"autoshare?ajax_disconnect_service",{format:"XML",method:"POST",ld:g.$c(d)+"&"+this.G,T:b,onError:c})};GV.prototype.l=function(){for(var a in this.D)(0,this.D[a])(this)};GV.prototype.S=function(a,b){if(this.B)try{this.B.close()}catch(c){this.B=null}this.B=g.Kk(a,b)};
GV.prototype.Va=function(){this.F("facebook",!this.A.facebook.is_autosharing)};var ZV=[];var MV,SV,UV,TV,KV,LV,cW,PV,QV,dW,eW=[];g.t(VV,g.W);VV.prototype.V=function(){VV.J.V.call(this);this.aa("click","user-interests-recommendation-feedback",this.A)};VV.prototype.A=function(a){var b=g.O(a.target,"user-interests-recommendation-feedback");WV(b);if(b=g.O(a.target,"recommendation"))a=g.xl(b),g.R(b),a?(b=g.F("user-interests-recommendation-impression",a),WV(b),g.N(a)):g.N(this.P("no-recommendations"))};g.m("yt.www.feed.history.onHideClearWatchHistoryDialog",function(){MV++},void 0);g.m("yt.www.feed.history.onHideClearSearchHistoryDialog",function(){SV++},void 0);g.t(XV,g.pb);XV.prototype.enable=function(){XV.J.enable.call(this)};XV.prototype.disable=function(){XV.J.disable.call(this)};g.rb(new XV);})(_yt_www);