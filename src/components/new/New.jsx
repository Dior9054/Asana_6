import { useState } from "react"
import style from "./new.module.css";


// function New() {

//     const [state, setState] = useState([])

//     const handle__Add = (e) => {
//         if (e.keyCode == 13) {
//             setState(prev => [...prev, { name: e.target.value }])
//         }
//     }

//     const handle__Click = (e) => {
//         setState(prev => prev.filter((item, index) => {
//             if (e.target.value != index) {
//                 return { ...item }
//             }
//         }))
//     }

//     const handle__Update = (e) => {
//         if (e.keyCode == 13) {
//             setState(prev => prev.map((item, index) => {
//                 if (e.target.name == index) {
//                     return { name: e.target.value }
//                 } else {
//                     return { ...item }
//                 }
//             }))
//         }
//     }

//     return (
//         <div className={style.wrap}>
//             <input placeholder="add" type="text" onKeyDown={handle__Add} />
//             <div>
//                 {
//                     state.map((item, index) => (
//                         <div key={index}>
//                             {item.name}
//                             <input type="text" name={index} onKeyDown={handle__Update} />
//                             <button onClick={handle__Click} value={index}>Delate</button>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default New

function New(){
    
    let x = document.createElement('button');
    let divVar = document.getElementById('div');
    divVar.appendChild(x)

    return (
        <div id="div">
            lorem
        </div>
    )
}

export default New;