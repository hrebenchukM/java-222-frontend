import { useState } from "react";
import { useContext } from "react";
import AppContext from "../../features/appContext/AppContext";


export default function Home() {
   const {token}=useContext(AppContext);
   const [content,setContent] = useState("");

    const onPost= () =>{
        let headers = {
             'Content-Type' : "application/json"
        }
        if(token){
            headers["Authorization"] = "Bearer " + token;
        }
         fetch("http://localhost:8080/JavaWeb222/user",{
        method:'POST',
        headers:headers
      })
      .then(r=>r.json())
      .then(j=>setContent(JSON.stringify(j)));
    };


     const onPut= () =>{
         fetch("http://localhost:8080/JavaWeb222/user",{
        method:'PUT',
        headers:{
            'Authorization': 'Basic 123 ' ,
            'Content-Type' : "application/json"
        }
      })
      .then(r=>r.json())
      .then(j=>setContent(JSON.stringify(j)));
    };

    const onDelete = () => {
        fetch("http://localhost:8080/JavaWeb222/user",{
            method:'DELETE',
            headers:{
                'Authorization': 'Basic 123',
                'Content-Type' : "application/json"
            }
        })
        .then(r=>r.json())
      .then(j=>setContent(JSON.stringify(j)));
    };

    const onPatch = () => {
        fetch("http://localhost:8080/JavaWeb222/user",{
            method:'PATCH',
            headers:{
                'Authorization': 'Basic 123',
                'Content-Type' : "application/json"
            }
        })
        .then(r=>r.json())
        .then(j=>setContent(JSON.stringify(j)));
    };



  
    const invalid1 = () => {
        fetch("http://localhost:8080/JavaWeb222/user", {
            method: 'POST',
            headers: {
                "Authorization": "Brr 123"
            }
        }).then(r => r.json()).then(j => setContent(JSON.stringify(j)));
    };
 

        const invalid2 = () => {
        fetch("http://localhost:8080/JavaWeb222/user", {
            method: 'POST',
            headers: {
                "Authorization": "Bearer 1-2-3"
            }
        }).then(r => r.json()).then(j => setContent(JSON.stringify(j)));
    };

         const invalid3 = () => {
        fetch("http://localhost:8080/JavaWeb222/user", {
            method: 'POST',
            headers: {
                "Authorization": "Bearer 1.2.3"
            }
        }).then(r => r.json()).then(j => setContent(JSON.stringify(j)));
    };
 
      const invalid4 = () => {
    fetch("http://localhost:8080/JavaWeb222/user", {
      method: "POST",
      headers: {
        Authorization: "Bearer 1@.2#.3%",
      },
    })
      .then((r) => r.json()) .then((j) => setContent(JSON.stringify(j)));
  };

  const invalid5 = () => {
    fetch("http://localhost:8080/JavaWeb222/user", {
      method: "POST",
      headers: {
        Authorization: "Bearer 1.2.3.4.5",
      },
    })
      .then((r) => r.json()).then((j) => setContent(JSON.stringify(j)));
  };


  const invalid6 = () => {
  const testTokens = ["1..3", ".2.3", "..3", "1.."];
  let results = [];

  testTokens.forEach(t => {
    fetch("http://localhost:8080/JavaWeb222/user", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + t
      }
    })
    .then(r => r.json()).then(j => {
      results.push({ token: t, response: j });
      if (results.length === testTokens.length) {
        setContent(JSON.stringify(results, null, 2));
      }
    });
  });
};

const invalid7 = () => {
    fetch("http://localhost:8080/JavaWeb222/user", {
      method: "POST",
      headers: {
        Authorizatoin: "Bearer 1.2.3", 
      },
    })
      .then((r) => r.json()).then((j) => setContent(JSON.stringify(j)));
  };
  
   const invalid8 = () => {
    fetch("http://localhost:8080/JavaWeb222/user", {
      method: "POST",
      headers: {
        Authorization: "Bearer    1.2.3",
      },
    })
      .then((r) => r.json()).then((j) => setContent(JSON.stringify(j)));
  };

  return (
    <>
      <h1>Home page</h1>
           <button onClick={onPost} type="button" className="btn btn-success">POST</button>
          <button onClick={invalid1} type="button" className="btn btn-warning ms-1">Invalid scheme</button>
      <button onClick={invalid2} type="button" className="btn btn-warning ms-1">Invalid structure</button>
      <button onClick={invalid3} type="button" className="btn btn-warning ms-1">Invalid data</button>
      <button onClick={invalid4} type="button" className="btn btn-warning ms-1"> Invalid Base64 chars  </button>
        <button onClick={invalid5} type="button" className="btn btn-warning ms-1">Too many dots </button>
          <button onClick={invalid6} type="button" className="btn btn-warning ms-1">Empty parts </button>
           <button onClick={invalid7} type="button" className="btn btn-warning ms-1">Wrong header name </button>
      <button onClick={invalid8} type="button" className="btn btn-warning ms-1">Extra spaces</button>
         
                      <button onClick={onPut} type="button" className="btn btn-warning ms-1">PUT</button>
                      <button onClick={onDelete} type="button" className="btn btn-danger ms-1">DELETE</button>
                      <button onClick={onPatch} type="button" className="btn btn-info ms-1">PATCH</button>
          {content && <div className="alert alert-primary" role="alert">{content}</div>}
    </>
  );
}
