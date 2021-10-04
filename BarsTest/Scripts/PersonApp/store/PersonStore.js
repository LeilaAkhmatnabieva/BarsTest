Ext.define('PersonApp.store.PersonStore', {
    extend: 'Ext.data.Store',
    remoteFilter: true,
    model: 'PersonApp.model.Person',
    storeId: 'PersonStore',
});

