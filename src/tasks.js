export const KEY='focusly.tasks.v1';
export const today=()=>new Date().toLocaleDateString('en-CA');
export const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return d.toLocaleDateString('en-CA')};
export const initialTasks=()=>[
{id:'a',title:'Finish portfolio website',description:'Polish case studies and responsive layouts',project:'Personal',priority:'High',status:'In Progress',due:today()},
{id:'b',title:'Review React hooks',description:'Practice custom hooks',project:'Learning',priority:'Medium',status:'To Do',due:today()},
{id:'c',title:'Read 20 pages',description:'Small steps every day',project:'Personal',priority:'Low',status:'To Do',due:addDays(1)},
{id:'d',title:'Prepare sprint presentation',description:'Summarize progress',project:'Work',priority:'High',status:'To Do',due:addDays(2)},
{id:'e',title:'Organize weekly notes',description:'Clear inbox',project:'Learning',priority:'Low',status:'Done',due:today()}];
export function loadTasks(){try{const raw=localStorage.getItem(KEY);if(raw!==null){const data=JSON.parse(raw);if(Array.isArray(data))return data}}catch{}return initialTasks()}
export const stats=(tasks,date=today())=>({total:tasks.length,done:tasks.filter(t=>t.status==='Done').length,today:tasks.filter(t=>t.due===date&&t.status!=='Done').length,overdue:tasks.filter(t=>t.due&&t.due<date&&t.status!=='Done').length});
export function filterTasks(tasks,{query='',project='All projects',priority='All priorities',status='All tasks'}={}){return tasks.filter(t=>(t.title+' '+(t.description||'')).toLowerCase().includes(query.toLowerCase())&&(project==='All projects'||t.project===project)&&(priority==='All priorities'||t.priority===priority)&&(status==='All tasks'||t.status===status))}
