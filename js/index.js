var productName = document.getElementById("Pname");
var productPrice = document.getElementById("Pprice");
var productComp = document.getElementById("Pcomp");
var productDesc = document.getElementById("PDesc"); 
var AddBtn = document.getElementById("addBtn");

var PCont ;
if (localStorage.getItem ("PCont")== null )
    {
       PCont = [];
    }
else
    {
     PCont = JSON.parse(localStorage.getItem("PCont")); 
            dataDis();

    }

function NewProduct()
{
    var product = {
        
        name: productName.value,
        price: productPrice.value,
        company: productComp.value,
        description: productDesc.value
        
    }
    PCont.push(product);
    localStorage.setItem("PCont", JSON.stringify(PCont));
}

AddBtn.onclick = function()
{
    NewProduct();
    dataDis();
    clearInps();

}

function dataDis()
{
     var tms = "";
    for (i=0 ; i<PCont.length ; i++)
        {
       tms +='<div class="col-md-3 text-center pt-2"><div class="product"><h3>'+PCont[i].name+'</h3><p>'+PCont[i].price+'</p><p class="text-danger">'+PCont[i].company+'</p><p class="text-info">'+PCont[i].description+'</p><button class="btn btn-danger" onclick="delProduct('+i+')">Delete Product</button></div></div>'
        } 
    document.getElementById("nP").innerHTML = tms;
}
 

function clearInps()
{
var inputs = document.getElementsByClassName("form-control");
    
    for(var i=0 ; i<inputs.length ; i++)
        {
            inputs[i].value = "";
        }
}

function delProduct(id)
{
    PCont.splice (id, 1);
    localStorage.setItem("PCont", JSON.stringify(PCont));
     dataDis();
}




