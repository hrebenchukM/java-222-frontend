import { useEffect, useState } from "react";
import { useContext } from "react";
import AppContext from "../../features/appContext/AppContext";


export default function Home() {
   const {token}=useContext(AppContext);
   const [groups,setGroups] = useState([]);

const loadGroups = () => {
        fetch("http://localhost:8080/JavaWeb222/groups")
        .then(r => r.json()).then(setGroups);
    };
    useEffect(()=>{
      loadGroups();
    },[]);
   return<>

   <div style={{width:"100%",height:"vh",overflow:"hidden",margin:"10px 0"}}>
     <img src="/img/logo.jpg" className="w-100"></img>
   </div>
 <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  row-cols-xxl-5 g-4">
        {groups.map(g => <div className="col"key={g.id}>
            <div className="card h-100">
            <img src={g.imageUrl} className="card-img-top" alt={g.name}/>
            <div className="card-body">
                <h5 className="card-title">{g.name}</h5>
                <p className="card-text">{g.description}</p>
            </div>
            </div>
        </div>)}
    </div>        
   </>
}
