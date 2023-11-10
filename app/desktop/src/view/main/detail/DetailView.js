Ext.define('MyExtGenApp.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  items: [
    {
        xtype: 'component',
        bind: {
            html: '<h3>{selectedPerson.firstName} {selectedPerson.lastName}</h3>'
        }
    }
  ]
})