Ext.define('PersonApp.store.PersonStore', {
    extend: 'Ext.data.Store',
    model: 'PersonApp.model.Person',
    autoLoad: true,
    storeId: 'PersonStore',
    proxy: {
        type: 'ajax',
        //url: 'Controllers/HomeController/GetAll',
        url: 'Scripts/PersonApp/data/persons.json',
        reader: {
            type: 'json',
            //root: 'data',
            root: 'persons',
            successProperty: 'success'
        }
    }
});