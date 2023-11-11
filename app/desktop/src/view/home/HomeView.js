Ext.define('MyExtGenApp.view.home.HomeView', {
    xtype: 'homeview',
    cls: 'homeview',
    controller: { type: 'homeviewcontroller' },
    viewModel: { type: 'homeviewmodel' },
    extend: 'Ext.Container',
    scrollable: true,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }, 

    items: [{
        xtype: 'container',
        html: '<h2>Detta var en testsida för komponenter</h2>'
    }]
});