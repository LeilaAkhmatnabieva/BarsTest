﻿Ext.define('PersonApp.view.Person', {
    extend: 'Ext.window.Window',
    alias: 'widget.personwindow',

    title: 'Анкета',
    layout: 'fit',
    height: 400,
    width: 600,
    autoShow: true,


    initComponent: function () {

        this.items = [{
            xtype: 'form',
            autoScroll: true,
            defaults: {
                labelWidth: 200
            },
            bodyPadding: 10,
            items: [{
                title: 'Карта жителя РТ',
                hidden: true,
                defaults: {
                    labelWidth: 200
                },
                items: [{
                    xtype: 'checkbox',
                    name: 'autoGenerated',
                    fieldLabel: 'Автосгенерированная анкета'
                }]
            }, {
                xtype: 'textfield',
                name: 'snils',
                fieldLabel: 'СНИЛС'
            }, {
                xtype: 'datefield',
                name: 'snilsDate',
                format: 'd.m.Y',
                fieldLabel: 'Дата запроса СНИЛС от СМЭВ'
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
                format: 'd.m.Y',
                fieldLabel: 'Дата рождения',
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
                    format: 'd.m.Y',
                        fieldLabel: 'Дата выдачи'
                    }]
                }, {
                xtype: 'textfield',
                name: 'registrAddress',
                fieldLabel: 'Адрес регистрации',
            }, {
                xtype: 'textfield',
                name: 'livingAddress',
                fieldLabel: 'Адрес проживания',
            }, {
                xtype: 'textfield',
                name: 'education',
                fieldLabel: 'Образование',
            }, {
                xtype: 'textfield',
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
                name: 'pensionType',
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
            text: 'Создать',
            iconCls: 'new-icon',
            action: 'new'
        }, {
            text: 'Очистить',
            scope: this,
            action: 'clear'
        }];

        this.callParent(arguments);
    }
});