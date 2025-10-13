import { useContext, useEffect, useState } from "react";
import AppContext from "../../features/appContext/AppContext";

export default function Admin(){
    const {token} = useContext(AppContext);
  const [groups, setGroups] = useState([]);

useEffect(() => {
    if(token){
    fetch("http://localhost:8080/JavaWeb222/admin/groups", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        },
    })
    .then(r => r.json())
    .then(setGroups);
}
}, [token]);

    const onGroupFormSubmit = e =>{
        e.preventDefault();
        fetch("http://localhost:8080/JavaWeb222/admin/group",{
        method:"POST",
        headers:{
            "Authorization": "Bearer "+token
        },
        body:new FormData(e.target)
    }).then(r => {
            let ct = r.headers.get("Content-Type");
            if(ct.startsWith("application/json")) {
                r.json().then(console.log);
            }
            else {
                r.text().then(console.log);
            }
        });
       

    }
    return !token ? 
    <>
       <div className="alert alert-danger mt-4" role="alert">  
        Необхідно автентифікуватися
       </div>
    </>
    : <>
    <div className="border m-3 p-2">
        <h2>Додати товарну групу</h2>
        <form onSubmit={onGroupFormSubmit} method="POSt" encType="multipart/form-data">
             <div className="row">
              <div className="col">
              <div className="input-group mb-3">
                    <span className="input-group-text" id="pg-name-addon">Назва</span>
                    <input type="text" className="form-control"
                     name="pg-name"
                     placeholder="Назва групи" 
                     aria-label="Назва групи"
                     aria-describedby="pg-name-addon"/>
               </div>
              </div>
              <div className="col">
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="pg-description-addon">Опис</span>
                    <input type="text" className="form-control"
                     name="pg-description"
                     placeholder="Опис групи" 
                     aria-label="Опис групи"
                     aria-describedby="pg-description-addon"/>
               </div>
              </div>
           </div>
            <div className="row">
              <div className="col">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="pg-slug-addon">Посилання</span>
                    <input type="text" className="form-control"
                     name="pg-slug"
                     placeholder="Посилання на групу" 
                     aria-label="Посилання на групу"
                     aria-describedby="pg-slug-addon"/>
               </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                    <input type="file" className="form-control" id="inputGroupFile01" name="pg-image"/>
                </div>
             </div>
           </div>
           <div className="row">
              <div className="col">
     <div className="input-group mb-3">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Підлеглість</label>
    <select className="form-select" id="inputGroupSelect01" name="pg-parent-id">
    
        <option value="1">Без підлеглості</option>
        {groups.map(g=> <option  key = {g.id} value={g.id}>{g.name}</option>)}
       
        </select>
     </div>
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary">Додати</button> 
              </div>
           </div>
        </form>
    </div>
    </>;
}