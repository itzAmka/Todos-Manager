import { type ComponentProps } from 'react'
import { Form } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { Task } from '@zod/tasksSchema'
import { toggleTaskComplete } from '@helpers/tasks'

type CompletedTaskItemProps = ComponentProps<'ul'> & {
  task: Task
}

export const CompletedTaskItem = ({ task }: CompletedTaskItemProps) => {
  const handleTaskCompletion = async () => {
    await toggleTaskComplete(task)
  }

  return (
    <>
      <li className='card bg-neutral text-neutral-content'>
        <div className='card-body px-4 py-6'>
          <div className='flex items-center gap-2'>
            <Form method='post'>
              <button
                className='btn btn-sm btn-circle btn-outline'
                onClick={handleTaskCompletion}
              >
                <FaCheck />
              </button>
            </Form>
            <p>{task.title}</p>
          </div>
        </div>
      </li>
    </>
  )
}
