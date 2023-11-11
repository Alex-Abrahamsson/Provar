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
  cls: 'detailview',
  layout: 'vbox',
  viewModel: {
    data: {
        selectedPerson: null
    }
  },
  items: [
      {
          xtype: 'container',
          cls: 'detailview',
          style: 'border: 1px solid black; background-color: lightGray; display: flex; flex-direction: column; flex: 1; margin: 10px;',
          layout: 'vbox',
          items: [
              {
                  xtype: 'component',
                  cls: 'detailview-header',
                  html: '<div class="detailview-header-title"><h3>Kunduppgifter</h3></div>'
              },
              {
                  xtype: 'container',
                  cls: 'detailview-content',
                  layout: 'vbox',
                  items: [
                      {
                          xtype: 'container',
                          cls: 'row',
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
                          cls: 'row',
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
                          xtype: 'component',
                          bind: {
                              html: '<div class="detailview-content-text">Företag: {selectedPerson.company}</div>'
                          }
                      },
                      {
                          xtype: 'component',
                          bind: {
                              html: '<div class="detailview-content-text">Skapad: {selectedPerson.createdAt}</div>'
                          }
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