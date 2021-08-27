Ext.define('modern-tunes.view.main.MainView', {
  //extend: 'Ext.Container',
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',

  requires: [
    'modern-tunes.view.main.MainViewController',
    'modern-tunes.view.main.MainViewModel',
    'modern-tunes.view.TunesView'
  ],


  controller: 'mainviewcontroller',

  viewModel: {
    type: 'mainviewmodel'
  },
  tabBarPosition: 'bottom',
  items: [{
    title: "Thumbnails",
    //html: '<h1>tunes view</h1'
    xtype: 'tunesview',
    listeners: {
      select: 'onThumbSelect'
  },
    bind: {
      store: '{tunes}'
   }
}, {
    title: "Grid",
    //html: '<h1>tunes grid</h1>'
    listeners: {
      select: 'onGridSelect'
  },
    xtype: 'tunesgrid',
    bind: {
      store: '{tunes}'
  }
}]
  // items: [
  //   {
  //     xtype: 'component',
  //     html: '<a style="font-size:24px" target="_blank" href="https://docs-devel.sencha.com/extjs/7.0.0-CE/guides/quick_start/What_You_Will_Be_Coding.html">Quick Start Tutorial Here</a><p>'
  //   },
  //   {
  //     xtype: 'displayfield',
  //     reference: 'df',
  //     bind: {
  //       value: '{clickTime}'
  //     }
  //   },
  //   {
  //     xtype: 'button',
  //     text: 'Click Me!',
  //     handler: 'onButtonClick'
  //   }
  // ]
})
