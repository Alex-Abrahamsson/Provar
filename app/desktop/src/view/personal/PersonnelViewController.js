Ext.define('MyExtGenApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    // Kör denna function när man "selectar" en rad i tabellen
    onItemSelected: (sender, record) => {
        var detailView = Ext.ComponentQuery.query('detailview')[0];
        detailView.getViewModel().set('selectedPerson', record[0].data);
        console.log('selectedPerson', record[0].data);
    },
});
