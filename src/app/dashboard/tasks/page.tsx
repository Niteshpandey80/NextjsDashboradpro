import React from 'react'

const Tasks = () => {

    const tasks = [
        {id:1 , 
         title:"Finish project report" , 
         description:'Complete the final report for the project and submit it.',
         status:'In Progress',
         dueDate:'5-07-2025'
        },
        {id:2 , 
         title:"update website content" , 
         description:'Revise the homepage text to reflect recent chnages',
         status:'Pending',
         dueDate:'6-07-2025'
        },
        {id:3 , 
         title:"Team meeting " , 
         description:'Discuss the project milestones and progress with the team.',
         status:'Completed',
         dueDate:'7-07-2025'
        }
    ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8 '>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Tasks</h1>
        <section className="space-y-6">
            {tasks.map(tasks=>(
                <div  key={tasks.id}
    className='flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4'
    style={{
      borderColor:
        tasks.status === 'Completed'
          ? 'green'
          : tasks.status === 'In Progress'
          ? 'yellow'
          : 'red', }}>
            <div className="flex flex-col">
                <h2 className='text-xl font-semibold text-gray-800  '>{tasks.title}</h2>
                <p className='text-sm text-gray-600'>{tasks.description}</p>
                <p className='text-sm text-gray-600'>Due Date :{tasks.dueDate}</p>
            </div>
            <section className="flex space-x-4">
                <span className=''>{tasks.status}</span>
            </section>
          </div>
            ))}
        </section>
      </div>
    </div>
  )
}

export default Tasks
