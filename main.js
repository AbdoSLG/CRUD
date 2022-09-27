// declare all elements
let title=document.getElementById("title")
let price=document.getElementById("price")
let taxes=document.getElementById("taxes")
let ads=document.getElementById("ads")
let discount=document.getElementById("discount")
let total=document.getElementById("total")
let count=document.getElementById("count")
let category=document.getElementById("category")
let create=document.getElementById("create")
let search=document.getElementById("search")
let searchByTitle=document.getElementById("searchByTitle")
let searchByCategory=document.getElementById("searchByCategory")
let update=document.getElementById("update")
let delete0=document.getElementById("delete0")
let tbody=document.getElementById("tbody")



// price 
function priceCalc(){
    if(price.value!==""){
        total.style.backgroundColor="green"

    total.innerHTML=+price.value+ +taxes.value+ +ads.value- +discount.value;


    }else{
        total.style.backgroundColor="#111"
        total.innerHTML=""
    }
}




priceCalc()

// create 
let arr;

        if(localStorage.getItem("datapro")!==null){

            arr=JSON.parse(localStorage.getItem("datapro"));

        }else{
            arr=[];
        }

        create.addEventListener("click",(e)=>{
            if(e.target.innerHTML==="Create"){
                createProduct();
            }
        })

        function  createProduct(){

            let ob ={
                title:title.value,
                price:price.value,
                taxes:taxes.value,
                ads:ads.value,
                discount:discount.value,
                total:total.innerHTML,
                category:category.value,

            }

            // count 
            if(count.value!=""){
                for(let i=0;i<parseInt(count.value);i++){
                    arr.push(ob)

                }
            }else{
                arr.push(ob)

            }


            localStorage.setItem("datapro",JSON.stringify(arr))

        show()

        clearInputs()
        
        
    }
    show()
// show 

function show(){

    let table="";

    for(let i=0 ;i<arr.length ;i++){

        
        table +=`
            <tr>
            <td>${i+1}</td>
            <td>${arr[i].title}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].taxes}</td>
            <td>${arr[i].ads}</td>
            <td>${arr[i].discount}</td>
            <td>${arr[i].total}</td>
            <td>${arr[i].category}</td>
            <td onclick=updateDate(${i})  id="update" class="btn2">update</td>
            <td onclick=deleteData(${i}) id="delete0" class="btn2">delete</td>
            </tr>
            `

        }
        
        tbody.innerHTML=table;

}

// clear inputs
function clearInputs(){
    title.value=""
    price.value=""
    taxes.value=""
    ads.value=""
    discount.value=""
    total.innerHTML=""
    category.value=""
    count.value=""

}

// delete
function deleteData(i){

    arr.splice(i,1);
    localStorage.datapro=JSON.stringify(arr)
    show();

}




// update
function updateDate(i){

    title.value=arr[i].title;
    price.value=arr[i].price;
    taxes.value=arr[i].taxes
    ads.value=arr[i].ads
    discount.value=arr[i].discount
    total.innerHTML=arr[i].total
    category.value=arr[i].category
    count.style.display="none"
    create.innerHTML="Update";
    // temp=i;
    document.addEventListener("click",(e)=>{
        if(e.target.innerHTML==="Update"){

            arr[i].title=title.value;
            arr[i].price=price.value;
            arr[i].taxes=taxes.value;
            arr[i].ads=ads.value;
            arr[i].discount=discount.value;
            arr[i].total=total.innerHTML;
            arr[i].category=category.value;
//      set in local storage
            localStorage.datapro=JSON.stringify(arr)
//      update in page
            show()

        // reset all setting 
        clearInputs()
        count.style.display="block"
        create.innerHTML="Create";

        }
    })
}


document.getElementById("deleteAll").innerHTML=`Delete All`


// delete all
function deleteAll(){
        arr=[];
        localStorage.datapro=JSON.stringify(arr)
        show()
}



// search By Title
searchByTitle.onclick=function(){

    if(!search.value){
        return false
    }else{
        tbody.innerHTML=""

        let filterArray=[]
        // console.log(arr)
        arr.forEach(el => {
            
            
            if(el.title==search.value){
                
//********************************************************************** */

                filterArray.push(el)


//********************************************************************** */
            }

        });


        
        let table="";

        for(let i=0 ; i<filterArray.length ;i++){

            
            table +=`
                <tr>
                <td>${i+1}</td>
                <td>${filterArray[i].title}</td>
                <td>${filterArray[i].price}</td>
                <td>${filterArray[i].taxes}</td>
                <td>${filterArray[i].ads}</td>
                <td>${filterArray[i].discount}</td>
                <td>${filterArray[i].total}</td>
                <td>${filterArray[i].category}</td>
                <td onclick=updateDate(${i})  id="update" class="btn2">update</td>
                <td onclick=deleteData(${i}) id="delete0" class="btn2">delete</td>
                </tr>
                `

            }
            
            tbody.innerHTML=table;

            search.value=""
    }

}



// search By Category
searchByCategory.onclick=function(){

    if(!search.value){
        return false
    }else{
        tbody.innerHTML=""


        let filterArray=[]

        arr.forEach(el => {
            
            
            if(el.category==search.value){
                

                filterArray.push(el)


            }

        });


        
        let table="";

        for(let i=0 ; i<filterArray.length ;i++){

            
            table +=`
                <tr>
                <td>${i+1}</td>
                <td>${filterArray[i].title}</td>
                <td>${filterArray[i].price}</td>
                <td>${filterArray[i].taxes}</td>
                <td>${filterArray[i].ads}</td>
                <td>${filterArray[i].discount}</td>
                <td>${filterArray[i].total}</td>
                <td>${filterArray[i].category}</td>
                <td onclick=updateDate(${i})  id="update" class="btn2">update</td>
                <td onclick=deleteData(${i}) id="delete0" class="btn2">delete</td>
                </tr>
                `

            }
            
            tbody.innerHTML=table;


            search.value=""
    }

}

