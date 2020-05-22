import React from 'react';
import { Task } from '../../models/task/task.types';
import { Hero } from './hero/Hero';
import TaskDetails from './details/Details';

interface TaskProps {
  task: Task;
}

const TaskComponent: React.FC<TaskProps> = ({ task }) => {
  const {
    title,
    _user: { login },
    createdAt,
    tags,
    images,
  } = task;
  console.log(login);
  return (
    <div>
      <Hero title={title} author={login} creationTime={createdAt} tags={tags} />
      <TaskDetails images={images} />
    </div>
  );
};

export default TaskComponent;
