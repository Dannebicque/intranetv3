(self.webpackChunkintranetv3=self.webpackChunkintranetv3||[]).push([[4152],{5979:(e,t,n)=>{"use strict";n.d(t,{v_:()=>r,zD:()=>i});n(3710),n(1539),n(9714),n(6992),n(8783),n(3948),n(285),n(8674);var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log(t);var a={method:n};return"GET"===n?e+="?"+new URLSearchParams(t).toString():(a.body=JSON.stringify(t),a.headers={"Content-Type":"application/json;charset=utf-8"}),fetch(e,a).then((function(e){return e.json()}))},r=function(e,t){return a(e,t,"POST")},i=function(e,t,n){n.innerHTML="",fetch(Routing.generate(e,t)).then((function(e){return e.text()})).then((function(e){n.innerHTML=e}))}},6381:(e,t,n)=>{"use strict";n.d(t,{r:()=>a});var a={decimal:"",emptyTable:"Aucune donn&eacute;e disponible dans le tableau",info:"Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",infoEmpty:"Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",infoFiltered:"(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",infoPostFix:"",thousands:",",lengthMenu:"Afficher _MENU_ &eacute;l&eacute;ments",loadingRecords:"Chargement en cours...",processing:"Traitement en cours...",search:"Rechercher&nbsp;:",zeroRecords:"Aucun &eacute;l&eacute;ment &agrave; afficher",paginate:{first:"Premier",last:"Dernier",next:"Suivant",previous:"Pr&eacute;c&eacute;dent"},aria:{sortAscending:": activer pour trier la colonne par ordre croissant",sortDescending:": activer pour trier la colonne par ordre d&eacute;croissant"},searchBuilder:{conditions:{date:{after:"Après le",before:"Avant le",between:"Entre",empty:"Vide",equals:"Egal à",not:"Différent de",notBetween:"Pas entre",notEmpty:"Non vide"},number:{between:"Entre",empty:"Vide",equals:"Egal à",gt:"Supérieur à",gte:"Supérieur ou égal à",lt:"Inférieur à",lte:"Inférieur ou égal à",not:"Différent de",notBetween:"Pas entre",notEmpty:"Non vide"},string:{contains:"Contient",empty:"Vide",endsWith:"Se termine par",equals:"Egal à",not:"Différent de",notEmpty:"Non vide",startsWith:"Commence par"},array:{equals:"Egal à",empty:"Vide",contains:"Contient",not:"Différent de",notEmpty:"Non vide",without:"Sans"}},add:"Ajouter une condition",button:{0:"Recherche avancée",_:"Recherche avancée (%d)"},clearAll:"Effacer tout",condition:"Condition",data:"Donnée",deleteTitle:"Supprimer la règle de filtrage",logicAnd:"Et",logicOr:"Ou",title:{0:"Recherche avancée",_:"Recherche avancée (%d)"},value:"Valeur"}}},9097:(e,t,n)=>{"use strict";n(4916),n(3123),n(3210),n(9554),n(4747);var a=n(2396),r=n(6381),i=n(5979),s=n(9755);function o(e,t){s.ajax({type:"GET",url:Routing.generate("application_personnel_absence_get_ajax",{matiere:s("#absence-matiere").val()}),dataType:"json",success:function(n){var a=e.split("/"),r=a[2].trim()+"-"+a[1].trim()+"-"+a[0].trim();for(var i in 4===t.length&&(t="0"+t),n)if(i==r&&void 0!==n[i][t])for(var o=0;o<n[i][t].length;o++)s("#etu_"+n[i][t][o]).addClass("absent")}})}s(document).on("click",".absChangeTypeGroupe",(function(e){e.preventDefault(),e.stopPropagation(),s(".absChangeTypeGroupe").removeClass("btn-primary"),s(this).addClass("btn-primary"),s("#listeEtudiantsAbsences").load(Routing.generate("api_absence_liste_etudiant",{typegroupe:s(this).data("typegroupe")}),(function(){var e=s("#absence-date"),t=s("#absence-heure");o(e.val(),t.val())}))})),s(document).on("change","#absence-matiere",(function(){var e=s(".etudiant"),t=s("#absence-date"),n=s("#absence-heure");e.removeClass("absent"),o(t.val(),n.val())})),s(document).on("change","#absence-date",(function(){var e=s(".etudiant"),t=s("#absence-date"),n=s("#absence-heure");e.removeClass("absent"),o(t.val(),n.val())})),s(document).on("change","#absence-heure",(function(){var e=s(".etudiant"),t=s("#absence-date"),n=s("#absence-heure");e.removeClass("absent"),o(t.val(),n.val())})),s(document).on("click",".etudiant",(function(){var e=s(this).attr("id").split("_");s(this).hasClass("absent")?(s(this).removeClass("absent"),s.ajax({type:"POST",url:Routing.generate("application_personnel_absence_saisie_ajax",{matiere:s("#absence-matiere").val(),etudiant:e[1]}),dataType:"json",data:{date:s("#absence-date").val(),heure:s("#absence-heure").val(),action:"suppr"},error:function(){(0,a.qX)("Erreur lors de la tentative de suppression de l'absence !","danger")},success:function(e){e,(0,a.qX)("La suppression a été effectuée avec succés !","success")}})):(s(this).addClass("absent"),s.ajax({type:"POST",url:Routing.generate("application_personnel_absence_saisie_ajax",{matiere:s("#absence-matiere").val(),etudiant:e[1]}),dataType:"json",data:{date:s("#absence-date").val(),heure:s("#absence-heure").val(),action:"saisie"},error:function(e){"out"===e.responseText?(0,a.qX)("Le délai pour l'enregistrement est dépassé. Contactez le responsable de la departement","danger"):(0,a.qX)("Erreur lors de l'enregistrement.","danger")},success:function(){(0,a.qX)("Absence enregistrée avec succés !","success")}}))})),s("#liste-absences").dataTable({language:r.r,fnRowCallback:function(e,t,n,a){"non"===t[5]||"no"===t[5]||"No"===t[5]||"Non"===t[5]?s("td",e).css("background-color","#fce3e3"):s("td",e).css("background-color","#e3fcf2")}}),window.addEventListener("load",(function(){document.querySelectorAll(".pasabsent").forEach((function(e){e.addEventListener("click",(function(e){(0,i.v_)(Routing.generate("app_personnel_absence_etat_appel"),{date:document.querySelector("#absence-date").value,heure:document.querySelector("#absence-heure").value,groupe:e.target.dataset.groupe,matiere:document.querySelector("#absence-matiere").value}).then((function(t){!0===t?(console.log(e),e.target.textContent="Vous avez indiqué qu'il n'y a pas d'absent dans ce groupe.",(0,a.qX)("Saisie enregistée avec succès.","success")):(0,a.qX)("Vous avez déjà effectué une saisie.","warning")})).catch((function(e){(0,a.qX)("Erreur lors de l'enregistrement.","error")}))}))}))}))},2396:(e,t,n)=>{"use strict";n.d(t,{qX:()=>g,FX:()=>T,xQ:()=>E,XQ:()=>O,zl:()=>_});n(4916),n(3123),n(3843),n(3710),n(3210),n(5306),n(9653);var a=n(6455),r=n.n(a),i=(n(9070),n(7941),n(2526),n(7327),n(5003),n(9554),n(4747),n(9337),n(3321),n(8588)),s=n.n(i);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"defaultOptions",{close:!0,duration:3e3,className:"toast",escapeMarkup:!1,gravity:"top",position:"right",stopOnFocus:!0})}var t,n,a;return t=e,(n=[{key:"show",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};(a=c(c({},this.defaultOptions),a)).className+=" toast-"+e;var r='<div class="toast-wrapper">';n&&(r+='<div class="toast-head">'+n+"</div>"),r+='<div class="toast-body">'+t+"</div>",r+="</div>",a.text=r,s()(a).showToast()}},{key:"error",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("error",e,t,n)}},{key:"warning",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("warning",e,t,n)}},{key:"success",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("success",e,t,n)}},{key:"info",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.show("info",e,t,n)}}])&&u(t.prototype,n),a&&u(t,a),e}());var p,f,v,m=n(9755),h=n(9755),b=!1;function g(e,t){switch(t){case"success":d.success(e);break;case"danger":d.error(e);break;case"warning":d.warning(e);break;case"info":d.info(e)}}p=m(location).attr("pathname"),f=p.split("/"),v=2,"index.php"===f[1]&&f.length>1&&(v=3),"super-administration"===f[v]&&(v+=1),""===f[f.length-1]&&f.pop(),m(".menu-item").removeClass("active"),m("#menu-"+f[v]).addClass("active"),r().mixin({customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),m(document).on("click",".supprimer",(function(e){e.preventDefault();var t=m(this).attr("href"),n=m(this).data("csrf");r().fire({title:"Confirmer la suppression ?",text:"L'opération ne pourra pas être annulée.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Oui, je confirme",cancelButtonText:"Non, Annuler",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}).then((function(a){a.value?m.ajax({url:t,type:"DELETE",data:{_token:n},success:function(t){if(t.hasOwnProperty("redirect")&&t.hasOwnProperty("url"))document.location.href=t.url;else{var n=function(e,t){t=t.toLowerCase();for(;e&&e.nodeName.toLowerCase()!=t;)e=e.parentNode;return e||null}(e.target,"tr");n.parentNode.removeChild(n),g("Suppression effectuée avec succès","success"),r().fire({title:"Supprimé!",text:"L'enregistrement a été supprimé.",icon:"success",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}},error:function(e,t,n){r().fire({title:"Erreur lors de la suppression!",text:"Merci de renouveler l'opération",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1}),g("Erreur lors de la tentative de suppression","danger")}}):"cancel"===a.dismiss&&r().fire({title:"Cancelled",text:"OK! Tout est comme avant !",icon:"error",confirmButtonText:"OK",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-secondary"},buttonsStyling:!1})}))}));var y="",w="text",C=!1;function k(e){var t=m("#myedit-input-"+e).val();m.ajax({url:y.attr("href"),data:{field:y.data("field"),value:t,type:w},method:"POST",success:function(){y.html(t),m("#myEdit-zone-"+e).replaceWith(y),C=!1}})}function E(e,t){var n={};return m.each(m(e).data(),(function(e,a){if("provide"!=(e=e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()})))){if(null!=t)switch(t[e]){case"bool":a=Boolean(a);break;case"num":a=Number(a);break;case"array":a=a.split(",")}n[e]=a}})),n}function O(e){e.removeClass("is-valid").addClass("is-invalid")}function _(e){e.removeClass("is-invalid").addClass("is-valid")}function T(e){e.removeClass("is-invalid").removeClass("is-valid")}m(document).on("click",".myedit",(function(e){e.preventDefault(),y=m(this);var t,n,a="";C=!0,void 0!==m(this).data("type")&&(w=m(this).data("type")),"select"===m(this).data("type")||("textarea"===m(this).data("type")?(t=m(this),n=Date.now(),b=!0,a='<div id="myEdit-zone-'+n+'">\n                      <textarea rows="5" class="form-control" id="myedit-input-'+n+'">'+t.html().trim()+'</textarea>\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide" data-key="'+n+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+n+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'):a=function(e){var t=Date.now();return'<div id="myEdit-zone-'+t+'" class="input-group">\n                      <input type="text" class="form-control" id="myedit-input-'+t+'" value="'+e.html().trim()+'" >\n                      <span class="input-group-append">\n <button class="btn btn-success-outline myedit-valide"  data-key="'+t+'"><i class="fas fa-check"></i></button>\n                        <button class="btn btn-danger-outline myedit-annule"  data-key="'+t+'"><i class="fas fa-times"></i></button>\n                      </span>\n                    </div>'}(m(this))),m(this).replaceWith(a),m("#myedit-input").focus()})),m(document).on("keyup","#myedit-input",(function(e){13===e.keyCode&&!1===b?k():27===e.keyCode&&m("#myEdit-zone").replaceWith(y)})),m(document).on("click",".myedit-valide",(function(e){b=!1,e.preventDefault(),k(m(this).data("key"))})),m(document).on("keypress",(function(e){!0===C&&!1===b&&13===e.which&&(e.preventDefault(),k(m(this).data("key"))),!0===C&&!1===b&&27===e.which&&(e.preventDefault(),m("#myEdit-zone-"+m(this).data("key")).replaceWith(y))})),m(document).on("click",".myedit-annule",(function(e){e.preventDefault(),m("#myEdit-zone-"+m(this).data("key")).replaceWith(y)})),h.fn.dataAttr=function(e,t){return m(this)[0].getAttribute("data-"+e)||t},h.fn.hasDataAttr=function(e){return m(this)[0].hasAttribute("data-"+e)}}},e=>{"use strict";e.O(0,[9755,2109,4093,1870,8771,5322],(()=>{return t=9097,e(e.s=t);var t}));e.O()}]);