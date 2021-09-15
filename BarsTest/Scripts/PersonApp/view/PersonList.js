﻿Ext.define('PersonApp.view.PersonList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.personlist',

    title: 'Регистр',
    store: 'PersonApp.store.PersonStore',

    initComponent: function () {
        //var me = this;
        //me.store = Ext.create('PersonApp.store.PersonStore');
        this.columns = [
            { header: 'Id', dataIndex: 'id', flex: 1 },
            { header: 'Name', dataIndex: 'firstName', flex: 1 },
            { header: 'LastName', dataIndex: 'lastName', flex: 1 },
            { header: 'birthday', dataIndex: 'birthday', flex: 1 }
        ];

        this.callParent(arguments);
    }
});





//'id',
//    'autoGenerated',
//    'snils',
//    'snilsDate',
//    'firstName',
//    'middleName',
//    'lastName',
//    'birthday',
//    'passportNum1',
//    'passportNum2',
//    'passportIssuePlace',
//    'passportIssueDate',
//    'registrAdress',
//    'livingAdress',
//    'education',
//    'marryage',
//    'socialStat',
//    'job',
//    'pensionType',
//    'invalidGroup']