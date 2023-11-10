Ext.define('MyExtGenApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { firstName: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },

    // Kör denna function när man "selectar" en rad i tabellen
    onItemSelected: function (sender, record) {
        var detailView = Ext.ComponentQuery.query('detailview')[0];
        detailView.setData(record[0].data);
    },
});
