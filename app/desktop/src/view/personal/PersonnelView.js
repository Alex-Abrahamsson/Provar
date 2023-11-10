Ext.define('MyExtGenApp.view.personnel.PersonnelView',{
    extend: 'Ext.grid.Grid',
    xtype: 'personnelview',
    cls: 'personnelview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'personnelviewcontroller'},
    viewModel: {type: 'personnelviewmodel'},
    store: {type: 'personnelviewstore'},
    bind: {
        selection: '{selectedPerson}'
    },
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
        canceledit: 'onEditCancelled',
        select: 'onItemSelected'
    }
});
