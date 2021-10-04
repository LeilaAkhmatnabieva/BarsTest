Ext.define('PersonApp.view.PersonSearch', {
    extend: 'Ext.window.Window',
    alias: 'widget.personsearch',

    title: 'Регистр населения. Шаблон поиска ',
    layout: 'fit',
    height: 450,
    autoShow: true,


    initComponent: function () {

        this.items = [{
            xtype: 'form',
            bodyPadding: 10,            
            width: 400,
            items: [{
                xtype: 'numberfield',
                name: 'id',
                fieldLabel: 'ID гражданина'
            }, {
                xtype: 'textfield',
                name: 'snils',
                fieldLabel: 'СНИЛС'
            }, {
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
            }, {
                xtype: 'datefield',
                name: 'birthday',
                fieldLabel: 'Дата рождения'
            }, {
                title: 'Паспорт',
                items: [{
                    xtype: 'textfield',
                    name: 'passportNum1',
                    fieldLabel: 'Серия'
                }, {
                    xtype: 'textfield',
                    name: 'passportNum2',
                    fieldLabel: 'Номер'
                }, {
                    xtype: 'textfield',
                    name: 'passportIssuePlace',
                    fieldLabel: 'Место выдачи'
                }, {
                    xtype: 'datefield',
                    name: 'passportIssueDate',
                    fieldLabel: 'Дата выдачи',
                }]
            }, {
                xtype: 'textfield',
                name: 'registrAdress',
                fieldLabel: 'Адрес регистрации',
            }, {
                xtype: 'textfield',
                name: 'livingAdress',
                fieldLabel: 'Адрес проживания',
            }]
        }];

        this.buttons = [{
            text: 'Очистить',
            scope: this,
            action: 'clear'
        }, {
            text: 'Поиск',
            scope: this,
            action: 'search'
        }];

        this.callParent(arguments);
    }
});