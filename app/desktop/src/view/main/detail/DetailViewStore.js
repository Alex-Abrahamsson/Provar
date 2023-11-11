Ext.define('MyExtGenApp.view.main.detail.DetailViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.detailViewStore',
    fields: ['name', 'location'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/companies.json',
        reader: {
            type: 'json',
            rootProperty: 'company'
        }
    }
});