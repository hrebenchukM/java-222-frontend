import { useContext, useEffect, useState } from "react";
import AppContext from "../../features/appContext/AppContext";

export default function Admin(){
    const {token} = useContext(AppContext);
  const [groups, setGroups] = useState([]);
const loadGroups =() =>{
  fetch("http://localhost:8080/JavaWeb222/admin/groups", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        },
    })
    .then(r => r.json())
    .then(setGroups);
}

useEffect(() => {
    if(token){
  loadGroups();
}
else{
    setGroups([]);
}
}, [token]);
   const onProductFormSubmit = e =>{
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
                r.json().then(j => {
                    if(j == "Ok") {
                        e.target.reset();
                        loadGroups();
                        alert("Group added");
                    }
                    else{
                        alert(j);
                    }
                });
 
            }
            else {
                r.text().then(console.log);
            }
        });
       

    }
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
                r.json().then(j => {
                    if(j == "Ok") {
                        e.target.reset();
                        loadGroups();
                        alert("Group added");
                    }
                    else{
                        alert(j);
                    }
                });
 
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
    <select name="pg-parent-id" className="form-select" id="inputGroupSelect01" >
    
        <option value="">Без підлеглості</option>
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












       <div className="border m-3 p-2">
        <h2>Додати товар</h2>
        <form onSubmit={onProductFormSubmit} method="POSt" encType="multipart/form-data">
             <div className="row">
              <div className="col">
              <div className="input-group mb-3">
                    <span className="input-group-text" id="product-name-addon">Назва</span>
                    <input type="text" className="form-control"
                     name="product-name"
                     placeholder="Назва товару " 
                     aria-label="Назва товару "
                     aria-describedby="product-name-addon"/>
               </div>
              </div>
              <div className="col">
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="product-description-addon">Опис</span>
                    <input type="text" className="form-control"
                     name="product-description"
                     placeholder="Опис товару" 
                     aria-label="Опис товару"
                     aria-describedby="product-description-addon"/>
               </div>
              </div>
           </div>
            <div className="row">
              <div className="col">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="product-slug-addon">Посилання</span>
                    <input type="text" className="form-control"
                     name="product-slug"
                     placeholder="Посилання на товар" 
                     aria-label="Посилання на товар"
                     aria-describedby="product-slug-addon"/>
               </div>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
                    <input type="file" className="form-control" id="inputGroupFile01" name="product-image"/>
                </div>
             </div>
           </div>
            <div className="row">
              <div className="col">
              <div className="input-group mb-3">
                    <span className="input-group-text" id="product-price-addon">Ціна</span>
                    <input type="number" min = "0" step="0.01" className="form-control"
                     name="product-price"
                     placeholder="Ціна товару " 
                     aria-label="Ціна товару "
                     aria-describedby="product-price-addon"/>
               </div>
              </div>
              <div className="col">
                 <div className="input-group mb-3">
                    <span className="input-group-text" id="product-stock-addon">Кількість</span>
                    <input type="number" min = "0" step="0.01" className="form-control"
                     name="product-stock"
                     placeholder="Кількість товару" 
                     aria-label="Кількість товару"
                     aria-describedby="product-stock-addon"/>
               </div>
              </div>
           </div>
           <div className="row">
              <div className="col">
     <div className="input-group mb-3">
    <label className="input-group-text" htmlFor="inputGroupSelect01">Група</label>
    <select  name="product-group-id" className="form-select" id="inputGroupSelect01">
    
      
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