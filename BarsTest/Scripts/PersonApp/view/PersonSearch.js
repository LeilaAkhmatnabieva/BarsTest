Ext.define('PersonApp.view.PersonSearch', {
    extend: 'Ext.window.Window',
    alias: 'widget.personsearch',

    title: 'Анкета',
    layout: 'fit',
    height: 400,
    autoShow: true,


    initComponent: function () {

        this.items = [{
            xtype: 'form',
            autoScroll: true,
            width: 600,           
            items: [{              
                xtype: 'textfield',
                name: 'firstName',
                fieldLabel: 'Имя'
            }, {
                xtype: 'textfield',
                name: 'lastName',
                fieldLabel: 'Фамилия'
            }, {
                xtype: 'textfield',
                name: 'middleName',
                fieldLabel: 'Отчество'
            }]
        }];
        this.dockedItems = [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Поиск',
                iconCls: 'search-icon',
                action: 'search'
            }]
        }];
        this.buttons = [{
            text: 'Очистить',
            scope: this,
            action: 'clear'
        }];

        this.callParent(arguments);
    }
});