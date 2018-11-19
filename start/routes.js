'use strict';

const Route = use('Route');
const Task = use('App/Models/Task');

Route.get('/', async ({ view }) => {
  const tasks = await Task.all();
  console.log('tasks', tasks.toJSON())
  return view.render('tasks', { tasks: tasks.toJSON() });
});

Route.post('/task', async ({request, response}) => {
  await Task.create(request.only(['name']));
  return response.redirect('/');
}).validator('Task');

Route.delete('/task/:id', async ({params, response}) => {
  const task = await Task.find(params.id);
  await task.delete();
  return response.redirect('/');
});
