// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/public/build/agenda~app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:44

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([['agenda~app'], {

  /***/ './assets/controllers sync recursive \\.(j|t)sx?$':
  /*!*********************************************!*\
    !*** ./assets/controllers sync \.(j|t)sx?$ ***!
    \*********************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

    function webpackEmptyContext (req) {
      var e = new Error('Cannot find module \'' + req + '\'')
      e.code = 'MODULE_NOT_FOUND'
      throw e
    }

    webpackEmptyContext.keys = function () {
      return []
    }
    webpackEmptyContext.resolve = webpackEmptyContext
    module.exports = webpackEmptyContext
    webpackEmptyContext.id = './assets/controllers sync recursive \\.(j|t)sx?$'

    /***/
  }),

  /***/ './assets/css/app.scss':
  /*!*****************************!*\
    !*** ./assets/css/app.scss ***!
    \*****************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

    /***/
  }),

  /***/ './assets/js/app.js':
  /*!**************************!*\
    !*** ./assets/js/app.js ***!
    \**************************/
  /*! exports provided: app2, default */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    'use strict'
    __webpack_require__.r(__webpack_exports__)
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'app2', function () {
      return app2
    })
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, 'default', function () {
      return reloadQv
    })
    /* harmony import */
    var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js')
    /* harmony import */
    var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__)
    /* harmony import */
    var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join */ './node_modules/core-js/modules/es.array.join.js')
    /* harmony import */
    var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__)
    /* harmony import */
    var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ './node_modules/core-js/modules/es.function.name.js')
    /* harmony import */
    var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__)
    /* harmony import */
    var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @symfony/stimulus-bridge */ './node_modules/@symfony/stimulus-bridge/dist/index.js')
    /* harmony import */
    var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__)
    /* harmony import */
    var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/fontawesome.scss */ './node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss')
    /* harmony import */
    var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4__)
    /* harmony import */
    var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/solid.scss */ './node_modules/@fortawesome/fontawesome-free/scss/solid.scss')
    /* harmony import */
    var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5__)
    /* harmony import */
    var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-select/dist/css/bootstrap-select.min.css */ './node_modules/bootstrap-select/dist/css/bootstrap-select.min.css')
    /* harmony import */
    var bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_6__)
    /* harmony import */
    var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css */ './assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css')
    /* harmony import */
    var _vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_css_bootstrap_datepicker3_min_css__WEBPACK_IMPORTED_MODULE_7__)
    /* harmony import */
    var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js */ './assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js')
    /* harmony import */
    var _vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_js_bootstrap_datepicker_min_js__WEBPACK_IMPORTED_MODULE_8__)
    /* harmony import */
    var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min */ './assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js')
    /* harmony import */
    var _vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_datepicker_locales_bootstrap_datepicker_fr_min__WEBPACK_IMPORTED_MODULE_9__)
    /* harmony import */
    var _css_app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/app.scss */ './assets/css/app.scss')
    /* harmony import */
    var _css_app_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_10__)
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')
    /* harmony import */
    var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__)
    /* harmony import */
    var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! perfect-scrollbar */ './node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js')
    /* harmony import */
    var _validator_bs4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validator-bs4 */ './assets/js/validator-bs4.js')
    /* harmony import */
    var _validator_bs4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_validator_bs4__WEBPACK_IMPORTED_MODULE_13__)
    /* harmony import */
    var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ './assets/js/util.js')
    /* harmony import */
    var _material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material */ './assets/js/material.js')
    /* harmony import */
    var _material__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material__WEBPACK_IMPORTED_MODULE_15__)
    /* harmony import */
    var _search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search */ './assets/js/search.js')
    /* harmony import */
    var _search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_16__)
    /* harmony import */
    var _modaler__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modaler */ './assets/js/modaler.js')
    /* harmony import */
    var _modaler__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modaler__WEBPACK_IMPORTED_MODULE_17__)


// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/app.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/11/2020 15:33
// any CSS you import will output into a single css file (app.css in this case)

    var app2 = Object(_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_3__['startStimulusApp'])(__webpack_require__('./assets/controllers sync recursive \\.(j|t)sx?$'))


    __webpack_require__(/*! bootstrap */ './node_modules/bootstrap/dist/js/bootstrap.js')

    var lookup = {}

    __webpack_require__(/*! bootstrap-select */ './node_modules/bootstrap-select/dist/js/bootstrap-select.js')

    jquery__WEBPACK_IMPORTED_MODULE_11___default()('input[type="file"]').on('change', function (e) {
      var filename = e.target.files[0].name
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.custom-file-label').html(filename)
    })
    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ready(function () {
      // copy link EDT
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '#copyLink', function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('#lienIcal').select()
        document.execCommand('copy')
      }) // script pour afficher le fichier selectionné avec bootstrap4

      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.custom-file input').change(function (e) {
        var files = []

        for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_11___default()(this)[0].files.length; i++) {
          files.push(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this)[0].files[i].name)
        }

        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).next('.custom-file-label').html(files.join(', '))
      })
      var preloader = jquery__WEBPACK_IMPORTED_MODULE_11___default()('.preloader')

      if (preloader.length) {
        var speed = preloader.dataAttr('hide-spped', 600)
        preloader.fadeOut(speed)
      }

      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('focus', '.topbar-search input', function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '0')
      })
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('blur', '.topbar-search input', function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.topbar-search').find('.lookup-placeholder span').css('opacity', '1')
      })
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '#lookup', function (e) {
        e.preventDefault()
        var target = jquery__WEBPACK_IMPORTED_MODULE_11___default()('#lookup-full')

        if (target !== false) {
          lookup.toggle(target)
        }
      })
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '#lookup-close', function () {
        lookup.toggle(jquery__WEBPACK_IMPORTED_MODULE_11___default()('#lookup-full'))
      }) //tooltip

      updateInterface()
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('[data-provide="validation"]').validator()
    })
    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).ajaxComplete(function () {
      updateInterface()
    }) // Fullscreen
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.card-btn-fullscreen', function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.card').toggleClass('card-fullscreen').removeClass('card-maximize')
    }) // Slide up/down

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.card-btn-slide', function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).toggleClass('rotate-180').closest('.card').find('.card-content').slideToggle()
    }) //modaler

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '[data-provide~="modaler"]', function () {
      modaler(Object(_util__WEBPACK_IMPORTED_MODULE_14__['getDataOptions'])(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this)))
    })

    function updateInterface () {
      //selectpicker
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.selectpicker').selectpicker({
        iconBase: '',
        tickIcon: 'fas fa-check',
        style: 'btn-light',
        size: 10,
        liveSearch: true
      }) //tooltip

      jquery__WEBPACK_IMPORTED_MODULE_11___default()('[data-provide~="tooltip"]').each(function () {
        var color = ''

        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).hasDataAttr('tooltip-color')) {
          color = ' tooltip-' + jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('tooltip-color')
        }

        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).tooltip({
          container: 'body',
          trigger: 'hover',
          template: '<div class="tooltip' + color + '" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        })
      })
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('[data-provide~="datepicker"]').each(function () {
        var options = {
          multidateSeparator: ', ',
          language: 'fr',
          daysOfWeekHighlighted: '06',
          format: 'dd/mm/yyyy'
        }

        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).prop('tagName') != 'INPUT') {
          //si ce n'est pas un input => donc un date range
          options.inputs = [jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('input:first'), jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).find('input:last')]
        }

        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).datepicker(options)
      })
    } // Open fullscreen lookup
//


    lookup.toggle = function (e) {
      if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).hasClass('reveal')) {
        lookup.close(e)
      } else {
        lookup.open(e)
      }
    } // Close fullscreen lookup
//


    lookup.close = function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).removeClass('reveal')
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('no-scroll')
    } // Close fullscreen lookup
//


    lookup.open = function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).addClass('reveal')
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).find('.lookup-form input').focus()
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('no-scroll')
    } // =====================
// Sidebar
// =====================


    var sidebar = {} // Scrollable

    console.log(document.getElementsByClassName('sidebar-navigation'))

    if (document.getElementsByClassName('sidebar-navigation').length > 0) {
      var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__['default']('.sidebar-navigation')
    } // Handle sidebar openner
//


    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.sidebar-toggler', function () {
      sidebar.open()
    }) // Close sidebar when backdrop touches
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.backdrop-sidebar', function () {
      sidebar.close()
    }) // Slide up/down menu item on click
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.sidebar .menu-link', function () {
      var $submenu = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).next('.menu-submenu')
      if ($submenu.length < 1) return

      if ($submenu.is(':visible')) {
        $submenu.slideUp(function () {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-item.open').removeClass('open')
        })
        jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).removeClass('open')
        return
      }

      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-submenu:visible').slideUp()
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-link').removeClass('open')
      $submenu.slideToggle(function () {
        jquery__WEBPACK_IMPORTED_MODULE_11___default()('.sidebar .menu-item.open').removeClass('open')
      })
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).addClass('open')
    }) // Handle fold toggler
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.sidebar-toggle-fold', function () {
      sidebar.toggleFold()
    }) //}

    sidebar.toggleFold = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').toggleClass('sidebar-folded')
      app.toggleState('sidebar.folded')
    }

    sidebar.fold = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('sidebar-folded')
      app.state('sidebar.folded', true)
    }

    sidebar.unfold = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('sidebar-folded')
      app.state('sidebar.folded', false)
    }

    sidebar.toggleHide = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').toggleClass('sidebar-hidden')
      app.toggleState('sidebar.hidden')
    }

    sidebar.hide = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('sidebar-hidden')
      app.state('sidebar.hidden', true)
    }

    sidebar.show = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('sidebar-hidden')
      app.state('sidebar.hidden', false)
    }

    sidebar.open = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').addClass('sidebar-open').prepend('<div class="app-backdrop backdrop-sidebar"></div>')
    }

    sidebar.close = function () {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('body').removeClass('sidebar-open')
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.backdrop-sidebar').remove()
    } // =====================
// Quickview
// =====================
//


    var quickview = {}
    var qps = null // Update scrollbar on tab change
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('shown.bs.tab', '.quickview-header a[data-toggle="tab"]', function (e) {
      qps.update()
    })

    function reloadQv () {
      qps.destroy()
      qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__['default']('.quickview')
    } // Quickview closer
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '[data-dismiss="quickview"]', function () {
      quickview.close(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.quickview'))
    }) // Handle quickview openner
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '[data-toggle="quickview"]', function (e) {
      e.preventDefault()
      var target = app.getTarget(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this))

      if (target == false) {
        quickview.close(jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.quickview'))
      } else {
        var url = ''

        if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).hasDataAttr('url')) {
          url = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).data('url')
        }

        quickview.toggle(target, url)
      }
    }) // Close quickview when backdrop touches
//

    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.backdrop-quickview', function () {
      var qv = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).attr('data-target')

      if (!jquery__WEBPACK_IMPORTED_MODULE_11___default()(qv).is('[data-disable-backdrop-click]')) {
        quickview.close(qv)
      }
    })
    jquery__WEBPACK_IMPORTED_MODULE_11___default()(document).on('click', '.quickview .close, [data-dismiss="quickview"]', function () {
      var qv = jquery__WEBPACK_IMPORTED_MODULE_11___default()(this).closest('.quickview')
      quickview.close(qv)
    }) // Toggle open/close state
//

    quickview.toggle = function (e, url) {
      if (jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).hasClass('reveal')) {
        quickview.close(e)
      } else {
        if (url !== '') {
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).html('<div class="spinner-linear"><div class="line"></div></div>')
          jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).load(url, function () {
            qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__['default']('.quickview')
          })
        }

        quickview.open(e)
      }
    } // Open quickview
//


    quickview.open = function (e) {
      var quickview = jquery__WEBPACK_IMPORTED_MODULE_11___default()(e)
      var url = '' // Load content from URL if required

      if (quickview.hasDataAttr('url') && 'true' !== quickview.data('url-has-loaded')) {
        if (quickview.data('url') === 'no-url') {
          url = Routing.generate('quick_view')
        } else {
          url = quickview.data('url')
        }

        quickview.load(url, function () {
          qps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__['default']('.quickview') // Don't load it next time, if don't need to

          if (quickview.hasDataAttr('always-reload') && 'true' === quickview.data('always-reload')) {
          } else {
            quickview.data('url-has-loaded', 'true')
          }
        })
      } // Open it


      quickview.addClass('reveal').not('.backdrop-remove').after('<div class="app-backdrop backdrop-quickview" data-target="' + e + '"></div>')
    } // Close quickview
//


    quickview.close = function (e) {
      jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).removeClass('reveal')
      jquery__WEBPACK_IMPORTED_MODULE_11___default()('.backdrop-quickview').remove()
    }

    var app = {}

    app.getTarget = function (e) {
      var target

      if (e.hasDataAttr('target')) {
        target = e.data('target')
      } else {
        target = e.attr('href')
      }

      if (target == 'next') {
        target = jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).next()
      } else if (target == 'prev') {
        target = jquery__WEBPACK_IMPORTED_MODULE_11___default()(e).prev()
      }

      if (target == undefined) {
        return false
      }

      return target
    }

    /***/
  }),

  /***/ './assets/js/material.js':
  /*!*******************************!*\
    !*** ./assets/js/material.js ***!
    \*******************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/material.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
// Material input
//
      $(document).on('focus', '.form-type-material .form-control:not(.bootstrap-select)', function () {
        materialDoFloat($(this))
      })
      $(document).on('focusout', '.form-type-material .form-control:not(.bootstrap-select)', function () {
        if ($(this).val() === '') {
          materialNoFloat($(this))
        }
      }) // Auto focus inputs

      materialDoFloat($('.form-type-material .form-control[autofocus="true"]'))

      function materialDoFloat (e) {
        if (e.parent('.input-group-input').length) {
          e.parent('.input-group-input').addClass('do-float')
        } else {
          e.closest('.form-group').addClass('do-float')
        }
      }

      function materialNoFloat (e) {
        if (e.parent('.input-group-input').length) {
          e.parent('.input-group-input').removeClass('do-float')
        } else {
          e.closest('.form-group').removeClass('do-float')
        }
      }

      $('.form-type-material .form-control').each(function () {
        if ($(this).val().length > 0) {
          //if ($(this).is('[data-provide~="selectpicker"]')) {
          //  return
          //}
          materialDoFloat($(this))
        }
      })
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  }),

  /***/ './assets/js/modaler.js':
  /*!******************************!*\
    !*** ./assets/js/modaler.js ***!
    \******************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (jQuery) {
      __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js')

      __webpack_require__(/*! core-js/modules/es.date.to-string */ './node_modules/core-js/modules/es.date.to-string.js')

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js')

      __webpack_require__(/*! core-js/modules/es.regexp.exec */ './node_modules/core-js/modules/es.regexp.exec.js')

      __webpack_require__(/*! core-js/modules/es.regexp.to-string */ './node_modules/core-js/modules/es.regexp.to-string.js')

      __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js');

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/modaler.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 27/07/2020 11:23
// =====================
// Modaler
// =====================
//
      +function ($) {
        var configModaler = {
          url: '',
          isModal: false,
          html: '',
          target: '',
          type: '',
          size: '',
          title: '',
          backdrop: true,
          headerVisible: true,
          footerVisible: true,
          confirmVisible: true,
          confirmText: 'Ok',
          confirmClass: 'btn btn-w-sm btn-flat btn-primary',
          cancelVisible: false,
          cancelText: 'Cancel',
          cancelClass: 'btn btn-w-sm btn-flat btn-secondary',
          bodyExtraClass: '',
          spinner: '<div class="h-200 center-vh"><svg class="spinner-circle-material-svg" viewBox="0 0 50 50"><circle class="circle" cx="25" cy="25" r="20"></svg></div>',
          autoDestroy: true,
          // Events
          onShow: null,
          onShown: null,
          onHide: null,
          onHidden: null,
          onConfirm: null,
          onCancel: null,
          // Private options
          modalId: null
        }

        function guid (len) {
          if (len == undefined) {
            len = 5
          }

          return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, len)
        }

        modaler = function modaler (options) {
          var setting = $.extend({}, configModaler, options)

          if (setting.modalId) {
            $('#' + setting.modalId).modal('show')
            return
          }

          var id = 'modal-' + guid()

          var handleCallback = function handleCallback (id) {
            // Bootstrap modal events
            //
            if (setting.onShow) {
              $('#' + id).on('show.bs.modal', function (e) {//setting.onShow();
              })
            }

            if (setting.onShown) {
              $('#' + id).on('shown.bs.modal', function (e) {//setting.onShown();
              })
            }

            if (setting.onHide) {
              $('#' + id).on('hide.bs.modal', function (e) {
                setting.onHide()
              })
            }

            if (setting.onHidden) {
              $('#' + id).on('hidden.bs.modal', function (e) {
                setting.onHidden()
              })
            } // Handle confirm callback
            //


            $('#' + id).find('[data-perform="confirm"]').on('click', function () {
              // Hasn't set
              if (setting.onConfirm == null) {
                return
              } // Is a function


              if ($.isFunction(setting.onConfirm)) {
                setting.onConfirm($('#' + id))
                return
              } // Is string value, so call it


              if (setting.onConfirm.substring) {
                app.call(setting.onConfirm, $('#' + id))
              }
            }) // Handle cancel callback
            //

            $('#' + id).find('[data-perform="cancel"]').on('click', function () {
              // Hasn't set
              if (setting.onCancel == null) {
                return
              } // Is a function


              if ($.isFunction(setting.onCancel)) {
                setting.onCancel($('#' + id))
                return
              } // Is string value, so call it


              if (setting.onCancel.substring) {
                app.call(setting.onCancel, $('#' + id))
              }
            })
          } //----------------------------------
          // We recieve modal markup from url
          //


          if (setting.isModal) {
            $('<div>').load(setting.url, function () {
              $('body').append($(this).find('.modal').attr('id', id).outerHTML())
              $('#' + id).modal('show')
              $('#' + id).one('shown.bs.modal', function (e) {//todo: a confirmer $('#'+ id).find('.modal-body').perfectScrollbar('update');
              }) // Destroy after close
              //

              if (setting.autoDestroy) {
                $('#' + id).on('hidden.bs.modal', function () {
                  $('#' + id).remove()
                })
              } else {
                $(setting['this']).attr('data-modal-id', id)
              }

              handleCallback(id)
            })
          } ////----------------------------------
            // We should design the modal
          //
          else {
            switch (setting.size) {
              case 'sm':
                setting.size = 'modal-sm'
                break

              case 'lg':
                setting.size = 'modal-lg'
                break

              default: //setting.size = '';

            }

            if (setting.type) {
              setting.type = 'modal-' + setting.type
            } // Header code
            //


            var html_header = ''

            if (setting.headerVisible) {
              html_header += '<div class="modal-header"> \
            <h5 class="modal-title">' + setting.title + '</h5> \
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button> \
          </div>'
            } // Footer code
            //


            var html_footer = ''

            if (setting.footerVisible) {
              html_footer += '<div class="modal-footer">'

              if (setting.cancelVisible) {
                html_footer += '<button class="' + setting.cancelClass + '" data-dismiss="modal" data-perform="cancel">' + setting.cancelText + '</button>'
              }

              if (setting.confirmVisible) {
                html_footer += '<button class="' + setting.confirmClass + '" data-dismiss="modal" data-perform="confirm">' + setting.confirmText + '</button>'
              }

              html_footer += '</div>'
            } // Modal code
            //


            var modal_html = '<div class="modal fade ' + setting.type + '" id="' + id + '" tabindex="-1"' + (!setting.backdrop ? ' data-backdrop="false"' : '') + '> \
            <div class="modal-dialog ' + setting.size + '"> \
              <div class="modal-content"> \
                ' + html_header + ' \
                <div class="modal-body ' + setting.bodyExtraClass + '"> \
                  ' + setting.spinner + ' \
                </div> \
                ' + html_footer + ' \
              </div> \
            </div> \
          </div>' // Show modal

            $('body').append(modal_html)
            $('#' + id).modal('show') // Destroy after close
            //

            if (setting.autoDestroy) {
              $('#' + id).on('hidden.bs.modal', function () {
                $('#' + id).remove()
              })
            } else {
              $(setting['this']).attr('data-modal-id', id)
            } // Load data into the modal
            //


            if (setting.url) {
              $('#' + id).find('.modal-body').load(setting.url, function () {
                //todo: a confirmer $(this).perfectScrollbar('update');
                handleCallback(id)
              })
            } else if (setting.html) {
              $('#' + id).find('.modal-body').html(setting.html)
              handleCallback(id)
            } else if (setting.target) {
              $('#' + id).find('.modal-body').html($(setting.target).html())
              handleCallback(id)
            }
          }
        }
      }(jQuery)
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  }),

  /***/ './assets/js/search.js':
  /*!*****************************!*\
    !*** ./assets/js/search.js ***!
    \*****************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function ($, jQuery) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/search.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 26/09/2020 18:18
      $(document).on('keyup', '#search', function (e) {
        var keyword = $(this).val()
        var search_reponse_etudiant = $('#search_reponse_etudiant')
        var search_reponse_personnel = $('#search_reponse_personnel')
        var search_reponse_autre = $('#search_reponse_autre')

        if (keyword.length > 2) {
          $.ajax({
            url: Routing.generate('recherche', {
              keyword: keyword
            }),
            dataType: 'json',
            success: function success (data) {
              var html = ''

              if (data.etudiants.length > 0) {
                jQuery.each(data.etudiants, function (index, etudiant) {
                  html = html + '<a class="media" href="' + Routing.generate('user_profil', {
                    type: 'etudiant',
                    slug: etudiant.slug
                  }) + '" target="_blank">\n'

                  if (etudiant.photo === 'noimage.png' || etudiant.photo == null) {
                    html = html + '<div class="avatar-circle-sm">\n' + '    <span class="initials">' + etudiant.avatarInitiales + '</span>\n' + '</div>'
                  } else {
                    html = html + '<img class="avatar avatar-sm" src="' + data.basepath + 'etudiants/' + etudiant.photo + '" alt="Photo de profil de ' + etudiant.displayPr + '">\n'
                  }

                  html = html + '                        <div class="media-body">\n' + '                            <p><strong>' + etudiant.displayPr + ' (' + etudiant.semestre + ')</strong>\n' + '                                <time class="float-right">' + etudiant.groupes + '</time>\n' + '                            </p>\n' + '                        </div>\n' + '                    </a>'
                })
              } else {
                html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>'
              }

              search_reponse_etudiant.empty().append(html)
              html = ''

              if (data.personnels.length > 0) {
                jQuery.each(data.personnels, function (index, personnel) {
                  html = html + '<a class="media items-center" href="' + Routing.generate('user_profil', {
                    type: 'personnel',
                    slug: personnel.slug
                  }) + '" target="_blank">\n'

                  if (personnel.photo === 'noimage.png' || personnel.photo == null) {
                    html = html + '<div class="avatar-circle-sm">\n' + '    <span class="initials">' + personnel.avatarInitiales + '</span>\n' + '</div>'
                  } else {
                    html = html + '<img class="avatar avatar-sm" src="' + data.basepath + 'personnels/' + personnel.photo + '" alt="Photo de profil de ' + personnel.displayPr + '">\n'
                  }

                  html = html + '                        <p>' + personnel.displayPr + '</p>\n' + '</a>'
                })
              } else {
                html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>'
              }

              search_reponse_personnel.empty().append(html)
              html = ''

              if (data.autres.length > 0) {
                jQuery.each(data.autres, function (index, autre) {
                  html = html + '<a class="media items-center" href="">\n' + '                        <img class="avatar avatar-sm" src="../assets/img/avatar/1.jpg" alt="...">\n' + '                        <p>' + autre + '</p>\n' + '                    </a>'
                })
              } else {
                html = '<div class="alert alert-warning">Pas de résultat pour votre recherche <strong>"' + keyword + '"</strong></div>'
              }

              search_reponse_autre.empty().append(html)
            }
          })
        } else {
          var html = '<div class="alert alert-info">Saisir au moins 3 caractères</div>'
          search_reponse_autre.empty().append(html)
          search_reponse_personnel.empty().append(html)
          search_reponse_etudiant.empty().append(html)
        }
      })
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js'), __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  }),

  /***/ './assets/js/validator-bs4.js':
  /*!************************************!*\
    !*** ./assets/js/validator-bs4.js ***!
    \************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (jQuery) {
      __webpack_require__(/*! core-js/modules/es.symbol */ './node_modules/core-js/modules/es.symbol.js')

      __webpack_require__(/*! core-js/modules/es.symbol.description */ './node_modules/core-js/modules/es.symbol.description.js')

      __webpack_require__(/*! core-js/modules/es.symbol.iterator */ './node_modules/core-js/modules/es.symbol.iterator.js')

      __webpack_require__(/*! core-js/modules/es.array.filter */ './node_modules/core-js/modules/es.array.filter.js')

      __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js')

      __webpack_require__(/*! core-js/modules/es.array.index-of */ './node_modules/core-js/modules/es.array.index-of.js')

      __webpack_require__(/*! core-js/modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js')

      __webpack_require__(/*! core-js/modules/es.array.map */ './node_modules/core-js/modules/es.array.map.js')

      __webpack_require__(/*! core-js/modules/es.date.to-string */ './node_modules/core-js/modules/es.date.to-string.js')

      __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js')

      __webpack_require__(/*! core-js/modules/es.regexp.exec */ './node_modules/core-js/modules/es.regexp.exec.js')

      __webpack_require__(/*! core-js/modules/es.regexp.to-string */ './node_modules/core-js/modules/es.regexp.to-string.js')

      __webpack_require__(/*! core-js/modules/es.string.iterator */ './node_modules/core-js/modules/es.string.iterator.js')

      __webpack_require__(/*! core-js/modules/es.string.match */ './node_modules/core-js/modules/es.string.match.js')

      __webpack_require__(/*! core-js/modules/es.string.trim */ './node_modules/core-js/modules/es.string.trim.js')

      __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ './node_modules/core-js/modules/web.dom-collections.iterator.js')

      __webpack_require__(/*! core-js/modules/web.timers */ './node_modules/core-js/modules/web.timers.js')

      function _typeof (obj) {
        '@babel/helpers - typeof'
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
          _typeof = function _typeof (obj) {
            return typeof obj
          }
        } else {
          _typeof = function _typeof (obj) {
            return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
          }
        }
        return _typeof(obj)
      }

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/js/validator-bs4.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 28/11/2019 19:40
      +function ($) {
        'use strict' // VALIDATOR CLASS DEFINITION
        // ==========================

        function getValue ($el) {
          return $el.is('[type="checkbox"]') ? $el.prop('checked') : $el.is('[type="radio"]') ? !!$('[name="' + $el.attr('name') + '"]:checked').length : $el.is('select[multiple]') ? ($el.val() || []).length : $el.val()
        }

        var Validator = function Validator (element, options) {
          this.options = options
          this.validators = $.extend({}, Validator.VALIDATORS, options.custom)
          this.$element = $(element)
          this.$btn = $('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr('id') + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'))
          this.update()
          this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.onInput, this))
          this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this))
          this.$element.on('reset.bs.validator', $.proxy(this.reset, this))
          this.$element.find('[data-match]').each(function () {
            var $this = $(this)
            var target = $this.attr('data-match')
            $(target).on('input.bs.validator', function (e) {
              getValue($this) && $this.trigger('input.bs.validator')
            })
          }) // run validators for fields with values, but don't clobber server-side errors

          this.$inputs.filter(function () {
            return getValue($(this)) && !$(this).closest('.has-error').length
          }).trigger('focusout')
          this.$element.attr('novalidate', true) // disable automatic native validation
        }

        Validator.VERSION = '0.11.9'
        Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)'
        Validator.FOCUS_OFFSET = 20
        Validator.DEFAULTS = {
          delay: 500,
          html: false,
          disable: true,
          focus: true,
          custom: {},
          errors: {
            match: 'Does not match',
            minlength: 'Not long enough'
          },
          feedback: {
            success: 'glyphicon-ok',
            error: 'glyphicon-remove'
          }
        }
        Validator.VALIDATORS = {
          'native': function native ($el) {
            var el = $el[0]

            if (el.checkValidity) {
              return !el.checkValidity() && !el.validity.valid && (el.validationMessage || 'error!')
            }
          },
          'match': function match ($el) {
            var target = $el.attr('data-match')
            return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match
          },
          'minlength': function minlength ($el) {
            var minlength = $el.attr('data-minlength')
            return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength
          }
        }

        Validator.prototype.update = function () {
          var self = this
          this.$inputs = this.$element.find(Validator.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
            self.clearErrors($(this))
          }))
          this.toggleSubmit()
          return this
        }

        Validator.prototype.onInput = function (e) {
          var self = this
          var $el = $(e.target)
          var deferErrors = e.type !== 'focusout'
          if (!this.$inputs.is($el)) return
          this.validateInput($el, deferErrors).done(function () {
            self.toggleSubmit()
          })
        }

        Validator.prototype.validateInput = function ($el, deferErrors) {
          var value = getValue($el)
          var prevErrors = $el.data('bs.validator.errors')
          if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]')
          var e = $.Event('validate.bs.validator', {
            relatedTarget: $el[0]
          })
          this.$element.trigger(e)
          if (e.isDefaultPrevented()) return
          var self = this
          return this.runValidators($el).done(function (errors) {
            $el.data('bs.validator.errors', errors)
            errors.length ? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el) : self.clearErrors($el)

            if (!prevErrors || errors.toString() !== prevErrors.toString()) {
              e = errors.length ? $.Event('invalid.bs.validator', {
                relatedTarget: $el[0],
                detail: errors
              }) : $.Event('valid.bs.validator', {
                relatedTarget: $el[0],
                detail: prevErrors
              })
              self.$element.trigger(e)
            }

            self.toggleSubmit()
            self.$element.trigger($.Event('validated.bs.validator', {
              relatedTarget: $el[0]
            }))
          })
        }

        Validator.prototype.runValidators = function ($el) {
          var errors = []
          var deferred = $.Deferred()
          $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject()
          $el.data('bs.validator.deferred', deferred)

          function getValidatorSpecificError (key) {
            return $el.attr('data-' + key + '-error')
          }

          function getValidityStateError () {
            var validity = $el[0].validity
            return validity.typeMismatch ? $el.attr('data-type-error') : validity.patternMismatch ? $el.attr('data-pattern-error') : validity.stepMismatch ? $el.attr('data-step-error') : validity.rangeOverflow ? $el.attr('data-max-error') : validity.rangeUnderflow ? $el.attr('data-min-error') : validity.valueMissing ? $el.attr('data-required-error') : null
          }

          function getGenericError () {
            return $el.attr('data-error')
          }

          function getErrorMessage (key) {
            return getValidatorSpecificError(key) || getValidityStateError() || getGenericError()
          }

          $.each(this.validators, $.proxy(function (key, validator) {
            var error = null

            if ((getValue($el) || $el.attr('required')) && ($el.attr('data-' + key) !== undefined || key == 'native') && (error = validator.call(this, $el))) {
              error = getErrorMessage(key) || error
              !~errors.indexOf(error) && errors.push(error)
            }
          }, this))

          if (!errors.length && getValue($el) && $el.attr('data-remote')) {
            this.defer($el, function () {
              var data = {}
              data[$el.attr('name')] = getValue($el)
              $.get($el.attr('data-remote'), data).fail(function (jqXHR, textStatus, error) {
                errors.push(getErrorMessage('remote') || error)
              }).always(function () {
                deferred.resolve(errors)
              })
            })
          } else deferred.resolve(errors)

          return deferred.promise()
        }

        Validator.prototype.validate = function () {
          var self = this
          $.when(this.$inputs.map(function (el) {
            return self.validateInput($(this), false)
          })).then(function () {
            self.toggleSubmit()
            self.focusError()
          })
          return this
        }

        Validator.prototype.focusError = function () {
          if (!this.options.focus) return
          var $input = this.$element.find('.has-error:first :input')
          if ($input.length === 0) return
          $('html, body').animate({
            scrollTop: $input.offset().top - Validator.FOCUS_OFFSET
          }, 250)
          $input.focus()
        }

        Validator.prototype.showErrors = function ($el) {
          var method = this.options.html ? 'html' : 'text'
          var errors = $el.data('bs.validator.errors')
          var $group = $el.closest('.form-group')
          var $block = $group.find('.invalid-feedback')
          var $feedback = $group.find('.invalid-feedback')
          if (!errors.length) return
          $el.addClass('is-invalid')
          errors = $('<ul/>').addClass('list-unstyled').append($.map(errors, function (error) {
            return $('<li/>')[method](error)
          }))
          $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html())
          $block.empty().append(errors)
          $group.addClass('has-error has-danger')
          $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.success) && $feedback.addClass(this.options.feedback.error) && $group.removeClass('has-success')
        }

        Validator.prototype.clearErrors = function ($el) {
          var $group = $el.closest('.form-group')
          var $block = $group.find('.invalid-feedback')
          var $feedback = $group.find('.invalid-feedback')
          $el.removeClass('is-invalid')
          $block.html($block.data('bs.validator.originalContent'))
          $group.removeClass('has-error has-danger has-success')
          $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.error) && $feedback.removeClass(this.options.feedback.success) && getValue($el) && $feedback.addClass(this.options.feedback.success) && $group.addClass('has-success')
        }

        Validator.prototype.hasErrors = function () {
          function fieldErrors () {
            return !!($(this).data('bs.validator.errors') || []).length
          }

          return !!this.$inputs.filter(fieldErrors).length
        }

        Validator.prototype.isIncomplete = function () {
          function fieldIncomplete () {
            var value = getValue($(this))
            return !(typeof value == 'string' ? $.trim(value) : value)
          }

          return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length
        }

        Validator.prototype.onSubmit = function (e) {
          this.validate()
          if (this.isIncomplete() || this.hasErrors()) e.preventDefault()
        }

        Validator.prototype.toggleSubmit = function () {
          if (!this.options.disable) return
          this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors())
        }

        Validator.prototype.defer = function ($el, callback) {
          callback = $.proxy(callback, this, $el)
          if (!this.options.delay) return callback()
          window.clearTimeout($el.data('bs.validator.timeout'))
          $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay))
        }

        Validator.prototype.reset = function () {
          this.$element.find('.invalid-feedback').removeClass(this.options.feedback.error).removeClass(this.options.feedback.success)
          this.$inputs.removeData(['bs.validator.errors', 'bs.validator.deferred']).removeClass('is-invalid').each(function () {
            var $this = $(this)
            var timeout = $this.data('bs.validator.timeout')
            window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout')
          })
          this.$element.find('.invalid-feedback').each(function () {
            var $this = $(this)
            var originalContent = $this.data('bs.validator.originalContent')
            $this.removeData('bs.validator.originalContent').html(originalContent)
          })
          this.$btn.removeClass('disabled')
          this.$element.find('.has-error, .has-danger, .has-success').removeClass('has-error has-danger has-success')
          return this
        }

        Validator.prototype.destroy = function () {
          this.reset()
          this.$element.removeAttr('novalidate').removeData('bs.validator').off('.bs.validator')
          this.$inputs.off('.bs.validator')
          this.options = null
          this.validators = null
          this.$element = null
          this.$btn = null
          this.$inputs = null
          return this
        } // VALIDATOR PLUGIN DEFINITION
        // ===========================


        function Plugin (option) {
          return this.each(function () {
            var $this = $(this)
            var options = $.extend({}, Validator.DEFAULTS, $this.data(), _typeof(option) == 'object' && option)
            var data = $this.data('bs.validator')
            if (!data && option == 'destroy') return
            if (!data) $this.data('bs.validator', data = new Validator(this, options))
            if (typeof option == 'string') data[option]()
          })
        }

        var old = $.fn.validator
        $.fn.validator = Plugin
        $.fn.validator.Constructor = Validator // VALIDATOR NO CONFLICT
        // =====================

        $.fn.validator.noConflict = function () {
          $.fn.validator = old
          return this
        } // VALIDATOR DATA-API
        // ==================


        $(window).on('load', function () {
          $('form[data-toggle="validator"]').each(function () {
            var $form = $(this)
            Plugin.call($form, $form.data())
          })
        })
      }(jQuery)
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  }),

  /***/ './assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css':
  /*!******************************************************************************!*\
    !*** ./assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.min.css ***!
    \******************************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

    /***/
  }),

  /***/ './assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js':
  /*!***************************************************************************!*\
    !*** ./assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js ***!
    \***************************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__
    __webpack_require__(/*! core-js/modules/es.symbol */ './node_modules/core-js/modules/es.symbol.js')

    __webpack_require__(/*! core-js/modules/es.symbol.description */ './node_modules/core-js/modules/es.symbol.description.js')

    __webpack_require__(/*! core-js/modules/es.symbol.iterator */ './node_modules/core-js/modules/es.symbol.iterator.js')

    __webpack_require__(/*! core-js/modules/es.array.concat */ './node_modules/core-js/modules/es.array.concat.js')

    __webpack_require__(/*! core-js/modules/es.array.fill */ './node_modules/core-js/modules/es.array.fill.js')

    __webpack_require__(/*! core-js/modules/es.array.filter */ './node_modules/core-js/modules/es.array.filter.js')

    __webpack_require__(/*! core-js/modules/es.array.find */ './node_modules/core-js/modules/es.array.find.js')

    __webpack_require__(/*! core-js/modules/es.array.iterator */ './node_modules/core-js/modules/es.array.iterator.js')

    __webpack_require__(/*! core-js/modules/es.array.join */ './node_modules/core-js/modules/es.array.join.js')

    __webpack_require__(/*! core-js/modules/es.array.map */ './node_modules/core-js/modules/es.array.map.js')

    __webpack_require__(/*! core-js/modules/es.array.slice */ './node_modules/core-js/modules/es.array.slice.js')

    __webpack_require__(/*! core-js/modules/es.array.splice */ './node_modules/core-js/modules/es.array.splice.js')

    __webpack_require__(/*! core-js/modules/es.date.to-string */ './node_modules/core-js/modules/es.date.to-string.js')

    __webpack_require__(/*! core-js/modules/es.number.constructor */ './node_modules/core-js/modules/es.number.constructor.js')

    __webpack_require__(/*! core-js/modules/es.object.to-string */ './node_modules/core-js/modules/es.object.to-string.js')

    __webpack_require__(/*! core-js/modules/es.parse-int */ './node_modules/core-js/modules/es.parse-int.js')

    __webpack_require__(/*! core-js/modules/es.regexp.constructor */ './node_modules/core-js/modules/es.regexp.constructor.js')

    __webpack_require__(/*! core-js/modules/es.regexp.exec */ './node_modules/core-js/modules/es.regexp.exec.js')

    __webpack_require__(/*! core-js/modules/es.regexp.to-string */ './node_modules/core-js/modules/es.regexp.to-string.js')

    __webpack_require__(/*! core-js/modules/es.string.iterator */ './node_modules/core-js/modules/es.string.iterator.js')

    __webpack_require__(/*! core-js/modules/es.string.match */ './node_modules/core-js/modules/es.string.match.js')

    __webpack_require__(/*! core-js/modules/es.string.replace */ './node_modules/core-js/modules/es.string.replace.js')

    __webpack_require__(/*! core-js/modules/es.string.split */ './node_modules/core-js/modules/es.string.split.js')

    __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ './node_modules/core-js/modules/web.dom-collections.iterator.js')

    function _typeof (obj) {
      '@babel/helpers - typeof'
      if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        _typeof = function _typeof (obj) {
          return typeof obj
        }
      } else {
        _typeof = function _typeof (obj) {
          return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
        }
      }
      return _typeof(obj)
    }

// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:20

    /*!
     * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
     *
     * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
     */
    !function (a) {
      true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
          (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined
    }(function (a, b) {
      function c () {
        return new Date(Date.UTC.apply(Date, arguments))
      }

      function d () {
        var a = new Date()
        return c(a.getFullYear(), a.getMonth(), a.getDate())
      }

      function e (a, b) {
        return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate()
      }

      function f (c, d) {
        return function () {
          return d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments)
        }
      }

      function g (a) {
        return a && !isNaN(a.getTime())
      }

      function h (b, c) {
        function d (a, b) {
          return b.toLowerCase()
        }

        var e,
          f = a(b).data(),
          g = {},
          h = new RegExp('^' + c.toLowerCase() + '([A-Z])')
        c = new RegExp('^' + c.toLowerCase())

        for (var i in f) {
          c.test(i) && (e = i.replace(h, d), g[e] = f[i])
        }

        return g
      }

      function i (b) {
        var c = {}

        if (q[b] || (b = b.split('-')[0], q[b])) {
          var d = q[b]
          return a.each(p, function (a, b) {
            b in d && (c[b] = d[b])
          }), c
        }
      }

      var j = function () {
          var b = {
            get: function get (a) {
              return this.slice(a)[0]
            },
            contains: function contains (a) {
              for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++) {
                if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5) return c
              }

              return -1
            },
            remove: function remove (a) {
              this.splice(a, 1)
            },
            replace: function replace (b) {
              b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b))
            },
            clear: function clear () {
              this.length = 0
            },
            copy: function copy () {
              var a = new j()
              return a.replace(this), a
            }
          }
          return function () {
            var c = []
            return c.push.apply(c, arguments), a.extend(c, b), c
          }
        }(),
        k = function k (b, c) {
          a.data(b, 'datepicker', this), this._process_options(c), this.dates = new j(), this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is('input'), this.inputField = this.isInput ? this.element : this.element.find('input'), this.component = !!this.element.hasClass('date') && this.element.find('.add-on, .input-group-addon, .btn'), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is('div'), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find('.prev').html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find('.next').html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass('datepicker-inline').appendTo(this.element) : this.picker.addClass('datepicker-dropdown dropdown-menu'), this.o.rtl && this.picker.addClass('datepicker-rtl'), this.o.calendarWeeks && this.picker.find('.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear').attr('colspan', function (a, b) {
            return Number(b) + 1
          }), this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
          }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
        }

      k.prototype = {
        constructor: k,
        _resolveViewName: function _resolveViewName (b) {
          return a.each(r.viewModes, function (c, d) {
            if (b === c || a.inArray(b, d.names) !== -1) return b = c, !1
          }), b
        },
        _resolveDaysOfWeek: function _resolveDaysOfWeek (b) {
          return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number)
        },
        _check_template: function _check_template (c) {
          try {
            if (c === b || '' === c) return !1
            if ((c.match(/[<>]/g) || []).length <= 0) return !0
            var d = a(c)
            return d.length > 0
          } catch (a) {
            return !1
          }
        },
        _process_options: function _process_options (b) {
          this._o = a.extend({}, this._o, b)
          var e = this.o = a.extend({}, this._o),
            f = e.language
          q[f] || (f = f.split('-')[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7
          var g = r.parseFormat(e.format)
          e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(',')), e.datesDisabled = a.map(e.datesDisabled, function (a) {
            return r.parseDate(a, g, e.language, e.assumeNearbyYear)
          })
          var h = String(e.orientation).toLowerCase().split(/\s+/g),
            i = e.orientation.toLowerCase()
          if (h = a.grep(h, function (a) {
            return /^auto|left|right|top|bottom$/.test(a)
          }), e.orientation = {
            x: 'auto',
            y: 'auto'
          }, i && 'auto' !== i) {
            if (1 === h.length) switch (h[0]) {
              case 'top':
              case 'bottom':
                e.orientation.y = h[0]
                break

              case 'left':
              case 'right':
                e.orientation.x = h[0]
            } else i = a.grep(h, function (a) {
              return /^left|right$/.test(a)
            }), e.orientation.x = i[0] || 'auto', i = a.grep(h, function (a) {
              return /^top|bottom$/.test(a)
            }), e.orientation.y = i[0] || 'auto'
          } else
          if (e.defaultViewDate instanceof Date || 'string' == typeof e.defaultViewDate) e.defaultViewDate = r.parseDate(e.defaultViewDate, g, e.language, e.assumeNearbyYear) else if (e.defaultViewDate) {
            var j = e.defaultViewDate.year || new Date().getFullYear(),
              k = e.defaultViewDate.month || 0,
              l = e.defaultViewDate.day || 1
            e.defaultViewDate = c(j, k, l)
          } else e.defaultViewDate = d()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function _applyEvents (a) {
          for (var c, d, e, f = 0; f < a.length; f++) {
            c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d)
          }
        },
        _unapplyEvents: function _unapplyEvents (a) {
          for (var c, d, e, f = 0; f < a.length; f++) {
            c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e)
          }
        },
        _buildEvents: function _buildEvents () {
          var b = {
            keyup: a.proxy(function (b) {
              a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
            }, this),
            keydown: a.proxy(this.keydown, this),
            paste: a.proxy(this.paste, this)
          }
          this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [[this.element, b]] : this.component && this.inputField.length ? this._events = [[this.inputField, b], [this.component, {
            click: a.proxy(this.show, this)
          }]] : this._events = [[this.element, {
            click: a.proxy(this.show, this),
            keydown: a.proxy(this.keydown, this)
          }]], this._events.push([this.element, '*', {
            blur: a.proxy(function (a) {
              this._focused_from = a.target
            }, this)
          }], [this.element, {
            blur: a.proxy(function (a) {
              this._focused_from = a.target
            }, this)
          }]), this.o.immediateUpdates && this._events.push([this.element, {
            'changeYear changeMonth': a.proxy(function (a) {
              this.update(a.date)
            }, this)
          }]), this._secondaryEvents = [[this.picker, {
            click: a.proxy(this.click, this)
          }], [this.picker, '.prev, .next', {
            click: a.proxy(this.navArrowsClick, this)
          }], [this.picker, '.day:not(.disabled)', {
            click: a.proxy(this.dayCellClick, this)
          }], [a(window), {
            resize: a.proxy(this.place, this)
          }], [a(document), {
            'mousedown touchstart': a.proxy(function (a) {
              this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide()
            }, this)
          }]]
        },
        _attachEvents: function _attachEvents () {
          this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function _detachEvents () {
          this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function _attachSecondaryEvents () {
          this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function _detachSecondaryEvents () {
          this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function _trigger (b, c) {
          var d = c || this.dates.get(-1),
            e = this._utc_to_local(d)

          this.element.trigger({
            type: b,
            date: e,
            viewMode: this.viewMode,
            dates: a.map(this.dates, this._utc_to_local),
            format: a.proxy(function (a, b) {
              0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : 'string' == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format
              var c = this.dates.get(a)
              return r.formatDate(c, b, this.o.language)
            }, this)
          })
        },
        show: function show () {
          if (!(this.inputField.prop('disabled') || this.inputField.prop('readonly') && this.o.enableOnReadonly === !1)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger('show'), (window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this
        },
        hide: function hide () {
          return this.isInline || !this.picker.is(':visible') ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger('hide'), this)
        },
        destroy: function destroy () {
          return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
        },
        paste: function paste (b) {
          var c
          if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && a.inArray('text/plain', b.originalEvent.clipboardData.types) !== -1) c = b.originalEvent.clipboardData.getData('text/plain') else {
            if (!window.clipboardData) return
            c = window.clipboardData.getData('Text')
          }
          this.setDate(c), this.update(), b.preventDefault()
        },
        _utc_to_local: function _utc_to_local (a) {
          if (!a) return a
          var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
          return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())), b
        },
        _local_to_utc: function _local_to_utc (a) {
          return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset())
        },
        _zero_time: function _zero_time (a) {
          return a && new Date(a.getFullYear(), a.getMonth(), a.getDate())
        },
        _zero_utc_time: function _zero_utc_time (a) {
          return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())
        },
        getDates: function getDates () {
          return a.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function getUTCDates () {
          return a.map(this.dates, function (a) {
            return new Date(a)
          })
        },
        getDate: function getDate () {
          return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function getUTCDate () {
          var a = this.dates.get(-1)
          return a !== b ? new Date(a) : null
        },
        clearDates: function clearDates () {
          this.inputField.val(''), this.update(), this._trigger('changeDate'), this.o.autoclose && this.hide()
        },
        setDates: function setDates () {
          var b = a.isArray(arguments[0]) ? arguments[0] : arguments
          return this.update.apply(this, b), this._trigger('changeDate'), this.setValue(), this
        },
        setUTCDates: function setUTCDates () {
          var b = a.isArray(arguments[0]) ? arguments[0] : arguments
          return this.setDates.apply(this, a.map(b, this._utc_to_local)), this
        },
        setDate: f('setDates'),
        setUTCDate: f('setUTCDates'),
        remove: f('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'),
        setValue: function setValue () {
          var a = this.getFormattedDate()
          return this.inputField.val(a), this
        },
        getFormattedDate: function getFormattedDate (c) {
          c === b && (c = this.o.format)
          var d = this.o.language
          return a.map(this.dates, function (a) {
            return r.formatDate(a, c, d)
          }).join(this.o.multidateSeparator)
        },
        getStartDate: function getStartDate () {
          return this.o.startDate
        },
        setStartDate: function setStartDate (a) {
          return this._process_options({
            startDate: a
          }), this.update(), this.updateNavArrows(), this
        },
        getEndDate: function getEndDate () {
          return this.o.endDate
        },
        setEndDate: function setEndDate (a) {
          return this._process_options({
            endDate: a
          }), this.update(), this.updateNavArrows(), this
        },
        setDaysOfWeekDisabled: function setDaysOfWeekDisabled (a) {
          return this._process_options({
            daysOfWeekDisabled: a
          }), this.update(), this
        },
        setDaysOfWeekHighlighted: function setDaysOfWeekHighlighted (a) {
          return this._process_options({
            daysOfWeekHighlighted: a
          }), this.update(), this
        },
        setDatesDisabled: function setDatesDisabled (a) {
          return this._process_options({
            datesDisabled: a
          }), this.update(), this
        },
        place: function place () {
          if (this.isInline) return this
          var b = this.picker.outerWidth(),
            c = this.picker.outerHeight(),
            d = 10,
            e = a(this.o.container),
            f = e.width(),
            g = 'body' === this.o.container ? a(document).scrollTop() : e.scrollTop(),
            h = e.offset(),
            i = [0]
          this.element.parents().each(function () {
            var b = a(this).css('z-index')
            'auto' !== b && 0 !== Number(b) && i.push(Number(b))
          })
          var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
            k = this.component ? this.component.parent().offset() : this.element.offset(),
            l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
            m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
            n = k.left - h.left,
            o = k.top - h.top
          'body' !== this.o.container && (o += g), this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left'), 'auto' !== this.o.orientation.x ? (this.picker.addClass('datepicker-orient-' + this.o.orientation.x), 'right' === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass('datepicker-orient-left'), n -= k.left - d) : n + b > f ? (this.picker.addClass('datepicker-orient-right'), n += m - b) : this.o.rtl ? this.picker.addClass('datepicker-orient-right') : this.picker.addClass('datepicker-orient-left')
          var p,
            q = this.o.orientation.y

          if ('auto' === q && (p = -g + o - c, q = p < 0 ? 'bottom' : 'top'), this.picker.addClass('datepicker-orient-' + q), 'top' === q ? o -= c + parseInt(this.picker.css('padding-top')) : o += l, this.o.rtl) {
            var r = f - (n + m)
            this.picker.css({
              top: o,
              right: r,
              zIndex: j
            })
          } else this.picker.css({
            top: o,
            left: n,
            zIndex: j
          })

          return this
        },
        _allow_update: !0,
        update: function update () {
          if (!this._allow_update) return this
          var b = this.dates.copy(),
            c = [],
            d = !1
          return arguments.length ? (a.each(arguments, a.proxy(function (a, b) {
            b instanceof Date && (b = this._local_to_utc(b)), c.push(b)
          }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data('date') || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function (a) {
            return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear)
          }, this)), c = a.grep(c, a.proxy(function (a) {
            return !this.dateWithinRange(a) || !a
          }, this), !0), this.dates.replace(c), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), d ? (this.setValue(), this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger('changeDate'), this.element.change()), !this.dates.length && b.length && (this._trigger('clearDate'), this.element.change()), this.fill(), this
        },
        fillDow: function fillDow () {
          if (this.o.showWeekDays) {
            var b = this.o.weekStart,
              c = '<tr>'

            for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) {
              c += '<th class="dow', a.inArray(b, this.o.daysOfWeekDisabled) !== -1 && (c += ' disabled'), c += '">' + q[this.o.language].daysMin[b++ % 7] + '</th>'
            }

            c += '</tr>', this.picker.find('.datepicker-days thead').append(c)
          }
        },
        fillMonths: function fillMonths () {
          for (var a, b = this._utc_to_local(this.viewDate), c = '', d = 0; d < 12; d++) {
            a = b && b.getMonth() === d ? ' focused' : '', c += '<span class="month' + a + '">' + q[this.o.language].monthsShort[d] + '</span>'
          }

          this.picker.find('.datepicker-months td').html(c)
        },
        setRange: function setRange (b) {
          b && b.length ? this.range = a.map(b, function (a) {
            return a.valueOf()
          }) : delete this.range, this.fill()
        },
        getClassNames: function getClassNames (b) {
          var c = [],
            f = this.viewDate.getUTCFullYear(),
            g = this.viewDate.getUTCMonth(),
            h = d()
          return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push('old') : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push('new'), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push('focused'), this.o.todayHighlight && e(b, h) && c.push('today'), this.dates.contains(b) !== -1 && c.push('active'), this.dateWithinRange(b) || c.push('disabled'), this.dateIsDisabled(b) && c.push('disabled', 'disabled-date'), a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1 && c.push('highlighted'), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push('range'), a.inArray(b.valueOf(), this.range) !== -1 && c.push('selected'), b.valueOf() === this.range[0] && c.push('range-start'), b.valueOf() === this.range[this.range.length - 1] && c.push('range-end')), c
        },
        _fill_yearsView: function _fill_yearsView (c, d, e, f, g, h, i) {
          for (var j, k, l, m = '', n = e / 10, o = this.picker.find(c), p = Math.floor(f / e) * e, q = p + 9 * n, r = Math.floor(this.viewDate.getFullYear() / n) * n, s = a.map(this.dates, function (a) {
            return Math.floor(a.getUTCFullYear() / n) * n
          }), t = p - n; t <= q + n; t += n) {
            j = [d], k = null, t === p - n ? j.push('old') : t === q + n && j.push('new'), a.inArray(t, s) !== -1 && j.push('active'), (t < g || t > h) && j.push('disabled'), t === r && j.push('focused'), i !== a.noop && (l = i(new Date(t, 0, 1)), l === b ? l = {} : 'boolean' == typeof l ? l = {
              enabled: l
            } : 'string' == typeof l && (l = {
              classes: l
            }), l.enabled === !1 && j.push('disabled'), l.classes && (j = j.concat(l.classes.split(/\s+/))), l.tooltip && (k = l.tooltip)), m += '<span class="' + j.join(' ') + '"' + (k ? ' title="' + k + '"' : '') + '>' + t + '</span>'
          }

          o.find('.datepicker-switch').text(p + '-' + q), o.find('td').html(m)
        },
        fill: function fill () {
          var d,
            e,
            f = new Date(this.viewDate),
            g = f.getUTCFullYear(),
            h = f.getUTCMonth(),
            i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
            j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
            k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            m = q[this.o.language].today || q.en.today || '',
            n = q[this.o.language].clear || q.en.clear || '',
            o = q[this.o.language].titleFormat || q.en.titleFormat

          if (!isNaN(g) && !isNaN(h)) {
            this.picker.find('.datepicker-days .datepicker-switch').text(r.formatDate(f, o, this.o.language)), this.picker.find('tfoot .today').text(m).css('display', this.o.todayBtn === !0 || 'linked' === this.o.todayBtn ? 'table-cell' : 'none'), this.picker.find('tfoot .clear').text(n).css('display', this.o.clearBtn === !0 ? 'table-cell' : 'none'), this.picker.find('thead .datepicker-title').text(this.o.title).css('display', 'string' == typeof this.o.title && '' !== this.o.title ? 'table-cell' : 'none'), this.updateNavArrows(), this.fillMonths()
            var p = c(g, h, 0),
              s = p.getUTCDate()
            p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7)
            var t = new Date(p)
            p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf()

            for (var u, v, w = []; p.valueOf() < t;) {
              if (u = p.getUTCDay(), u === this.o.weekStart && (w.push('<tr>'), this.o.calendarWeeks)) {
                var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5),
                  y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                  z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5),
                  A = (y - z) / 864e5 / 7 + 1
                w.push('<td class="cw">' + A + '</td>')
              }

              v = this.getClassNames(p), v.push('day')
              var B = p.getUTCDate()
              this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : 'boolean' == typeof e ? e = {
                enabled: e
              } : 'string' == typeof e && (e = {
                classes: e
              }), e.enabled === !1 && v.push('disabled'), e.classes && (v = v.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip), e.content && (B = e.content)), v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v), w.push('<td class="' + v.join(' ') + '"' + (d ? ' title="' + d + '"' : '') + ' data-date="' + p.getTime().toString() + '">' + B + '</td>'), d = null, u === this.o.weekEnd && w.push('</tr>'), p.setUTCDate(p.getUTCDate() + 1)
            }

            this.picker.find('.datepicker-days tbody').html(w.join(''))
            var C = q[this.o.language].monthsTitle || q.en.monthsTitle || 'Months',
              D = this.picker.find('.datepicker-months').find('.datepicker-switch').text(this.o.maxViewMode < 2 ? C : g).end().find('tbody span').removeClass('active')

            if (a.each(this.dates, function (a, b) {
              b.getUTCFullYear() === g && D.eq(b.getUTCMonth()).addClass('active')
            }), (g < i || g > k) && D.addClass('disabled'), g === i && D.slice(0, j).addClass('disabled'), g === k && D.slice(l + 1).addClass('disabled'), this.o.beforeShowMonth !== a.noop) {
              var E = this
              a.each(D, function (c, d) {
                var e = new Date(g, c, 1),
                  f = E.o.beforeShowMonth(e)
                f === b ? f = {} : 'boolean' == typeof f ? f = {
                  enabled: f
                } : 'string' == typeof f && (f = {
                  classes: f
                }), f.enabled !== !1 || a(d).hasClass('disabled') || a(d).addClass('disabled'), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop('title', f.tooltip)
              })
            }

            this._fill_yearsView('.datepicker-years', 'year', 10, g, i, k, this.o.beforeShowYear), this._fill_yearsView('.datepicker-decades', 'decade', 100, g, i, k, this.o.beforeShowDecade), this._fill_yearsView('.datepicker-centuries', 'century', 1e3, g, i, k, this.o.beforeShowCentury)
          }
        },
        updateNavArrows: function updateNavArrows () {
          if (this._allow_update) {
            var a,
              b,
              c = new Date(this.viewDate),
              d = c.getUTCFullYear(),
              e = c.getUTCMonth(),
              f = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
              g = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
              h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
              i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
              j = 1

            switch (this.viewMode) {
              case 4:
                j *= 10

              case 3:
                j *= 10

              case 2:
                j *= 10

              case 1:
                a = Math.floor(d / j) * j < f, b = Math.floor(d / j) * j + j > h
                break

              case 0:
                a = d <= f && e < g, b = d >= h && e > i
            }

            this.picker.find('.prev').toggleClass('disabled', a), this.picker.find('.next').toggleClass('disabled', b)
          }
        },
        click: function click (b) {
          b.preventDefault(), b.stopPropagation()
          var e, f, g, h
          e = a(b.target), e.hasClass('datepicker-switch') && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass('today') && !e.hasClass('day') && (this.setViewMode(0), this._setDate(d(), 'linked' === this.o.todayBtn ? null : 'view')), e.hasClass('clear') && this.clearDates(), e.hasClass('disabled') || (e.hasClass('month') || e.hasClass('year') || e.hasClass('decade') || e.hasClass('century')) && (this.viewDate.setUTCDate(1), f = 1, 1 === this.viewMode ? (h = e.parent().find('span').index(e), g = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(h)) : (h = 0, g = Number(e.text()), this.viewDate.setUTCFullYear(g)), this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(c(g, h, f)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(':visible') && this._focused_from && this._focused_from.focus(), delete this._focused_from
        },
        dayCellClick: function dayCellClick (b) {
          var c = a(b.currentTarget),
            d = c.data('date'),
            e = new Date(d)
          this.o.updateViewDate && (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger('changeYear', this.viewDate), e.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger('changeMonth', this.viewDate)), this._setDate(e)
        },
        navArrowsClick: function navArrowsClick (b) {
          var c = a(b.currentTarget),
            d = c.hasClass('prev') ? -1 : 1
          0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, d), this._trigger(r.viewModes[this.viewMode].e, this.viewDate), this.fill()
        },
        _toggle_multidate: function _toggle_multidate (a) {
          var b = this.dates.contains(a)
          if (a || this.dates.clear(), b !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), 'number' == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) {
            this.dates.remove(0)
          }
        },
        _setDate: function _setDate (a, b) {
          b && 'date' !== b || this._toggle_multidate(a && new Date(a)), (!b && this.o.updateViewDate || 'view' === b) && (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && 'view' === b || this._trigger('changeDate'), this.inputField.trigger('change'), !this.o.autoclose || b && 'date' !== b || this.hide()
        },
        moveDay: function moveDay (a, b) {
          var c = new Date(a)
          return c.setUTCDate(a.getUTCDate() + b), c
        },
        moveWeek: function moveWeek (a, b) {
          return this.moveDay(a, 7 * b)
        },
        moveMonth: function moveMonth (a, b) {
          if (!g(a)) return this.o.defaultViewDate
          if (!b) return a
          var c,
            d,
            e = new Date(a.valueOf()),
            f = e.getUTCDate(),
            h = e.getUTCMonth(),
            i = Math.abs(b)
          if (b = b > 0 ? 1 : -1, 1 === i) d = b === -1 ? function () {
            return e.getUTCMonth() === h
          } : function () {
            return e.getUTCMonth() !== c
          }, c = h + b, e.setUTCMonth(c), c = (c + 12) % 12 else {
            for (var j = 0; j < i; j++) {
              e = this.moveMonth(e, b)
            }

            c = e.getUTCMonth(), e.setUTCDate(f), d = function d () {
              return c !== e.getUTCMonth()
            }
          }

          for (; d();) {
            e.setUTCDate(--f), e.setUTCMonth(c)
          }

          return e
        },
        moveYear: function moveYear (a, b) {
          return this.moveMonth(a, 12 * b)
        },
        moveAvailableDate: function moveAvailableDate (a, b, c) {
          do {
            if (a = this[c](a, b), !this.dateWithinRange(a)) return !1
            c = 'moveDay'
          } while (this.dateIsDisabled(a))

          return a
        },
        weekOfDateIsDisabled: function weekOfDateIsDisabled (b) {
          return a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) !== -1
        },
        dateIsDisabled: function dateIsDisabled (b) {
          return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function (a) {
            return e(b, a)
          }).length > 0
        },
        dateWithinRange: function dateWithinRange (a) {
          return a >= this.o.startDate && a <= this.o.endDate
        },
        keydown: function keydown (a) {
          if (!this.picker.is(':visible')) return void (40 !== a.keyCode && 27 !== a.keyCode || (this.show(), a.stopPropagation()))
          var b,
            c,
            d = !1,
            e = this.focusDate || this.viewDate

          switch (a.keyCode) {
            case 27:
              this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation()
              break

            case 37:
            case 38:
            case 39:
            case 40:
              if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break
              b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, 'moveYear'), c && this._trigger('changeYear', this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, 'moveMonth'), c && this._trigger('changeMonth', this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, 'moveDay') : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, 'moveWeek')) : 1 === this.viewMode ? (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, 'moveMonth')) : 2 === this.viewMode && (38 !== a.keyCode && 40 !== a.keyCode || (b *= 4), c = this.moveAvailableDate(e, b, 'moveYear')), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault())
              break

            case 13:
              if (!this.o.forceParse) break
              e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(':visible') && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide())
              break

            case 9:
              this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
          }

          d && (this.dates.length ? this._trigger('changeDate') : this._trigger('clearDate'), this.inputField.trigger('change'))
        },
        setViewMode: function setViewMode (a) {
          this.viewMode = a, this.picker.children('div').hide().filter('.datepicker-' + r.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger('changeViewMode', new Date(this.viewDate))
        }
      }

      var l = function l (b, c) {
        a.data(b, 'datepicker', this), this.element = a(b), this.inputs = a.map(c.inputs, function (a) {
          return a.jquery ? a[0] : a
        }), delete c.inputs, this.keepEmptyValues = c.keepEmptyValues, delete c.keepEmptyValues, n.call(a(this.inputs), c).on('changeDate', a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function (b) {
          return a.data(b, 'datepicker')
        }), this.updateDates()
      }

      l.prototype = {
        updateDates: function updateDates () {
          this.dates = a.map(this.pickers, function (a) {
            return a.getUTCDate()
          }), this.updateRanges()
        },
        updateRanges: function updateRanges () {
          var b = a.map(this.dates, function (a) {
            return a.valueOf()
          })
          a.each(this.pickers, function (a, c) {
            c.setRange(b)
          })
        },
        clearDates: function clearDates () {
          a.each(this.pickers, function (a, b) {
            b.clearDates()
          })
        },
        dateUpdated: function dateUpdated (c) {
          if (!this.updating) {
            this.updating = !0
            var d = a.data(c.target, 'datepicker')

            if (d !== b) {
              var e = d.getUTCDate(),
                f = this.keepEmptyValues,
                g = a.inArray(c.target, this.inputs),
                h = g - 1,
                i = g + 1,
                j = this.inputs.length

              if (g !== -1) {
                if (a.each(this.pickers, function (a, b) {
                  b.getUTCDate() || b !== d && f || b.setUTCDate(e)
                }), e < this.dates[h]) for (; h >= 0 && e < this.dates[h];) {
                  this.pickers[h--].setUTCDate(e)
                } else if (e > this.dates[i]) for (; i < j && e > this.dates[i];) {
                  this.pickers[i++].setUTCDate(e)
                }
                this.updateDates(), delete this.updating
              }
            }
          }
        },
        destroy: function destroy () {
          a.map(this.pickers, function (a) {
            a.destroy()
          }), a(this.inputs).off('changeDate', this.dateUpdated), delete this.element.data().datepicker
        },
        remove: f('destroy', 'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead')
      }

      var m = a.fn.datepicker,
        n = function n (c) {
          var d = Array.apply(null, arguments)
          d.shift()
          var e
          if (this.each(function () {
            var b = a(this),
              f = b.data('datepicker'),
              g = 'object' == _typeof(c) && c

            if (!f) {
              var j = h(this, 'date'),
                m = a.extend({}, o, j, g),
                n = i(m.language),
                p = a.extend({}, o, n, j, g)
              b.hasClass('input-daterange') || p.inputs ? (a.extend(p, {
                inputs: p.inputs || b.find('input').toArray()
              }), f = new l(this, p)) : f = new k(this, p), b.data('datepicker', f)
            }

            'string' == typeof c && 'function' == typeof f[c] && (e = f[c].apply(f, d))
          }), e === b || e instanceof k || e instanceof l) return this
          if (this.length > 1) throw new Error('Using only allowed for the collection of a single element (' + c + ' function)')
          return e
        }

      a.fn.datepicker = n
      var o = a.fn.datepicker.defaults = {
          assumeNearbyYear: !1,
          autoclose: !1,
          beforeShowDay: a.noop,
          beforeShowMonth: a.noop,
          beforeShowYear: a.noop,
          beforeShowDecade: a.noop,
          beforeShowCentury: a.noop,
          calendarWeeks: !1,
          clearBtn: !1,
          toggleActive: !1,
          daysOfWeekDisabled: [],
          daysOfWeekHighlighted: [],
          datesDisabled: [],
          endDate: 1 / 0,
          forceParse: !0,
          format: 'mm/dd/yyyy',
          keepEmptyValues: !1,
          keyboardNavigation: !0,
          language: 'en',
          minViewMode: 0,
          maxViewMode: 4,
          multidate: !1,
          multidateSeparator: ',',
          orientation: 'auto',
          rtl: !1,
          startDate: -(1 / 0),
          startView: 0,
          todayBtn: !1,
          todayHighlight: !1,
          updateViewDate: !0,
          weekStart: 0,
          disableTouchKeyboard: !1,
          enableOnReadonly: !0,
          showOnFocus: !0,
          zIndexOffset: 10,
          container: 'body',
          immediateUpdates: !1,
          title: '',
          templates: {
            leftArrow: '&#x00AB;',
            rightArrow: '&#x00BB;'
          },
          showWeekDays: !0
        },
        p = a.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart']
      a.fn.datepicker.Constructor = k
      var q = a.fn.datepicker.dates = {
          en: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear',
            titleFormat: 'MM yyyy'
          }
        },
        r = {
          viewModes: [{
            names: ['days', 'month'],
            clsName: 'days',
            e: 'changeMonth'
          }, {
            names: ['months', 'year'],
            clsName: 'months',
            e: 'changeYear',
            navStep: 1
          }, {
            names: ['years', 'decade'],
            clsName: 'years',
            e: 'changeDecade',
            navStep: 10
          }, {
            names: ['decades', 'century'],
            clsName: 'decades',
            e: 'changeCentury',
            navStep: 100
          }, {
            names: ['centuries', 'millennium'],
            clsName: 'centuries',
            e: 'changeMillennium',
            navStep: 1e3
          }],
          validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
          nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
          parseFormat: function parseFormat (a) {
            if ('function' == typeof a.toValue && 'function' == typeof a.toDisplay) return a
            var b = a.replace(this.validParts, '\0').split('\0'),
              c = a.match(this.validParts)
            if (!b || !b.length || !c || 0 === c.length) throw new Error('Invalid date format.')
            return {
              separators: b,
              parts: c
            }
          },
          parseDate: function parseDate (c, e, f, g) {
            function h (a, b) {
              return b === !0 && (b = 10), a < 100 && (a += 2e3, a > new Date().getFullYear() + b && (a -= 100)), a
            }

            function i () {
              var a = this.slice(0, j[n].length),
                b = j[n].slice(0, a.length)
              return a.toLowerCase() === b.toLowerCase()
            }

            if (!c) return b
            if (c instanceof Date) return c
            if ('string' == typeof e && (e = r.parseFormat(e)), e.toValue) return e.toValue(c, e, f)
            var j,
              l,
              m,
              n,
              o,
              p = {
                d: 'moveDay',
                m: 'moveMonth',
                w: 'moveWeek',
                y: 'moveYear'
              },
              s = {
                yesterday: '-1d',
                today: '+0d',
                tomorrow: '+1d'
              }

            if (c in s && (c = s[c]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c)) {
              for (j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0; n < j.length; n++) {
                l = j[n].match(/([\-+]\d+)([dmwy])/i), m = Number(l[1]), o = p[l[2].toLowerCase()], c = k.prototype[o](c, m)
              }

              return k.prototype._zero_utc_time(c)
            }

            j = c && c.match(this.nonpunctuation) || []
            var t,
              u,
              v = {},
              w = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
              x = {
                yyyy: function yyyy (a, b) {
                  return a.setUTCFullYear(g ? h(b, g) : b)
                },
                m: function m (a, b) {
                  if (isNaN(a)) return a

                  for (b -= 1; b < 0;) {
                    b += 12
                  }

                  for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) {
                    a.setUTCDate(a.getUTCDate() - 1)
                  }

                  return a
                },
                d: function d (a, b) {
                  return a.setUTCDate(b)
                }
              }
            x.yy = x.yyyy, x.M = x.MM = x.mm = x.m, x.dd = x.d, c = d()
            var y = e.parts.slice()

            if (j.length !== y.length && (y = a(y).filter(function (b, c) {
              return a.inArray(c, w) !== -1
            }).toArray()), j.length === y.length) {
              var z

              for (n = 0, z = y.length; n < z; n++) {
                if (t = parseInt(j[n], 10), l = y[n], isNaN(t)) switch (l) {
                  case 'MM':
                    u = a(q[f].months).filter(i), t = a.inArray(u[0], q[f].months) + 1
                    break

                  case 'M':
                    u = a(q[f].monthsShort).filter(i), t = a.inArray(u[0], q[f].monthsShort) + 1
                }
                v[l] = t
              }

              var A, B

              for (n = 0; n < w.length; n++) {
                B = w[n], B in v && !isNaN(v[B]) && (A = new Date(c), x[B](A, v[B]), isNaN(A) || (c = A))
              }
            }

            return c
          },
          formatDate: function formatDate (b, c, d) {
            if (!b) return ''
            if ('string' == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d)
            var e = {
              d: b.getUTCDate(),
              D: q[d].daysShort[b.getUTCDay()],
              DD: q[d].days[b.getUTCDay()],
              m: b.getUTCMonth() + 1,
              M: q[d].monthsShort[b.getUTCMonth()],
              MM: q[d].months[b.getUTCMonth()],
              yy: b.getUTCFullYear().toString().substring(2),
              yyyy: b.getUTCFullYear()
            }
            e.dd = (e.d < 10 ? '0' : '') + e.d, e.mm = (e.m < 10 ? '0' : '') + e.m, b = []

            for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; g <= h; g++) {
              f.length && b.push(f.shift()), b.push(e[c.parts[g]])
            }

            return b.join('')
          },
          headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + o.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + o.templates.rightArrow + '</th></tr></thead>',
          contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
          footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        }
      r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + '<tbody></tbody>' + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div></div>', a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function () {
        return a.fn.datepicker = m, this
      }, a.fn.datepicker.version = '1.8.0', a.fn.datepicker.deprecated = function (a) {
        var b = window.console
        b && b.warn && b.warn('DEPRECATED: ' + a)
      }, a(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (b) {
        var c = a(this)
        c.data('datepicker') || (b.preventDefault(), n.call(c, 'show'))
      }), a(function () {
        n.call(a('[data-provide="datepicker-inline"]'))
      })
    })

    /***/
  }),

  /***/ './assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js':
  /*!***********************************************************************************!*\
    !*** ./assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js ***!
    \***********************************************************************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */
    (function (jQuery) {// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/assets/vendor/bootstrap-datepicker/locales/bootstrap-datepicker.fr.min.js
// @author davidannebicque
// @project intranetV3
// @lastUpdate 17/08/2020 14:20
      !function (a) {
        a.fn.datepicker.dates.fr = {
          days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
          daysShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
          daysMin: ['d', 'l', 'ma', 'me', 'j', 'v', 's'],
          months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
          monthsShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
          today: 'Aujourd\'hui',
          monthsTitle: 'Mois',
          clear: 'Effacer',
          weekStart: 1,
          format: 'dd/mm/yyyy'
        }
      }(jQuery)
      /* WEBPACK VAR INJECTION */
    }.call(this, __webpack_require__(/*! jquery */ './node_modules/jquery/dist/jquery.js')))

    /***/
  })

}])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyBcXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZGFsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdmFsaWRhdG9yLWJzNC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlcjMubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzIl0sIm5hbWVzIjpbImFwcDIiLCJzdGFydFN0aW11bHVzQXBwIiwicmVxdWlyZSIsImxvb2t1cCIsIiQiLCJvbiIsImUiLCJmaWxlbmFtZSIsInRhcmdldCIsImZpbGVzIiwibmFtZSIsImh0bWwiLCJkb2N1bWVudCIsInJlYWR5Iiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJjaGFuZ2UiLCJpIiwibGVuZ3RoIiwicHVzaCIsIm5leHQiLCJqb2luIiwicHJlbG9hZGVyIiwic3BlZWQiLCJkYXRhQXR0ciIsImZhZGVPdXQiLCJjbG9zZXN0IiwiZmluZCIsImNzcyIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwidXBkYXRlSW50ZXJmYWNlIiwidmFsaWRhdG9yIiwiYWpheENvbXBsZXRlIiwidG9nZ2xlQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInNsaWRlVG9nZ2xlIiwibW9kYWxlciIsImdldERhdGFPcHRpb25zIiwic2VsZWN0cGlja2VyIiwiaWNvbkJhc2UiLCJ0aWNrSWNvbiIsInN0eWxlIiwic2l6ZSIsImxpdmVTZWFyY2giLCJlYWNoIiwiY29sb3IiLCJoYXNEYXRhQXR0ciIsImRhdGEiLCJ0b29sdGlwIiwiY29udGFpbmVyIiwidHJpZ2dlciIsInRlbXBsYXRlIiwib3B0aW9ucyIsIm11bHRpZGF0ZVNlcGFyYXRvciIsImxhbmd1YWdlIiwiZGF5c09mV2Vla0hpZ2hsaWdodGVkIiwiZm9ybWF0IiwicHJvcCIsImlucHV0cyIsImRhdGVwaWNrZXIiLCJoYXNDbGFzcyIsImNsb3NlIiwib3BlbiIsImFkZENsYXNzIiwiZm9jdXMiLCJzaWRlYmFyIiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcyIsIlBlcmZlY3RTY3JvbGxiYXIiLCIkc3VibWVudSIsImlzIiwic2xpZGVVcCIsInRvZ2dsZUZvbGQiLCJhcHAiLCJ0b2dnbGVTdGF0ZSIsImZvbGQiLCJzdGF0ZSIsInVuZm9sZCIsInRvZ2dsZUhpZGUiLCJoaWRlIiwic2hvdyIsInByZXBlbmQiLCJyZW1vdmUiLCJxdWlja3ZpZXciLCJxcHMiLCJ1cGRhdGUiLCJyZWxvYWRRdiIsImRlc3Ryb3kiLCJnZXRUYXJnZXQiLCJ1cmwiLCJxdiIsImF0dHIiLCJsb2FkIiwiUm91dGluZyIsImdlbmVyYXRlIiwibm90IiwiYWZ0ZXIiLCJwcmV2IiwidW5kZWZpbmVkIiwibWF0ZXJpYWxEb0Zsb2F0IiwidmFsIiwibWF0ZXJpYWxOb0Zsb2F0IiwicGFyZW50IiwiY29uZmlnTW9kYWxlciIsImlzTW9kYWwiLCJ0eXBlIiwidGl0bGUiLCJiYWNrZHJvcCIsImhlYWRlclZpc2libGUiLCJmb290ZXJWaXNpYmxlIiwiY29uZmlybVZpc2libGUiLCJjb25maXJtVGV4dCIsImNvbmZpcm1DbGFzcyIsImNhbmNlbFZpc2libGUiLCJjYW5jZWxUZXh0IiwiY2FuY2VsQ2xhc3MiLCJib2R5RXh0cmFDbGFzcyIsInNwaW5uZXIiLCJhdXRvRGVzdHJveSIsIm9uU2hvdyIsIm9uU2hvd24iLCJvbkhpZGUiLCJvbkhpZGRlbiIsIm9uQ29uZmlybSIsIm9uQ2FuY2VsIiwibW9kYWxJZCIsImd1aWQiLCJsZW4iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJyZXBsYWNlIiwic3Vic3RyIiwic2V0dGluZyIsImV4dGVuZCIsIm1vZGFsIiwiaWQiLCJoYW5kbGVDYWxsYmFjayIsImlzRnVuY3Rpb24iLCJzdWJzdHJpbmciLCJjYWxsIiwiYXBwZW5kIiwib3V0ZXJIVE1MIiwib25lIiwiaHRtbF9oZWFkZXIiLCJodG1sX2Zvb3RlciIsIm1vZGFsX2h0bWwiLCJqUXVlcnkiLCJrZXl3b3JkIiwic2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQiLCJzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwiLCJzZWFyY2hfcmVwb25zZV9hdXRyZSIsImFqYXgiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJldHVkaWFudHMiLCJpbmRleCIsImV0dWRpYW50Iiwic2x1ZyIsInBob3RvIiwiYXZhdGFySW5pdGlhbGVzIiwiYmFzZXBhdGgiLCJkaXNwbGF5UHIiLCJzZW1lc3RyZSIsImdyb3VwZXMiLCJlbXB0eSIsInBlcnNvbm5lbHMiLCJwZXJzb25uZWwiLCJhdXRyZXMiLCJhdXRyZSIsImdldFZhbHVlIiwiJGVsIiwiVmFsaWRhdG9yIiwiZWxlbWVudCIsInZhbGlkYXRvcnMiLCJWQUxJREFUT1JTIiwiY3VzdG9tIiwiJGVsZW1lbnQiLCIkYnRuIiwiZmlsdGVyIiwiYWRkIiwicHJveHkiLCJvbklucHV0Iiwib25TdWJtaXQiLCJyZXNldCIsIiR0aGlzIiwiJGlucHV0cyIsIlZFUlNJT04iLCJJTlBVVF9TRUxFQ1RPUiIsIkZPQ1VTX09GRlNFVCIsIkRFRkFVTFRTIiwiZGVsYXkiLCJkaXNhYmxlIiwiZXJyb3JzIiwibWF0Y2giLCJtaW5sZW5ndGgiLCJmZWVkYmFjayIsImVycm9yIiwiZWwiLCJjaGVja1ZhbGlkaXR5IiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwicHJvdG90eXBlIiwic2VsZiIsImNsZWFyRXJyb3JzIiwidG9nZ2xlU3VibWl0IiwiZGVmZXJFcnJvcnMiLCJ2YWxpZGF0ZUlucHV0IiwiZG9uZSIsInZhbHVlIiwicHJldkVycm9ycyIsIkV2ZW50IiwicmVsYXRlZFRhcmdldCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJ1blZhbGlkYXRvcnMiLCJkZWZlciIsInNob3dFcnJvcnMiLCJkZXRhaWwiLCJkZWZlcnJlZCIsIkRlZmVycmVkIiwicmVqZWN0IiwiZ2V0VmFsaWRhdG9yU3BlY2lmaWNFcnJvciIsImtleSIsImdldFZhbGlkaXR5U3RhdGVFcnJvciIsInR5cGVNaXNtYXRjaCIsInBhdHRlcm5NaXNtYXRjaCIsInN0ZXBNaXNtYXRjaCIsInJhbmdlT3ZlcmZsb3ciLCJyYW5nZVVuZGVyZmxvdyIsInZhbHVlTWlzc2luZyIsImdldEdlbmVyaWNFcnJvciIsImdldEVycm9yTWVzc2FnZSIsImluZGV4T2YiLCJnZXQiLCJmYWlsIiwianFYSFIiLCJ0ZXh0U3RhdHVzIiwiYWx3YXlzIiwicmVzb2x2ZSIsInByb21pc2UiLCJ2YWxpZGF0ZSIsIndoZW4iLCJtYXAiLCJ0aGVuIiwiZm9jdXNFcnJvciIsIiRpbnB1dCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJtZXRob2QiLCIkZ3JvdXAiLCIkYmxvY2siLCIkZmVlZGJhY2siLCJoYXNFcnJvcnMiLCJmaWVsZEVycm9ycyIsImlzSW5jb21wbGV0ZSIsImZpZWxkSW5jb21wbGV0ZSIsInRyaW0iLCJjYWxsYmFjayIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZW1vdmVEYXRhIiwidGltZW91dCIsIm9yaWdpbmFsQ29udGVudCIsInJlbW92ZUF0dHIiLCJvZmYiLCJQbHVnaW4iLCJvcHRpb24iLCJvbGQiLCJmbiIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIiRmb3JtIiwiYSIsImRlZmluZSIsImIiLCJjIiwiRGF0ZSIsIlVUQyIsImFwcGx5IiwiYXJndW1lbnRzIiwiZCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJmIiwiZGVwcmVjYXRlZCIsImciLCJpc05hTiIsImdldFRpbWUiLCJoIiwidG9Mb3dlckNhc2UiLCJSZWdFeHAiLCJ0ZXN0IiwicSIsInNwbGl0IiwicCIsImoiLCJzbGljZSIsImNvbnRhaW5zIiwidmFsdWVPZiIsInNwbGljZSIsImlzQXJyYXkiLCJjbGVhciIsImNvcHkiLCJrIiwiX3Byb2Nlc3Nfb3B0aW9ucyIsImRhdGVzIiwidmlld0RhdGUiLCJvIiwiZGVmYXVsdFZpZXdEYXRlIiwiZm9jdXNEYXRlIiwiaXNJbnB1dCIsImlucHV0RmllbGQiLCJjb21wb25lbnQiLCJpc0lubGluZSIsInBpY2tlciIsInIiLCJfY2hlY2tfdGVtcGxhdGUiLCJ0ZW1wbGF0ZXMiLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwiX2J1aWxkRXZlbnRzIiwiX2F0dGFjaEV2ZW50cyIsImFwcGVuZFRvIiwicnRsIiwiY2FsZW5kYXJXZWVrcyIsIk51bWJlciIsInN0YXJ0RGF0ZSIsIl9vIiwiZW5kRGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImRhdGVzRGlzYWJsZWQiLCJfYWxsb3dfdXBkYXRlIiwic2V0Vmlld01vZGUiLCJzdGFydFZpZXciLCJmaWxsRG93IiwiZmlsbE1vbnRocyIsImNvbnN0cnVjdG9yIiwiX3Jlc29sdmVWaWV3TmFtZSIsInZpZXdNb2RlcyIsImluQXJyYXkiLCJuYW1lcyIsIl9yZXNvbHZlRGF5c09mV2VlayIsIm1pblZpZXdNb2RlIiwibWF4Vmlld01vZGUiLCJtYXgiLCJtaW4iLCJtdWx0aWRhdGUiLCJTdHJpbmciLCJ3ZWVrU3RhcnQiLCJ3ZWVrRW5kIiwicGFyc2VGb3JtYXQiLCJfbG9jYWxfdG9fdXRjIiwiX3plcm9fdGltZSIsInBhcnNlRGF0ZSIsImFzc3VtZU5lYXJieVllYXIiLCJvcmllbnRhdGlvbiIsImdyZXAiLCJ4IiwieSIsInllYXIiLCJtb250aCIsImwiLCJkYXkiLCJfZXZlbnRzIiwiX3NlY29uZGFyeUV2ZW50cyIsIl9hcHBseUV2ZW50cyIsIl91bmFwcGx5RXZlbnRzIiwia2V5dXAiLCJrZXlDb2RlIiwia2V5ZG93biIsInBhc3RlIiwic2hvd09uRm9jdXMiLCJjbGljayIsImJsdXIiLCJfZm9jdXNlZF9mcm9tIiwiaW1tZWRpYXRlVXBkYXRlcyIsImRhdGUiLCJuYXZBcnJvd3NDbGljayIsImRheUNlbGxDbGljayIsInJlc2l6ZSIsInBsYWNlIiwiX2RldGFjaEV2ZW50cyIsIl9hdHRhY2hTZWNvbmRhcnlFdmVudHMiLCJfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzIiwiX3RyaWdnZXIiLCJfdXRjX3RvX2xvY2FsIiwidmlld01vZGUiLCJmb3JtYXREYXRlIiwiZW5hYmxlT25SZWFkb25seSIsIm5hdmlnYXRvciIsIm1zTWF4VG91Y2hQb2ludHMiLCJkaXNhYmxlVG91Y2hLZXlib2FyZCIsImRldGFjaCIsImZvcmNlUGFyc2UiLCJzZXRWYWx1ZSIsIm9yaWdpbmFsRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwidHlwZXMiLCJnZXREYXRhIiwic2V0RGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwiX3plcm9fdXRjX3RpbWUiLCJnZXREYXRlcyIsImdldFVUQ0RhdGVzIiwiY2xlYXJEYXRlcyIsImF1dG9jbG9zZSIsInNldERhdGVzIiwic2V0VVRDRGF0ZXMiLCJzZXRVVENEYXRlIiwiZ2V0Rm9ybWF0dGVkRGF0ZSIsImdldFN0YXJ0RGF0ZSIsInNldFN0YXJ0RGF0ZSIsInVwZGF0ZU5hdkFycm93cyIsImdldEVuZERhdGUiLCJzZXRFbmREYXRlIiwic2V0RGF5c09mV2Vla0Rpc2FibGVkIiwic2V0RGF5c09mV2Vla0hpZ2hsaWdodGVkIiwic2V0RGF0ZXNEaXNhYmxlZCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsIndpZHRoIiwicGFyZW50cyIsInpJbmRleE9mZnNldCIsIm0iLCJuIiwibGVmdCIsInBhcnNlSW50IiwicmlnaHQiLCJ6SW5kZXgiLCJkYXRlV2l0aGluUmFuZ2UiLCJ1cGRhdGVWaWV3RGF0ZSIsImZpbGwiLCJzaG93V2Vla0RheXMiLCJkYXlzTWluIiwibW9udGhzU2hvcnQiLCJzZXRSYW5nZSIsInJhbmdlIiwiZ2V0Q2xhc3NOYW1lcyIsInRvZGF5SGlnaGxpZ2h0IiwiZGF0ZUlzRGlzYWJsZWQiLCJnZXRVVENEYXkiLCJfZmlsbF95ZWFyc1ZpZXciLCJmbG9vciIsInMiLCJ0Iiwibm9vcCIsImVuYWJsZWQiLCJjbGFzc2VzIiwiY29uY2F0IiwidGV4dCIsInRvZGF5IiwiZW4iLCJ0aXRsZUZvcm1hdCIsInRvZGF5QnRuIiwiY2xlYXJCdG4iLCJzZXRVVENGdWxsWWVhciIsInUiLCJ2IiwidyIsInoiLCJBIiwiQiIsImJlZm9yZVNob3dEYXkiLCJjb250ZW50IiwidW5pcXVlU29ydCIsInVuaXF1ZSIsIkMiLCJtb250aHNUaXRsZSIsIkQiLCJlbmQiLCJlcSIsImJlZm9yZVNob3dNb250aCIsIkUiLCJiZWZvcmVTaG93WWVhciIsImJlZm9yZVNob3dEZWNhZGUiLCJiZWZvcmVTaG93Q2VudHVyeSIsInN0b3BQcm9wYWdhdGlvbiIsIl9zZXREYXRlIiwic2V0VVRDTW9udGgiLCJjdXJyZW50VGFyZ2V0IiwibmF2U3RlcCIsIm1vdmVNb250aCIsIl90b2dnbGVfbXVsdGlkYXRlIiwidG9nZ2xlQWN0aXZlIiwibW92ZURheSIsIm1vdmVXZWVrIiwiYWJzIiwibW92ZVllYXIiLCJtb3ZlQXZhaWxhYmxlRGF0ZSIsIndlZWtPZkRhdGVJc0Rpc2FibGVkIiwia2V5Ym9hcmROYXZpZ2F0aW9uIiwiY3RybEtleSIsInNoaWZ0S2V5IiwiY2hpbGRyZW4iLCJjbHNOYW1lIiwianF1ZXJ5Iiwia2VlcEVtcHR5VmFsdWVzIiwiZGF0ZVVwZGF0ZWQiLCJwaWNrZXJzIiwidXBkYXRlRGF0ZXMiLCJ1cGRhdGVSYW5nZXMiLCJ1cGRhdGluZyIsIkFycmF5Iiwic2hpZnQiLCJ0b0FycmF5IiwiRXJyb3IiLCJkZWZhdWx0cyIsImxvY2FsZV9vcHRzIiwiZGF5cyIsImRheXNTaG9ydCIsIm1vbnRocyIsInZhbGlkUGFydHMiLCJub25wdW5jdHVhdGlvbiIsInRvVmFsdWUiLCJ0b0Rpc3BsYXkiLCJzZXBhcmF0b3JzIiwicGFydHMiLCJ5ZXN0ZXJkYXkiLCJ0b21vcnJvdyIsInl5eXkiLCJ5eSIsIk0iLCJNTSIsIm1tIiwiZGQiLCJERCIsImhlYWRUZW1wbGF0ZSIsImNvbnRUZW1wbGF0ZSIsImZvb3RUZW1wbGF0ZSIsIkRQR2xvYmFsIiwidmVyc2lvbiIsIndhcm4iLCJmciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSw0RTs7Ozs7Ozs7Ozs7QUNSQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsSUFBSSxHQUFHQyxpRkFBZ0IsQ0FDbENDLHVFQURrQyxDQUE3QjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFFQSxJQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFFQUQsbUJBQU8sQ0FBQyxxRkFBRCxDQUFQOztBQUVBRSw4Q0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JDLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDLFVBQVVDLENBQVYsRUFBYTtBQUNoRCxNQUFJQyxRQUFRLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixFQUFrQkMsSUFBakM7QUFDQU4sZ0RBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCTyxJQUF4QixDQUE2Qkos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QyxNQUEzQyxDQUFwRjtBQUF1STVFLFdBQU8sRUFBQyxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVMsSUFBVCxFQUFjLElBQWQsRUFBbUIsR0FBbkIsRUFBdUIsR0FBdkIsRUFBMkIsR0FBM0IsQ0FBL0k7QUFBK0s2RSxVQUFNLEVBQUMsQ0FBQyxTQUFELEVBQVcsU0FBWCxFQUFxQixNQUFyQixFQUE0QixPQUE1QixFQUFvQyxLQUFwQyxFQUEwQyxNQUExQyxFQUFpRCxTQUFqRCxFQUEyRCxNQUEzRCxFQUFrRSxXQUFsRSxFQUE4RSxTQUE5RSxFQUF3RixVQUF4RixFQUFtRyxVQUFuRyxDQUF0TDtBQUFxUzVFLGVBQVcsRUFBQyxDQUFDLE9BQUQsRUFBUyxPQUFULEVBQWlCLE1BQWpCLEVBQXdCLE9BQXhCLEVBQWdDLEtBQWhDLEVBQXNDLE1BQXRDLEVBQTZDLE9BQTdDLEVBQXFELE1BQXJELEVBQTRELE9BQTVELEVBQW9FLE1BQXBFLEVBQTJFLE1BQTNFLEVBQWtGLE1BQWxGLENBQWpUO0FBQTJZZ0IsU0FBSyxFQUFDLGFBQWpaO0FBQStaaUIsZUFBVyxFQUFDLE1BQTNhO0FBQWtidEssU0FBSyxFQUFDLFNBQXhiO0FBQWtjK0MsYUFBUyxFQUFDLENBQTVjO0FBQThjOVMsVUFBTSxFQUFDO0FBQXJkLEdBQXpCO0FBQTRmLENBQXhnQixDQUF5Z0I2RixNQUF6Z0IsQ0FBRCxDIiwiZmlsZSI6ImFnZW5kYX5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC4oanx0KXN4PyRcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvYXBwLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMDYvMTEvMjAyMCAxNTozM1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnXG5cbmV4cG9ydCBjb25zdCBhcHAyID0gc3RhcnRTdGltdWx1c0FwcChcbiAgcmVxdWlyZS5jb250ZXh0KCcuLi9jb250cm9sbGVycycsIHRydWUsIC9cXC4oanx0KXN4PyQvKVxuKVxuXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvZm9udGF3ZXNvbWUuc2NzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9zb2xpZC5zY3NzJ1xuaW1wb3J0ICdib290c3RyYXAtc2VsZWN0L2Rpc3QvY3NzL2Jvb3RzdHJhcC1zZWxlY3QubWluLmNzcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlcjMubWluLmNzcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qcydcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluJ1xuaW1wb3J0ICcuLi9jc3MvYXBwLnNjc3MnXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJ1xuaW1wb3J0ICcuL3ZhbGlkYXRvci1iczQnXG5pbXBvcnQge2dldERhdGFPcHRpb25zfSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgJy4vbWF0ZXJpYWwnXG5pbXBvcnQgJy4vc2VhcmNoJ1xuaW1wb3J0ICcuL21vZGFsZXInXG5cbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpXG5cbmxldCBsb29rdXAgPSB7fVxuXG5yZXF1aXJlKCdib290c3RyYXAtc2VsZWN0JylcblxuJCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgbGV0IGZpbGVuYW1lID0gZS50YXJnZXQuZmlsZXNbMF0ubmFtZVxuICAkKCcuY3VzdG9tLWZpbGUtbGFiZWwnKS5odG1sKGZpbGVuYW1lKVxufSlcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAvLyBjb3B5IGxpbmsgRURUXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjY29weUxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2xpZW5JY2FsJykuc2VsZWN0KClcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gIH0pXG5cbiAgLy8gc2NyaXB0IHBvdXIgYWZmaWNoZXIgbGUgZmljaGllciBzZWxlY3Rpb25uw6kgYXZlYyBib290c3RyYXA0XG4gICQoJy5jdXN0b20tZmlsZSBpbnB1dCcpLmNoYW5nZShmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGZpbGVzID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICQodGhpcylbMF0uZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZpbGVzLnB1c2goJCh0aGlzKVswXS5maWxlc1tpXS5uYW1lKVxuICAgIH1cbiAgICAkKHRoaXMpLm5leHQoJy5jdXN0b20tZmlsZS1sYWJlbCcpLmh0bWwoZmlsZXMuam9pbignLCAnKSlcbiAgfSlcblxuICB2YXIgcHJlbG9hZGVyID0gJCgnLnByZWxvYWRlcicpXG4gIGlmIChwcmVsb2FkZXIubGVuZ3RoKSB7XG4gICAgdmFyIHNwZWVkID0gcHJlbG9hZGVyLmRhdGFBdHRyKCdoaWRlLXNwcGVkJywgNjAwKVxuICAgIHByZWxvYWRlci5mYWRlT3V0KHNwZWVkKVxuICB9XG5cbiAgJChkb2N1bWVudCkub24oJ2ZvY3VzJywgJy50b3BiYXItc2VhcmNoIGlucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykuY2xvc2VzdCgnLnRvcGJhci1zZWFyY2gnKS5maW5kKCcubG9va3VwLXBsYWNlaG9sZGVyIHNwYW4nKS5jc3MoJ29wYWNpdHknLCAnMCcpXG4gIH0pXG5cbiAgJChkb2N1bWVudCkub24oJ2JsdXInLCAnLnRvcGJhci1zZWFyY2ggaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcudG9wYmFyLXNlYXJjaCcpLmZpbmQoJy5sb29rdXAtcGxhY2Vob2xkZXIgc3BhbicpLmNzcygnb3BhY2l0eScsICcxJylcbiAgfSlcblxuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2xvb2t1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdmFyIHRhcmdldCA9ICQoJyNsb29rdXAtZnVsbCcpXG5cbiAgICBpZiAodGFyZ2V0ICE9PSBmYWxzZSkge1xuICAgICAgbG9va3VwLnRvZ2dsZSh0YXJnZXQpXG4gICAgfVxuICB9KVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjbG9va3VwLWNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGxvb2t1cC50b2dnbGUoJCgnI2xvb2t1cC1mdWxsJykpXG4gIH0pXG5cbiAgLy90b29sdGlwXG4gIHVwZGF0ZUludGVyZmFjZSgpXG5cbiAgJCgnW2RhdGEtcHJvdmlkZT1cInZhbGlkYXRpb25cIl0nKS52YWxpZGF0b3IoKVxufSlcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcbiAgdXBkYXRlSW50ZXJmYWNlKClcbn0pXG5cbi8vIEZ1bGxzY3JlZW5cbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQtYnRuLWZ1bGxzY3JlZW4nLCBmdW5jdGlvbiAoKSB7XG4gICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKS50b2dnbGVDbGFzcygnY2FyZC1mdWxsc2NyZWVuJykucmVtb3ZlQ2xhc3MoJ2NhcmQtbWF4aW1pemUnKVxufSlcblxuLy8gU2xpZGUgdXAvZG93blxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5jYXJkLWJ0bi1zbGlkZScsIGZ1bmN0aW9uICgpIHtcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygncm90YXRlLTE4MCcpLmNsb3Nlc3QoJy5jYXJkJykuZmluZCgnLmNhcmQtY29udGVudCcpLnNsaWRlVG9nZ2xlKClcbn0pXG5cbi8vbW9kYWxlclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ1tkYXRhLXByb3ZpZGV+PVwibW9kYWxlclwiXScsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWxlcihnZXREYXRhT3B0aW9ucygkKHRoaXMpKSlcbn0pXG5cbmZ1bmN0aW9uIHVwZGF0ZUludGVyZmFjZSAoKSB7XG4gIC8vc2VsZWN0cGlja2VyXG4gICQoJy5zZWxlY3RwaWNrZXInKS5zZWxlY3RwaWNrZXIoe1xuICAgIGljb25CYXNlOiAnJyxcbiAgICB0aWNrSWNvbjogJ2ZhcyBmYS1jaGVjaycsXG4gICAgc3R5bGU6ICdidG4tbGlnaHQnLFxuICAgIHNpemU6IDEwLFxuICAgIGxpdmVTZWFyY2g6IHRydWVcbiAgfSlcblxuICAvL3Rvb2x0aXBcbiAgJCgnW2RhdGEtcHJvdmlkZX49XCJ0b29sdGlwXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbG9yID0gJydcblxuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd0b29sdGlwLWNvbG9yJykpIHtcbiAgICAgIGNvbG9yID0gJyB0b29sdGlwLScgKyAkKHRoaXMpLmRhdGEoJ3Rvb2x0aXAtY29sb3InKVxuICAgIH1cblxuICAgICQodGhpcykudG9vbHRpcCh7XG4gICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgIHRyaWdnZXI6ICdob3ZlcicsXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJ0b29sdGlwJyArIGNvbG9yICsgJ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nXG4gICAgfSlcbiAgfSlcblxuICAkKCdbZGF0YS1wcm92aWRlfj1cImRhdGVwaWNrZXJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIG11bHRpZGF0ZVNlcGFyYXRvcjogJywgJyxcbiAgICAgIGxhbmd1YWdlOiAnZnInLFxuICAgICAgZGF5c09mV2Vla0hpZ2hsaWdodGVkOiAnMDYnLFxuICAgICAgZm9ybWF0OiAnZGQvbW0veXl5eSdcbiAgICB9XG5cbiAgICBpZiAoJCh0aGlzKS5wcm9wKCd0YWdOYW1lJykgIT0gJ0lOUFVUJykge1xuICAgICAgLy9zaSBjZSBuJ2VzdCBwYXMgdW4gaW5wdXQgPT4gZG9uYyB1biBkYXRlIHJhbmdlXG4gICAgICBvcHRpb25zLmlucHV0cyA9IFskKHRoaXMpLmZpbmQoJ2lucHV0OmZpcnN0JyksICQodGhpcykuZmluZCgnaW5wdXQ6bGFzdCcpXVxuICAgIH1cbiAgICAkKHRoaXMpLmRhdGVwaWNrZXIob3B0aW9ucylcbiAgfSlcblxufVxuXG4vLyBPcGVuIGZ1bGxzY3JlZW4gbG9va3VwXG4vL1xubG9va3VwLnRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICgkKGUpLmhhc0NsYXNzKCdyZXZlYWwnKSkge1xuICAgIGxvb2t1cC5jbG9zZShlKVxuICB9IGVsc2Uge1xuICAgIGxvb2t1cC5vcGVuKGUpXG4gIH1cbn1cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAkKGUpLnJlbW92ZUNsYXNzKCdyZXZlYWwnKVxuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cblxuLy8gQ2xvc2UgZnVsbHNjcmVlbiBsb29rdXBcbi8vXG5sb29rdXAub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkuYWRkQ2xhc3MoJ3JldmVhbCcpXG4gICQoZSkuZmluZCgnLmxvb2t1cC1mb3JtIGlucHV0JykuZm9jdXMoKVxuICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpXG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gU2lkZWJhclxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBzaWRlYmFyID0ge31cblxuLy8gU2Nyb2xsYWJsZVxuY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhci1uYXZpZ2F0aW9uJykpXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2lkZWJhci1uYXZpZ2F0aW9uJykubGVuZ3RoID4gMCkge1xuICBjb25zdCBwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcuc2lkZWJhci1uYXZpZ2F0aW9uJylcbn1cblxuLy8gSGFuZGxlIHNpZGViYXIgb3Blbm5lclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc2lkZWJhci10b2dnbGVyJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLm9wZW4oKVxufSlcblxuXG4vLyBDbG9zZSBzaWRlYmFyIHdoZW4gYmFja2Ryb3AgdG91Y2hlc1xuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYmFja2Ryb3Atc2lkZWJhcicsIGZ1bmN0aW9uICgpIHtcbiAgc2lkZWJhci5jbG9zZSgpXG59KVxuXG5cbi8vIFNsaWRlIHVwL2Rvd24gbWVudSBpdGVtIG9uIGNsaWNrXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyIC5tZW51LWxpbmsnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciAkc3VibWVudSA9ICQodGhpcykubmV4dCgnLm1lbnUtc3VibWVudScpXG4gIGlmICgkc3VibWVudS5sZW5ndGggPCAxKVxuICAgIHJldHVyblxuXG4gIGlmICgkc3VibWVudS5pcygnOnZpc2libGUnKSkge1xuICAgICRzdWJtZW51LnNsaWRlVXAoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnLnNpZGViYXIgLm1lbnUtaXRlbS5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIH0pXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgcmV0dXJuXG4gIH1cblxuICAkKCcuc2lkZWJhciAubWVudS1zdWJtZW51OnZpc2libGUnKS5zbGlkZVVwKClcbiAgJCgnLnNpZGViYXIgLm1lbnUtbGluaycpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgJHN1Ym1lbnUuc2xpZGVUb2dnbGUoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zaWRlYmFyIC5tZW51LWl0ZW0ub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgfSlcbiAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpXG59KVxuXG4vLyBIYW5kbGUgZm9sZCB0b2dnbGVyXG4vL1xuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaWRlYmFyLXRvZ2dsZS1mb2xkJywgZnVuY3Rpb24gKCkge1xuICBzaWRlYmFyLnRvZ2dsZUZvbGQoKVxufSlcblxuLy99XG5cblxuc2lkZWJhci50b2dnbGVGb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnRvZ2dsZVN0YXRlKCdzaWRlYmFyLmZvbGRlZCcpXG59XG5cbnNpZGViYXIuZm9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLWZvbGRlZCcpXG4gIGFwcC5zdGF0ZSgnc2lkZWJhci5mb2xkZWQnLCB0cnVlKVxufVxuXG5cbnNpZGViYXIudW5mb2xkID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItZm9sZGVkJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmZvbGRlZCcsIGZhbHNlKVxufVxuXG5cbnNpZGViYXIudG9nZ2xlSGlkZSA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWhpZGRlbicpXG4gIGFwcC50b2dnbGVTdGF0ZSgnc2lkZWJhci5oaWRkZW4nKVxufVxuXG5zaWRlYmFyLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1oaWRkZW4nKVxuICBhcHAuc3RhdGUoJ3NpZGViYXIuaGlkZGVuJywgdHJ1ZSlcbn1cblxuc2lkZWJhci5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItaGlkZGVuJylcbiAgYXBwLnN0YXRlKCdzaWRlYmFyLmhpZGRlbicsIGZhbHNlKVxufVxuXG5cbnNpZGViYXIub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLW9wZW4nKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiYXBwLWJhY2tkcm9wIGJhY2tkcm9wLXNpZGViYXJcIj48L2Rpdj4nKVxufVxuXG5zaWRlYmFyLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItb3BlbicpXG4gICQoJy5iYWNrZHJvcC1zaWRlYmFyJykucmVtb3ZlKClcbn1cblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vIFF1aWNrdmlld1xuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vL1xuXG5sZXQgcXVpY2t2aWV3ID0ge31cbmxldCBxcHMgPSBudWxsXG5cbi8vIFVwZGF0ZSBzY3JvbGxiYXIgb24gdGFiIGNoYW5nZVxuLy9cbiQoZG9jdW1lbnQpLm9uKCdzaG93bi5icy50YWInLCAnLnF1aWNrdmlldy1oZWFkZXIgYVtkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGZ1bmN0aW9uIChlKSB7XG4gIHFwcy51cGRhdGUoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsb2FkUXYgKCkge1xuICBxcHMuZGVzdHJveSgpXG4gIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3Jylcbn1cblxuLy8gUXVpY2t2aWV3IGNsb3NlclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS1kaXNtaXNzPVwicXVpY2t2aWV3XCJdJywgZnVuY3Rpb24gKCkge1xuICBxdWlja3ZpZXcuY2xvc2UoJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JykpXG59KVxuXG5cbi8vIEhhbmRsZSBxdWlja3ZpZXcgb3Blbm5lclxuLy9cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJxdWlja3ZpZXdcIl0nLCBmdW5jdGlvbiAoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgbGV0IHRhcmdldCA9IGFwcC5nZXRUYXJnZXQoJCh0aGlzKSlcblxuICBpZiAodGFyZ2V0ID09IGZhbHNlKSB7XG4gICAgcXVpY2t2aWV3LmNsb3NlKCQodGhpcykuY2xvc2VzdCgnLnF1aWNrdmlldycpKVxuICB9IGVsc2Uge1xuICAgIGxldCB1cmwgPSAnJ1xuICAgIGlmICgkKHRoaXMpLmhhc0RhdGFBdHRyKCd1cmwnKSkge1xuICAgICAgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKVxuICAgIH1cbiAgICBxdWlja3ZpZXcudG9nZ2xlKHRhcmdldCwgdXJsKVxuICB9XG59KVxuXG5cbi8vIENsb3NlIHF1aWNrdmlldyB3aGVuIGJhY2tkcm9wIHRvdWNoZXNcbi8vXG4kKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmJhY2tkcm9wLXF1aWNrdmlldycsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRhcmdldCcpXG4gIGlmICghJChxdikuaXMoJ1tkYXRhLWRpc2FibGUtYmFja2Ryb3AtY2xpY2tdJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UocXYpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcucXVpY2t2aWV3IC5jbG9zZSwgW2RhdGEtZGlzbWlzcz1cInF1aWNrdmlld1wiXScsIGZ1bmN0aW9uICgpIHtcbiAgbGV0IHF2ID0gJCh0aGlzKS5jbG9zZXN0KCcucXVpY2t2aWV3JylcbiAgcXVpY2t2aWV3LmNsb3NlKHF2KVxufSlcblxuLy8gVG9nZ2xlIG9wZW4vY2xvc2Ugc3RhdGVcbi8vXG5xdWlja3ZpZXcudG9nZ2xlID0gZnVuY3Rpb24gKGUsIHVybCkge1xuICBpZiAoJChlKS5oYXNDbGFzcygncmV2ZWFsJykpIHtcbiAgICBxdWlja3ZpZXcuY2xvc2UoZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodXJsICE9PSAnJykge1xuICAgICAgJChlKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1saW5lYXJcIj48ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PjwvZGl2PicpXG4gICAgICAkKGUpLmxvYWQodXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3JylcbiAgICAgIH0pXG4gICAgfVxuICAgIHF1aWNrdmlldy5vcGVuKGUpXG4gIH1cbn1cblxuXG4vLyBPcGVuIHF1aWNrdmlld1xuLy9cbnF1aWNrdmlldy5vcGVuID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHF1aWNrdmlldyA9ICQoZSlcbiAgbGV0IHVybCA9ICcnXG4gIC8vIExvYWQgY29udGVudCBmcm9tIFVSTCBpZiByZXF1aXJlZFxuICBpZiAocXVpY2t2aWV3Lmhhc0RhdGFBdHRyKCd1cmwnKSAmJiAndHJ1ZScgIT09IHF1aWNrdmlldy5kYXRhKCd1cmwtaGFzLWxvYWRlZCcpKSB7XG4gICAgaWYgKHF1aWNrdmlldy5kYXRhKCd1cmwnKSA9PT0gJ25vLXVybCcpIHtcbiAgICAgIHVybCA9IFJvdXRpbmcuZ2VuZXJhdGUoJ3F1aWNrX3ZpZXcnKVxuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBxdWlja3ZpZXcuZGF0YSgndXJsJylcbiAgICB9XG5cbiAgICBxdWlja3ZpZXcubG9hZCh1cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHFwcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKCcucXVpY2t2aWV3JylcblxuICAgICAgLy8gRG9uJ3QgbG9hZCBpdCBuZXh0IHRpbWUsIGlmIGRvbid0IG5lZWQgdG9cbiAgICAgIGlmIChxdWlja3ZpZXcuaGFzRGF0YUF0dHIoJ2Fsd2F5cy1yZWxvYWQnKSAmJiAndHJ1ZScgPT09IHF1aWNrdmlldy5kYXRhKCdhbHdheXMtcmVsb2FkJykpIHtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVpY2t2aWV3LmRhdGEoJ3VybC1oYXMtbG9hZGVkJywgJ3RydWUnKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4vLyBPcGVuIGl0XG4gIHF1aWNrdmlldy5hZGRDbGFzcygncmV2ZWFsJykubm90KCcuYmFja2Ryb3AtcmVtb3ZlJykuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJhcHAtYmFja2Ryb3AgYmFja2Ryb3AtcXVpY2t2aWV3XCIgZGF0YS10YXJnZXQ9XCInICsgZSArICdcIj48L2Rpdj4nKVxufVxuXG5cbi8vIENsb3NlIHF1aWNrdmlld1xuLy9cbnF1aWNrdmlldy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICQoZSkucmVtb3ZlQ2xhc3MoJ3JldmVhbCcpXG4gICQoJy5iYWNrZHJvcC1xdWlja3ZpZXcnKS5yZW1vdmUoKVxufVxuXG5cbmxldCBhcHAgPSB7fVxuXG5hcHAuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgbGV0IHRhcmdldFxuICBpZiAoZS5oYXNEYXRhQXR0cigndGFyZ2V0JykpIHtcbiAgICB0YXJnZXQgPSBlLmRhdGEoJ3RhcmdldCcpXG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZS5hdHRyKCdocmVmJylcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT0gJ25leHQnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5uZXh0KClcbiAgfSBlbHNlIGlmICh0YXJnZXQgPT0gJ3ByZXYnKSB7XG4gICAgdGFyZ2V0ID0gJChlKS5wcmV2KClcbiAgfVxuXG4gIGlmICh0YXJnZXQgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdGFyZ2V0XG59XG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy9tYXRlcmlhbC5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI4LzExLzIwMTkgMTk6NDBcblxuLy8gTWF0ZXJpYWwgaW5wdXRcbi8vXG4kKGRvY3VtZW50KS5vbignZm9jdXMnLCAnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sOm5vdCguYm9vdHN0cmFwLXNlbGVjdCknLCBmdW5jdGlvbiAoKSB7XG4gIG1hdGVyaWFsRG9GbG9hdCgkKHRoaXMpKVxufSlcblxuJChkb2N1bWVudCkub24oJ2ZvY3Vzb3V0JywgJy5mb3JtLXR5cGUtbWF0ZXJpYWwgLmZvcm0tY29udHJvbDpub3QoLmJvb3RzdHJhcC1zZWxlY3QpJywgZnVuY3Rpb24gKCkge1xuICBpZiAoJCh0aGlzKS52YWwoKSA9PT0gJycpIHtcbiAgICBtYXRlcmlhbE5vRmxvYXQoJCh0aGlzKSlcbiAgfVxufSlcblxuLy8gQXV0byBmb2N1cyBpbnB1dHNcbm1hdGVyaWFsRG9GbG9hdCgkKCcuZm9ybS10eXBlLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2xbYXV0b2ZvY3VzPVwidHJ1ZVwiXScpKVxuXG5cbmZ1bmN0aW9uIG1hdGVyaWFsRG9GbG9hdCAoZSkge1xuICBpZiAoZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLmxlbmd0aCkge1xuICAgIGUucGFyZW50KCcuaW5wdXQtZ3JvdXAtaW5wdXQnKS5hZGRDbGFzcygnZG8tZmxvYXQnKVxuICB9IGVsc2Uge1xuICAgIGUuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKS5hZGRDbGFzcygnZG8tZmxvYXQnKVxuICB9XG59XG5cblxuZnVuY3Rpb24gbWF0ZXJpYWxOb0Zsb2F0IChlKSB7XG4gIGlmIChlLnBhcmVudCgnLmlucHV0LWdyb3VwLWlucHV0JykubGVuZ3RoKSB7XG4gICAgZS5wYXJlbnQoJy5pbnB1dC1ncm91cC1pbnB1dCcpLnJlbW92ZUNsYXNzKCdkby1mbG9hdCcpXG4gIH0gZWxzZSB7XG4gICAgZS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLnJlbW92ZUNsYXNzKCdkby1mbG9hdCcpXG4gIH1cbn1cblxuJCgnLmZvcm0tdHlwZS1tYXRlcmlhbCAuZm9ybS1jb250cm9sJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA+IDApIHtcbiAgICAvL2lmICgkKHRoaXMpLmlzKCdbZGF0YS1wcm92aWRlfj1cInNlbGVjdHBpY2tlclwiXScpKSB7XG4gICAgLy8gIHJldHVyblxuICAgIC8vfVxuICAgIG1hdGVyaWFsRG9GbG9hdCgkKHRoaXMpKVxuICB9XG59KVxuXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvbW9kYWxlci5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDI3LzA3LzIwMjAgMTE6MjNcblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBNb2RhbGVyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cbi8vXG4rZnVuY3Rpb24gKCQpIHtcblxuICBsZXQgY29uZmlnTW9kYWxlciA9IHtcbiAgICB1cmw6ICcnLFxuICAgIGlzTW9kYWw6IGZhbHNlLFxuICAgIGh0bWw6ICcnLFxuICAgIHRhcmdldDogJycsXG4gICAgdHlwZTogJycsXG4gICAgc2l6ZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlYWRlclZpc2libGU6IHRydWUsXG4gICAgZm9vdGVyVmlzaWJsZTogdHJ1ZSxcbiAgICBjb25maXJtVmlzaWJsZTogdHJ1ZSxcbiAgICBjb25maXJtVGV4dDogJ09rJyxcbiAgICBjb25maXJtQ2xhc3M6ICdidG4gYnRuLXctc20gYnRuLWZsYXQgYnRuLXByaW1hcnknLFxuICAgIGNhbmNlbFZpc2libGU6IGZhbHNlLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbENsYXNzOiAnYnRuIGJ0bi13LXNtIGJ0bi1mbGF0IGJ0bi1zZWNvbmRhcnknLFxuICAgIGJvZHlFeHRyYUNsYXNzOiAnJyxcbiAgICBzcGlubmVyOiAnPGRpdiBjbGFzcz1cImgtMjAwIGNlbnRlci12aFwiPjxzdmcgY2xhc3M9XCJzcGlubmVyLWNpcmNsZS1tYXRlcmlhbC1zdmdcIiB2aWV3Qm94PVwiMCAwIDUwIDUwXCI+PGNpcmNsZSBjbGFzcz1cImNpcmNsZVwiIGN4PVwiMjVcIiBjeT1cIjI1XCIgcj1cIjIwXCI+PC9zdmc+PC9kaXY+JyxcblxuICAgIGF1dG9EZXN0cm95OiB0cnVlLFxuXG4gICAgLy8gRXZlbnRzXG4gICAgb25TaG93OiBudWxsLFxuICAgIG9uU2hvd246IG51bGwsXG4gICAgb25IaWRlOiBudWxsLFxuICAgIG9uSGlkZGVuOiBudWxsLFxuICAgIG9uQ29uZmlybTogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcblxuICAgIC8vIFByaXZhdGUgb3B0aW9uc1xuICAgIG1vZGFsSWQ6IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIGd1aWQgKGxlbikge1xuICAgIGlmIChsZW4gPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZW4gPSA1XG4gICAgfVxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgbGVuKVxuICB9XG5cblxuICBtb2RhbGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc2V0dGluZyA9ICQuZXh0ZW5kKHt9LCBjb25maWdNb2RhbGVyLCBvcHRpb25zKVxuXG4gICAgaWYgKHNldHRpbmcubW9kYWxJZCkge1xuICAgICAgJCgnIycgKyBzZXR0aW5nLm1vZGFsSWQpLm1vZGFsKCdzaG93JylcbiAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgdmFyIGlkID0gJ21vZGFsLScgKyBndWlkKClcblxuXG4gICAgdmFyIGhhbmRsZUNhbGxiYWNrID0gZnVuY3Rpb24gKGlkKSB7XG5cbiAgICAgIC8vIEJvb3RzdHJhcCBtb2RhbCBldmVudHNcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy5vblNob3cpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vc2V0dGluZy5vblNob3coKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHNldHRpbmcub25TaG93bikge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vc2V0dGluZy5vblNob3duKCk7XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGlmIChzZXR0aW5nLm9uSGlkZSkge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZS5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgc2V0dGluZy5vbkhpZGUoKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0dGluZy5vbkhpZGRlbikge1xuICAgICAgICAkKCcjJyArIGlkKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uSGlkZGVuKClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgICAvLyBIYW5kbGUgY29uZmlybSBjYWxsYmFja1xuICAgICAgLy9cbiAgICAgICQoJyMnICsgaWQpLmZpbmQoJ1tkYXRhLXBlcmZvcm09XCJjb25maXJtXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIEhhc24ndCBzZXRcbiAgICAgICAgaWYgKHNldHRpbmcub25Db25maXJtID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKCQuaXNGdW5jdGlvbihzZXR0aW5nLm9uQ29uZmlybSkpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uQ29uZmlybSgkKCcjJyArIGlkKSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElzIHN0cmluZyB2YWx1ZSwgc28gY2FsbCBpdFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNvbmZpcm0uc3Vic3RyaW5nKSB7XG4gICAgICAgICAgYXBwLmNhbGwoc2V0dGluZy5vbkNvbmZpcm0sICQoJyMnICsgaWQpKVxuICAgICAgICB9XG5cbiAgICAgIH0pXG5cblxuICAgICAgLy8gSGFuZGxlIGNhbmNlbCBjYWxsYmFja1xuICAgICAgLy9cbiAgICAgICQoJyMnICsgaWQpLmZpbmQoJ1tkYXRhLXBlcmZvcm09XCJjYW5jZWxcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gSGFzbid0IHNldFxuICAgICAgICBpZiAoc2V0dGluZy5vbkNhbmNlbCA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBJcyBhIGZ1bmN0aW9uXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oc2V0dGluZy5vbkNhbmNlbCkpIHtcbiAgICAgICAgICBzZXR0aW5nLm9uQ2FuY2VsKCQoJyMnICsgaWQpKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXMgc3RyaW5nIHZhbHVlLCBzbyBjYWxsIGl0XG4gICAgICAgIGlmIChzZXR0aW5nLm9uQ2FuY2VsLnN1YnN0cmluZykge1xuICAgICAgICAgIGFwcC5jYWxsKHNldHRpbmcub25DYW5jZWwsICQoJyMnICsgaWQpKVxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBXZSByZWNpZXZlIG1vZGFsIG1hcmt1cCBmcm9tIHVybFxuICAgIC8vXG4gICAgaWYgKHNldHRpbmcuaXNNb2RhbCkge1xuXG4gICAgICAkKCc8ZGl2PicpLmxvYWQoc2V0dGluZy51cmwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkKHRoaXMpLmZpbmQoJy5tb2RhbCcpLmF0dHIoJ2lkJywgaWQpLm91dGVySFRNTCgpKVxuXG4gICAgICAgICQoJyMnICsgaWQpLm1vZGFsKCdzaG93JylcbiAgICAgICAgJCgnIycgKyBpZCkub25lKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgLy90b2RvOiBhIGNvbmZpcm1lciAkKCcjJysgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykucGVyZmVjdFNjcm9sbGJhcigndXBkYXRlJyk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBEZXN0cm95IGFmdGVyIGNsb3NlXG4gICAgICAgIC8vXG4gICAgICAgIGlmIChzZXR0aW5nLmF1dG9EZXN0cm95KSB7XG4gICAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyMnICsgaWQpLnJlbW92ZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHNldHRpbmcudGhpcykuYXR0cignZGF0YS1tb2RhbC1pZCcsIGlkKVxuICAgICAgICB9XG5cblxuICAgICAgICBoYW5kbGVDYWxsYmFjayhpZClcbiAgICAgIH0pXG4gICAgfVxuXG5cblxuXG5cbiAgICAgIC8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBXZSBzaG91bGQgZGVzaWduIHRoZSBtb2RhbFxuICAgIC8vXG4gICAgZWxzZSB7XG5cbiAgICAgIHN3aXRjaCAoc2V0dGluZy5zaXplKSB7XG4gICAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgICBzZXR0aW5nLnNpemUgPSAnbW9kYWwtc20nXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlICdsZyc6XG4gICAgICAgICAgc2V0dGluZy5zaXplID0gJ21vZGFsLWxnJ1xuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy9zZXR0aW5nLnNpemUgPSAnJztcbiAgICAgIH1cblxuXG4gICAgICBpZiAoc2V0dGluZy50eXBlKSB7XG4gICAgICAgIHNldHRpbmcudHlwZSA9ICdtb2RhbC0nICsgc2V0dGluZy50eXBlXG4gICAgICB9XG5cblxuICAgICAgLy8gSGVhZGVyIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgaHRtbF9oZWFkZXIgPSAnJ1xuICAgICAgaWYgKHNldHRpbmcuaGVhZGVyVmlzaWJsZSkge1xuICAgICAgICBodG1sX2hlYWRlciArPVxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+IFxcXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJtb2RhbC10aXRsZVwiPicgKyBzZXR0aW5nLnRpdGxlICsgJzwvaDU+IFxcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPiBcXFxuICAgICAgICAgIDwvZGl2PidcbiAgICAgIH1cblxuXG4gICAgICAvLyBGb290ZXIgY29kZVxuICAgICAgLy9cbiAgICAgIHZhciBodG1sX2Zvb3RlciA9ICcnXG4gICAgICBpZiAoc2V0dGluZy5mb290ZXJWaXNpYmxlKSB7XG4gICAgICAgIGh0bWxfZm9vdGVyICs9ICc8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+J1xuXG4gICAgICAgIGlmIChzZXR0aW5nLmNhbmNlbFZpc2libGUpIHtcbiAgICAgICAgICBodG1sX2Zvb3RlciArPSAnPGJ1dHRvbiBjbGFzcz1cIicgKyBzZXR0aW5nLmNhbmNlbENsYXNzICsgJ1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1wZXJmb3JtPVwiY2FuY2VsXCI+JyArIHNldHRpbmcuY2FuY2VsVGV4dCArICc8L2J1dHRvbj4nXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2V0dGluZy5jb25maXJtVmlzaWJsZSkge1xuICAgICAgICAgIGh0bWxfZm9vdGVyICs9ICc8YnV0dG9uIGNsYXNzPVwiJyArIHNldHRpbmcuY29uZmlybUNsYXNzICsgJ1wiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgZGF0YS1wZXJmb3JtPVwiY29uZmlybVwiPicgKyBzZXR0aW5nLmNvbmZpcm1UZXh0ICsgJzwvYnV0dG9uPidcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWxfZm9vdGVyICs9ICc8L2Rpdj4nXG4gICAgICB9XG5cbiAgICAgIC8vIE1vZGFsIGNvZGVcbiAgICAgIC8vXG4gICAgICB2YXIgbW9kYWxfaHRtbCA9XG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZSAnICsgc2V0dGluZy50eXBlICsgJ1wiIGlkPVwiJyArIGlkICsgJ1wiIHRhYmluZGV4PVwiLTFcIicgKyAoIXNldHRpbmcuYmFja2Ryb3AgPyAnIGRhdGEtYmFja2Ryb3A9XCJmYWxzZVwiJyA6ICcnKSArICc+IFxcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nICcgKyBzZXR0aW5nLnNpemUgKyAnXCI+IFxcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+IFxcXG4gICAgICAgICAgICAgICAgJyArIGh0bWxfaGVhZGVyICsgJyBcXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5ICcgKyBzZXR0aW5nLmJvZHlFeHRyYUNsYXNzICsgJ1wiPiBcXFxuICAgICAgICAgICAgICAgICAgJyArIHNldHRpbmcuc3Bpbm5lciArICcgXFxcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXFxcbiAgICAgICAgICAgICAgICAnICsgaHRtbF9mb290ZXIgKyAnIFxcXG4gICAgICAgICAgICAgIDwvZGl2PiBcXFxuICAgICAgICAgICAgPC9kaXY+IFxcXG4gICAgICAgICAgPC9kaXY+J1xuXG5cbiAgICAgIC8vIFNob3cgbW9kYWxcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQobW9kYWxfaHRtbClcbiAgICAgICQoJyMnICsgaWQpLm1vZGFsKCdzaG93JylcblxuXG4gICAgICAvLyBEZXN0cm95IGFmdGVyIGNsb3NlXG4gICAgICAvL1xuICAgICAgaWYgKHNldHRpbmcuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgJCgnIycgKyBpZCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKCcjJyArIGlkKS5yZW1vdmUoKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChzZXR0aW5nLnRoaXMpLmF0dHIoJ2RhdGEtbW9kYWwtaWQnLCBpZClcbiAgICAgIH1cblxuXG4gICAgICAvLyBMb2FkIGRhdGEgaW50byB0aGUgbW9kYWxcbiAgICAgIC8vXG4gICAgICBpZiAoc2V0dGluZy51cmwpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5sb2FkKHNldHRpbmcudXJsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy90b2RvOiBhIGNvbmZpcm1lciAkKHRoaXMpLnBlcmZlY3RTY3JvbGxiYXIoJ3VwZGF0ZScpO1xuICAgICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChzZXR0aW5nLmh0bWwpIHtcbiAgICAgICAgJCgnIycgKyBpZCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHNldHRpbmcuaHRtbClcbiAgICAgICAgaGFuZGxlQ2FsbGJhY2soaWQpXG4gICAgICB9IGVsc2UgaWYgKHNldHRpbmcudGFyZ2V0KSB7XG4gICAgICAgICQoJyMnICsgaWQpLmZpbmQoJy5tb2RhbC1ib2R5JykuaHRtbCgkKHNldHRpbmcudGFyZ2V0KS5odG1sKCkpXG4gICAgICAgIGhhbmRsZUNhbGxiYWNrKGlkKVxuICAgICAgfVxuICAgIH1cbiAgfVxufShqUXVlcnkpXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvanMvc2VhcmNoLmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjYvMDkvMjAyMCAxODoxOFxuXG4kKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI3NlYXJjaCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgY29uc3Qga2V5d29yZCA9ICQodGhpcykudmFsKClcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQgPSAkKCcjc2VhcmNoX3JlcG9uc2VfZXR1ZGlhbnQnKVxuICBjb25zdCBzZWFyY2hfcmVwb25zZV9wZXJzb25uZWwgPSAkKCcjc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsJylcbiAgY29uc3Qgc2VhcmNoX3JlcG9uc2VfYXV0cmUgPSAkKCcjc2VhcmNoX3JlcG9uc2VfYXV0cmUnKVxuXG4gIGlmIChrZXl3b3JkLmxlbmd0aCA+IDIpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiBSb3V0aW5nLmdlbmVyYXRlKCdyZWNoZXJjaGUnLCB7a2V5d29yZDoga2V5d29yZH0pLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCBodG1sID0gJydcbiAgICAgICAgaWYgKGRhdGEuZXR1ZGlhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLmV0dWRpYW50cywgZnVuY3Rpb24gKGluZGV4LCBldHVkaWFudCkge1xuICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGEgY2xhc3M9XCJtZWRpYVwiIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgndXNlcl9wcm9maWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdldHVkaWFudCcsXG4gICAgICAgICAgICAgIHNsdWc6IGV0dWRpYW50LnNsdWdcbiAgICAgICAgICAgIH0pICsgJ1wiIHRhcmdldD1cIl9ibGFua1wiPlxcbidcbiAgICAgICAgICAgIGlmIChldHVkaWFudC5waG90byA9PT0gJ25vaW1hZ2UucG5nJyB8fCBldHVkaWFudC5waG90byA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxkaXYgY2xhc3M9XCJhdmF0YXItY2lyY2xlLXNtXCI+XFxuJyArXG4gICAgICAgICAgICAgICAgJyAgICA8c3BhbiBjbGFzcz1cImluaXRpYWxzXCI+JyArIGV0dWRpYW50LmF2YXRhckluaXRpYWxlcyArICc8L3NwYW4+XFxuJyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxpbWcgY2xhc3M9XCJhdmF0YXIgYXZhdGFyLXNtXCIgc3JjPVwiJyArIGRhdGEuYmFzZXBhdGggKyAnZXR1ZGlhbnRzLycgKyBldHVkaWFudC5waG90byArICdcIiBhbHQ9XCJQaG90byBkZSBwcm9maWwgZGUgJyArIGV0dWRpYW50LmRpc3BsYXlQciArICdcIj5cXG4nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICcgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtYm9keVwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+JyArIGV0dWRpYW50LmRpc3BsYXlQciArICcgKCcgKyBldHVkaWFudC5zZW1lc3RyZSArICcpPC9zdHJvbmc+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4nICsgZXR1ZGlhbnQuZ3JvdXBlcyArICc8L3RpbWU+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuJyArXG4gICAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cblxuICAgICAgICBzZWFyY2hfcmVwb25zZV9ldHVkaWFudC5lbXB0eSgpLmFwcGVuZChodG1sKVxuXG4gICAgICAgIGh0bWwgPSAnJ1xuICAgICAgICBpZiAoZGF0YS5wZXJzb25uZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBqUXVlcnkuZWFjaChkYXRhLnBlcnNvbm5lbHMsIGZ1bmN0aW9uIChpbmRleCwgcGVyc29ubmVsKSB7XG4gICAgICAgICAgICBodG1sID0gaHRtbCArICc8YSBjbGFzcz1cIm1lZGlhIGl0ZW1zLWNlbnRlclwiIGhyZWY9XCInICsgUm91dGluZy5nZW5lcmF0ZSgndXNlcl9wcm9maWwnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICdwZXJzb25uZWwnLFxuICAgICAgICAgICAgICBzbHVnOiBwZXJzb25uZWwuc2x1Z1xuICAgICAgICAgICAgfSkgKyAnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XFxuJ1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbC5waG90byA9PT0gJ25vaW1hZ2UucG5nJyB8fCBwZXJzb25uZWwucGhvdG8gPT0gbnVsbCkge1xuICAgICAgICAgICAgICBodG1sID0gaHRtbCArICc8ZGl2IGNsYXNzPVwiYXZhdGFyLWNpcmNsZS1zbVwiPlxcbicgK1xuICAgICAgICAgICAgICAgICcgICAgPHNwYW4gY2xhc3M9XCJpbml0aWFsc1wiPicgKyBwZXJzb25uZWwuYXZhdGFySW5pdGlhbGVzICsgJzwvc3Bhbj5cXG4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaHRtbCA9IGh0bWwgKyAnPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCInICsgZGF0YS5iYXNlcGF0aCArICdwZXJzb25uZWxzLycgKyBwZXJzb25uZWwucGhvdG8gKyAnXCIgYWx0PVwiUGhvdG8gZGUgcHJvZmlsIGRlICcgKyBwZXJzb25uZWwuZGlzcGxheVByICsgJ1wiPlxcbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJyAgICAgICAgICAgICAgICAgICAgICAgIDxwPicgKyBwZXJzb25uZWwuZGlzcGxheVByICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJzwvYT4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sID0gJzxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC13YXJuaW5nXCI+UGFzIGRlIHLDqXN1bHRhdCBwb3VyIHZvdHJlIHJlY2hlcmNoZSA8c3Ryb25nPlwiJyArIGtleXdvcmQgKyAnXCI8L3N0cm9uZz48L2Rpdj4nXG4gICAgICAgIH1cbiAgICAgICAgc2VhcmNoX3JlcG9uc2VfcGVyc29ubmVsLmVtcHR5KCkuYXBwZW5kKGh0bWwpXG5cbiAgICAgICAgaHRtbCA9ICcnXG4gICAgICAgIGlmIChkYXRhLmF1dHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgalF1ZXJ5LmVhY2goZGF0YS5hdXRyZXMsIGZ1bmN0aW9uIChpbmRleCwgYXV0cmUpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sICsgJzxhIGNsYXNzPVwibWVkaWEgaXRlbXMtY2VudGVyXCIgaHJlZj1cIlwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImF2YXRhciBhdmF0YXItc21cIiBzcmM9XCIuLi9hc3NldHMvaW1nL2F2YXRhci8xLmpwZ1wiIGFsdD1cIi4uLlwiPlxcbicgK1xuICAgICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPHA+JyArIGF1dHJlICsgJzwvcD5cXG4nICtcbiAgICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9hPidcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj5QYXMgZGUgcsOpc3VsdGF0IHBvdXIgdm90cmUgcmVjaGVyY2hlIDxzdHJvbmc+XCInICsga2V5d29yZCArICdcIjwvc3Ryb25nPjwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICBzZWFyY2hfcmVwb25zZV9hdXRyZS5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIj5TYWlzaXIgYXUgbW9pbnMgMyBjYXJhY3TDqHJlczwvZGl2PidcbiAgICBzZWFyY2hfcmVwb25zZV9hdXRyZS5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgIHNlYXJjaF9yZXBvbnNlX3BlcnNvbm5lbC5lbXB0eSgpLmFwcGVuZChodG1sKVxuICAgIHNlYXJjaF9yZXBvbnNlX2V0dWRpYW50LmVtcHR5KCkuYXBwZW5kKGh0bWwpXG4gIH1cbn0pXG5cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy9qcy92YWxpZGF0b3ItYnM0LmpzXG4vLyBAYXV0aG9yIGRhdmlkYW5uZWJpY3F1ZVxuLy8gQHByb2plY3QgaW50cmFuZXRWM1xuLy8gQGxhc3RVcGRhdGUgMjgvMTEvMjAxOSAxOTo0MFxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFZBTElEQVRPUiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWUoJGVsKSB7XG4gICAgcmV0dXJuICRlbC5pcygnW3R5cGU9XCJjaGVja2JveFwiXScpID8gJGVsLnByb3AoJ2NoZWNrZWQnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICRlbC5pcygnW3R5cGU9XCJyYWRpb1wiXScpICAgID8gISEkKCdbbmFtZT1cIicgKyAkZWwuYXR0cignbmFtZScpICsgJ1wiXTpjaGVja2VkJykubGVuZ3RoIDpcbiAgICAgICAgICAgJGVsLmlzKCdzZWxlY3RbbXVsdGlwbGVdJykgID8gKCRlbC52YWwoKSB8fCBbXSkubGVuZ3RoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRlbC52YWwoKVxuICB9XG5cbiAgdmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zICAgID0gb3B0aW9uc1xuICAgIHRoaXMudmFsaWRhdG9ycyA9ICQuZXh0ZW5kKHt9LCBWYWxpZGF0b3IuVkFMSURBVE9SUywgb3B0aW9ucy5jdXN0b20pXG4gICAgdGhpcy4kZWxlbWVudCAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGJ0biAgICAgICA9ICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdLCBpbnB1dFt0eXBlPVwic3VibWl0XCJdJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoJ1tmb3JtPVwiJyArIHRoaXMuJGVsZW1lbnQuYXR0cignaWQnKSArICdcIl0nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZCh0aGlzLiRlbGVtZW50LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdpbnB1dC5icy52YWxpZGF0b3IgY2hhbmdlLmJzLnZhbGlkYXRvciBmb2N1c291dC5icy52YWxpZGF0b3InLCAkLnByb3h5KHRoaXMub25JbnB1dCwgdGhpcykpXG4gICAgdGhpcy4kZWxlbWVudC5vbignc3VibWl0LmJzLnZhbGlkYXRvcicsICQucHJveHkodGhpcy5vblN1Ym1pdCwgdGhpcykpXG4gICAgdGhpcy4kZWxlbWVudC5vbigncmVzZXQuYnMudmFsaWRhdG9yJywgJC5wcm94eSh0aGlzLnJlc2V0LCB0aGlzKSlcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtbWF0Y2hdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgID0gJCh0aGlzKVxuICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGEtbWF0Y2gnKVxuXG4gICAgICAkKHRhcmdldCkub24oJ2lucHV0LmJzLnZhbGlkYXRvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGdldFZhbHVlKCR0aGlzKSAmJiAkdGhpcy50cmlnZ2VyKCdpbnB1dC5icy52YWxpZGF0b3InKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gcnVuIHZhbGlkYXRvcnMgZm9yIGZpZWxkcyB3aXRoIHZhbHVlcywgYnV0IGRvbid0IGNsb2JiZXIgc2VydmVyLXNpZGUgZXJyb3JzXG4gICAgdGhpcy4kaW5wdXRzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2V0VmFsdWUoJCh0aGlzKSkgJiYgISQodGhpcykuY2xvc2VzdCgnLmhhcy1lcnJvcicpLmxlbmd0aFxuICAgIH0pLnRyaWdnZXIoJ2ZvY3Vzb3V0JylcblxuICAgIHRoaXMuJGVsZW1lbnQuYXR0cignbm92YWxpZGF0ZScsIHRydWUpIC8vIGRpc2FibGUgYXV0b21hdGljIG5hdGl2ZSB2YWxpZGF0aW9uXG4gIH1cblxuICBWYWxpZGF0b3IuVkVSU0lPTiA9ICcwLjExLjknXG5cbiAgVmFsaWRhdG9yLklOUFVUX1NFTEVDVE9SID0gJzppbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0sIFt0eXBlPVwic3VibWl0XCJdLCBbdHlwZT1cInJlc2V0XCJdLCBidXR0b24pJ1xuXG4gIFZhbGlkYXRvci5GT0NVU19PRkZTRVQgPSAyMFxuXG4gIFZhbGlkYXRvci5ERUZBVUxUUyA9IHtcbiAgICBkZWxheTogNTAwLFxuICAgIGh0bWw6IGZhbHNlLFxuICAgIGRpc2FibGU6IHRydWUsXG4gICAgZm9jdXM6IHRydWUsXG4gICAgY3VzdG9tOiB7fSxcbiAgICBlcnJvcnM6IHtcbiAgICAgIG1hdGNoOiAnRG9lcyBub3QgbWF0Y2gnLFxuICAgICAgbWlubGVuZ3RoOiAnTm90IGxvbmcgZW5vdWdoJ1xuICAgIH0sXG4gICAgZmVlZGJhY2s6IHtcbiAgICAgIHN1Y2Nlc3M6ICdnbHlwaGljb24tb2snLFxuICAgICAgZXJyb3I6ICdnbHlwaGljb24tcmVtb3ZlJ1xuICAgIH1cbiAgfVxuXG4gIFZhbGlkYXRvci5WQUxJREFUT1JTID0ge1xuICAgICduYXRpdmUnOiBmdW5jdGlvbiAoJGVsKSB7XG4gICAgICB2YXIgZWwgPSAkZWxbMF1cbiAgICAgIGlmIChlbC5jaGVja1ZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVybiAhZWwuY2hlY2tWYWxpZGl0eSgpICYmICFlbC52YWxpZGl0eS52YWxpZCAmJiAoZWwudmFsaWRhdGlvbk1lc3NhZ2UgfHwgXCJlcnJvciFcIilcbiAgICAgIH1cbiAgICB9LFxuICAgICdtYXRjaCc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkZWwuYXR0cignZGF0YS1tYXRjaCcpXG4gICAgICByZXR1cm4gJGVsLnZhbCgpICE9PSAkKHRhcmdldCkudmFsKCkgJiYgVmFsaWRhdG9yLkRFRkFVTFRTLmVycm9ycy5tYXRjaFxuICAgIH0sXG4gICAgJ21pbmxlbmd0aCc6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBtaW5sZW5ndGggPSAkZWwuYXR0cignZGF0YS1taW5sZW5ndGgnKVxuICAgICAgcmV0dXJuICRlbC52YWwoKS5sZW5ndGggPCBtaW5sZW5ndGggJiYgVmFsaWRhdG9yLkRFRkFVTFRTLmVycm9ycy5taW5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgIHRoaXMuJGlucHV0cyA9IHRoaXMuJGVsZW1lbnQuZmluZChWYWxpZGF0b3IuSU5QVVRfU0VMRUNUT1IpXG4gICAgICAuYWRkKHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdmFsaWRhdGU9XCJ0cnVlXCJdJykpXG4gICAgICAubm90KHRoaXMuJGVsZW1lbnQuZmluZCgnW2RhdGEtdmFsaWRhdGU9XCJmYWxzZVwiXScpXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uICgpIHsgc2VsZi5jbGVhckVycm9ycygkKHRoaXMpKSB9KVxuICAgICAgKVxuXG4gICAgdGhpcy50b2dnbGVTdWJtaXQoKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUub25JbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNlbGYgICAgICAgID0gdGhpc1xuICAgIHZhciAkZWwgICAgICAgICA9ICQoZS50YXJnZXQpXG4gICAgdmFyIGRlZmVyRXJyb3JzID0gZS50eXBlICE9PSAnZm9jdXNvdXQnXG5cbiAgICBpZiAoIXRoaXMuJGlucHV0cy5pcygkZWwpKSByZXR1cm5cblxuICAgIHRoaXMudmFsaWRhdGVJbnB1dCgkZWwsIGRlZmVyRXJyb3JzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYudG9nZ2xlU3VibWl0KClcbiAgICB9KVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZUlucHV0ID0gZnVuY3Rpb24gKCRlbCwgZGVmZXJFcnJvcnMpIHtcbiAgICB2YXIgdmFsdWUgICAgICA9IGdldFZhbHVlKCRlbClcbiAgICB2YXIgcHJldkVycm9ycyA9ICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJylcblxuICAgIGlmICgkZWwuaXMoJ1t0eXBlPVwicmFkaW9cIl0nKSkgJGVsID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbnB1dFtuYW1lPVwiJyArICRlbC5hdHRyKCduYW1lJykgKyAnXCJdJylcblxuICAgIHZhciBlID0gJC5FdmVudCgndmFsaWRhdGUuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXX0pXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG4gICAgaWYgKGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHJldHVyblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgICByZXR1cm4gdGhpcy5ydW5WYWxpZGF0b3JzKCRlbCkuZG9uZShmdW5jdGlvbiAoZXJyb3JzKSB7XG4gICAgICAkZWwuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycsIGVycm9ycylcblxuICAgICAgZXJyb3JzLmxlbmd0aFxuICAgICAgICA/IGRlZmVyRXJyb3JzID8gc2VsZi5kZWZlcigkZWwsIHNlbGYuc2hvd0Vycm9ycykgOiBzZWxmLnNob3dFcnJvcnMoJGVsKVxuICAgICAgICA6IHNlbGYuY2xlYXJFcnJvcnMoJGVsKVxuXG4gICAgICBpZiAoIXByZXZFcnJvcnMgfHwgZXJyb3JzLnRvU3RyaW5nKCkgIT09IHByZXZFcnJvcnMudG9TdHJpbmcoKSkge1xuICAgICAgICBlID0gZXJyb3JzLmxlbmd0aFxuICAgICAgICAgID8gJC5FdmVudCgnaW52YWxpZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdLCBkZXRhaWw6IGVycm9yc30pXG4gICAgICAgICAgOiAkLkV2ZW50KCd2YWxpZC5icy52YWxpZGF0b3InLCB7cmVsYXRlZFRhcmdldDogJGVsWzBdLCBkZXRhaWw6IHByZXZFcnJvcnN9KVxuXG4gICAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcihlKVxuICAgICAgfVxuXG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG5cbiAgICAgIHNlbGYuJGVsZW1lbnQudHJpZ2dlcigkLkV2ZW50KCd2YWxpZGF0ZWQuYnMudmFsaWRhdG9yJywge3JlbGF0ZWRUYXJnZXQ6ICRlbFswXX0pKVxuICAgIH0pXG4gIH1cblxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUucnVuVmFsaWRhdG9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgZXJyb3JzICAgPSBbXVxuICAgIHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKVxuXG4gICAgJGVsLmRhdGEoJ2JzLnZhbGlkYXRvci5kZWZlcnJlZCcpICYmICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnKS5yZWplY3QoKVxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZGVmZXJyZWQnLCBkZWZlcnJlZClcblxuICAgIGZ1bmN0aW9uIGdldFZhbGlkYXRvclNwZWNpZmljRXJyb3Ioa2V5KSB7XG4gICAgICByZXR1cm4gJGVsLmF0dHIoJ2RhdGEtJyArIGtleSArICctZXJyb3InKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZhbGlkaXR5U3RhdGVFcnJvcigpIHtcbiAgICAgIHZhciB2YWxpZGl0eSA9ICRlbFswXS52YWxpZGl0eVxuICAgICAgcmV0dXJuIHZhbGlkaXR5LnR5cGVNaXNtYXRjaCAgICA/ICRlbC5hdHRyKCdkYXRhLXR5cGUtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCA/ICRlbC5hdHRyKCdkYXRhLXBhdHRlcm4tZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnN0ZXBNaXNtYXRjaCAgICA/ICRlbC5hdHRyKCdkYXRhLXN0ZXAtZXJyb3InKVxuICAgICAgICAgICA6IHZhbGlkaXR5LnJhbmdlT3ZlcmZsb3cgICA/ICRlbC5hdHRyKCdkYXRhLW1heC1lcnJvcicpXG4gICAgICAgICAgIDogdmFsaWRpdHkucmFuZ2VVbmRlcmZsb3cgID8gJGVsLmF0dHIoJ2RhdGEtbWluLWVycm9yJylcbiAgICAgICAgICAgOiB2YWxpZGl0eS52YWx1ZU1pc3NpbmcgICAgPyAkZWwuYXR0cignZGF0YS1yZXF1aXJlZC1lcnJvcicpXG4gICAgICAgICAgIDogICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdlbmVyaWNFcnJvcigpIHtcbiAgICAgIHJldHVybiAkZWwuYXR0cignZGF0YS1lcnJvcicpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGtleSkge1xuICAgICAgcmV0dXJuIGdldFZhbGlkYXRvclNwZWNpZmljRXJyb3Ioa2V5KVxuICAgICAgICAgIHx8IGdldFZhbGlkaXR5U3RhdGVFcnJvcigpXG4gICAgICAgICAgfHwgZ2V0R2VuZXJpY0Vycm9yKClcbiAgICB9XG5cbiAgICAkLmVhY2godGhpcy52YWxpZGF0b3JzLCAkLnByb3h5KGZ1bmN0aW9uIChrZXksIHZhbGlkYXRvcikge1xuICAgICAgdmFyIGVycm9yID0gbnVsbFxuICAgICAgaWYgKChnZXRWYWx1ZSgkZWwpIHx8ICRlbC5hdHRyKCdyZXF1aXJlZCcpKSAmJlxuICAgICAgICAgICgkZWwuYXR0cignZGF0YS0nICsga2V5KSAhPT0gdW5kZWZpbmVkIHx8IGtleSA9PSAnbmF0aXZlJykgJiZcbiAgICAgICAgICAoZXJyb3IgPSB2YWxpZGF0b3IuY2FsbCh0aGlzLCAkZWwpKSkge1xuICAgICAgICAgZXJyb3IgPSBnZXRFcnJvck1lc3NhZ2Uoa2V5KSB8fCBlcnJvclxuICAgICAgICAhfmVycm9ycy5pbmRleE9mKGVycm9yKSAmJiBlcnJvcnMucHVzaChlcnJvcilcbiAgICAgIH1cbiAgICB9LCB0aGlzKSlcblxuICAgIGlmICghZXJyb3JzLmxlbmd0aCAmJiBnZXRWYWx1ZSgkZWwpICYmICRlbC5hdHRyKCdkYXRhLXJlbW90ZScpKSB7XG4gICAgICB0aGlzLmRlZmVyKCRlbCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHt9XG4gICAgICAgIGRhdGFbJGVsLmF0dHIoJ25hbWUnKV0gPSBnZXRWYWx1ZSgkZWwpXG4gICAgICAgICQuZ2V0KCRlbC5hdHRyKCdkYXRhLXJlbW90ZScpLCBkYXRhKVxuICAgICAgICAgIC5mYWlsKGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3IpIHsgZXJyb3JzLnB1c2goZ2V0RXJyb3JNZXNzYWdlKCdyZW1vdGUnKSB8fCBlcnJvcikgfSlcbiAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uICgpIHsgZGVmZXJyZWQucmVzb2x2ZShlcnJvcnMpfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIGRlZmVycmVkLnJlc29sdmUoZXJyb3JzKVxuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgICQud2hlbih0aGlzLiRpbnB1dHMubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIHNlbGYudmFsaWRhdGVJbnB1dCgkKHRoaXMpLCBmYWxzZSlcbiAgICB9KSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRvZ2dsZVN1Ym1pdCgpXG4gICAgICBzZWxmLmZvY3VzRXJyb3IoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5mb2N1c0Vycm9yID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmZvY3VzKSByZXR1cm5cblxuICAgIHZhciAkaW5wdXQgPSB0aGlzLiRlbGVtZW50LmZpbmQoXCIuaGFzLWVycm9yOmZpcnN0IDppbnB1dFwiKVxuICAgIGlmICgkaW5wdXQubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRpbnB1dC5vZmZzZXQoKS50b3AgLSBWYWxpZGF0b3IuRk9DVVNfT0ZGU0VUfSwgMjUwKVxuICAgICRpbnB1dC5mb2N1cygpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLnNob3dFcnJvcnMgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgdmFyIG1ldGhvZCA9IHRoaXMub3B0aW9ucy5odG1sID8gJ2h0bWwnIDogJ3RleHQnXG4gICAgdmFyIGVycm9ycyA9ICRlbC5kYXRhKCdicy52YWxpZGF0b3IuZXJyb3JzJylcbiAgICB2YXIgJGdyb3VwID0gJGVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICB2YXIgJGJsb2NrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICB2YXIgJGZlZWRiYWNrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcblxuICAgIGlmICghZXJyb3JzLmxlbmd0aCkgcmV0dXJuXG5cbiAgICAkZWwuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKTtcblxuICAgIGVycm9ycyA9ICQoJzx1bC8+JylcbiAgICAgIC5hZGRDbGFzcygnbGlzdC11bnN0eWxlZCcpXG4gICAgICAuYXBwZW5kKCQubWFwKGVycm9ycywgZnVuY3Rpb24gKGVycm9yKSB7IHJldHVybiAkKCc8bGkvPicpW21ldGhvZF0oZXJyb3IpIH0pKVxuXG4gICAgJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKSA9PT0gdW5kZWZpbmVkICYmICRibG9jay5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JywgJGJsb2NrLmh0bWwoKSlcbiAgICAkYmxvY2suZW1wdHkoKS5hcHBlbmQoZXJyb3JzKVxuICAgICRncm91cC5hZGRDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXInKVxuXG4gICAgJGdyb3VwLmhhc0NsYXNzKCdoYXMtZmVlZGJhY2snKVxuICAgICAgJiYgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5zdWNjZXNzKVxuICAgICAgJiYgJGZlZWRiYWNrLmFkZENsYXNzKHRoaXMub3B0aW9ucy5mZWVkYmFjay5lcnJvcilcbiAgICAgICYmICRncm91cC5yZW1vdmVDbGFzcygnaGFzLXN1Y2Nlc3MnKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5jbGVhckVycm9ycyA9IGZ1bmN0aW9uICgkZWwpIHtcbiAgICB2YXIgJGdyb3VwID0gJGVsLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylcbiAgICB2YXIgJGJsb2NrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICB2YXIgJGZlZWRiYWNrID0gJGdyb3VwLmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcblxuICAgICRlbC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpO1xuXG4gICAgJGJsb2NrLmh0bWwoJGJsb2NrLmRhdGEoJ2JzLnZhbGlkYXRvci5vcmlnaW5hbENvbnRlbnQnKSlcbiAgICAkZ3JvdXAucmVtb3ZlQ2xhc3MoJ2hhcy1lcnJvciBoYXMtZGFuZ2VyIGhhcy1zdWNjZXNzJylcblxuICAgICRncm91cC5oYXNDbGFzcygnaGFzLWZlZWRiYWNrJylcbiAgICAgICYmICRmZWVkYmFjay5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAmJiAkZmVlZGJhY2sucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiBnZXRWYWx1ZSgkZWwpXG4gICAgICAmJiAkZmVlZGJhY2suYWRkQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG4gICAgICAmJiAkZ3JvdXAuYWRkQ2xhc3MoJ2hhcy1zdWNjZXNzJylcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuaGFzRXJyb3JzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGZpZWxkRXJyb3JzKCkge1xuICAgICAgcmV0dXJuICEhKCQodGhpcykuZGF0YSgnYnMudmFsaWRhdG9yLmVycm9ycycpIHx8IFtdKS5sZW5ndGhcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLiRpbnB1dHMuZmlsdGVyKGZpZWxkRXJyb3JzKS5sZW5ndGhcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuaXNJbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGZpZWxkSW5jb21wbGV0ZSgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKCQodGhpcykpXG4gICAgICByZXR1cm4gISh0eXBlb2YgdmFsdWUgPT0gXCJzdHJpbmdcIiA/ICQudHJpbSh2YWx1ZSkgOiB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gISF0aGlzLiRpbnB1dHMuZmlsdGVyKCdbcmVxdWlyZWRdJykuZmlsdGVyKGZpZWxkSW5jb21wbGV0ZSkubGVuZ3RoXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICB0aGlzLnZhbGlkYXRlKClcbiAgICBpZiAodGhpcy5pc0luY29tcGxldGUoKSB8fCB0aGlzLmhhc0Vycm9ycygpKSBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUudG9nZ2xlU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmRpc2FibGUpIHJldHVyblxuICAgIHRoaXMuJGJ0bi50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCB0aGlzLmlzSW5jb21wbGV0ZSgpIHx8IHRoaXMuaGFzRXJyb3JzKCkpXG4gIH1cblxuICBWYWxpZGF0b3IucHJvdG90eXBlLmRlZmVyID0gZnVuY3Rpb24gKCRlbCwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9ICQucHJveHkoY2FsbGJhY2ssIHRoaXMsICRlbClcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWxheSkgcmV0dXJuIGNhbGxiYWNrKClcbiAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KCRlbC5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpKVxuICAgICRlbC5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcsIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLm9wdGlvbnMuZGVsYXkpKVxuICB9XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5pbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZmVlZGJhY2suZXJyb3IpXG4gICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmZlZWRiYWNrLnN1Y2Nlc3MpXG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5yZW1vdmVEYXRhKFsnYnMudmFsaWRhdG9yLmVycm9ycycsICdicy52YWxpZGF0b3IuZGVmZXJyZWQnXSlcbiAgICAgIC5yZW1vdmVDbGFzcygnaXMtaW52YWxpZCcpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcylcbiAgICAgICAgdmFyIHRpbWVvdXQgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3IudGltZW91dCcpXG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dCkgJiYgJHRoaXMucmVtb3ZlRGF0YSgnYnMudmFsaWRhdG9yLnRpbWVvdXQnKVxuICAgICAgfSlcblxuICAgIHRoaXMuJGVsZW1lbnQuZmluZCgnLmludmFsaWQtZmVlZGJhY2snKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgIHZhciBvcmlnaW5hbENvbnRlbnQgPSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JylcblxuICAgICAgICAkdGhpc1xuICAgICAgICAgIC5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3Iub3JpZ2luYWxDb250ZW50JylcbiAgICAgICAgICAuaHRtbChvcmlnaW5hbENvbnRlbnQpXG4gICAgICB9KVxuXG4gICAgdGhpcy4kYnRuLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpXG5cbiAgICB0aGlzLiRlbGVtZW50LmZpbmQoJy5oYXMtZXJyb3IsIC5oYXMtZGFuZ2VyLCAuaGFzLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnaGFzLWVycm9yIGhhcy1kYW5nZXIgaGFzLXN1Y2Nlc3MnKVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIFZhbGlkYXRvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlc2V0KClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVBdHRyKCdub3ZhbGlkYXRlJylcbiAgICAgIC5yZW1vdmVEYXRhKCdicy52YWxpZGF0b3InKVxuICAgICAgLm9mZignLmJzLnZhbGlkYXRvcicpXG5cbiAgICB0aGlzLiRpbnB1dHNcbiAgICAgIC5vZmYoJy5icy52YWxpZGF0b3InKVxuXG4gICAgdGhpcy5vcHRpb25zICAgID0gbnVsbFxuICAgIHRoaXMudmFsaWRhdG9ycyA9IG51bGxcbiAgICB0aGlzLiRlbGVtZW50ICAgPSBudWxsXG4gICAgdGhpcy4kYnRuICAgICAgID0gbnVsbFxuICAgIHRoaXMuJGlucHV0cyAgICA9IG51bGxcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBWQUxJREFUT1IgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIFZhbGlkYXRvci5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMudmFsaWRhdG9yJylcblxuICAgICAgaWYgKCFkYXRhICYmIG9wdGlvbiA9PSAnZGVzdHJveScpIHJldHVyblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy52YWxpZGF0b3InLCAoZGF0YSA9IG5ldyBWYWxpZGF0b3IodGhpcywgb3B0aW9ucykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnZhbGlkYXRvclxuXG4gICQuZm4udmFsaWRhdG9yICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4udmFsaWRhdG9yLkNvbnN0cnVjdG9yID0gVmFsaWRhdG9yXG5cblxuICAvLyBWQUxJREFUT1IgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi52YWxpZGF0b3Iubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnZhbGlkYXRvciA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFZBTElEQVRPUiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PT09PT1cblxuICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnZm9ybVtkYXRhLXRvZ2dsZT1cInZhbGlkYXRvclwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRmb3JtID0gJCh0aGlzKVxuICAgICAgUGx1Z2luLmNhbGwoJGZvcm0sICRmb3JtLmRhdGEoKSlcbiAgICB9KVxuICB9KVxuXG59KGpRdWVyeSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAuIHwgRGF2aWQgQW5uZWJpY3F1ZSB8IElVVCBkZSBUcm95ZXMgIC0gQWxsIFJpZ2h0cyBSZXNlcnZlZFxuLy8gQGZpbGUgL1VzZXJzL2RhdmlkYW5uZWJpY3F1ZS9odGRvY3MvaW50cmFuZXRWMy9hc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC1kYXRlcGlja2VyL2pzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLm1pbi5qc1xuLy8gQGF1dGhvciBkYXZpZGFubmViaWNxdWVcbi8vIEBwcm9qZWN0IGludHJhbmV0VjNcbi8vIEBsYXN0VXBkYXRlIDE3LzA4LzIwMjAgMTQ6MjBcblxuLyohXG4gKiBEYXRlcGlja2VyIGZvciBCb290c3RyYXAgdjEuOC4wIChodHRwczovL2dpdGh1Yi5jb20vdXhzb2x1dGlvbnMvYm9vdHN0cmFwLWRhdGVwaWNrZXIpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlIHYyLjAgKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMClcbiAqL1xuXG4hZnVuY3Rpb24oYSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJqcXVlcnlcIl0sYSk6YShcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9yZXF1aXJlKFwianF1ZXJ5XCIpOmpRdWVyeSl9KGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYygpe3JldHVybiBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShEYXRlLGFyZ3VtZW50cykpfWZ1bmN0aW9uIGQoKXt2YXIgYT1uZXcgRGF0ZTtyZXR1cm4gYyhhLmdldEZ1bGxZZWFyKCksYS5nZXRNb250aCgpLGEuZ2V0RGF0ZSgpKX1mdW5jdGlvbiBlKGEsYil7cmV0dXJuIGEuZ2V0VVRDRnVsbFllYXIoKT09PWIuZ2V0VVRDRnVsbFllYXIoKSYmYS5nZXRVVENNb250aCgpPT09Yi5nZXRVVENNb250aCgpJiZhLmdldFVUQ0RhdGUoKT09PWIuZ2V0VVRDRGF0ZSgpfWZ1bmN0aW9uIGYoYyxkKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZCE9PWImJmEuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkKGQpLHRoaXNbY10uYXBwbHkodGhpcyxhcmd1bWVudHMpfX1mdW5jdGlvbiBnKGEpe3JldHVybiBhJiYhaXNOYU4oYS5nZXRUaW1lKCkpfWZ1bmN0aW9uIGgoYixjKXtmdW5jdGlvbiBkKGEsYil7cmV0dXJuIGIudG9Mb3dlckNhc2UoKX12YXIgZSxmPWEoYikuZGF0YSgpLGc9e30saD1uZXcgUmVnRXhwKFwiXlwiK2MudG9Mb3dlckNhc2UoKStcIihbQS1aXSlcIik7Yz1uZXcgUmVnRXhwKFwiXlwiK2MudG9Mb3dlckNhc2UoKSk7Zm9yKHZhciBpIGluIGYpYy50ZXN0KGkpJiYoZT1pLnJlcGxhY2UoaCxkKSxnW2VdPWZbaV0pO3JldHVybiBnfWZ1bmN0aW9uIGkoYil7dmFyIGM9e307aWYocVtiXXx8KGI9Yi5zcGxpdChcIi1cIilbMF0scVtiXSkpe3ZhciBkPXFbYl07cmV0dXJuIGEuZWFjaChwLGZ1bmN0aW9uKGEsYil7YiBpbiBkJiYoY1tiXT1kW2JdKX0pLGN9fXZhciBqPWZ1bmN0aW9uKCl7dmFyIGI9e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5zbGljZShhKVswXX0sY29udGFpbnM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEmJmEudmFsdWVPZigpLGM9MCxkPXRoaXMubGVuZ3RoO2M8ZDtjKyspaWYoMDw9dGhpc1tjXS52YWx1ZU9mKCktYiYmdGhpc1tjXS52YWx1ZU9mKCktYjw4NjRlNSlyZXR1cm4gYztyZXR1cm4tMX0scmVtb3ZlOmZ1bmN0aW9uKGEpe3RoaXMuc3BsaWNlKGEsMSl9LHJlcGxhY2U6ZnVuY3Rpb24oYil7YiYmKGEuaXNBcnJheShiKXx8KGI9W2JdKSx0aGlzLmNsZWFyKCksdGhpcy5wdXNoLmFwcGx5KHRoaXMsYikpfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMubGVuZ3RoPTB9LGNvcHk6ZnVuY3Rpb24oKXt2YXIgYT1uZXcgajtyZXR1cm4gYS5yZXBsYWNlKHRoaXMpLGF9fTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1bXTtyZXR1cm4gYy5wdXNoLmFwcGx5KGMsYXJndW1lbnRzKSxhLmV4dGVuZChjLGIpLGN9fSgpLGs9ZnVuY3Rpb24oYixjKXthLmRhdGEoYixcImRhdGVwaWNrZXJcIix0aGlzKSx0aGlzLl9wcm9jZXNzX29wdGlvbnMoYyksdGhpcy5kYXRlcz1uZXcgaix0aGlzLnZpZXdEYXRlPXRoaXMuby5kZWZhdWx0Vmlld0RhdGUsdGhpcy5mb2N1c0RhdGU9bnVsbCx0aGlzLmVsZW1lbnQ9YShiKSx0aGlzLmlzSW5wdXQ9dGhpcy5lbGVtZW50LmlzKFwiaW5wdXRcIiksdGhpcy5pbnB1dEZpZWxkPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQ6dGhpcy5lbGVtZW50LmZpbmQoXCJpbnB1dFwiKSx0aGlzLmNvbXBvbmVudD0hIXRoaXMuZWxlbWVudC5oYXNDbGFzcyhcImRhdGVcIikmJnRoaXMuZWxlbWVudC5maW5kKFwiLmFkZC1vbiwgLmlucHV0LWdyb3VwLWFkZG9uLCAuYnRuXCIpLHRoaXMuY29tcG9uZW50JiYwPT09dGhpcy5jb21wb25lbnQubGVuZ3RoJiYodGhpcy5jb21wb25lbnQ9ITEpLHRoaXMuaXNJbmxpbmU9IXRoaXMuY29tcG9uZW50JiZ0aGlzLmVsZW1lbnQuaXMoXCJkaXZcIiksdGhpcy5waWNrZXI9YShyLnRlbXBsYXRlKSx0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLmxlZnRBcnJvdykmJnRoaXMucGlja2VyLmZpbmQoXCIucHJldlwiKS5odG1sKHRoaXMuby50ZW1wbGF0ZXMubGVmdEFycm93KSx0aGlzLl9jaGVja190ZW1wbGF0ZSh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpJiZ0aGlzLnBpY2tlci5maW5kKFwiLm5leHRcIikuaHRtbCh0aGlzLm8udGVtcGxhdGVzLnJpZ2h0QXJyb3cpLHRoaXMuX2J1aWxkRXZlbnRzKCksdGhpcy5fYXR0YWNoRXZlbnRzKCksdGhpcy5pc0lubGluZT90aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItaW5saW5lXCIpLmFwcGVuZFRvKHRoaXMuZWxlbWVudCk6dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLWRyb3Bkb3duIGRyb3Bkb3duLW1lbnVcIiksdGhpcy5vLnJ0bCYmdGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLXJ0bFwiKSx0aGlzLm8uY2FsZW5kYXJXZWVrcyYmdGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoLCB0aGVhZCAuZGF0ZXBpY2tlci10aXRsZSwgdGZvb3QgLnRvZGF5LCB0Zm9vdCAuY2xlYXJcIikuYXR0cihcImNvbHNwYW5cIixmdW5jdGlvbihhLGIpe3JldHVybiBOdW1iZXIoYikrMX0pLHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOnRoaXMuX28uc3RhcnREYXRlLGVuZERhdGU6dGhpcy5fby5lbmREYXRlLGRheXNPZldlZWtEaXNhYmxlZDp0aGlzLm8uZGF5c09mV2Vla0Rpc2FibGVkLGRheXNPZldlZWtIaWdobGlnaHRlZDp0aGlzLm8uZGF5c09mV2Vla0hpZ2hsaWdodGVkLGRhdGVzRGlzYWJsZWQ6dGhpcy5vLmRhdGVzRGlzYWJsZWR9KSx0aGlzLl9hbGxvd191cGRhdGU9ITEsdGhpcy5zZXRWaWV3TW9kZSh0aGlzLm8uc3RhcnRWaWV3KSx0aGlzLl9hbGxvd191cGRhdGU9ITAsdGhpcy5maWxsRG93KCksdGhpcy5maWxsTW9udGhzKCksdGhpcy51cGRhdGUoKSx0aGlzLmlzSW5saW5lJiZ0aGlzLnNob3coKX07ay5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmssX3Jlc29sdmVWaWV3TmFtZTpmdW5jdGlvbihiKXtyZXR1cm4gYS5lYWNoKHIudmlld01vZGVzLGZ1bmN0aW9uKGMsZCl7aWYoYj09PWN8fGEuaW5BcnJheShiLGQubmFtZXMpIT09LTEpcmV0dXJuIGI9YywhMX0pLGJ9LF9yZXNvbHZlRGF5c09mV2VlazpmdW5jdGlvbihiKXtyZXR1cm4gYS5pc0FycmF5KGIpfHwoYj1iLnNwbGl0KC9bLFxcc10qLykpLGEubWFwKGIsTnVtYmVyKX0sX2NoZWNrX3RlbXBsYXRlOmZ1bmN0aW9uKGMpe3RyeXtpZihjPT09Ynx8XCJcIj09PWMpcmV0dXJuITE7aWYoKGMubWF0Y2goL1s8Pl0vZyl8fFtdKS5sZW5ndGg8PTApcmV0dXJuITA7dmFyIGQ9YShjKTtyZXR1cm4gZC5sZW5ndGg+MH1jYXRjaChhKXtyZXR1cm4hMX19LF9wcm9jZXNzX29wdGlvbnM6ZnVuY3Rpb24oYil7dGhpcy5fbz1hLmV4dGVuZCh7fSx0aGlzLl9vLGIpO3ZhciBlPXRoaXMubz1hLmV4dGVuZCh7fSx0aGlzLl9vKSxmPWUubGFuZ3VhZ2U7cVtmXXx8KGY9Zi5zcGxpdChcIi1cIilbMF0scVtmXXx8KGY9by5sYW5ndWFnZSkpLGUubGFuZ3VhZ2U9ZixlLnN0YXJ0Vmlldz10aGlzLl9yZXNvbHZlVmlld05hbWUoZS5zdGFydFZpZXcpLGUubWluVmlld01vZGU9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUubWluVmlld01vZGUpLGUubWF4Vmlld01vZGU9dGhpcy5fcmVzb2x2ZVZpZXdOYW1lKGUubWF4Vmlld01vZGUpLGUuc3RhcnRWaWV3PU1hdGgubWF4KHRoaXMuby5taW5WaWV3TW9kZSxNYXRoLm1pbih0aGlzLm8ubWF4Vmlld01vZGUsZS5zdGFydFZpZXcpKSxlLm11bHRpZGF0ZSE9PSEwJiYoZS5tdWx0aWRhdGU9TnVtYmVyKGUubXVsdGlkYXRlKXx8ITEsZS5tdWx0aWRhdGUhPT0hMSYmKGUubXVsdGlkYXRlPU1hdGgubWF4KDAsZS5tdWx0aWRhdGUpKSksZS5tdWx0aWRhdGVTZXBhcmF0b3I9U3RyaW5nKGUubXVsdGlkYXRlU2VwYXJhdG9yKSxlLndlZWtTdGFydCU9NyxlLndlZWtFbmQ9KGUud2Vla1N0YXJ0KzYpJTc7dmFyIGc9ci5wYXJzZUZvcm1hdChlLmZvcm1hdCk7ZS5zdGFydERhdGUhPT0tKDEvMCkmJihlLnN0YXJ0RGF0ZT9lLnN0YXJ0RGF0ZSBpbnN0YW5jZW9mIERhdGU/ZS5zdGFydERhdGU9dGhpcy5fbG9jYWxfdG9fdXRjKHRoaXMuX3plcm9fdGltZShlLnN0YXJ0RGF0ZSkpOmUuc3RhcnREYXRlPXIucGFyc2VEYXRlKGUuc3RhcnREYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpOmUuc3RhcnREYXRlPS0oMS8wKSksZS5lbmREYXRlIT09MS8wJiYoZS5lbmREYXRlP2UuZW5kRGF0ZSBpbnN0YW5jZW9mIERhdGU/ZS5lbmREYXRlPXRoaXMuX2xvY2FsX3RvX3V0Yyh0aGlzLl96ZXJvX3RpbWUoZS5lbmREYXRlKSk6ZS5lbmREYXRlPXIucGFyc2VEYXRlKGUuZW5kRGF0ZSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKTplLmVuZERhdGU9MS8wKSxlLmRheXNPZldlZWtEaXNhYmxlZD10aGlzLl9yZXNvbHZlRGF5c09mV2VlayhlLmRheXNPZldlZWtEaXNhYmxlZHx8W10pLGUuZGF5c09mV2Vla0hpZ2hsaWdodGVkPXRoaXMuX3Jlc29sdmVEYXlzT2ZXZWVrKGUuZGF5c09mV2Vla0hpZ2hsaWdodGVkfHxbXSksZS5kYXRlc0Rpc2FibGVkPWUuZGF0ZXNEaXNhYmxlZHx8W10sYS5pc0FycmF5KGUuZGF0ZXNEaXNhYmxlZCl8fChlLmRhdGVzRGlzYWJsZWQ9ZS5kYXRlc0Rpc2FibGVkLnNwbGl0KFwiLFwiKSksZS5kYXRlc0Rpc2FibGVkPWEubWFwKGUuZGF0ZXNEaXNhYmxlZCxmdW5jdGlvbihhKXtyZXR1cm4gci5wYXJzZURhdGUoYSxnLGUubGFuZ3VhZ2UsZS5hc3N1bWVOZWFyYnlZZWFyKX0pO3ZhciBoPVN0cmluZyhlLm9yaWVudGF0aW9uKS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9cXHMrL2cpLGk9ZS5vcmllbnRhdGlvbi50b0xvd2VyQ2FzZSgpO2lmKGg9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL15hdXRvfGxlZnR8cmlnaHR8dG9wfGJvdHRvbSQvLnRlc3QoYSl9KSxlLm9yaWVudGF0aW9uPXt4OlwiYXV0b1wiLHk6XCJhdXRvXCJ9LGkmJlwiYXV0b1wiIT09aSlpZigxPT09aC5sZW5ndGgpc3dpdGNoKGhbMF0pe2Nhc2VcInRvcFwiOmNhc2VcImJvdHRvbVwiOmUub3JpZW50YXRpb24ueT1oWzBdO2JyZWFrO2Nhc2VcImxlZnRcIjpjYXNlXCJyaWdodFwiOmUub3JpZW50YXRpb24ueD1oWzBdfWVsc2UgaT1hLmdyZXAoaCxmdW5jdGlvbihhKXtyZXR1cm4vXmxlZnR8cmlnaHQkLy50ZXN0KGEpfSksZS5vcmllbnRhdGlvbi54PWlbMF18fFwiYXV0b1wiLGk9YS5ncmVwKGgsZnVuY3Rpb24oYSl7cmV0dXJuL150b3B8Ym90dG9tJC8udGVzdChhKX0pLGUub3JpZW50YXRpb24ueT1pWzBdfHxcImF1dG9cIjtlbHNlO2lmKGUuZGVmYXVsdFZpZXdEYXRlIGluc3RhbmNlb2YgRGF0ZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUuZGVmYXVsdFZpZXdEYXRlKWUuZGVmYXVsdFZpZXdEYXRlPXIucGFyc2VEYXRlKGUuZGVmYXVsdFZpZXdEYXRlLGcsZS5sYW5ndWFnZSxlLmFzc3VtZU5lYXJieVllYXIpO2Vsc2UgaWYoZS5kZWZhdWx0Vmlld0RhdGUpe3ZhciBqPWUuZGVmYXVsdFZpZXdEYXRlLnllYXJ8fChuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKSxrPWUuZGVmYXVsdFZpZXdEYXRlLm1vbnRofHwwLGw9ZS5kZWZhdWx0Vmlld0RhdGUuZGF5fHwxO2UuZGVmYXVsdFZpZXdEYXRlPWMoaixrLGwpfWVsc2UgZS5kZWZhdWx0Vmlld0RhdGU9ZCgpfSxfZXZlbnRzOltdLF9zZWNvbmRhcnlFdmVudHM6W10sX2FwcGx5RXZlbnRzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkLGUsZj0wO2Y8YS5sZW5ndGg7ZisrKWM9YVtmXVswXSwyPT09YVtmXS5sZW5ndGg/KGQ9YixlPWFbZl1bMV0pOjM9PT1hW2ZdLmxlbmd0aCYmKGQ9YVtmXVsxXSxlPWFbZl1bMl0pLGMub24oZSxkKX0sX3VuYXBwbHlFdmVudHM6ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQsZSxmPTA7ZjxhLmxlbmd0aDtmKyspYz1hW2ZdWzBdLDI9PT1hW2ZdLmxlbmd0aD8oZT1iLGQ9YVtmXVsxXSk6Mz09PWFbZl0ubGVuZ3RoJiYoZT1hW2ZdWzFdLGQ9YVtmXVsyXSksYy5vZmYoZCxlKX0sX2J1aWxkRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIGI9e2tleXVwOmEucHJveHkoZnVuY3Rpb24oYil7YS5pbkFycmF5KGIua2V5Q29kZSxbMjcsMzcsMzksMzgsNDAsMzIsMTMsOV0pPT09LTEmJnRoaXMudXBkYXRlKCl9LHRoaXMpLGtleWRvd246YS5wcm94eSh0aGlzLmtleWRvd24sdGhpcykscGFzdGU6YS5wcm94eSh0aGlzLnBhc3RlLHRoaXMpfTt0aGlzLm8uc2hvd09uRm9jdXM9PT0hMCYmKGIuZm9jdXM9YS5wcm94eSh0aGlzLnNob3csdGhpcykpLHRoaXMuaXNJbnB1dD90aGlzLl9ldmVudHM9W1t0aGlzLmVsZW1lbnQsYl1dOnRoaXMuY29tcG9uZW50JiZ0aGlzLmlucHV0RmllbGQubGVuZ3RoP3RoaXMuX2V2ZW50cz1bW3RoaXMuaW5wdXRGaWVsZCxiXSxbdGhpcy5jb21wb25lbnQse2NsaWNrOmEucHJveHkodGhpcy5zaG93LHRoaXMpfV1dOnRoaXMuX2V2ZW50cz1bW3RoaXMuZWxlbWVudCx7Y2xpY2s6YS5wcm94eSh0aGlzLnNob3csdGhpcyksa2V5ZG93bjphLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKX1dXSx0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LFwiKlwiLHtibHVyOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5fZm9jdXNlZF9mcm9tPWEudGFyZ2V0fSx0aGlzKX1dLFt0aGlzLmVsZW1lbnQse2JsdXI6YS5wcm94eShmdW5jdGlvbihhKXt0aGlzLl9mb2N1c2VkX2Zyb209YS50YXJnZXR9LHRoaXMpfV0pLHRoaXMuby5pbW1lZGlhdGVVcGRhdGVzJiZ0aGlzLl9ldmVudHMucHVzaChbdGhpcy5lbGVtZW50LHtcImNoYW5nZVllYXIgY2hhbmdlTW9udGhcIjphLnByb3h5KGZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlKGEuZGF0ZSl9LHRoaXMpfV0pLHRoaXMuX3NlY29uZGFyeUV2ZW50cz1bW3RoaXMucGlja2VyLHtjbGljazphLnByb3h5KHRoaXMuY2xpY2ssdGhpcyl9XSxbdGhpcy5waWNrZXIsXCIucHJldiwgLm5leHRcIix7Y2xpY2s6YS5wcm94eSh0aGlzLm5hdkFycm93c0NsaWNrLHRoaXMpfV0sW3RoaXMucGlja2VyLFwiLmRheTpub3QoLmRpc2FibGVkKVwiLHtjbGljazphLnByb3h5KHRoaXMuZGF5Q2VsbENsaWNrLHRoaXMpfV0sW2Eod2luZG93KSx7cmVzaXplOmEucHJveHkodGhpcy5wbGFjZSx0aGlzKX1dLFthKGRvY3VtZW50KSx7XCJtb3VzZWRvd24gdG91Y2hzdGFydFwiOmEucHJveHkoZnVuY3Rpb24oYSl7dGhpcy5lbGVtZW50LmlzKGEudGFyZ2V0KXx8dGhpcy5lbGVtZW50LmZpbmQoYS50YXJnZXQpLmxlbmd0aHx8dGhpcy5waWNrZXIuaXMoYS50YXJnZXQpfHx0aGlzLnBpY2tlci5maW5kKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuaXNJbmxpbmV8fHRoaXMuaGlkZSgpfSx0aGlzKX1dXX0sX2F0dGFjaEV2ZW50czpmdW5jdGlvbigpe3RoaXMuX2RldGFjaEV2ZW50cygpLHRoaXMuX2FwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyl9LF9kZXRhY2hFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl91bmFwcGx5RXZlbnRzKHRoaXMuX2V2ZW50cyl9LF9hdHRhY2hTZWNvbmRhcnlFdmVudHM6ZnVuY3Rpb24oKXt0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLl9hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpfSxfZGV0YWNoU2Vjb25kYXJ5RXZlbnRzOmZ1bmN0aW9uKCl7dGhpcy5fdW5hcHBseUV2ZW50cyh0aGlzLl9zZWNvbmRhcnlFdmVudHMpfSxfdHJpZ2dlcjpmdW5jdGlvbihiLGMpe3ZhciBkPWN8fHRoaXMuZGF0ZXMuZ2V0KC0xKSxlPXRoaXMuX3V0Y190b19sb2NhbChkKTt0aGlzLmVsZW1lbnQudHJpZ2dlcih7dHlwZTpiLGRhdGU6ZSx2aWV3TW9kZTp0aGlzLnZpZXdNb2RlLGRhdGVzOmEubWFwKHRoaXMuZGF0ZXMsdGhpcy5fdXRjX3RvX2xvY2FsKSxmb3JtYXQ6YS5wcm94eShmdW5jdGlvbihhLGIpezA9PT1hcmd1bWVudHMubGVuZ3RoPyhhPXRoaXMuZGF0ZXMubGVuZ3RoLTEsYj10aGlzLm8uZm9ybWF0KTpcInN0cmluZ1wiPT10eXBlb2YgYSYmKGI9YSxhPXRoaXMuZGF0ZXMubGVuZ3RoLTEpLGI9Ynx8dGhpcy5vLmZvcm1hdDt2YXIgYz10aGlzLmRhdGVzLmdldChhKTtyZXR1cm4gci5mb3JtYXREYXRlKGMsYix0aGlzLm8ubGFuZ3VhZ2UpfSx0aGlzKX0pfSxzaG93OmZ1bmN0aW9uKCl7aWYoISh0aGlzLmlucHV0RmllbGQucHJvcChcImRpc2FibGVkXCIpfHx0aGlzLmlucHV0RmllbGQucHJvcChcInJlYWRvbmx5XCIpJiZ0aGlzLm8uZW5hYmxlT25SZWFkb25seT09PSExKSlyZXR1cm4gdGhpcy5pc0lubGluZXx8dGhpcy5waWNrZXIuYXBwZW5kVG8odGhpcy5vLmNvbnRhaW5lciksdGhpcy5wbGFjZSgpLHRoaXMucGlja2VyLnNob3coKSx0aGlzLl9hdHRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLl90cmlnZ2VyKFwic2hvd1wiKSwod2luZG93Lm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzfHxcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQpJiZ0aGlzLm8uZGlzYWJsZVRvdWNoS2V5Ym9hcmQmJmEodGhpcy5lbGVtZW50KS5ibHVyKCksdGhpc30saGlkZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzSW5saW5lfHwhdGhpcy5waWNrZXIuaXMoXCI6dmlzaWJsZVwiKT90aGlzOih0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMucGlja2VyLmhpZGUoKS5kZXRhY2goKSx0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLnNldFZpZXdNb2RlKHRoaXMuby5zdGFydFZpZXcpLHRoaXMuby5mb3JjZVBhcnNlJiZ0aGlzLmlucHV0RmllbGQudmFsKCkmJnRoaXMuc2V0VmFsdWUoKSx0aGlzLl90cmlnZ2VyKFwiaGlkZVwiKSx0aGlzKX0sZGVzdHJveTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmhpZGUoKSx0aGlzLl9kZXRhY2hFdmVudHMoKSx0aGlzLl9kZXRhY2hTZWNvbmRhcnlFdmVudHMoKSx0aGlzLnBpY2tlci5yZW1vdmUoKSxkZWxldGUgdGhpcy5lbGVtZW50LmRhdGEoKS5kYXRlcGlja2VyLHRoaXMuaXNJbnB1dHx8ZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZSx0aGlzfSxwYXN0ZTpmdW5jdGlvbihiKXt2YXIgYztpZihiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YSYmYi5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEudHlwZXMmJmEuaW5BcnJheShcInRleHQvcGxhaW5cIixiLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YS50eXBlcykhPT0tMSljPWIub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO2Vsc2V7aWYoIXdpbmRvdy5jbGlwYm9hcmREYXRhKXJldHVybjtjPXdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJUZXh0XCIpfXRoaXMuc2V0RGF0ZShjKSx0aGlzLnVwZGF0ZSgpLGIucHJldmVudERlZmF1bHQoKX0sX3V0Y190b19sb2NhbDpmdW5jdGlvbihhKXtpZighYSlyZXR1cm4gYTt2YXIgYj1uZXcgRGF0ZShhLmdldFRpbWUoKSs2ZTQqYS5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gYi5nZXRUaW1lem9uZU9mZnNldCgpIT09YS5nZXRUaW1lem9uZU9mZnNldCgpJiYoYj1uZXcgRGF0ZShhLmdldFRpbWUoKSs2ZTQqYi5nZXRUaW1lem9uZU9mZnNldCgpKSksYn0sX2xvY2FsX3RvX3V0YzpmdW5jdGlvbihhKXtyZXR1cm4gYSYmbmV3IERhdGUoYS5nZXRUaW1lKCktNmU0KmEuZ2V0VGltZXpvbmVPZmZzZXQoKSl9LF96ZXJvX3RpbWU6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJm5ldyBEYXRlKGEuZ2V0RnVsbFllYXIoKSxhLmdldE1vbnRoKCksYS5nZXREYXRlKCkpfSxfemVyb191dGNfdGltZTpmdW5jdGlvbihhKXtyZXR1cm4gYSYmYyhhLmdldFVUQ0Z1bGxZZWFyKCksYS5nZXRVVENNb250aCgpLGEuZ2V0VVRDRGF0ZSgpKX0sZ2V0RGF0ZXM6ZnVuY3Rpb24oKXtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyx0aGlzLl91dGNfdG9fbG9jYWwpfSxnZXRVVENEYXRlczpmdW5jdGlvbigpe3JldHVybiBhLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBuZXcgRGF0ZShhKX0pfSxnZXREYXRlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3V0Y190b19sb2NhbCh0aGlzLmdldFVUQ0RhdGUoKSl9LGdldFVUQ0RhdGU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmRhdGVzLmdldCgtMSk7cmV0dXJuIGEhPT1iP25ldyBEYXRlKGEpOm51bGx9LGNsZWFyRGF0ZXM6ZnVuY3Rpb24oKXt0aGlzLmlucHV0RmllbGQudmFsKFwiXCIpLHRoaXMudXBkYXRlKCksdGhpcy5fdHJpZ2dlcihcImNoYW5nZURhdGVcIiksdGhpcy5vLmF1dG9jbG9zZSYmdGhpcy5oaWRlKCl9LHNldERhdGVzOmZ1bmN0aW9uKCl7dmFyIGI9YS5pc0FycmF5KGFyZ3VtZW50c1swXSk/YXJndW1lbnRzWzBdOmFyZ3VtZW50cztyZXR1cm4gdGhpcy51cGRhdGUuYXBwbHkodGhpcyxiKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLnNldFZhbHVlKCksdGhpc30sc2V0VVRDRGF0ZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLmlzQXJyYXkoYXJndW1lbnRzWzBdKT9hcmd1bWVudHNbMF06YXJndW1lbnRzO3JldHVybiB0aGlzLnNldERhdGVzLmFwcGx5KHRoaXMsYS5tYXAoYix0aGlzLl91dGNfdG9fbG9jYWwpKSx0aGlzfSxzZXREYXRlOmYoXCJzZXREYXRlc1wiKSxzZXRVVENEYXRlOmYoXCJzZXRVVENEYXRlc1wiKSxyZW1vdmU6ZihcImRlc3Ryb3lcIixcIk1ldGhvZCBgcmVtb3ZlYCBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdmVyc2lvbiAyLjAuIFVzZSBgZGVzdHJveWAgaW5zdGVhZFwiKSxzZXRWYWx1ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuZ2V0Rm9ybWF0dGVkRGF0ZSgpO3JldHVybiB0aGlzLmlucHV0RmllbGQudmFsKGEpLHRoaXN9LGdldEZvcm1hdHRlZERhdGU6ZnVuY3Rpb24oYyl7Yz09PWImJihjPXRoaXMuby5mb3JtYXQpO3ZhciBkPXRoaXMuby5sYW5ndWFnZTtyZXR1cm4gYS5tYXAodGhpcy5kYXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gci5mb3JtYXREYXRlKGEsYyxkKX0pLmpvaW4odGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcil9LGdldFN0YXJ0RGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm8uc3RhcnREYXRlfSxzZXRTdGFydERhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7c3RhcnREYXRlOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpc30sZ2V0RW5kRGF0ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm8uZW5kRGF0ZX0sc2V0RW5kRGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5fcHJvY2Vzc19vcHRpb25zKHtlbmREYXRlOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXMudXBkYXRlTmF2QXJyb3dzKCksdGhpc30sc2V0RGF5c09mV2Vla0Rpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wcm9jZXNzX29wdGlvbnMoe2RheXNPZldlZWtEaXNhYmxlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxzZXREYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF5c09mV2Vla0hpZ2hsaWdodGVkOmF9KSx0aGlzLnVwZGF0ZSgpLHRoaXN9LHNldERhdGVzRGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3Byb2Nlc3Nfb3B0aW9ucyh7ZGF0ZXNEaXNhYmxlZDphfSksdGhpcy51cGRhdGUoKSx0aGlzfSxwbGFjZTpmdW5jdGlvbigpe2lmKHRoaXMuaXNJbmxpbmUpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcy5waWNrZXIub3V0ZXJXaWR0aCgpLGM9dGhpcy5waWNrZXIub3V0ZXJIZWlnaHQoKSxkPTEwLGU9YSh0aGlzLm8uY29udGFpbmVyKSxmPWUud2lkdGgoKSxnPVwiYm9keVwiPT09dGhpcy5vLmNvbnRhaW5lcj9hKGRvY3VtZW50KS5zY3JvbGxUb3AoKTplLnNjcm9sbFRvcCgpLGg9ZS5vZmZzZXQoKSxpPVswXTt0aGlzLmVsZW1lbnQucGFyZW50cygpLmVhY2goZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLmNzcyhcInotaW5kZXhcIik7XCJhdXRvXCIhPT1iJiYwIT09TnVtYmVyKGIpJiZpLnB1c2goTnVtYmVyKGIpKX0pO3ZhciBqPU1hdGgubWF4LmFwcGx5KE1hdGgsaSkrdGhpcy5vLnpJbmRleE9mZnNldCxrPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50LnBhcmVudCgpLm9mZnNldCgpOnRoaXMuZWxlbWVudC5vZmZzZXQoKSxsPXRoaXMuY29tcG9uZW50P3RoaXMuY29tcG9uZW50Lm91dGVySGVpZ2h0KCEwKTp0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoITEpLG09dGhpcy5jb21wb25lbnQ/dGhpcy5jb21wb25lbnQub3V0ZXJXaWR0aCghMCk6dGhpcy5lbGVtZW50Lm91dGVyV2lkdGgoITEpLG49ay5sZWZ0LWgubGVmdCxvPWsudG9wLWgudG9wO1wiYm9keVwiIT09dGhpcy5vLmNvbnRhaW5lciYmKG8rPWcpLHRoaXMucGlja2VyLnJlbW92ZUNsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtdG9wIGRhdGVwaWNrZXItb3JpZW50LWJvdHRvbSBkYXRlcGlja2VyLW9yaWVudC1yaWdodCBkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpLFwiYXV0b1wiIT09dGhpcy5vLm9yaWVudGF0aW9uLng/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtXCIrdGhpcy5vLm9yaWVudGF0aW9uLngpLFwicmlnaHRcIj09PXRoaXMuby5vcmllbnRhdGlvbi54JiYobi09Yi1tKSk6ay5sZWZ0PDA/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtbGVmdFwiKSxuLT1rLmxlZnQtZCk6bitiPmY/KHRoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtcmlnaHRcIiksbis9bS1iKTp0aGlzLm8ucnRsP3RoaXMucGlja2VyLmFkZENsYXNzKFwiZGF0ZXBpY2tlci1vcmllbnQtcmlnaHRcIik6dGhpcy5waWNrZXIuYWRkQ2xhc3MoXCJkYXRlcGlja2VyLW9yaWVudC1sZWZ0XCIpO3ZhciBwLHE9dGhpcy5vLm9yaWVudGF0aW9uLnk7aWYoXCJhdXRvXCI9PT1xJiYocD0tZytvLWMscT1wPDA/XCJib3R0b21cIjpcInRvcFwiKSx0aGlzLnBpY2tlci5hZGRDbGFzcyhcImRhdGVwaWNrZXItb3JpZW50LVwiK3EpLFwidG9wXCI9PT1xP28tPWMrcGFyc2VJbnQodGhpcy5waWNrZXIuY3NzKFwicGFkZGluZy10b3BcIikpOm8rPWwsdGhpcy5vLnJ0bCl7dmFyIHI9Zi0obittKTt0aGlzLnBpY2tlci5jc3Moe3RvcDpvLHJpZ2h0OnIsekluZGV4Omp9KX1lbHNlIHRoaXMucGlja2VyLmNzcyh7dG9wOm8sbGVmdDpuLHpJbmRleDpqfSk7cmV0dXJuIHRoaXN9LF9hbGxvd191cGRhdGU6ITAsdXBkYXRlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuX2FsbG93X3VwZGF0ZSlyZXR1cm4gdGhpczt2YXIgYj10aGlzLmRhdGVzLmNvcHkoKSxjPVtdLGQ9ITE7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGEuZWFjaChhcmd1bWVudHMsYS5wcm94eShmdW5jdGlvbihhLGIpe2IgaW5zdGFuY2VvZiBEYXRlJiYoYj10aGlzLl9sb2NhbF90b191dGMoYikpLGMucHVzaChiKX0sdGhpcykpLGQ9ITApOihjPXRoaXMuaXNJbnB1dD90aGlzLmVsZW1lbnQudmFsKCk6dGhpcy5lbGVtZW50LmRhdGEoXCJkYXRlXCIpfHx0aGlzLmlucHV0RmllbGQudmFsKCksYz1jJiZ0aGlzLm8ubXVsdGlkYXRlP2Muc3BsaXQodGhpcy5vLm11bHRpZGF0ZVNlcGFyYXRvcik6W2NdLGRlbGV0ZSB0aGlzLmVsZW1lbnQuZGF0YSgpLmRhdGUpLGM9YS5tYXAoYyxhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiByLnBhcnNlRGF0ZShhLHRoaXMuby5mb3JtYXQsdGhpcy5vLmxhbmd1YWdlLHRoaXMuby5hc3N1bWVOZWFyYnlZZWFyKX0sdGhpcykpLGM9YS5ncmVwKGMsYS5wcm94eShmdW5jdGlvbihhKXtyZXR1cm4hdGhpcy5kYXRlV2l0aGluUmFuZ2UoYSl8fCFhfSx0aGlzKSwhMCksdGhpcy5kYXRlcy5yZXBsYWNlKGMpLHRoaXMuby51cGRhdGVWaWV3RGF0ZSYmKHRoaXMuZGF0ZXMubGVuZ3RoP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5kYXRlcy5nZXQoLTEpKTp0aGlzLnZpZXdEYXRlPHRoaXMuby5zdGFydERhdGU/dGhpcy52aWV3RGF0ZT1uZXcgRGF0ZSh0aGlzLm8uc3RhcnREYXRlKTp0aGlzLnZpZXdEYXRlPnRoaXMuby5lbmREYXRlP3RoaXMudmlld0RhdGU9bmV3IERhdGUodGhpcy5vLmVuZERhdGUpOnRoaXMudmlld0RhdGU9dGhpcy5vLmRlZmF1bHRWaWV3RGF0ZSksZD8odGhpcy5zZXRWYWx1ZSgpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSk6dGhpcy5kYXRlcy5sZW5ndGgmJlN0cmluZyhiKSE9PVN0cmluZyh0aGlzLmRhdGVzKSYmZCYmKHRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VEYXRlXCIpLHRoaXMuZWxlbWVudC5jaGFuZ2UoKSksIXRoaXMuZGF0ZXMubGVuZ3RoJiZiLmxlbmd0aCYmKHRoaXMuX3RyaWdnZXIoXCJjbGVhckRhdGVcIiksdGhpcy5lbGVtZW50LmNoYW5nZSgpKSx0aGlzLmZpbGwoKSx0aGlzfSxmaWxsRG93OmZ1bmN0aW9uKCl7aWYodGhpcy5vLnNob3dXZWVrRGF5cyl7dmFyIGI9dGhpcy5vLndlZWtTdGFydCxjPVwiPHRyPlwiO2Zvcih0aGlzLm8uY2FsZW5kYXJXZWVrcyYmKGMrPSc8dGggY2xhc3M9XCJjd1wiPiYjMTYwOzwvdGg+Jyk7Yjx0aGlzLm8ud2Vla1N0YXJ0Kzc7KWMrPSc8dGggY2xhc3M9XCJkb3cnLGEuaW5BcnJheShiLHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpIT09LTEmJihjKz1cIiBkaXNhYmxlZFwiKSxjKz0nXCI+JytxW3RoaXMuby5sYW5ndWFnZV0uZGF5c01pbltiKyslN10rXCI8L3RoPlwiO2MrPVwiPC90cj5cIix0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItZGF5cyB0aGVhZFwiKS5hcHBlbmQoYyl9fSxmaWxsTW9udGhzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9dGhpcy5fdXRjX3RvX2xvY2FsKHRoaXMudmlld0RhdGUpLGM9XCJcIixkPTA7ZDwxMjtkKyspYT1iJiZiLmdldE1vbnRoKCk9PT1kP1wiIGZvY3VzZWRcIjpcIlwiLGMrPSc8c3BhbiBjbGFzcz1cIm1vbnRoJythKydcIj4nK3FbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNTaG9ydFtkXStcIjwvc3Bhbj5cIjt0aGlzLnBpY2tlci5maW5kKFwiLmRhdGVwaWNrZXItbW9udGhzIHRkXCIpLmh0bWwoYyl9LHNldFJhbmdlOmZ1bmN0aW9uKGIpe2ImJmIubGVuZ3RoP3RoaXMucmFuZ2U9YS5tYXAoYixmdW5jdGlvbihhKXtyZXR1cm4gYS52YWx1ZU9mKCl9KTpkZWxldGUgdGhpcy5yYW5nZSx0aGlzLmZpbGwoKX0sZ2V0Q2xhc3NOYW1lczpmdW5jdGlvbihiKXt2YXIgYz1bXSxmPXRoaXMudmlld0RhdGUuZ2V0VVRDRnVsbFllYXIoKSxnPXRoaXMudmlld0RhdGUuZ2V0VVRDTW9udGgoKSxoPWQoKTtyZXR1cm4gYi5nZXRVVENGdWxsWWVhcigpPGZ8fGIuZ2V0VVRDRnVsbFllYXIoKT09PWYmJmIuZ2V0VVRDTW9udGgoKTxnP2MucHVzaChcIm9sZFwiKTooYi5nZXRVVENGdWxsWWVhcigpPmZ8fGIuZ2V0VVRDRnVsbFllYXIoKT09PWYmJmIuZ2V0VVRDTW9udGgoKT5nKSYmYy5wdXNoKFwibmV3XCIpLHRoaXMuZm9jdXNEYXRlJiZiLnZhbHVlT2YoKT09PXRoaXMuZm9jdXNEYXRlLnZhbHVlT2YoKSYmYy5wdXNoKFwiZm9jdXNlZFwiKSx0aGlzLm8udG9kYXlIaWdobGlnaHQmJmUoYixoKSYmYy5wdXNoKFwidG9kYXlcIiksdGhpcy5kYXRlcy5jb250YWlucyhiKSE9PS0xJiZjLnB1c2goXCJhY3RpdmVcIiksdGhpcy5kYXRlV2l0aGluUmFuZ2UoYil8fGMucHVzaChcImRpc2FibGVkXCIpLHRoaXMuZGF0ZUlzRGlzYWJsZWQoYikmJmMucHVzaChcImRpc2FibGVkXCIsXCJkaXNhYmxlZC1kYXRlXCIpLGEuaW5BcnJheShiLmdldFVUQ0RheSgpLHRoaXMuby5kYXlzT2ZXZWVrSGlnaGxpZ2h0ZWQpIT09LTEmJmMucHVzaChcImhpZ2hsaWdodGVkXCIpLHRoaXMucmFuZ2UmJihiPnRoaXMucmFuZ2VbMF0mJmI8dGhpcy5yYW5nZVt0aGlzLnJhbmdlLmxlbmd0aC0xXSYmYy5wdXNoKFwicmFuZ2VcIiksYS5pbkFycmF5KGIudmFsdWVPZigpLHRoaXMucmFuZ2UpIT09LTEmJmMucHVzaChcInNlbGVjdGVkXCIpLGIudmFsdWVPZigpPT09dGhpcy5yYW5nZVswXSYmYy5wdXNoKFwicmFuZ2Utc3RhcnRcIiksYi52YWx1ZU9mKCk9PT10aGlzLnJhbmdlW3RoaXMucmFuZ2UubGVuZ3RoLTFdJiZjLnB1c2goXCJyYW5nZS1lbmRcIikpLGN9LF9maWxsX3llYXJzVmlldzpmdW5jdGlvbihjLGQsZSxmLGcsaCxpKXtmb3IodmFyIGosayxsLG09XCJcIixuPWUvMTAsbz10aGlzLnBpY2tlci5maW5kKGMpLHA9TWF0aC5mbG9vcihmL2UpKmUscT1wKzkqbixyPU1hdGguZmxvb3IodGhpcy52aWV3RGF0ZS5nZXRGdWxsWWVhcigpL24pKm4scz1hLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLmZsb29yKGEuZ2V0VVRDRnVsbFllYXIoKS9uKSpufSksdD1wLW47dDw9cStuO3QrPW4paj1bZF0saz1udWxsLHQ9PT1wLW4/ai5wdXNoKFwib2xkXCIpOnQ9PT1xK24mJmoucHVzaChcIm5ld1wiKSxhLmluQXJyYXkodCxzKSE9PS0xJiZqLnB1c2goXCJhY3RpdmVcIiksKHQ8Z3x8dD5oKSYmai5wdXNoKFwiZGlzYWJsZWRcIiksdD09PXImJmoucHVzaChcImZvY3VzZWRcIiksaSE9PWEubm9vcCYmKGw9aShuZXcgRGF0ZSh0LDAsMSkpLGw9PT1iP2w9e306XCJib29sZWFuXCI9PXR5cGVvZiBsP2w9e2VuYWJsZWQ6bH06XCJzdHJpbmdcIj09dHlwZW9mIGwmJihsPXtjbGFzc2VzOmx9KSxsLmVuYWJsZWQ9PT0hMSYmai5wdXNoKFwiZGlzYWJsZWRcIiksbC5jbGFzc2VzJiYoaj1qLmNvbmNhdChsLmNsYXNzZXMuc3BsaXQoL1xccysvKSkpLGwudG9vbHRpcCYmKGs9bC50b29sdGlwKSksbSs9JzxzcGFuIGNsYXNzPVwiJytqLmpvaW4oXCIgXCIpKydcIicrKGs/JyB0aXRsZT1cIicraysnXCInOlwiXCIpK1wiPlwiK3QrXCI8L3NwYW4+XCI7by5maW5kKFwiLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQocCtcIi1cIitxKSxvLmZpbmQoXCJ0ZFwiKS5odG1sKG0pfSxmaWxsOmZ1bmN0aW9uKCl7dmFyIGQsZSxmPW5ldyBEYXRlKHRoaXMudmlld0RhdGUpLGc9Zi5nZXRVVENGdWxsWWVhcigpLGg9Zi5nZXRVVENNb250aCgpLGk9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6LSgxLzApLGo9dGhpcy5vLnN0YXJ0RGF0ZSE9PS0oMS8wKT90aGlzLm8uc3RhcnREYXRlLmdldFVUQ01vbnRoKCk6LSgxLzApLGs9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDRnVsbFllYXIoKToxLzAsbD10aGlzLm8uZW5kRGF0ZSE9PTEvMD90aGlzLm8uZW5kRGF0ZS5nZXRVVENNb250aCgpOjEvMCxtPXFbdGhpcy5vLmxhbmd1YWdlXS50b2RheXx8cS5lbi50b2RheXx8XCJcIixuPXFbdGhpcy5vLmxhbmd1YWdlXS5jbGVhcnx8cS5lbi5jbGVhcnx8XCJcIixvPXFbdGhpcy5vLmxhbmd1YWdlXS50aXRsZUZvcm1hdHx8cS5lbi50aXRsZUZvcm1hdDtpZighaXNOYU4oZykmJiFpc05hTihoKSl7dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgLmRhdGVwaWNrZXItc3dpdGNoXCIpLnRleHQoci5mb3JtYXREYXRlKGYsbyx0aGlzLm8ubGFuZ3VhZ2UpKSx0aGlzLnBpY2tlci5maW5kKFwidGZvb3QgLnRvZGF5XCIpLnRleHQobSkuY3NzKFwiZGlzcGxheVwiLHRoaXMuby50b2RheUJ0bj09PSEwfHxcImxpbmtlZFwiPT09dGhpcy5vLnRvZGF5QnRuP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnBpY2tlci5maW5kKFwidGZvb3QgLmNsZWFyXCIpLnRleHQobikuY3NzKFwiZGlzcGxheVwiLHRoaXMuby5jbGVhckJ0bj09PSEwP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnBpY2tlci5maW5kKFwidGhlYWQgLmRhdGVwaWNrZXItdGl0bGVcIikudGV4dCh0aGlzLm8udGl0bGUpLmNzcyhcImRpc3BsYXlcIixcInN0cmluZ1wiPT10eXBlb2YgdGhpcy5vLnRpdGxlJiZcIlwiIT09dGhpcy5vLnRpdGxlP1widGFibGUtY2VsbFwiOlwibm9uZVwiKSx0aGlzLnVwZGF0ZU5hdkFycm93cygpLHRoaXMuZmlsbE1vbnRocygpO3ZhciBwPWMoZyxoLDApLHM9cC5nZXRVVENEYXRlKCk7cC5zZXRVVENEYXRlKHMtKHAuZ2V0VVRDRGF5KCktdGhpcy5vLndlZWtTdGFydCs3KSU3KTt2YXIgdD1uZXcgRGF0ZShwKTtwLmdldFVUQ0Z1bGxZZWFyKCk8MTAwJiZ0LnNldFVUQ0Z1bGxZZWFyKHAuZ2V0VVRDRnVsbFllYXIoKSksdC5zZXRVVENEYXRlKHQuZ2V0VVRDRGF0ZSgpKzQyKSx0PXQudmFsdWVPZigpO2Zvcih2YXIgdSx2LHc9W107cC52YWx1ZU9mKCk8dDspe2lmKHU9cC5nZXRVVENEYXkoKSx1PT09dGhpcy5vLndlZWtTdGFydCYmKHcucHVzaChcIjx0cj5cIiksdGhpcy5vLmNhbGVuZGFyV2Vla3MpKXt2YXIgeD1uZXcgRGF0ZSgrcCsodGhpcy5vLndlZWtTdGFydC11LTcpJTcqODY0ZTUpLHk9bmV3IERhdGUoTnVtYmVyKHgpKygxMS14LmdldFVUQ0RheSgpKSU3Kjg2NGU1KSx6PW5ldyBEYXRlKE51bWJlcih6PWMoeS5nZXRVVENGdWxsWWVhcigpLDAsMSkpKygxMS16LmdldFVUQ0RheSgpKSU3Kjg2NGU1KSxBPSh5LXopLzg2NGU1LzcrMTt3LnB1c2goJzx0ZCBjbGFzcz1cImN3XCI+JytBK1wiPC90ZD5cIil9dj10aGlzLmdldENsYXNzTmFtZXMocCksdi5wdXNoKFwiZGF5XCIpO3ZhciBCPXAuZ2V0VVRDRGF0ZSgpO3RoaXMuby5iZWZvcmVTaG93RGF5IT09YS5ub29wJiYoZT10aGlzLm8uYmVmb3JlU2hvd0RheSh0aGlzLl91dGNfdG9fbG9jYWwocCkpLGU9PT1iP2U9e306XCJib29sZWFuXCI9PXR5cGVvZiBlP2U9e2VuYWJsZWQ6ZX06XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtjbGFzc2VzOmV9KSxlLmVuYWJsZWQ9PT0hMSYmdi5wdXNoKFwiZGlzYWJsZWRcIiksZS5jbGFzc2VzJiYodj12LmNvbmNhdChlLmNsYXNzZXMuc3BsaXQoL1xccysvKSkpLGUudG9vbHRpcCYmKGQ9ZS50b29sdGlwKSxlLmNvbnRlbnQmJihCPWUuY29udGVudCkpLHY9YS5pc0Z1bmN0aW9uKGEudW5pcXVlU29ydCk/YS51bmlxdWVTb3J0KHYpOmEudW5pcXVlKHYpLHcucHVzaCgnPHRkIGNsYXNzPVwiJyt2LmpvaW4oXCIgXCIpKydcIicrKGQ/JyB0aXRsZT1cIicrZCsnXCInOlwiXCIpKycgZGF0YS1kYXRlPVwiJytwLmdldFRpbWUoKS50b1N0cmluZygpKydcIj4nK0IrXCI8L3RkPlwiKSxkPW51bGwsdT09PXRoaXMuby53ZWVrRW5kJiZ3LnB1c2goXCI8L3RyPlwiKSxwLnNldFVUQ0RhdGUocC5nZXRVVENEYXRlKCkrMSl9dGhpcy5waWNrZXIuZmluZChcIi5kYXRlcGlja2VyLWRheXMgdGJvZHlcIikuaHRtbCh3LmpvaW4oXCJcIikpO3ZhciBDPXFbdGhpcy5vLmxhbmd1YWdlXS5tb250aHNUaXRsZXx8cS5lbi5tb250aHNUaXRsZXx8XCJNb250aHNcIixEPXRoaXMucGlja2VyLmZpbmQoXCIuZGF0ZXBpY2tlci1tb250aHNcIikuZmluZChcIi5kYXRlcGlja2VyLXN3aXRjaFwiKS50ZXh0KHRoaXMuby5tYXhWaWV3TW9kZTwyP0M6ZykuZW5kKCkuZmluZChcInRib2R5IHNwYW5cIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7aWYoYS5lYWNoKHRoaXMuZGF0ZXMsZnVuY3Rpb24oYSxiKXtiLmdldFVUQ0Z1bGxZZWFyKCk9PT1nJiZELmVxKGIuZ2V0VVRDTW9udGgoKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIil9KSwoZzxpfHxnPmspJiZELmFkZENsYXNzKFwiZGlzYWJsZWRcIiksZz09PWkmJkQuc2xpY2UoMCxqKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGc9PT1rJiZELnNsaWNlKGwrMSkuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKSx0aGlzLm8uYmVmb3JlU2hvd01vbnRoIT09YS5ub29wKXt2YXIgRT10aGlzO2EuZWFjaChELGZ1bmN0aW9uKGMsZCl7dmFyIGU9bmV3IERhdGUoZyxjLDEpLGY9RS5vLmJlZm9yZVNob3dNb250aChlKTtmPT09Yj9mPXt9OlwiYm9vbGVhblwiPT10eXBlb2YgZj9mPXtlbmFibGVkOmZ9Olwic3RyaW5nXCI9PXR5cGVvZiBmJiYoZj17Y2xhc3NlczpmfSksZi5lbmFibGVkIT09ITF8fGEoZCkuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKXx8YShkKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpLGYuY2xhc3NlcyYmYShkKS5hZGRDbGFzcyhmLmNsYXNzZXMpLGYudG9vbHRpcCYmYShkKS5wcm9wKFwidGl0bGVcIixmLnRvb2x0aXApfSl9dGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci15ZWFyc1wiLFwieWVhclwiLDEwLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93WWVhciksdGhpcy5fZmlsbF95ZWFyc1ZpZXcoXCIuZGF0ZXBpY2tlci1kZWNhZGVzXCIsXCJkZWNhZGVcIiwxMDAsZyxpLGssdGhpcy5vLmJlZm9yZVNob3dEZWNhZGUpLHRoaXMuX2ZpbGxfeWVhcnNWaWV3KFwiLmRhdGVwaWNrZXItY2VudHVyaWVzXCIsXCJjZW50dXJ5XCIsMWUzLGcsaSxrLHRoaXMuby5iZWZvcmVTaG93Q2VudHVyeSl9fSx1cGRhdGVOYXZBcnJvd3M6ZnVuY3Rpb24oKXtpZih0aGlzLl9hbGxvd191cGRhdGUpe3ZhciBhLGIsYz1uZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSxkPWMuZ2V0VVRDRnVsbFllYXIoKSxlPWMuZ2V0VVRDTW9udGgoKSxmPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENGdWxsWWVhcigpOi0oMS8wKSxnPXRoaXMuby5zdGFydERhdGUhPT0tKDEvMCk/dGhpcy5vLnN0YXJ0RGF0ZS5nZXRVVENNb250aCgpOi0oMS8wKSxoPXRoaXMuby5lbmREYXRlIT09MS8wP3RoaXMuby5lbmREYXRlLmdldFVUQ0Z1bGxZZWFyKCk6MS8wLGk9dGhpcy5vLmVuZERhdGUhPT0xLzA/dGhpcy5vLmVuZERhdGUuZ2V0VVRDTW9udGgoKToxLzAsaj0xO3N3aXRjaCh0aGlzLnZpZXdNb2RlKXtjYXNlIDQ6aio9MTA7Y2FzZSAzOmoqPTEwO2Nhc2UgMjpqKj0xMDtjYXNlIDE6YT1NYXRoLmZsb29yKGQvaikqajxmLGI9TWF0aC5mbG9vcihkL2opKmoraj5oO2JyZWFrO2Nhc2UgMDphPWQ8PWYmJmU8ZyxiPWQ+PWgmJmU+aX10aGlzLnBpY2tlci5maW5kKFwiLnByZXZcIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLGEpLHRoaXMucGlja2VyLmZpbmQoXCIubmV4dFwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsYil9fSxjbGljazpmdW5jdGlvbihiKXtiLnByZXZlbnREZWZhdWx0KCksYi5zdG9wUHJvcGFnYXRpb24oKTt2YXIgZSxmLGcsaDtlPWEoYi50YXJnZXQpLGUuaGFzQ2xhc3MoXCJkYXRlcGlja2VyLXN3aXRjaFwiKSYmdGhpcy52aWV3TW9kZSE9PXRoaXMuby5tYXhWaWV3TW9kZSYmdGhpcy5zZXRWaWV3TW9kZSh0aGlzLnZpZXdNb2RlKzEpLGUuaGFzQ2xhc3MoXCJ0b2RheVwiKSYmIWUuaGFzQ2xhc3MoXCJkYXlcIikmJih0aGlzLnNldFZpZXdNb2RlKDApLHRoaXMuX3NldERhdGUoZCgpLFwibGlua2VkXCI9PT10aGlzLm8udG9kYXlCdG4/bnVsbDpcInZpZXdcIikpLGUuaGFzQ2xhc3MoXCJjbGVhclwiKSYmdGhpcy5jbGVhckRhdGVzKCksZS5oYXNDbGFzcyhcImRpc2FibGVkXCIpfHwoZS5oYXNDbGFzcyhcIm1vbnRoXCIpfHxlLmhhc0NsYXNzKFwieWVhclwiKXx8ZS5oYXNDbGFzcyhcImRlY2FkZVwiKXx8ZS5oYXNDbGFzcyhcImNlbnR1cnlcIikpJiYodGhpcy52aWV3RGF0ZS5zZXRVVENEYXRlKDEpLGY9MSwxPT09dGhpcy52aWV3TW9kZT8oaD1lLnBhcmVudCgpLmZpbmQoXCJzcGFuXCIpLmluZGV4KGUpLGc9dGhpcy52aWV3RGF0ZS5nZXRVVENGdWxsWWVhcigpLHRoaXMudmlld0RhdGUuc2V0VVRDTW9udGgoaCkpOihoPTAsZz1OdW1iZXIoZS50ZXh0KCkpLHRoaXMudmlld0RhdGUuc2V0VVRDRnVsbFllYXIoZykpLHRoaXMuX3RyaWdnZXIoci52aWV3TW9kZXNbdGhpcy52aWV3TW9kZS0xXS5lLHRoaXMudmlld0RhdGUpLHRoaXMudmlld01vZGU9PT10aGlzLm8ubWluVmlld01vZGU/dGhpcy5fc2V0RGF0ZShjKGcsaCxmKSk6KHRoaXMuc2V0Vmlld01vZGUodGhpcy52aWV3TW9kZS0xKSx0aGlzLmZpbGwoKSkpLHRoaXMucGlja2VyLmlzKFwiOnZpc2libGVcIikmJnRoaXMuX2ZvY3VzZWRfZnJvbSYmdGhpcy5fZm9jdXNlZF9mcm9tLmZvY3VzKCksZGVsZXRlIHRoaXMuX2ZvY3VzZWRfZnJvbX0sZGF5Q2VsbENsaWNrOmZ1bmN0aW9uKGIpe3ZhciBjPWEoYi5jdXJyZW50VGFyZ2V0KSxkPWMuZGF0YShcImRhdGVcIiksZT1uZXcgRGF0ZShkKTt0aGlzLm8udXBkYXRlVmlld0RhdGUmJihlLmdldFVUQ0Z1bGxZZWFyKCkhPT10aGlzLnZpZXdEYXRlLmdldFVUQ0Z1bGxZZWFyKCkmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VZZWFyXCIsdGhpcy52aWV3RGF0ZSksZS5nZXRVVENNb250aCgpIT09dGhpcy52aWV3RGF0ZS5nZXRVVENNb250aCgpJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlTW9udGhcIix0aGlzLnZpZXdEYXRlKSksdGhpcy5fc2V0RGF0ZShlKX0sbmF2QXJyb3dzQ2xpY2s6ZnVuY3Rpb24oYil7dmFyIGM9YShiLmN1cnJlbnRUYXJnZXQpLGQ9Yy5oYXNDbGFzcyhcInByZXZcIik/LTE6MTswIT09dGhpcy52aWV3TW9kZSYmKGQqPTEyKnIudmlld01vZGVzW3RoaXMudmlld01vZGVdLm5hdlN0ZXApLHRoaXMudmlld0RhdGU9dGhpcy5tb3ZlTW9udGgodGhpcy52aWV3RGF0ZSxkKSx0aGlzLl90cmlnZ2VyKHIudmlld01vZGVzW3RoaXMudmlld01vZGVdLmUsdGhpcy52aWV3RGF0ZSksdGhpcy5maWxsKCl9LF90b2dnbGVfbXVsdGlkYXRlOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuZGF0ZXMuY29udGFpbnMoYSk7aWYoYXx8dGhpcy5kYXRlcy5jbGVhcigpLGIhPT0tMT8odGhpcy5vLm11bHRpZGF0ZT09PSEwfHx0aGlzLm8ubXVsdGlkYXRlPjF8fHRoaXMuby50b2dnbGVBY3RpdmUpJiZ0aGlzLmRhdGVzLnJlbW92ZShiKTp0aGlzLm8ubXVsdGlkYXRlPT09ITE/KHRoaXMuZGF0ZXMuY2xlYXIoKSx0aGlzLmRhdGVzLnB1c2goYSkpOnRoaXMuZGF0ZXMucHVzaChhKSxcIm51bWJlclwiPT10eXBlb2YgdGhpcy5vLm11bHRpZGF0ZSlmb3IoO3RoaXMuZGF0ZXMubGVuZ3RoPnRoaXMuby5tdWx0aWRhdGU7KXRoaXMuZGF0ZXMucmVtb3ZlKDApfSxfc2V0RGF0ZTpmdW5jdGlvbihhLGIpe2ImJlwiZGF0ZVwiIT09Ynx8dGhpcy5fdG9nZ2xlX211bHRpZGF0ZShhJiZuZXcgRGF0ZShhKSksKCFiJiZ0aGlzLm8udXBkYXRlVmlld0RhdGV8fFwidmlld1wiPT09YikmJih0aGlzLnZpZXdEYXRlPWEmJm5ldyBEYXRlKGEpKSx0aGlzLmZpbGwoKSx0aGlzLnNldFZhbHVlKCksYiYmXCJ2aWV3XCI9PT1ifHx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKSx0aGlzLmlucHV0RmllbGQudHJpZ2dlcihcImNoYW5nZVwiKSwhdGhpcy5vLmF1dG9jbG9zZXx8YiYmXCJkYXRlXCIhPT1ifHx0aGlzLmhpZGUoKX0sbW92ZURheTpmdW5jdGlvbihhLGIpe3ZhciBjPW5ldyBEYXRlKGEpO3JldHVybiBjLnNldFVUQ0RhdGUoYS5nZXRVVENEYXRlKCkrYiksY30sbW92ZVdlZWs6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3ZlRGF5KGEsNypiKX0sbW92ZU1vbnRoOmZ1bmN0aW9uKGEsYil7aWYoIWcoYSkpcmV0dXJuIHRoaXMuby5kZWZhdWx0Vmlld0RhdGU7aWYoIWIpcmV0dXJuIGE7dmFyIGMsZCxlPW5ldyBEYXRlKGEudmFsdWVPZigpKSxmPWUuZ2V0VVRDRGF0ZSgpLGg9ZS5nZXRVVENNb250aCgpLGk9TWF0aC5hYnMoYik7aWYoYj1iPjA/MTotMSwxPT09aSlkPWI9PT0tMT9mdW5jdGlvbigpe3JldHVybiBlLmdldFVUQ01vbnRoKCk9PT1ofTpmdW5jdGlvbigpe3JldHVybiBlLmdldFVUQ01vbnRoKCkhPT1jfSxjPWgrYixlLnNldFVUQ01vbnRoKGMpLGM9KGMrMTIpJTEyO2Vsc2V7Zm9yKHZhciBqPTA7ajxpO2orKyllPXRoaXMubW92ZU1vbnRoKGUsYik7Yz1lLmdldFVUQ01vbnRoKCksZS5zZXRVVENEYXRlKGYpLGQ9ZnVuY3Rpb24oKXtyZXR1cm4gYyE9PWUuZ2V0VVRDTW9udGgoKX19Zm9yKDtkKCk7KWUuc2V0VVRDRGF0ZSgtLWYpLGUuc2V0VVRDTW9udGgoYyk7cmV0dXJuIGV9LG1vdmVZZWFyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW92ZU1vbnRoKGEsMTIqYil9LG1vdmVBdmFpbGFibGVEYXRlOmZ1bmN0aW9uKGEsYixjKXtkb3tpZihhPXRoaXNbY10oYSxiKSwhdGhpcy5kYXRlV2l0aGluUmFuZ2UoYSkpcmV0dXJuITE7Yz1cIm1vdmVEYXlcIn13aGlsZSh0aGlzLmRhdGVJc0Rpc2FibGVkKGEpKTtyZXR1cm4gYX0sd2Vla09mRGF0ZUlzRGlzYWJsZWQ6ZnVuY3Rpb24oYil7cmV0dXJuIGEuaW5BcnJheShiLmdldFVUQ0RheSgpLHRoaXMuby5kYXlzT2ZXZWVrRGlzYWJsZWQpIT09LTF9LGRhdGVJc0Rpc2FibGVkOmZ1bmN0aW9uKGIpe3JldHVybiB0aGlzLndlZWtPZkRhdGVJc0Rpc2FibGVkKGIpfHxhLmdyZXAodGhpcy5vLmRhdGVzRGlzYWJsZWQsZnVuY3Rpb24oYSl7cmV0dXJuIGUoYixhKX0pLmxlbmd0aD4wfSxkYXRlV2l0aGluUmFuZ2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGE+PXRoaXMuby5zdGFydERhdGUmJmE8PXRoaXMuby5lbmREYXRlfSxrZXlkb3duOmZ1bmN0aW9uKGEpe2lmKCF0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpKXJldHVybiB2b2lkKDQwIT09YS5rZXlDb2RlJiYyNyE9PWEua2V5Q29kZXx8KHRoaXMuc2hvdygpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKTt2YXIgYixjLGQ9ITEsZT10aGlzLmZvY3VzRGF0ZXx8dGhpcy52aWV3RGF0ZTtzd2l0Y2goYS5rZXlDb2RlKXtjYXNlIDI3OnRoaXMuZm9jdXNEYXRlPyh0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuZmlsbCgpKTp0aGlzLmhpZGUoKSxhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKTticmVhaztjYXNlIDM3OmNhc2UgMzg6Y2FzZSAzOTpjYXNlIDQwOmlmKCF0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9ufHw3PT09dGhpcy5vLmRheXNPZldlZWtEaXNhYmxlZC5sZW5ndGgpYnJlYWs7Yj0zNz09PWEua2V5Q29kZXx8Mzg9PT1hLmtleUNvZGU/LTE6MSwwPT09dGhpcy52aWV3TW9kZT9hLmN0cmxLZXk/KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlWWVhclwiKSxjJiZ0aGlzLl90cmlnZ2VyKFwiY2hhbmdlWWVhclwiLHRoaXMudmlld0RhdGUpKTphLnNoaWZ0S2V5PyhjPXRoaXMubW92ZUF2YWlsYWJsZURhdGUoZSxiLFwibW92ZU1vbnRoXCIpLGMmJnRoaXMuX3RyaWdnZXIoXCJjaGFuZ2VNb250aFwiLHRoaXMudmlld0RhdGUpKTozNz09PWEua2V5Q29kZXx8Mzk9PT1hLmtleUNvZGU/Yz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVEYXlcIik6dGhpcy53ZWVrT2ZEYXRlSXNEaXNhYmxlZChlKXx8KGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlV2Vla1wiKSk6MT09PXRoaXMudmlld01vZGU/KDM4IT09YS5rZXlDb2RlJiY0MCE9PWEua2V5Q29kZXx8KGIqPTQpLGM9dGhpcy5tb3ZlQXZhaWxhYmxlRGF0ZShlLGIsXCJtb3ZlTW9udGhcIikpOjI9PT10aGlzLnZpZXdNb2RlJiYoMzghPT1hLmtleUNvZGUmJjQwIT09YS5rZXlDb2RlfHwoYio9NCksYz10aGlzLm1vdmVBdmFpbGFibGVEYXRlKGUsYixcIm1vdmVZZWFyXCIpKSxjJiYodGhpcy5mb2N1c0RhdGU9dGhpcy52aWV3RGF0ZT1jLHRoaXMuc2V0VmFsdWUoKSx0aGlzLmZpbGwoKSxhLnByZXZlbnREZWZhdWx0KCkpO2JyZWFrO2Nhc2UgMTM6aWYoIXRoaXMuby5mb3JjZVBhcnNlKWJyZWFrO2U9dGhpcy5mb2N1c0RhdGV8fHRoaXMuZGF0ZXMuZ2V0KC0xKXx8dGhpcy52aWV3RGF0ZSx0aGlzLm8ua2V5Ym9hcmROYXZpZ2F0aW9uJiYodGhpcy5fdG9nZ2xlX211bHRpZGF0ZShlKSxkPSEwKSx0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuc2V0VmFsdWUoKSx0aGlzLmZpbGwoKSx0aGlzLnBpY2tlci5pcyhcIjp2aXNpYmxlXCIpJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCksdGhpcy5vLmF1dG9jbG9zZSYmdGhpcy5oaWRlKCkpO2JyZWFrO2Nhc2UgOTp0aGlzLmZvY3VzRGF0ZT1udWxsLHRoaXMudmlld0RhdGU9dGhpcy5kYXRlcy5nZXQoLTEpfHx0aGlzLnZpZXdEYXRlLHRoaXMuZmlsbCgpLHRoaXMuaGlkZSgpfWQmJih0aGlzLmRhdGVzLmxlbmd0aD90aGlzLl90cmlnZ2VyKFwiY2hhbmdlRGF0ZVwiKTp0aGlzLl90cmlnZ2VyKFwiY2xlYXJEYXRlXCIpLHRoaXMuaW5wdXRGaWVsZC50cmlnZ2VyKFwiY2hhbmdlXCIpKX0sc2V0Vmlld01vZGU6ZnVuY3Rpb24oYSl7dGhpcy52aWV3TW9kZT1hLHRoaXMucGlja2VyLmNoaWxkcmVuKFwiZGl2XCIpLmhpZGUoKS5maWx0ZXIoXCIuZGF0ZXBpY2tlci1cIityLnZpZXdNb2Rlc1t0aGlzLnZpZXdNb2RlXS5jbHNOYW1lKS5zaG93KCksdGhpcy51cGRhdGVOYXZBcnJvd3MoKSx0aGlzLl90cmlnZ2VyKFwiY2hhbmdlVmlld01vZGVcIixuZXcgRGF0ZSh0aGlzLnZpZXdEYXRlKSl9fTt2YXIgbD1mdW5jdGlvbihiLGMpe2EuZGF0YShiLFwiZGF0ZXBpY2tlclwiLHRoaXMpLHRoaXMuZWxlbWVudD1hKGIpLHRoaXMuaW5wdXRzPWEubWFwKGMuaW5wdXRzLGZ1bmN0aW9uKGEpe3JldHVybiBhLmpxdWVyeT9hWzBdOmF9KSxkZWxldGUgYy5pbnB1dHMsdGhpcy5rZWVwRW1wdHlWYWx1ZXM9Yy5rZWVwRW1wdHlWYWx1ZXMsZGVsZXRlIGMua2VlcEVtcHR5VmFsdWVzLG4uY2FsbChhKHRoaXMuaW5wdXRzKSxjKS5vbihcImNoYW5nZURhdGVcIixhLnByb3h5KHRoaXMuZGF0ZVVwZGF0ZWQsdGhpcykpLHRoaXMucGlja2Vycz1hLm1hcCh0aGlzLmlucHV0cyxmdW5jdGlvbihiKXtyZXR1cm4gYS5kYXRhKGIsXCJkYXRlcGlja2VyXCIpfSksdGhpcy51cGRhdGVEYXRlcygpfTtsLnByb3RvdHlwZT17dXBkYXRlRGF0ZXM6ZnVuY3Rpb24oKXt0aGlzLmRhdGVzPWEubWFwKHRoaXMucGlja2VycyxmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRVVENEYXRlKCl9KSx0aGlzLnVwZGF0ZVJhbmdlcygpfSx1cGRhdGVSYW5nZXM6ZnVuY3Rpb24oKXt2YXIgYj1hLm1hcCh0aGlzLmRhdGVzLGZ1bmN0aW9uKGEpe3JldHVybiBhLnZhbHVlT2YoKX0pO2EuZWFjaCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSxjKXtjLnNldFJhbmdlKGIpfSl9LGNsZWFyRGF0ZXM6ZnVuY3Rpb24oKXthLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYil7Yi5jbGVhckRhdGVzKCl9KX0sZGF0ZVVwZGF0ZWQ6ZnVuY3Rpb24oYyl7aWYoIXRoaXMudXBkYXRpbmcpe3RoaXMudXBkYXRpbmc9ITA7dmFyIGQ9YS5kYXRhKGMudGFyZ2V0LFwiZGF0ZXBpY2tlclwiKTtpZihkIT09Yil7dmFyIGU9ZC5nZXRVVENEYXRlKCksZj10aGlzLmtlZXBFbXB0eVZhbHVlcyxnPWEuaW5BcnJheShjLnRhcmdldCx0aGlzLmlucHV0cyksaD1nLTEsaT1nKzEsaj10aGlzLmlucHV0cy5sZW5ndGg7aWYoZyE9PS0xKXtpZihhLmVhY2godGhpcy5waWNrZXJzLGZ1bmN0aW9uKGEsYil7Yi5nZXRVVENEYXRlKCl8fGIhPT1kJiZmfHxiLnNldFVUQ0RhdGUoZSl9KSxlPHRoaXMuZGF0ZXNbaF0pZm9yKDtoPj0wJiZlPHRoaXMuZGF0ZXNbaF07KXRoaXMucGlja2Vyc1toLS1dLnNldFVUQ0RhdGUoZSk7ZWxzZSBpZihlPnRoaXMuZGF0ZXNbaV0pZm9yKDtpPGomJmU+dGhpcy5kYXRlc1tpXTspdGhpcy5waWNrZXJzW2krK10uc2V0VVRDRGF0ZShlKTt0aGlzLnVwZGF0ZURhdGVzKCksZGVsZXRlIHRoaXMudXBkYXRpbmd9fX19LGRlc3Ryb3k6ZnVuY3Rpb24oKXthLm1hcCh0aGlzLnBpY2tlcnMsZnVuY3Rpb24oYSl7YS5kZXN0cm95KCl9KSxhKHRoaXMuaW5wdXRzKS5vZmYoXCJjaGFuZ2VEYXRlXCIsdGhpcy5kYXRlVXBkYXRlZCksZGVsZXRlIHRoaXMuZWxlbWVudC5kYXRhKCkuZGF0ZXBpY2tlcn0scmVtb3ZlOmYoXCJkZXN0cm95XCIsXCJNZXRob2QgYHJlbW92ZWAgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMi4wLiBVc2UgYGRlc3Ryb3lgIGluc3RlYWRcIil9O3ZhciBtPWEuZm4uZGF0ZXBpY2tlcixuPWZ1bmN0aW9uKGMpe3ZhciBkPUFycmF5LmFwcGx5KG51bGwsYXJndW1lbnRzKTtkLnNoaWZ0KCk7dmFyIGU7aWYodGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKSxmPWIuZGF0YShcImRhdGVwaWNrZXJcIiksZz1cIm9iamVjdFwiPT10eXBlb2YgYyYmYztpZighZil7dmFyIGo9aCh0aGlzLFwiZGF0ZVwiKSxtPWEuZXh0ZW5kKHt9LG8saixnKSxuPWkobS5sYW5ndWFnZSkscD1hLmV4dGVuZCh7fSxvLG4saixnKTtiLmhhc0NsYXNzKFwiaW5wdXQtZGF0ZXJhbmdlXCIpfHxwLmlucHV0cz8oYS5leHRlbmQocCx7aW5wdXRzOnAuaW5wdXRzfHxiLmZpbmQoXCJpbnB1dFwiKS50b0FycmF5KCl9KSxmPW5ldyBsKHRoaXMscCkpOmY9bmV3IGsodGhpcyxwKSxiLmRhdGEoXCJkYXRlcGlja2VyXCIsZil9XCJzdHJpbmdcIj09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGZbY10mJihlPWZbY10uYXBwbHkoZixkKSl9KSxlPT09Ynx8ZSBpbnN0YW5jZW9mIGt8fGUgaW5zdGFuY2VvZiBsKXJldHVybiB0aGlzO2lmKHRoaXMubGVuZ3RoPjEpdGhyb3cgbmV3IEVycm9yKFwiVXNpbmcgb25seSBhbGxvd2VkIGZvciB0aGUgY29sbGVjdGlvbiBvZiBhIHNpbmdsZSBlbGVtZW50IChcIitjK1wiIGZ1bmN0aW9uKVwiKTtyZXR1cm4gZX07YS5mbi5kYXRlcGlja2VyPW47dmFyIG89YS5mbi5kYXRlcGlja2VyLmRlZmF1bHRzPXthc3N1bWVOZWFyYnlZZWFyOiExLGF1dG9jbG9zZTohMSxiZWZvcmVTaG93RGF5OmEubm9vcCxiZWZvcmVTaG93TW9udGg6YS5ub29wLGJlZm9yZVNob3dZZWFyOmEubm9vcCxiZWZvcmVTaG93RGVjYWRlOmEubm9vcCxiZWZvcmVTaG93Q2VudHVyeTphLm5vb3AsY2FsZW5kYXJXZWVrczohMSxjbGVhckJ0bjohMSx0b2dnbGVBY3RpdmU6ITEsZGF5c09mV2Vla0Rpc2FibGVkOltdLGRheXNPZldlZWtIaWdobGlnaHRlZDpbXSxkYXRlc0Rpc2FibGVkOltdLGVuZERhdGU6MS8wLGZvcmNlUGFyc2U6ITAsZm9ybWF0OlwibW0vZGQveXl5eVwiLGtlZXBFbXB0eVZhbHVlczohMSxrZXlib2FyZE5hdmlnYXRpb246ITAsbGFuZ3VhZ2U6XCJlblwiLG1pblZpZXdNb2RlOjAsbWF4Vmlld01vZGU6NCxtdWx0aWRhdGU6ITEsbXVsdGlkYXRlU2VwYXJhdG9yOlwiLFwiLG9yaWVudGF0aW9uOlwiYXV0b1wiLHJ0bDohMSxzdGFydERhdGU6LSgxLzApLHN0YXJ0VmlldzowLHRvZGF5QnRuOiExLHRvZGF5SGlnaGxpZ2h0OiExLHVwZGF0ZVZpZXdEYXRlOiEwLHdlZWtTdGFydDowLGRpc2FibGVUb3VjaEtleWJvYXJkOiExLGVuYWJsZU9uUmVhZG9ubHk6ITAsc2hvd09uRm9jdXM6ITAsekluZGV4T2Zmc2V0OjEwLGNvbnRhaW5lcjpcImJvZHlcIixpbW1lZGlhdGVVcGRhdGVzOiExLHRpdGxlOlwiXCIsdGVtcGxhdGVzOntsZWZ0QXJyb3c6XCImI3gwMEFCO1wiLHJpZ2h0QXJyb3c6XCImI3gwMEJCO1wifSxzaG93V2Vla0RheXM6ITB9LHA9YS5mbi5kYXRlcGlja2VyLmxvY2FsZV9vcHRzPVtcImZvcm1hdFwiLFwicnRsXCIsXCJ3ZWVrU3RhcnRcIl07YS5mbi5kYXRlcGlja2VyLkNvbnN0cnVjdG9yPWs7dmFyIHE9YS5mbi5kYXRlcGlja2VyLmRhdGVzPXtlbjp7ZGF5czpbXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxkYXlzU2hvcnQ6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdLGRheXNNaW46W1wiU3VcIixcIk1vXCIsXCJUdVwiLFwiV2VcIixcIlRoXCIsXCJGclwiLFwiU2FcIl0sbW9udGhzOltcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSxtb250aHNTaG9ydDpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCJdLHRvZGF5OlwiVG9kYXlcIixjbGVhcjpcIkNsZWFyXCIsdGl0bGVGb3JtYXQ6XCJNTSB5eXl5XCJ9fSxyPXt2aWV3TW9kZXM6W3tuYW1lczpbXCJkYXlzXCIsXCJtb250aFwiXSxjbHNOYW1lOlwiZGF5c1wiLGU6XCJjaGFuZ2VNb250aFwifSx7bmFtZXM6W1wibW9udGhzXCIsXCJ5ZWFyXCJdLGNsc05hbWU6XCJtb250aHNcIixlOlwiY2hhbmdlWWVhclwiLG5hdlN0ZXA6MX0se25hbWVzOltcInllYXJzXCIsXCJkZWNhZGVcIl0sY2xzTmFtZTpcInllYXJzXCIsZTpcImNoYW5nZURlY2FkZVwiLG5hdlN0ZXA6MTB9LHtuYW1lczpbXCJkZWNhZGVzXCIsXCJjZW50dXJ5XCJdLGNsc05hbWU6XCJkZWNhZGVzXCIsZTpcImNoYW5nZUNlbnR1cnlcIixuYXZTdGVwOjEwMH0se25hbWVzOltcImNlbnR1cmllc1wiLFwibWlsbGVubml1bVwiXSxjbHNOYW1lOlwiY2VudHVyaWVzXCIsZTpcImNoYW5nZU1pbGxlbm5pdW1cIixuYXZTdGVwOjFlM31dLHZhbGlkUGFydHM6L2RkP3xERD98bW0/fE1NP3x5eSg/Onl5KT8vZyxub25wdW5jdHVhdGlvbjovW14gLVxcLzotQFxcdTVlNzRcXHU2NzA4XFx1NjVlNVxcWy1gey1+XFx0XFxuXFxyXSsvZyxwYXJzZUZvcm1hdDpmdW5jdGlvbihhKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnRvVmFsdWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9EaXNwbGF5KXJldHVybiBhO3ZhciBiPWEucmVwbGFjZSh0aGlzLnZhbGlkUGFydHMsXCJcXDBcIikuc3BsaXQoXCJcXDBcIiksYz1hLm1hdGNoKHRoaXMudmFsaWRQYXJ0cyk7aWYoIWJ8fCFiLmxlbmd0aHx8IWN8fDA9PT1jLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRhdGUgZm9ybWF0LlwiKTtyZXR1cm57c2VwYXJhdG9yczpiLHBhcnRzOmN9fSxwYXJzZURhdGU6ZnVuY3Rpb24oYyxlLGYsZyl7ZnVuY3Rpb24gaChhLGIpe3JldHVybiBiPT09ITAmJihiPTEwKSxhPDEwMCYmKGErPTJlMyxhPihuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKStiJiYoYS09MTAwKSksYX1mdW5jdGlvbiBpKCl7dmFyIGE9dGhpcy5zbGljZSgwLGpbbl0ubGVuZ3RoKSxiPWpbbl0uc2xpY2UoMCxhLmxlbmd0aCk7cmV0dXJuIGEudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX1pZighYylyZXR1cm4gYjtpZihjIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gYztpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ci5wYXJzZUZvcm1hdChlKSksZS50b1ZhbHVlKXJldHVybiBlLnRvVmFsdWUoYyxlLGYpO3ZhciBqLGwsbSxuLG8scD17ZDpcIm1vdmVEYXlcIixtOlwibW92ZU1vbnRoXCIsdzpcIm1vdmVXZWVrXCIseTpcIm1vdmVZZWFyXCJ9LHM9e3llc3RlcmRheTpcIi0xZFwiLHRvZGF5OlwiKzBkXCIsdG9tb3Jyb3c6XCIrMWRcIn07aWYoYyBpbiBzJiYoYz1zW2NdKSwvXltcXC0rXVxcZCtbZG13eV0oW1xccyxdK1tcXC0rXVxcZCtbZG13eV0pKiQvaS50ZXN0KGMpKXtmb3Ioaj1jLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9naSksYz1uZXcgRGF0ZSxuPTA7bjxqLmxlbmd0aDtuKyspbD1qW25dLm1hdGNoKC8oW1xcLStdXFxkKykoW2Rtd3ldKS9pKSxtPU51bWJlcihsWzFdKSxvPXBbbFsyXS50b0xvd2VyQ2FzZSgpXSxjPWsucHJvdG90eXBlW29dKGMsbSk7cmV0dXJuIGsucHJvdG90eXBlLl96ZXJvX3V0Y190aW1lKGMpfWo9YyYmYy5tYXRjaCh0aGlzLm5vbnB1bmN0dWF0aW9uKXx8W107dmFyIHQsdSx2PXt9LHc9W1wieXl5eVwiLFwieXlcIixcIk1cIixcIk1NXCIsXCJtXCIsXCJtbVwiLFwiZFwiLFwiZGRcIl0seD17eXl5eTpmdW5jdGlvbihhLGIpe3JldHVybiBhLnNldFVUQ0Z1bGxZZWFyKGc/aChiLGcpOmIpfSxtOmZ1bmN0aW9uKGEsYil7aWYoaXNOYU4oYSkpcmV0dXJuIGE7Zm9yKGItPTE7YjwwOyliKz0xMjtmb3IoYiU9MTIsYS5zZXRVVENNb250aChiKTthLmdldFVUQ01vbnRoKCkhPT1iOylhLnNldFVUQ0RhdGUoYS5nZXRVVENEYXRlKCktMSk7cmV0dXJuIGF9LGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zZXRVVENEYXRlKGIpfX07eC55eT14Lnl5eXkseC5NPXguTU09eC5tbT14Lm0seC5kZD14LmQsYz1kKCk7dmFyIHk9ZS5wYXJ0cy5zbGljZSgpO2lmKGoubGVuZ3RoIT09eS5sZW5ndGgmJih5PWEoeSkuZmlsdGVyKGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuaW5BcnJheShjLHcpIT09LTF9KS50b0FycmF5KCkpLGoubGVuZ3RoPT09eS5sZW5ndGgpe3ZhciB6O2ZvcihuPTAsej15Lmxlbmd0aDtuPHo7bisrKXtpZih0PXBhcnNlSW50KGpbbl0sMTApLGw9eVtuXSxpc05hTih0KSlzd2l0Y2gobCl7Y2FzZVwiTU1cIjp1PWEocVtmXS5tb250aHMpLmZpbHRlcihpKSx0PWEuaW5BcnJheSh1WzBdLHFbZl0ubW9udGhzKSsxO2JyZWFrO2Nhc2VcIk1cIjp1PWEocVtmXS5tb250aHNTaG9ydCkuZmlsdGVyKGkpLHQ9YS5pbkFycmF5KHVbMF0scVtmXS5tb250aHNTaG9ydCkrMX12W2xdPXR9dmFyIEEsQjtmb3Iobj0wO248dy5sZW5ndGg7bisrKUI9d1tuXSxCIGluIHYmJiFpc05hTih2W0JdKSYmKEE9bmV3IERhdGUoYykseFtCXShBLHZbQl0pLGlzTmFOKEEpfHwoYz1BKSl9cmV0dXJuIGN9LGZvcm1hdERhdGU6ZnVuY3Rpb24oYixjLGQpe2lmKCFiKXJldHVyblwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGMmJihjPXIucGFyc2VGb3JtYXQoYykpLGMudG9EaXNwbGF5KXJldHVybiBjLnRvRGlzcGxheShiLGMsZCk7dmFyIGU9e2Q6Yi5nZXRVVENEYXRlKCksRDpxW2RdLmRheXNTaG9ydFtiLmdldFVUQ0RheSgpXSxERDpxW2RdLmRheXNbYi5nZXRVVENEYXkoKV0sbTpiLmdldFVUQ01vbnRoKCkrMSxNOnFbZF0ubW9udGhzU2hvcnRbYi5nZXRVVENNb250aCgpXSxNTTpxW2RdLm1vbnRoc1tiLmdldFVUQ01vbnRoKCldLHl5OmIuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cmluZygyKSx5eXl5OmIuZ2V0VVRDRnVsbFllYXIoKX07ZS5kZD0oZS5kPDEwP1wiMFwiOlwiXCIpK2UuZCxlLm1tPShlLm08MTA/XCIwXCI6XCJcIikrZS5tLGI9W107Zm9yKHZhciBmPWEuZXh0ZW5kKFtdLGMuc2VwYXJhdG9ycyksZz0wLGg9Yy5wYXJ0cy5sZW5ndGg7Zzw9aDtnKyspZi5sZW5ndGgmJmIucHVzaChmLnNoaWZ0KCkpLGIucHVzaChlW2MucGFydHNbZ11dKTtyZXR1cm4gYi5qb2luKFwiXCIpfSxoZWFkVGVtcGxhdGU6Jzx0aGVhZD48dHI+PHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJkYXRlcGlja2VyLXRpdGxlXCI+PC90aD48L3RyPjx0cj48dGggY2xhc3M9XCJwcmV2XCI+JytvLnRlbXBsYXRlcy5sZWZ0QXJyb3crJzwvdGg+PHRoIGNvbHNwYW49XCI1XCIgY2xhc3M9XCJkYXRlcGlja2VyLXN3aXRjaFwiPjwvdGg+PHRoIGNsYXNzPVwibmV4dFwiPicrby50ZW1wbGF0ZXMucmlnaHRBcnJvdytcIjwvdGg+PC90cj48L3RoZWFkPlwiLFxuY29udFRlbXBsYXRlOic8dGJvZHk+PHRyPjx0ZCBjb2xzcGFuPVwiN1wiPjwvdGQ+PC90cj48L3Rib2R5PicsZm9vdFRlbXBsYXRlOic8dGZvb3Q+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwidG9kYXlcIj48L3RoPjwvdHI+PHRyPjx0aCBjb2xzcGFuPVwiN1wiIGNsYXNzPVwiY2xlYXJcIj48L3RoPjwvdHI+PC90Zm9vdD4nfTtyLnRlbXBsYXRlPSc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlclwiPjxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRheXNcIj48dGFibGUgY2xhc3M9XCJ0YWJsZS1jb25kZW5zZWRcIj4nK3IuaGVhZFRlbXBsYXRlK1wiPHRib2R5PjwvdGJvZHk+XCIrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItbW9udGhzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZSsnPC90YWJsZT48L2Rpdj48ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci15ZWFyc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGVjYWRlc1wiPjx0YWJsZSBjbGFzcz1cInRhYmxlLWNvbmRlbnNlZFwiPicrci5oZWFkVGVtcGxhdGUrci5jb250VGVtcGxhdGUrci5mb290VGVtcGxhdGUrJzwvdGFibGU+PC9kaXY+PGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY2VudHVyaWVzXCI+PHRhYmxlIGNsYXNzPVwidGFibGUtY29uZGVuc2VkXCI+JytyLmhlYWRUZW1wbGF0ZStyLmNvbnRUZW1wbGF0ZStyLmZvb3RUZW1wbGF0ZStcIjwvdGFibGU+PC9kaXY+PC9kaXY+XCIsYS5mbi5kYXRlcGlja2VyLkRQR2xvYmFsPXIsYS5mbi5kYXRlcGlja2VyLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kYXRlcGlja2VyPW0sdGhpc30sYS5mbi5kYXRlcGlja2VyLnZlcnNpb249XCIxLjguMFwiLGEuZm4uZGF0ZXBpY2tlci5kZXByZWNhdGVkPWZ1bmN0aW9uKGEpe3ZhciBiPXdpbmRvdy5jb25zb2xlO2ImJmIud2FybiYmYi53YXJuKFwiREVQUkVDQVRFRDogXCIrYSl9LGEoZG9jdW1lbnQpLm9uKFwiZm9jdXMuZGF0ZXBpY2tlci5kYXRhLWFwaSBjbGljay5kYXRlcGlja2VyLmRhdGEtYXBpXCIsJ1tkYXRhLXByb3ZpZGU9XCJkYXRlcGlja2VyXCJdJyxmdW5jdGlvbihiKXt2YXIgYz1hKHRoaXMpO2MuZGF0YShcImRhdGVwaWNrZXJcIil8fChiLnByZXZlbnREZWZhdWx0KCksbi5jYWxsKGMsXCJzaG93XCIpKX0pLGEoZnVuY3Rpb24oKXtuLmNhbGwoYSgnW2RhdGEtcHJvdmlkZT1cImRhdGVwaWNrZXItaW5saW5lXCJdJykpfSl9KTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMC4gfCBEYXZpZCBBbm5lYmljcXVlIHwgSVVUIGRlIFRyb3llcyAgLSBBbGwgUmlnaHRzIFJlc2VydmVkXG4vLyBAZmlsZSAvVXNlcnMvZGF2aWRhbm5lYmljcXVlL2h0ZG9jcy9pbnRyYW5ldFYzL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwLWRhdGVwaWNrZXIvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanNcbi8vIEBhdXRob3IgZGF2aWRhbm5lYmljcXVlXG4vLyBAcHJvamVjdCBpbnRyYW5ldFYzXG4vLyBAbGFzdFVwZGF0ZSAxNy8wOC8yMDIwIDE0OjIwXG5cbiFmdW5jdGlvbihhKXthLmZuLmRhdGVwaWNrZXIuZGF0ZXMuZnI9e2RheXM6W1wiZGltYW5jaGVcIixcImx1bmRpXCIsXCJtYXJkaVwiLFwibWVyY3JlZGlcIixcImpldWRpXCIsXCJ2ZW5kcmVkaVwiLFwic2FtZWRpXCJdLGRheXNTaG9ydDpbXCJkaW0uXCIsXCJsdW4uXCIsXCJtYXIuXCIsXCJtZXIuXCIsXCJqZXUuXCIsXCJ2ZW4uXCIsXCJzYW0uXCJdLGRheXNNaW46W1wiZFwiLFwibFwiLFwibWFcIixcIm1lXCIsXCJqXCIsXCJ2XCIsXCJzXCJdLG1vbnRoczpbXCJqYW52aWVyXCIsXCJmw6l2cmllclwiLFwibWFyc1wiLFwiYXZyaWxcIixcIm1haVwiLFwianVpblwiLFwianVpbGxldFwiLFwiYW/Du3RcIixcInNlcHRlbWJyZVwiLFwib2N0b2JyZVwiLFwibm92ZW1icmVcIixcImTDqWNlbWJyZVwiXSxtb250aHNTaG9ydDpbXCJqYW52LlwiLFwiZsOpdnIuXCIsXCJtYXJzXCIsXCJhdnJpbFwiLFwibWFpXCIsXCJqdWluXCIsXCJqdWlsLlwiLFwiYW/Du3RcIixcInNlcHQuXCIsXCJvY3QuXCIsXCJub3YuXCIsXCJkw6ljLlwiXSx0b2RheTpcIkF1am91cmQnaHVpXCIsbW9udGhzVGl0bGU6XCJNb2lzXCIsY2xlYXI6XCJFZmZhY2VyXCIsd2Vla1N0YXJ0OjEsZm9ybWF0OlwiZGQvbW0veXl5eVwifX0oalF1ZXJ5KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
