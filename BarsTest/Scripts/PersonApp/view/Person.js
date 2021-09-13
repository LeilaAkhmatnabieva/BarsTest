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
                xtype: 'textfield',
                name: 'firstname',
                fieldLabel: 'Название'
            }, {
                xtype: 'textfield',
                name: 'lastname',
                fieldLabel: 'Автор'
            }, {
                xtype: 'numberfield',
                name: 'birthday',
                fieldLabel: 'Год',
                minValue: 1,
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