Ext.define('PersonApp.store.PersonStore', {
    extend: 'Ext.data.Store',
    model: 'PersonApp.model.Person',
    autoLoad: true,
    //autoSync: true,//
    storeId: 'PersonStore',
   // alias: 'widget.PersonStore',
    proxy: {
        type: 'ajax',
        //url: 'Controllers/HomeController/GetAll',
        url: 'Scripts/PersonApp/data/persons.json',
        reader: {
            type: 'json',
            root: 'persons',
            successProperty: 'success'
        }
    }
});