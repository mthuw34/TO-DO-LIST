import test from 'node:test';import assert from 'node:assert/strict';import{stats,filterTasks}from './tasks.js';
const items=[{title:'Build API',description:'',project:'Work',priority:'High',status:'To Do',due:'2026-01-01'},{title:'Read docs',project:'Learning',priority:'Low',status:'Done',due:'2026-01-02'}];
test('stats count completed and overdue tasks',()=>assert.deepEqual(stats(items,'2026-01-03'),{total:2,done:1,today:0,overdue:1}));
test('search and priority filter compose',()=>assert.equal(filterTasks(items,{query:'build',priority:'High'}).length,1));
test('project filter excludes other projects',()=>assert.equal(filterTasks(items,{project:'Learning'}).length,1));