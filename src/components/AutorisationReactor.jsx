
/*  
    Задача 1. Вводимо логіна і пароль. Якщо логін вірний відображаємо смайл. Якщо ні, то:
    1) якщо логін = Іван – колір повідомлення про помилку синій
    2) якщо хтось інший, то колір повідомлення червоний 
*/


import { useState } from 'react'
import '../App.css'

function AutorisationReactor() {
    const [ log, setLog] = useState('')
    const [ pass, setPass] = useState('')
    const [ logResult, setLogResult] = useState('')
    const loginDetails = [
        { username: 'Ivan', password: '111' },
        { username: 'Oleh', password: '222' },
        { username: 'Taras', password: '333' },
        { username: 'Petro', password: '444' }
    ]
    
    function logChangeHandler(e) {
        setLog(e.target.value)
    }

    function passChangeHandler(e) {
        setPass(e.target.value)
    }

    function autorisationControl() {
        const user = loginDetails.find(
        (user) => user.username === log && user.password === pass
        )
        if (user) {
        setLogResult(
            <>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <label> Welcome, {user.username}</label>
                    <img src="https://www.directivegroup.com/wp-content/uploads/2017/03/smile-9047-9380-hd-wallpapers-1.jpg" alt="smile" style={{width: "200px"}} />         
                </div>
            </>
        )
        } else {
        setLogResult(
            <label style={{ color: log === 'Ivan' ? 'blue' : 'red' }}>
                Incorrect username or password
            </label>
        )
        }
    }

    return (
    <>
      <div className="task"> 
        <h1>Task 1</h1> 
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '80px', alignItems: 'start'}}>
                <label>Username:</label> 
                <label>Password:</label>
            </div>
            <div style={{ flexDirection: 'column', width: '200px', alignItems: 'start'}}>
                <input value={log} onChange={logChangeHandler} placeholder='Ivan'/> 
                <input value={pass} onChange={passChangeHandler} placeholder='111'/>
            </div>
            <button onClick={autorisationControl} style={{ flexDirection: 'column', width: '100px', height: '50px', alignItems: 'start'}} >
                Login
            </button>
        </div>
        <h2>{logResult}</h2>
      </div>
    </>
  )
}

export default AutorisationReactor
