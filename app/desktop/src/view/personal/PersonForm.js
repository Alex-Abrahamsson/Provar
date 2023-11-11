Ext.define('MyExtGenApp.view.personal.PersonForm', {
    extend: 'Ext.form.Panel',
    xtype: 'personform',
    title: 'Add New Person',
    bodyPadding: 10,
    width: 350,
    items: [
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
                            html: '<p>Förnamn: </p>'
                        },
                        {
                            xtype: 'textfield',
                            placeholder: 'Förnamn...',
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'component',
                            html: '<p>Efternamn: </p>'
                        },
                        {
                            xtype: 'textfield',
                            placeholder: 'Efternamn...',
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'component',
                            html: '<p>Företag: </p>'
                        },
                        {
                            xtype: 'combobox',
                            store: {
                                data: [
                                    {company: 'Oklart'},
                                    {company: 'Goodle'},
                                    {company: 'Apple'},
                                    {company: 'Intel'},
                                    {company: 'Nvidia'},
                                    {company: 'Epic'},
                                    {company: 'Blizzard'},
                                    {company: 'Gavlegårdarna'},
                                    {company: 'Balder'},
                                    {company: 'Sbab'},
                                    {company: 'SEB'}
                                ]
                            },
                            displayField: 'company',
                            valueField: 'company',
                            queryMode: 'local',
                            editable: false,
                        }
                    ]
                }
            ]

        }
    ],
    buttons: [
        {
            text: 'Save',
            formBind: true,
            handler: async function() {
                // save data from form
                const form = this.up('panel').getForm();
            }
        },
        {
            text: 'Cancel',
            handler: function() {
                this.up('panel').destroy();
            }
        }
    ]
});