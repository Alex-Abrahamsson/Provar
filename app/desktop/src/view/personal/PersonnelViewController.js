Ext.define('MyExtGenApp.view.personnel.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personnelviewcontroller',

    // Kör denna function när man "selectar" en rad i tabellen
    onItemSelected: (sender, record) => {
        let detailView = Ext.ComponentQuery.query('detailview')[0];
        detailView.getViewModel().set('selectedPerson', record[0].data);

        // Hämta mainViewController för att öppna detailview när man väljer nån i listan
        let mainViewController = Ext.ComponentQuery.query('mainview')[0]
            .getController();
        mainViewController.onItemSelectedShowDetail();
    },

    // Skickar igenom här bara för arr komma åt mainViewController
    handleAddNewCustomer: function() {
        let mainViewController = Ext.ComponentQuery.query('mainview')[0]
            .getController();
        mainViewController.onAddNewCustomer();
    }
});
