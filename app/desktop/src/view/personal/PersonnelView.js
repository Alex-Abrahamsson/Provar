Ext.define('MyExtGenApp.view.personnel.PersonnelView', {
    extend: 'Ext.Panel',
    xtype: 'personnelview',
    cls: 'personnelview',
    controller: { type: 'personnelviewcontroller' },
    layout: 'fit',
    items: [
        {
            xtype: 'grid',
            itemId: 'personnelGrid',
            requires: ['Ext.grid.rowedit.Plugin'],
            viewModel: { type: 'personnelviewmodel' },
            store: { type: 'personnelviewstore' },
            grouped: true,
            style: 'background-color: #0001;',
            groupFooter: {
                xtype: 'gridsummaryrow',
            },
            plugins: {
                rowedit: {
                    autoConfirm: false,
                },
            },
            columns: [
                {
                    text: 'ID',
                    dataIndex: 'id',
                    editable: true,
                    width: 50,
                    cell: { userCls: 'bold' },
                },
                {
                    text: 'Förnamn',
                    dataIndex: 'firstName',
                    editable: true,
                    width: 100,
                },
                {
                    text: 'Efternamn',
                    dataIndex: 'lastName',
                    editable: true,
                    width: 150,
                },
                {
                    text: 'Företag',
                    dataIndex: 'company',
                    editable: true,
                    width: 150,
                },
                {
                    text: 'Skapad',
                    dataIndex: 'createdAt',
                    editable: true,
                    width: 100,
                },
            ],
            listeners: {
                select: 'onItemSelected',
            },
        },
    ],
    tbar: [
        {
            text: 'Lägg till ny kund',
            style: 'background-color: #17851B; color: #fff; border-radius: 4px;',
            handler: 'handleAddNewCustomer',
        },
        '->',
        {
            xtype: 'textfield',
            emptyText: 'Search...',
            style: 'margin: 0 16px; background-color: #0001; border-radius: 4px; padding: 4px 0 4px 4px;',
            triggers: {
                search: {
                    cls: 'x-fa fa-search',
                },
            },
            listeners: {
                change: function (field, newValue) {
                    // Hanterar sökningen direkt onChange, (Bör kanske ligga en debounce på detta) 
                    let grid = Ext.ComponentQuery.query('#personnelGrid')[0];
                    grid.getStore().clearFilter(true);
                    grid.getStore().filterBy(function (record) {
                        let firstName = record.get('firstName');
                        let company = record.get('company');
                        let lastName = record.get('lastName');
                
                        return (
                            (firstName ? firstName.toLowerCase().includes(newValue.toLowerCase()) : false) ||
                            (company ? company.toLowerCase().includes(newValue.toLowerCase()) : false) ||
                            (lastName ? lastName.toLowerCase().includes(newValue.toLowerCase()) : false)
                        );
                    });
                },
            },
        },
    ],
});
