
const api_url="https://dog-api.kinduff.com/api/facts";
      

async function getapi(url) {
   
   
     
    const response = await fetch(url);
   
    
    var data = await response.json();
    console.log(data);
 

    hideloader();
    show(data.facts);
}

    getapi(api_url);
    function hideloader()
    {
      document.getElementById('loading').style.display='none';
    }
    function show(data) {
        let tab =
            `<tr>
              <th>facts</th>
              
             </tr>`;
       
        
        for (let r of data)
         {
            tab += `<tr>
        <td>${r} </td>
      
    
    </tr>`;
        }
        document.getElementById("facts").innerHTML = tab;
    }


