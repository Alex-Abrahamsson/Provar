Ext.define('MyExtGenApp.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: {
        type: 'mainviewmodel',
    },
    requires: ['Ext.layout.Fit'],
    layout: 'fit',
    items: [
        {
            xtype: 'navview',
            reference: 'navview',
            style: 'background-color: #17851B;',
            docked: 'left',
            bind: { width: '{navview_width}' },
            listeners: { select: 'onMenuViewSelectionChange' },
        },
        {
            xtype: 'headerview',
            reference: 'headerview',
            style: 'background-color: #17851B;',
            docked: 'top',
            bind: { height: '{headerview_height}' },
        },
        {
            xtype: 'footerview',
            reference: 'footerview',
            style: 'background-color: #17851B;',
            docked: 'bottom',
            bind: { height: '{footerview_height}' },
        },
        { xtype: 'centerview', reference: 'centerview' },
        {
            xtype: 'detailview',
            reference: 'detailview',
            style: 'background-color: #0001; border: none',
            docked: 'right',
            bind: { width: '{detailview_width}' },
        },
    ],
});
