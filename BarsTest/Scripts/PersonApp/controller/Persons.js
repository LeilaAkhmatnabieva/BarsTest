Ext.define('PersonApp.controller.Persons', {
    extend: 'Ext.app.Controller',

    views: ['PersonApp.view.PersonList', 'PersonApp.view.Person', 'PersonApp.view.PersonSearch'],
    stores: ['PersonApp.store.PersonStore'],
    models: ['PersonApp.model.Person'],
    init: function () {
        this.control({
            'personlist': {
                afterrender: this.onRender
            },
            'viewport > personlist': {
                itemdblclick: this.editPerson
            },
            'personlist button[action=searchwindow]': {
                click: this.searchWindow
            },

            'personwindow button[action=new]': {
                click: this.createPerson
            },
            'personwindow button[action=save]': {
                click: this.updatePerson
            },
            'personwindow button[action=delete]': {
                click: this.deletePerson
            },
            'personwindow button[action=clear]': {
                click: this.clearForm
            },
            'personsearch button[action=search]': {
                click: this.searchPerson
            },
            'personsearch button[action=clear]': {
                click: this.clearSearch
            }, 
            'personlist button[action=createwindow]': {
                click: this.newWindow
            }
        });
    },

    newWindow: function (grid, record) {
        var view = Ext.widget('personwindow');
    },
    // поиск
    searchPerson: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'Home/load',
            params: values,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    var store = Ext.widget('personlist').getStore();
                    store.loadData(data.persons);
                    store.sync();
                    Ext.Msg.alert('Поиск', data.message);
                }
                else {
                    Ext.Msg.alert('Поиск', 'Не удалось найти');
                }
            }
        });
    },
    // обновление
    updatePerson: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
        values.id = id;
        Ext.Ajax.request({
            url: 'Home/update',
            params: values,
            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    var store = Ext.widget('personlist').getStore();
                    store.loadData(data.persons);
                    store.sync();
                    Ext.Msg.alert('Обновление', data.message);
                }
                else {
                    Ext.Msg.alert('Обновление', 'Не удалось обновить');
                }
            }
        });
    },
    // создание
    createPerson: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        Ext.Ajax.request({
            url: 'Home/create',
            params: values,
            success: function (response, options) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Создание', data.message);
                    var store = Ext.widget('personlist').getStore();
                    store.load();
                }
                else {
                    Ext.Msg.alert('Создание', 'Не удалось добавить книгу в библиотеку');
                }
            }
        });
    },
    // удаление
    deletePerson: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            //values = form.getValues();
            id = form.getRecord().get('id');
        Ext.Ajax.request({
            url: 'Home/delete',
            params: { "id": id },

            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    Ext.Msg.alert('Удаление', data.message);
                    var store = Ext.widget('personlist').getStore();
                    var record = store.getById(id);
                    store.remove(record);
                    //form.getForm.reset();
                }
                else {
                    Ext.Msg.alert('Удаление', 'Не удалось удалить книгу из библиотеки');
                }
            }
        });
    },
    clearForm: function (grid, record) {
        var view = Ext.widget('personwindow');
        view.down('form').getForm().clearForm();
        //reset();
    },

    editPerson: function (grid, record) {
        var view = Ext.widget('personwindow');
        view.down('form').loadRecord(record);
    },

    searchWindow: function (grid, record) {
        var view = Ext.widget('personsearch');
    },

    clearSearch: function (grid, record) {
        var view = Ext.widget('personsearch');
        view.down('form').getForm().reset();
    },

    onRender: function () {
        //var win = button.up('window'),
        //    form = win.down('form'),
        //    values = form.getValues(),
        //    id = form.getRecord().get('id');
        //values.id = id;
        Ext.Ajax.request({
            url: 'Home/load',
            //params: values,
            success: function (response) {
                //debugger;
                var data = Ext.decode(response.responseText);
                if (data.success) {
                    var store = Ext.widget('personlist').getStore();
                    store.loadData(data.persons);
                }
                else {
                    Ext.Msg.alert('Загрузка', 'Не удалось загрузить данные с бд');
                }
            }
        });
    },
});