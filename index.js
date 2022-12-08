const URLBASE = "http://127.0.0.1:3000";

let getAllRecords = () =>{
    fetch(URLBASE+"/pessoas")
    .then(res=>res.json())
    .then(res=>{
        document.getElementById("listAllRecords").innerHTML = "";
        res.forEach(record => {
            let line = `<li>
                            <span>${record.id}</span>
                            <span>${record.nome}</span>
                            <span>${record.idade}</span>
                        </li>`
            console.log(record)
            document.getElementById("listAllRecords").innerHTML += line;
        });
    })
}

let getById = () =>{
    let id = document.getElementById("idRecord").value;
    fetch(URLBASE+`/pessoa?id=${id}`)
    .then(res=>res.json())
    .then(res=>{
        if(!res)return;

        document.getElementById("listById").innerHTML = 
            `<li>
                <span>${res.id}</span>
                <span>${res.nome}</span>
                <span>${res.idade}</span>
            </li>`;
        
        console.log(res);
    })
    .catch(()=>{
        document.getElementById("listById").innerHTML = "";
        console.log("Não exixte registro com esse id.");
    })
}

let postRecord = () =>{
    let name = document.getElementById("nameRecord").value;
    let age = document.getElementById("ageRecord").value;

    fetch(URLBASE+`/pessoa`,{
        method:"POST",
        body:JSON.stringify({
            nome: name,
            idade: age
        })
    })
    .then(res=>res.json())
    .then(res=>{
        if(!res)return;

        document.getElementById("listByPost").innerHTML = 
            `<li>
                <span>${res.id}</span>
                <span>${res.nome}</span>
                <span>${res.idade}</span>
            </li>`;
        
        console.log(res);
    })
    .catch(()=>{
        document.getElementById("listById").innerHTML = "";
        console.log("Não exixte registro com esse id.");
    })
}

getAllRecords();