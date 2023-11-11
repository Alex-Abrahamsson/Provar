Ext.define('MyExtGenApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'id', 'firstName', 'lastName', 'company', 'createdAt'
    ],
    groupField: 'dept',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/data.json',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
