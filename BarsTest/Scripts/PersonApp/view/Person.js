﻿Ext.define('PersonApp.view.Person', {
    extend: 'Ext.window.Window',
    alias: 'widget.personwindow',

    title: 'Анкета',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'numberfield',
                name: 'id',
                fieldLabel: 'ID гражданина'
            },{
                xtype: 'checkbox',
                name: 'autoGenerated',
                fieldLabel: 'Автосгенерированная анкета'
            },{
                xtype: 'textfield',
                name: 'snils',
                fieldLabel: 'СНИЛС'
            },{
                xtype: 'datefield',
                name: 'snilsDate',
                fieldLabel: 'Дата запроса СНИЛС о  СМЭВ'
            },{
                xtype: 'textfield',
                name: 'firstName',
                fieldLabel: 'Имя'
            },{
                xtype: 'textfield',
                name: 'lastName',
                fieldLabel: 'Фамилия'
            },{                
                xtype: 'textfield',
                name: 'middleName',
                fieldLabel: 'Отчество'
            },{
                xtype: 'datefield',
                name: 'birthday',
                fieldLabel: 'Дата рождения'
            },{
                xtype: 'textfield',
                name: 'passportNum1',
                fieldLabel: 'Серия'
            },{
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
            }, {
                xtype: 'textfield',
                name: 'registrAdress',
                fieldLabel: 'Адрес регистрации',
            }, {
                xtype: 'textfield',
                name: 'livingAdress',
                fieldLabel: 'Адрес проживания',
            }, {
                xtype: 'numberfield',
                name: 'education',
                fieldLabel: 'Образование',
            }, {
                xtype: 'checkbox',
                name: 'maritalstatus',
                fieldLabel: 'Семейное положнеие',
            }, {
                xtype: 'textfield',
                name: 'socialStat',
                fieldLabel: 'Социальный статус',
            }, {
                xtype: 'textfield',
                name: 'job',
                fieldLabel: 'Место работы/учебы',
            }, {
                xtype: 'textfield',
                name: 'pensionType' ,
                fieldLabel: 'Вид пенсии',
            }, {
                xtype: 'numberfield',
                name: 'invalidGroup',
                fieldLabel: 'Группа инвалидности',
            }]
        }];
        this.dockedItems = [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Создать',
                iconCls: 'new-icon',
                action: 'new'
            }, {
                text: 'Сохранить',
                iconCls: 'save-icon',
                action: 'save'
            }, {
                text: 'Удалить',
                iconCls: 'delete-icon',
                action: 'delete'
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