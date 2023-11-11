Ext.define('MyExtGenApp.view.main.detail2.DetailView2', {
    extend: 'Ext.Container',
    xtype: 'detailview2',
    layout: 'vbox',
    style: 'background-color: #0001;',
    items: [
        {
            xtype: 'container',
            style: 'background-color: #f5f5f5; border: 3px solid #17851B; border-radius: 8px; display: flex; flex-direction: column; flex: 1; margin: 8px auto; padding: 8px; min-width: 400px;',
            layout: 'vbox',
            items: [
                {
                    xtype: 'component',
                    html: '<h3>Lägg till ny kund</h3>',
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
                                    queryMode: 'local',
                                    editable: false,
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
                            text: 'Lägg till',
                            flex: 1,
                            margin: 16,
                            style: 'background-color: #17851B; color: #fff; border-radius: 4px;',
                            handler: function () {
                                // Hämta detailView2 instansen
                                var detailView2 =
                                    Ext.ComponentQuery.query('detailview2')[0];

                                // Hämta input data från textfält och combobox
                                var firstName = detailView2
                                    .down('textfield[placeholder="Förnamn..."]')
                                    .getValue();
                                var lastName = detailView2
                                    .down(
                                        'textfield[placeholder="Efternamn..."]'
                                    )
                                    .getValue();
                                var company = detailView2
                                    .down('combobox')
                                    .getValue();

                                // Skapa ett kund objekt med input data från textfält och combobox samt ett unikt ID och dagens datum
                                var newPerson = {
                                    id: Date.now().toString(), // Datum nanosekunder som ID
                                    createdAt: new Date().toLocaleDateString(), // Formatera datum till ISO format
                                    firstName: firstName,
                                    lastName: lastName,
                                    company: company,
                                };

                                // Skicka en POST request till servern med det nya kund objektet
                                Ext.Ajax.request({
                                    url: 'http://localhost:3000/items',
                                    method: 'POST',
                                    jsonData: newPerson,
                                    success: function (response) {
                                        console.log('Data added successfully');
                                    },
                                    failure: function (response) {
                                        console.log(
                                            'An error occurred: ' +
                                                response.responseText
                                        );
                                    },
                                });
                            },
                        },
                        {
                            xtype: 'button',
                            text: 'Avbryt',
                            flex: 1,
                            margin: 16,
                            style: 'background-color: #ff0000; color: #fff; border-radius: 4px;',
                            handler: function () {
                                // Hämta mainView instansen
                                var mainView =
                                    Ext.ComponentQuery.query('mainview')[0];
                                // Hämta mainView instansens viewModel
                                var vm = mainView.getViewModel();
                                // Sätt detail2Collapsed till true
                                vm.set('detail2Collapsed', true);
                            },
                        },
                    ],
                },
            ],
        },
    ],
});
