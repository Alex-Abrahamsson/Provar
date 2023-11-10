Ext.define('MyExtGenApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'id', 'firstName', 'lastName', 'company', 'createdAt'
    ],
    groupField: 'dept',
    data: { items: [
        {id: 1, firstName: 'Alex', lastName: 'Abrahamsson', company: "Oklart", createdAt: '10-11-2023' },
        {id: 2, firstName: 'Marié', lastName: 'Sundberg', company: "Goodle", createdAt: '10-11-2023' },
        {id: 3, firstName: 'Lennox', lastName: 'Abrahamsson', company: "Apple", createdAt: '10-11-2023' },
        {id: 4, firstName: 'Cissi', lastName: 'Abrahamsson', company: "Intel", createdAt: '10-11-2023' },
        {id: 5, firstName: 'Anette', lastName: 'Abrahamsson', company: "Nvidia", createdAt: '10-11-2023' },
        {id: 6, firstName: 'Axel', lastName: 'Unknown', company: "Epic", createdAt: '10-11-2023' },
        {id: 7, firstName: 'Erik', lastName: 'Unknown', company: "Blizzard", createdAt: '10-11-2023' },
        {id: 8, firstName: 'Janne', lastName: 'Unknown', company: "Gavlegårdarna", createdAt: '10-11-2023' },
        {id: 9, firstName: 'Jenny', lastName: 'Unknown', company: "Balder", createdAt: '10-11-2023' },
        {id: 10, firstName: 'Nova', lastName: 'Unknown', company: "Sbab", createdAt: '10-11-2023' },
        {id: 11, firstName: 'Arja', lastName: 'Unknown', company: "SEB", createdAt: '10-11-2023' }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
