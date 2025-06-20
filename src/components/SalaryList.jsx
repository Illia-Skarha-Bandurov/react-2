import "../App.css"

function SalaryList() {
    const workersList = [
        { id: 1, name: 'Shevchenko', salary: 10000},
        { id: 2, name: 'Stus', salary: 20000},
        { id: 3, name: 'Kostenko', salary: 50000},
      ]
    
   return (
    <div className="task">
        <h1>Task 4</h1> 
        <ol>
            {workersList.map((worker) => (
                <li key={worker.id} style={{ textAlign: 'start'}}>
                    {worker.name}: {worker.salary} UAH.
                </li>
            ))}
        </ol>
    </div>
    )
}

export default SalaryList;