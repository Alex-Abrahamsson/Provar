Ext.define('MyExtGenApp.view.main.detail.DetailView', {
    extend: 'Ext.Container',
    xtype: 'detailview',
    style: 'background-color: #0001;',
    layout: 'vbox',
    viewModel: {
        data: {
            selectedPerson: null,
        },
    },
    items: [
        {
            xtype: 'container',
            style: 'background-color: #f5f5f5; border: 3px solid #17851B; border-radius: 8px; display: flex; flex-direction: column; flex: 1; max-height: 300px; margin: auto 16px; padding: 8px;',
            layout: 'vbox',
            items: [
                {
                    xtype: 'component',
                    html: '<h3>Kunduppgifter</h3>',
                },
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'component',
                                    width: '15%',
                                    html: '<p>Förnamn: </p>',
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    style: 'margin: 4px 16px; background-color: #0001; border-radius: 4px; padding: 0 0 0 4px;',
                                    placeholder: 'Förnamn...',
                                    bind: '{selectedPerson.firstName}',
                                },
                            ],
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'component',
                                    width: '15%',
                                    html: '<p>Efternamn: </p>',
                                },
                                {
                                    xtype: 'textfield',
                                    flex: 1,
                                    style: 'margin: 4px 16px; background-color: #0001; border-radius: 4px; padding: 0 0 0 4px;',
                                    placeholder: 'Efternamn...',
                                    bind: '{selectedPerson.lastName}',
                                },
                            ],
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            items: [
                                {
                                    xtype: 'component',
                                    width: '15%',
                                    html: '<p>Företag: </p>',
                                },
                                {
                                    xtype: 'combobox',
                                    flex: 1,
                                    style: 'margin: 4px 16px; background-color: #0001; border-radius: 4px; padding: 0 0 0 4px;',
                                    store: {
                                        data: [
                                            { company: 'Oklart' },
                                            { company: 'Goodle' },
                                            { company: 'Apple' },
                                            { company: 'Intel' },
                                            { company: 'Nvidia' },
                                            { company: 'Epic' },
                                            { company: 'Blizzard' },
                                            { company: 'Gavlegårdarna' },
                                            { company: 'Balder' },
                                            { company: 'Sbab' },
                                            { company: 'SEB' },
                                        ],
                                    },
                                    valueField: 'company',
                                    displayField: 'company',
                                    bind: '{selectedPerson.company}',
                                    queryMode: 'local',
                                    editable: false,
                                    listeners: {
                                        select: (combo, record, eOpts) => {
                                            var detailView =
                                                Ext.ComponentQuery.query(
                                                    'detailview'
                                                )[0];
                                            detailView
                                                .getViewModel()
                                                .set(
                                                    'selectedPerson.company',
                                                    record.data.company
                                                );
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Spara',
                            flex: 1,
                            margin: 16,
                            style: 'background-color: #17851B; color: #fff; border-radius: 4px;',
                            handler: function () {
                                var detailView =
                                    Ext.ComponentQuery.query('detailview')[0];
                                var selectedPerson = detailView
                                    .getViewModel()
                                    .get('selectedPerson');

                                // Skickar en PUT med den uppdaterade datan till json-servern
                                Ext.Ajax.request({
                                    url:
                                        'http://localhost:3000/items/' +
                                        selectedPerson.id,
                                    method: 'PUT',
                                    jsonData: selectedPerson,
                                    success: function (response) {
                                        console.log(
                                            'Data updated successfully'
                                        );
                                    },
                                    failure: function (response) {
                                        console.log('Är json-server igång?');
                                        console.log(
                                            'Det blev ett fel: ' +
                                                response.responseText
                                        );
                                    },
                                });
                            },
                        },
                        {
                            xtype: 'button',
                            text: 'Ta bort',
                            flex: 1,
                            margin: 16,
                            style: 'background-color: #ff0000; color: #fff; border-radius: 4px;',
                            handler: function () {
                                var detailView =
                                    Ext.ComponentQuery.query('detailview')[0];
                                var selectedPerson = detailView
                                    .getViewModel()
                                    .get('selectedPerson');

                                // Visa en bekräftelse-dialog
                                Ext.Msg.confirm(
                                    'Bekräfta',
                                    'Är du säker att du vill ta bort personen?',
                                    function (choice) {
                                        if (choice === 'yes') {
                                            // Om yes, Skicka en DELETE till json-servern
                                            Ext.Ajax.request({
                                                url:
                                                    'http://localhost:3000/items/' +
                                                    selectedPerson.id,
                                                method: 'DELETE',
                                                success: function (response) {
                                                    console.log(
                                                        'Person deleted successfully'
                                                    );
                                                },
                                                failure: function (response) {
                                                    console.log(
                                                        'An error occurred: ' +
                                                            response.responseText
                                                    );
                                                },
                                            });
                                        }
                                    }
                                );
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
