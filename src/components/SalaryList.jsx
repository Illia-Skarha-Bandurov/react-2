import "../App.css"

function SalaryList() {
    const workersList = [
        { id: 1, name: 'Іванов', salary: 10000},
        { id: 2, name: 'Петров', salary: 20000},
        { id: 3, name: 'Сидоров', salary: 50000},
      ]
    
   return (
    <div className="task">
        <h1>Task 4</h1> 
        <ol>
            {workersList.map((worker) => (
                <li key={worker.id}>
                    {worker.name}: {worker.salary} грн.
                </li>
            ))}
        </ol>
    </div>
    )
}

export default SalaryList;