'use strict';

let startBtn = document.getElementById('start'),
    rightBlock = document.getElementsByClassName('result-table')[0],
    budgetValue = rightBlock.getElementsByClassName('budget-value')[0],
    daybudgetValue = rightBlock.getElementsByClassName('daybudget-value')[0],
    levelValue = rightBlock.getElementsByClassName('level-value')[0],
    expensesValue = rightBlock.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = rightBlock.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = rightBlock.getElementsByClassName('income-value')[0],
    monthsavingsValue = rightBlock.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = rightBlock.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

 