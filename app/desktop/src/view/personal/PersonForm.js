Ext.define('MyExtGenApp.view.personal.PersonForm', {
    extend: 'Ext.form.Panel',
    xtype: 'personform',
    alias: 'widget.personform',
    title: 'Add New Person',
    bodyPadding: 10,
    width: 350,
    items: [
        {
            xtype: 'textfield',
            name: 'firstName',
            fieldLabel: 'Förnamn'
        },
        {
            xtype: 'textfield',
            name: 'lastName',
            fieldLabel: 'Efternamn'
        },
        {
            xtype: 'combobox',
            name: 'company',
            fieldLabel: 'Företag',
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
            editable: false
        }
    ],
    buttons: [
        {
            text: 'Save',
            formBind: true,
            handler: function() {
                var form = this.up('#myFormContainer').down('form');
                if (form) {
                    var formInstance = form.getForm();
                    if (formInstance) {
                        // Rest of the code
                    } else {
                        console.error('Form instance not found');
                    }
                } else {
                    console.error('Form container not found');
                }
            }
        },
        {
            text: 'Cancel',
            handler: function() {
                this.up('panel').destroy();
            }
        }
    ]
})