// Ext.define('MyExtGenApp.view.main.detail.DetailView', {
// 	extend: 'Ext.Container',
// 	xtype: 'detailview',
//   cls: 'detailview',
//   layout: 'vbox',
//   tpl: [
//     '<div class="detailview" style="border: 1px solid red">',
//       '<div class="detailview-header">',
//         '<div class="detailview-header-title">Kunduppgifter</div>',
//         '<div class="detailview-header-title">{firstName} {lastName}</div>',
//       '</div>',
//       '<div class="detailview-content">',
//         '<div class="row">',
//           '<p>Förnamn: </p>',
//           '<input placeholder="namn..." />',
//         '</div>',
//         '<div class="detailview-content-text">Företag: {company}</div>',
//         '<div class="detailview-content-text">Skapad: {createdAt}</div>',
//       '</div>',
//     '</div>'
//   ],
//   data: {
//     firstName: '',
//     lastName: '',
//     company: '',
//     createdAt: ''
//   },
//   items: [
//     {
//         xtype: 'component',
//         bind: {
//             html: '<h3>{selectedPerson.firstName} {selectedPerson.lastName}</h3>'
//         }
//     }
//   ]
// })

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
                          style: 'border: 1px solid blue;',
                          layout: 'hbox',
                          items: [
                              {
                                  xtype: 'component',
                                  style: 'margin-right: 10px;',
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
                          style: 'border: 1px solid green;',
                          layout: 'hbox',
                          items: [
                              {
                                  xtype: 'component',
                                  style: 'margin-right: 10px;',
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
                          style: 'border: 1px solid green;',
                          layout: 'hbox',
                          items: [
                              {
                                  xtype: 'component',
                                  style: 'margin-right: 10px;',
                                  html: '<p>Företag: </p>'
                              },
                              {
                                  xtype: 'button',
                                  scale: 'medium',
                                  text: 'Företag',
                                  bind: '{selectedPerson.company}'
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
                              // handle the save action here
                              console.log('save');
                          }
                      },
                      {
                          xtype: 'button',
                          text: 'Ta bort',
                          handler: function() {
                              // handle the delete action here
                              console.log('delete');
                          }
                      }
                  ]
              }
          ]
      }
  ]
});