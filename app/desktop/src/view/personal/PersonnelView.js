Ext.require('MyExtGenApp.view.personal.PersonForm');

Ext.define('MyExtGenApp.view.personnel.PersonnelView',{
    extend: 'Ext.Panel',
    xtype: 'personnelview',
    cls: 'personnelview',
    controller: {type: 'personnelviewcontroller'},
    layout: 'fit',
    items: [{
        xtype: 'grid',
        itemId: 'personnelGrid',
        requires: ['Ext.grid.rowedit.Plugin'],
        viewModel: {type: 'personnelviewmodel'},
        store: {type: 'personnelviewstore'},
        grouped: true,
        groupFooter: {
            xtype: 'gridsummaryrow'
        },
        plugins: {
            rowedit: {
                autoConfirm: false
            }
        },
        columns: [
            {
                text: 'ID',
                dataIndex: 'id',
                editable: true,
                width: 50,
                cell: {userCls: 'bold'}
            },
            {
                text: 'Förnamn',
                dataIndex: 'firstName',
                editable: true,
                width: 100
            },
            {
                text: 'Efternamn',
                dataIndex: 'lastName',
                editable: true,
                width: 150
            },
            {
                text: 'Företag',
                dataIndex: 'company',
                editable: true,
                width: 150
            },
            {
                text: 'Skapad',
                dataIndex: 'createdAt',
                editable: true,
                width: 100
            }
        ],
        listeners: {
            select: 'onItemSelected'
        }
    }],
    tbar: [
        {
            text: 'Lägg till ny kund',
            handler: function() {
                // Create a new instance of the form
                var form = Ext.create('MyExtGenApp.view.personal.PersonForm', {
                    floating: true,
                    modal: true,
                    centered: true
                });

                // Add the form to the application's viewport
                Ext.Viewport.add(form);
    
                // Show the form
                form.show();
            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Search...',
            triggers: {
                search: {
                    cls: 'x-fa fa-search',
                }
            },
            listeners: {
                change: function(field, newValue) {
                    // handle search onInput change by filtering the store items.
                    var grid = Ext.ComponentQuery.query('#personnelGrid')[0];
                    grid.getStore().clearFilter(true);
                    grid.getStore().filterBy(function(record) {
                        return record.get('firstName').toLowerCase().includes(newValue.toLowerCase()) ||
                                record.get('company').toLowerCase().includes(newValue.toLowerCase()) ||
                                record.get('lastName').toLowerCase().includes(newValue.toLowerCase());
                    });
                }
            }
        }
    ]
});
