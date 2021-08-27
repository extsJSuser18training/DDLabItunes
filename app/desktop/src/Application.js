Ext.define('modern-tunes.Application', {
  extend: 'Ext.app.Application',
  name: 'modern-tunes',
  requires: ['modern-tunes.*'],

  launch: function () {
    Ext.Viewport.add([{xtype: 'mainview'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
