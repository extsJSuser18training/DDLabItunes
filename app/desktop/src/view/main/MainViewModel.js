// Ext.define('modern-tunes.view.main.MainViewModel', {
//   extend: 'Ext.app.ViewModel',
//   alias: 'viewmodel.mainviewmodel',
//   data: {
//     clickTime : Date.now()
//   },
//   stores: {
//   }
// })

Ext.define('modern-tunes.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  requires: [
      'modern-tunes.model.Tune'
      ],
  stores: {
      tunes: {
          model: 'modern-tunes.model.Tune',
          autoLoad: true,
          sorters: ['artist', 'title']
      }
  }

})