(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[6497],{1302:(t,e,n)=>{"use strict";n(4678);var a=n(2396),i=n(9755);i(".savegroupe").click((function(){var t=i(this).attr("id"),e={notes:[]},n=!1;i(".noteetudiant:input").each((function(){if(i(this).hasClass(t)){var a=i(this).data("etudiant"),r=i("#com_"+a);r.val().length>255&&(n=!0,r.addClass("is-invalid"));var s={id:a,note:i(this).val(),absence:i("#abs_"+a).prop("checked"),commentaire:r.val()};e.notes.push(s)}})),!1===n?i.ajax({url:Routing.generate("application_personnel_note_ajax_saisie",{uuid:i(this).data("evaluation")}),type:"POST",data:{notes:e},success:function(t){(0,a.qX)("Les notes de <strong>ce groupe</strong> ont été enregistrées avec succés ! Vous pouvez les modifier !","success")},error:function(){(0,a.qX)("Une erreur est survenue pendant l'envoi... <br>Veuillez réessayer","danger")}}):(0,a.qX)("Le formulaire contient des erreurs. Veuillez corriger et valider de nouveau","danger")})),i(document).on("keyup",".noteetudiant",(function(t){var e=i(this).val();"-0.01"===e?i(this).removeClass("is-invalid").removeClass("is-valid"):parseFloat(e)>=0&&parseFloat(e)<=20?i(this).removeClass("is-invalid").addClass("is-valid"):i(this).removeClass("is-valid").addClass("is-invalid")}))},2396:(t,e,n)=>{"use strict";n.d(e,{qX:()=>g,FX:()=>D,xQ:()=>x,bV:()=>y,XQ:()=>B,zl:()=>j});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a=n(6455),i=n.n(a),r=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),s=n.n(r);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const d=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var e,n,a;return e=t,(n=[{key:"show",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=c(c({},this.defaultOptions),a)).className+=" toast-"+t;var i='<div class="toast-wrapper">';n&&(i+='<div class="toast-head">'+n+"</div>"),i+='<div class="toast-body">'+e+"</div>",i+="</div>",a.text=i,s()(a).showToast()}},{key:"error",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",t,e,n)}},{key:"warning",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",t,e,n)}},{key:"success",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",t,e,n)}},{key:"info",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",t,e,n)}}])&&u(e.prototype,n),a&&u(e,a),t}());var p,f,v,m=n(9755),h=n(9755),b=!1;function y(t,e){for(e=e.toLowerCase();t&&t.nodeName.toLowerCase()!=e;)t=t.parentNode;return t||null}function g(t,e){switch(e){case"success":d.success(t);break;case"danger":d.error(t);break;case"warning":d.warning(t);break;case"info":d.info(t)}}p=m(location).attr("pathname"),f=p.split("/"),v=2,"index.php"===f[1]&&f.length>1&&(v=3),"super-administration"===f[v]&&(v+=1),""===f[f.length-1]&&f.pop(),m(".menu-item").removeClass("active"),m("#menu-"+f[v]).addClass("active"),i().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m(document).on("click",".supprimer",(function(t){t.preventDefault();var e=m(this).attr("href"),n=m(this).data("csrf");i().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(a){a.value?m.ajax({url:e,type:"DELETE",data:{_token:n},success:function(e){if(e.hasOwnProperty("redirect")&&e.hasOwnProperty("url"))document.location.href=e.url;else{var n=y(t.target,"tr");n.parentNode.removeChild(n),g("Suppression effectuée avec succès","success"),i().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}},error:function(t,e,n){i().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),g("Erreur lors de la tentative de suppression","danger")}}):"cancel"===a.dismiss&&i().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var k="",w="text",C=!1;function O(t){var e=m("#myedit-input-"+t).val();m.ajax({url:k.attr("href"),data:{field:k.data("field"),value:e,type:w},method:"POST",success:function(){k.html(e),m("#myEdit-zone-"+t).replaceWith(k),C=!1}})}function x(t,e){var n={};return m.each(m(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=e)switch(e[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[t]=a}})),n}function B(t){t.removeClass("is-valid").addClass("is-invalid")}function j(t){t.removeClass("is-invalid").addClass("is-valid")}function D(t){t.removeClass("is-invalid").removeClass("is-valid")}m(document).on("click",".myedit",(function(t){t.preventDefault(),k=m(this);var e,n,a="";C=!0,void 0!==m(this).data("type")&&(w=m(this).data("type")),"select"===m(this).data("type")||("textarea"===m(this).data("type")?(e=m(this),n=Date.now(),b=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+e.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var e=Date.now();return'<div id="myEdit-zone-'+e+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+e+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(m(this))),m(this).replaceWith(a),m("#myedit-input").focus()})),m(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===b?O():27===t.keyCode&&m("#myEdit-zone").replaceWith(k)})),m(document).on("click",".myedit-valide",(function(t){b=!1,t.preventDefault(),O(m(this).data("key"))})),m(document).on("keypress",(function(t){!0===C&&!1===b&&13===t.which&&(t.preventDefault(),O(m(this).data("key"))),!0===C&&!1===b&&27===t.which&&(t.preventDefault(),m("#myEdit-zone-"+m(this).data("key")).replaceWith(k))})),m(document).on("click",".myedit-annule",(function(t){t.preventDefault(),m("#myEdit-zone-"+m(this).data("key")).replaceWith(k)})),h.fn.dataAttr=function(t,e){return m(this)[0].getAttribute("data-"+t)||e},h.fn.hasDataAttr=function(t){return m(this)[0].hasAttribute("data-"+t)}},2814:(t,e,n)=>{var a=n(7854),i=n(3111).trim,r=n(1361),s=a.parseFloat,o=1/s(r+"-0")!=-1/0;t.exports=o?function(t){var e=i(String(t)),n=s(e);return 0===n&&"-"==e.charAt(0)?-0:n}:s},4678:(t,e,n)=>{var a=n(2109),i=n(2814);a({global:!0,forced:parseFloat!=i},{parseFloat:i})}},t=>{"use strict";t.O(0,[9755,2109,4093,1870,8771],(()=>{return e=1302,t(t.s=e);var e}));t.O()}]);