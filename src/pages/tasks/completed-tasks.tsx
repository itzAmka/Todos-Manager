import { CompletedTaskList } from '@components/tasks'

const CompletedTasks = () => {
  return (
    <>
      <section className='flex flex-col gap-10'>
        <div className='max-w-md flex flex-col gap-2'>
          <h1 className='md:text-2xl text-xl font-bold text-primary'>
            Completed Tasks
          </h1>
          <p className='text-sm'>
            Completed tasks are tasks that you have already completed.
          </p>
        </div>

        <CompletedTaskList completedTasks={[]} />
      </section>
    </>
  )
}
export default CompletedTasks
