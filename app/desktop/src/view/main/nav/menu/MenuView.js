Ext.define('MyExtGenApp.view.nav.menu.MenuView', {
    extend: 'Ext.list.Tree',
    xtype: 'menuview',
    style: 'background-color: #17851B;',
    viewModel: {},
    ui: 'nav',
    requires: [
        'Ext.data.TreeStore',
    ],
    scrollable: true,
    bind: { 
        store: '{menu}', 
        micro: '{navCollapsed}' 
    },
    expanderFirst: false,
    expanderOnly: false
});
