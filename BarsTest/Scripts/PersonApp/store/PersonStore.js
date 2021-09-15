Ext.define('PersonApp.store.PersonStore', {
    extend: 'Ext.data.Store',
    model: 'PersonApp.model.Person',
    autoLoad: true,
    storeId: 'PersonStore',
   // alias: 'widget.PersonStore',
    proxy: {
        type: 'ajax',
        url: 'Home/load',
        reader: {
            type: 'json',
            root: 'persons',
            successProperty: 'success'
        }
    }
});

