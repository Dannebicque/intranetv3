(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[1618],{6839:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321);var a=n(8588),r=n.n(a);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const c=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var e,n,a;return e=t,(n=[{key:"show",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=o(o({},this.defaultOptions),a)).className+=" toast-"+t;var i='<div class="toast-wrapper">';n&&(i+='<div class="toast-head">'+n+"</div>"),i+='<div class="toast-body">'+e+"</div>",i+="</div>",a.text=i,r()(a).showToast()}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",t,e,n)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",t,e,n)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",t,e,n)}},{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",t,e,n)}}])&&s(e.prototype,n),a&&s(e,a),t}())},8492:(t,e,n)=>{"use strict";var a=n(1128),r=n(9755);r(document).on("click",".rattrapage-accepte",(function(t){t.preventDefault();var e=r(this).data("rattrapage");r.ajax({url:Routing.generate("administration_rattrapage_change_etat",{uuid:e,etat:"a"}),success:function(){var t=r(".bx_"+e),n=t.parent();t.remove(),n.prepend('<a href="#" class="btn btn-success btn-outline"><i class="ti-check"></i>Acceptée</a>'),(0,a.qX)("Demande de rattrapage validée !","success")},error:function(){(0,a.qX)("Une erreur est survenue !","danger")}})})),r(document).on("click",".rattrapage-refuse",(function(t){t.preventDefault();var e=r(this).data("rattrapage");r.ajax({url:Routing.generate("administration_rattrapage_change_etat",{uuid:e,etat:"r"}),success:function(){var t=r(".bx_"+e),n=t.parent();t.remove(),n.prepend('<a href="#" class="btn btn-warning btn-outline"><i class="ti-na"></i>Refusée</a>'),(0,a.qX)("Demande de rattrapage refusée !","success")},error:function(){(0,a.qX)("Une erreur est survenue !","danger")}})})),r(document).on("change",".dateChange",(function(){var t=r(this).data("rattrapage");r.ajax({url:Routing.generate("administration_rattrapage_planning_change",{uuid:t,type:"date"}),data:{data:r(this).val()},method:"POST",error:function(){(0,a.qX)("Une erreur est survenue !","danger")}})})),r(document).on("blur",".salleChange",(function(){var t=r(this).data("rattrapage");r.ajax({url:Routing.generate("administration_rattrapage_planning_change",{uuid:t,type:"salle",data:r(this).val()}),error:function(t){(0,a.qX)("Une erreur est survenue !","danger")}})})),r(document).on("blur",".heureChange",(function(){var t=r(this).data("rattrapage");r.ajax({url:Routing.generate("administration_rattrapage_planning_change",{uuid:t,type:"heure",data:r(this).val()}),error:function(){(0,a.qX)("Une erreur est survenue !","danger")}})})),r(document).on("click","#sallePartout",(function(){var t=r("#salle").val();r.ajax({url:Routing.generate("administration_rattrapage_update_global",{type:"salle",diplome}),data:{valeur:t},method:"POST",success:function(){r(".salleChange").each((function(){r(this).val(t)}))}})})),r(document).on("click","#datePartout",(function(t){t.preventDefault();var e=r("#date").val();r.ajax({url:Routing.generate("administration_rattrapage_update_global",{type:"date",diplome}),data:{valeur:e},method:"POST",success:function(){r(".dateChange").each((function(){r(this).val(e)}))}})})),r(document).on("click","#heurePartout",(function(t){t.preventDefault();var e=r("#heure").val();r.ajax({url:Routing.generate("administration_rattrapage_update_global",{type:"heure",diplome}),data:{valeur:e},method:"POST",success:function(){r(".heureChange").each((function(){r(this).val(e)}))}})}))},1128:(t,e,n)=>{"use strict";n.d(e,{bV:()=>p,qX:()=>f,xQ:()=>b,XQ:()=>y,zl:()=>k,FX:()=>w});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a,r,i,o=n(6455),s=n.n(o),u=n(6839),c=n(9755),l=n(9755),d=!1;function p(t,e){for(e=e.toLowerCase();t&&t.nodeName.toLowerCase()!=e;)t=t.parentNode;return t||null}function f(t,e){switch(e){case"success":u.Z.success(t);break;case"danger":u.Z.error(t);break;case"warning":u.Z.warning(t);break;case"info":u.Z.info(t)}}a=c(location).attr("pathname"),r=a.split("/"),i=2,"index.php"===r[1]&&r.length>1&&(i=3),"super-administration"===r[i]&&(i+=1),""===r[r.length-1]&&r.pop(),c(".menu-item").removeClass("active"),c("#menu-"+r[i]).addClass("active"),s().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),c(document).on("click",".supprimer",(function(t){t.preventDefault();var e=c(this).attr("href"),n=c(this).data("csrf");s().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(a){a.value?c.ajax({url:e,type:"DELETE",data:{_token:n},success:function(e){if(e.hasOwnProperty("redirect")&&e.hasOwnProperty("url"))document.location.href=e.url;else{var n=p(t.target,"tr");n.parentNode.removeChild(n),f("Suppression effectuée avec succès","success"),s().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}},error:function(t,e,n){s().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),f("Erreur lors de la tentative de suppression","danger")}}):"cancel"===a.dismiss&&s().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var h="",v="text",m=!1;function g(t){var e=c("#myedit-input-"+t).val();c.ajax({url:h.attr("href"),data:{field:h.data("field"),value:e,type:v},method:"POST",success:function(){h.html(e),c("#myEdit-zone-"+t).replaceWith(h),m=!1}})}function b(t,e){var n={};return c.each(c(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function y(t){t.removeClass("is-valid").addClass("is-invalid")}function k(t){t.removeClass("is-invalid").addClass("is-valid")}function w(t){t.removeClass("is-invalid").removeClass("is-valid")}c(document).on("click",".myedit",(function(t){t.preventDefault(),h=c(this);var e,n,a="";m=!0,void 0!==c(this).data("type")&&(v=c(this).data("type")),"select"===c(this).data("type")||("textarea"===c(this).data("type")?(e=c(this),n=Date.now(),d=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(c(this))),c(this).replaceWith(a),c("#myedit-input").focus()})),c(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?g():27===t.keyCode&&c("#myEdit-zone").replaceWith(h)})),c(document).on("click",".myedit-valide",(function(t){d=!1,t.preventDefault(),g(c(this).data("key"))})),c(document).on("keypress",(function(t){!0===m&&!1===d&&13===t.which&&(t.preventDefault(),g(c(this).data("key"))),!0===m&&!1===d&&27===t.which&&(t.preventDefault(),c("#myEdit-zone-"+c(this).data("key")).replaceWith(h))})),c(document).on("click",".myedit-annule",(function(t){t.preventDefault(),c("#myEdit-zone-"+c(this).data("key")).replaceWith(h)})),l.fn.dataAttr=function(t,e){return c(this)[0].getAttribute("data-"+t)||e},l.fn.hasDataAttr=function(t){return c(this)[0].hasAttribute("data-"+t)}}},t=>{"use strict";t.O(0,[9755,2109,4093,1870,8771],(()=>{return e=8492,t(t.s=e);var e}));t.O()}]);