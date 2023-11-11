Ext.define('MyExtGenApp.view.main.detail.DetailView', {
  extend: 'Ext.Container',
  xtype: 'detailview',
  layout: 'vbox',
  viewModel: {
    data: {
        selectedPerson: null
    }
  },
  items: [
      {
          xtype: 'container',
          style: 'border: 1px solid black; display: flex; flex-direction: column; flex: 1; margin: 16px; padding: 16px;',
          layout: 'vbox',
          items: [
              {
                  xtype: 'component',
                  html: '<div class="detailview-header-title"><h3>Kunduppgifter</h3></div>'
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
                                  html: '<p>Förnamn: </p>'
                              },
                              {
                                  xtype: 'textfield',
                                  placeholder: 'Förnamn...',
                                  bind: '{selectedPerson.firstName}'
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
                                  bind: '{selectedPerson.lastName}'
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
                                valueField: 'company',
                                displayField: 'company',
                                bind: '{selectedPerson.company}',
                                queryMode: 'local',
                                editable: false,
                                listeners: {
                                    select: (combo, record, eOpts) => {
                                    var detailView = Ext.ComponentQuery.query('detailview')[0];
                                    detailView.getViewModel().set('selectedPerson.company', record.data.company);
                                  }
                                }
                            }
                          ]
                      }
                  ]
              },
              {
                  xtype: 'container',
                  layout: 'hbox',
                  items: [
                    {
                      xtype: 'button',
                      text: 'Spara',
                      handler: function() {
                        var detailView = Ext.ComponentQuery.query('detailview')[0];
                        var selectedPerson = detailView.getViewModel().get('selectedPerson');
                
                        // Send a PUT request to the server with the updated data
                        Ext.Ajax.request({
                            url: 'http://localhost:3000/items/' + selectedPerson.id,
                            method: 'PUT',
                            jsonData: selectedPerson,
                            success: function(response) {
                                console.log('Data updated successfully');
                            },
                            failure: function(response) {
                                console.log('An error occurred: ' + response.responseText);
                            }
                        });
                      }
                    },
                    {
                      xtype: 'button',
                      text: 'Ta bort',
                      handler: function() {
                          var detailView = Ext.ComponentQuery.query('detailview')[0];
                          var selectedPerson = detailView.getViewModel().get('selectedPerson');
                  
                          // Send a DELETE request to the server
                          Ext.Ajax.request({
                              url: 'http://localhost:3000/items/' + selectedPerson.id,
                              method: 'DELETE',
                              success: function(response) {
                                  console.log('Person deleted successfully');
                              },
                              failure: function(response) {
                                  console.log('An error occurred: ' + response.responseText);
                              }
                          });
                      }
                  }
                  ]
              }
          ]
      }
  ]
});