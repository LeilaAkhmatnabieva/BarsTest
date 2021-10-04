Ext.define('PersonApp.view.PersonList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.personlist',

    title: 'Регистр населения. Результат поиска',
    store: 'PersonApp.store.PersonStore',

    cvtDateStrToDateStr: function (string, format) {
        if (format == null || format == undefined) {
            format = 'd.m.Y';
        }
        if (string != null && string != undefined) {
            var dates = Ext.Date.parse(string, "Y-m-dTH:i:s");
            return Ext.Date.format(dates, format);
        }
        return null;
    },

    kost: function (r) {

        if (r) {
            var x = r.replaceAll('/', '').replace('Date', '');
            return new Date(x);
        }
        return;
    },

    initComponent: function () {
        this.columns = [            
            { header: 'ФИО', xtype: 'templatecolumn', dataIndex: 'firstName', flex: 1, tpl: '<t> {lastName} {firstName} {middleName} </t>' },
            {
                header: 'Дата рождения',
                dataIndex: 'birthday',
                xtype: 'datecolumn',
                format: 'd.m.Y',
                flex: 1
            },
            { header: 'Паспорт', xtype: 'templatecolumn', dataIndex: 'passportNum1', flex: 1, tpl: ' ({passportNum1}) {passportNum2} {passportIssuePlace}, Дата выдачи: {passportIssueDate}' },
            { header: 'Адрес', xtype: 'templatecolumn', dataIndex: 'livingAddress', flex: 1, tpl: ' {livingAddress} {registrAddress}'},           
        ];
        this.dockedItems = [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Поиск',
                action: 'searchwindow'
            }, {
                text: 'Создать',
                iconCls: 'new-icon',
                action: 'createwindow'
            }]
        }];
        this.callParent(arguments);
    }
});





