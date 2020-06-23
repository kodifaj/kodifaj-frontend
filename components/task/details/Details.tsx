import React from 'react';
import Gallery from './gallery/Gallery';
import Solutions from './solutions/Solutions';
import Description from './description/Description';
import { Solution } from 'lib/models/solution/solution';

interface TaskDetailsProps {
  solutions?: Solution[];
  taskId: string;
  login?: string;
  photo?: string;
  images?: string[];
  content: string;
  updateSolutions: (solutions: Solution[]) => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({
  taskId,
  solutions,
  content,
  images,
  updateSolutions,
}) => {
  return (
    <>
      <div className="w-full max-w-8xl mx-auto px-4 pt-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 md:mr-4">
            <Description content={content} />
          </div>
          <div className="w-full md:w-1/3">
            <Gallery images={images} />
            <Solutions solutions={solutions} taskId={taskId} updateSolutions={updateSolutions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
