(self.webpackChunk=self.webpackChunk||[]).push([[2772],{71263:(t,n,e)=>{"use strict";var a=e(1128),i=e(19755);i(document).on("click","#afficheEtudiants",(function(t){t.preventDefault(),t.stopPropagation();var n=i("#semestre"),e=i("#anneeUniversitaire");""!==n.val()&&""!==e.val()?((0,a.zl)(e),(0,a.zl)(n),i("#zone").empty().load(Routing.generate("administration_scolarite_saisie_promo_ajax",{semestre:n.val(),anneeUniversitaire:e.val()}))):((0,a.XQ)(e),(0,a.XQ)(n))})),i(document).on("click","#importEtudiants",(function(t){t.preventDefault(),t.stopPropagation();var n=i("#semestre"),e=i("#anneeUniversitaire");""!==n.val()&&""!==e.val()?((0,a.zl)(e),(0,a.zl)(n),i("#zone").empty().load(Routing.generate("administration_scolarite_saisie_promo_import_ajax",{semestre:n.val(),anneeUniversitaire:e.val()}))):((0,a.XQ)(e),(0,a.XQ)(n))})),i(document).on("change","#semestre",(function(){(0,a.FX)(i(this))})),i(document).on("change","#anneeUniversitaire",(function(){(0,a.FX)(i(this))}))},1128:(t,n,e)=>{"use strict";e.d(n,{qX:()=>m,xQ:()=>v,XQ:()=>h,zl:()=>g,FX:()=>B});e(74916),e(23123),e(3843),e(83710),e(73210),e(15306),e(9653);var a,i,o,r=e(19755),s=e.n(r),c=e(86455),u=e.n(c),l=e(19755),d=!1;function m(t,n){switch(n){case"success":s().toast.success(t);break;case"danger":s().toast.error(t);break;case"warning":s().toast.warning(t)}}a=s()(location).attr("pathname"),i=a.split("/"),o=2,"index.php"===i[1]&&i.length>1&&(o=3),"super-administration"===i[o]&&(o+=1),""===i[i.length-1]&&i.pop(),s()(".menu-item").removeClass("active"),s()("#menu-"+i[o]).addClass("active"),u().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),s()(document).on("click",".supprimer",(function(t){t.preventDefault();var n=s()(this).attr("href"),e=s()(this).data("csrf");u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?s().ajax({url:n,type:"DELETE",data:{_token:e},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(s()("#ligne_"+t).closest("tr").remove(),m("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,n,e){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))})),s()(document).on("click",".confirm-delete",(function(t){t.preventDefault();var n=s()(this).data("href"),e=s()(this).data("uuid"),a=s()(this).data("csrf");console.log(e),console.log(a),u().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(t){t.value?s().ajax({url:Routing.generate(n,{uuid:e}),type:"DELETE",data:{_token:a},success:function(t){t.hasOwnProperty("redirect")&&t.hasOwnProperty("url")?document.location.href=t.url:(s()("#ligne_"+t).closest("tr").remove(),m("Suppression effectuée avec succès","success"),u().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}))},error:function(t,n,e){u().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m("Erreur lors de la tentative de suppression","danger")}}):"cancel"===t.dismiss&&u().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var p="",f="text",y=!1;function b(t){var n=s()("#myedit-input-"+t).val();s().ajax({url:p.attr("href"),data:{field:p.data("field"),value:n,type:f},method:"POST",success:function(){p.html(n),s()("#myEdit-zone-"+t).replaceWith(p),y=!1}})}function v(t,n){var e={};return s().each(s()(t).data(),(function(t,a){if("provide"!=(t=t.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})))){if(null!=n)switch(n[t]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}e[t]=a}})),e}function h(t){t.removeClass("is-valid").addClass("is-invalid")}function g(t){t.removeClass("is-invalid").addClass("is-valid")}function B(t){t.removeClass("is-invalid").removeClass("is-valid")}s()(document).on("click",".myedit",(function(t){t.preventDefault(),p=s()(this);var n,e,a="";y=!0,void 0!==s()(this).data("type")&&(f=s()(this).data("type")),"select"===s()(this).data("type")||("textarea"===s()(this).data("type")?(n=s()(this),e=Date.now(),d=!0,a='<div id="myEdit-zone-'+e+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+e+'">'+n.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+e+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+e+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(t){var n=Date.now();return'<div id="myEdit-zone-'+n+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+n+'" value="'+t.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(s()(this))),s()(this).replaceWith(a),s()("#myedit-input").focus()})),s()(document).on("keyup","#myedit-input",(function(t){13===t.keyCode&&!1===d?b():27===t.keyCode&&s()("#myEdit-zone").replaceWith(p)})),s()(document).on("click",".myedit-valide",(function(t){d=!1,t.preventDefault(),b(s()(this).data("key"))})),s()(document).on("keypress",(function(t){!0===y&&!1===d&&13===t.which&&(t.preventDefault(),b(s()(this).data("key"))),!0===y&&!1===d&&27===t.which&&(t.preventDefault(),s()("#myEdit-zone-"+s()(this).data("key")).replaceWith(p))})),s()(document).on("click",".myedit-annule",(function(t){t.preventDefault(),s()("#myEdit-zone-"+s()(this).data("key")).replaceWith(p)})),l.fn.dataAttr=function(t,n){return s()(this)[0].getAttribute("data-"+t)||n},l.fn.hasDataAttr=function(t){return s()(this)[0].hasAttribute("data-"+t)}}},0,[[71263,3666,9755,2109,6208,9904]]]);