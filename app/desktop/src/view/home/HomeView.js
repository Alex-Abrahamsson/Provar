Ext.define('MyExtGenApp.view.home.HomeView', {
    xtype: 'homeview',
    cls: 'homeview',
    controller: { type: 'homeviewcontroller' },
    viewModel: { type: 'homeviewmodel' },
    requires: ['Ext.List'],
    extend: 'Ext.Container',
    scrollable: true,
    layout: 'vbox', // Adjust the layout to vertical box

    items: [{
        xtype: 'list',
        itemTpl: '<div>{name}</div>',
        store: {
            fields: ['name'],
            data: [
                { name: 'John Doe' },
                { name: 'Jane Doe' },
				{ name: 'Jimmy Doe' },
				{ name: 'Jenny Doe' },
				{ name: 'Jerry Doe' },
				{ name: 'Jill Doe' },
				{ name: 'Jack Doe' },
				{ name: 'Jesse Doe' },
				{ name: 'Jared Doe' },
				{ name: 'Jody Doe' },
				{ name: 'Jules Doe' },
				{ name: 'Judy Doe' },
				{ name: 'Julie Doe' },
				{ name: 'Jenna Doe' },
				{ name: 'Jasmine Doe' },
				{ name: 'Jocelyn Doe' },
				{ name: 'Jolene Doe' },
				{ name: 'Jade Doe' },
            ]
        }
    }, {
        xtype: 'container',
    }]
});