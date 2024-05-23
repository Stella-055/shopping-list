class shoppinglist{
    constructor(
        itemselect,
        inputselect,
        buttonselect,
        storage="shoppinglist"
    ){ this.itemselect=document.querySelector(itemselect);
        this.inputselect=document.querySelector(inputselect);
        this.buttonselect= document.querySelector(buttonselect);
        this.storage=storage;
        this.item= JSON.parse(localStorage.getItem(this.storage))||[];
      this.initialise()}

    
    initialise(){
        this.buttonselect.addEventListener("click",()=>{
            const rost= this.inputselect.value;
            this.additem(rost);
            this.inputselect.value="";
            this.rendershopping();
            this.storing();
        });
    }
    rendershopping(){
        this.itemselect.innerHTML="";
        if(this.item.length===0){
            const newitem=document.createElement("li");
            newitem.textContent="No Item";
              this.itemselect.appendChild(newitem);
        }
        this.item.forEach((items,index) => {
            const newelement=document.createElement("li");
            newelement.textContent=items;
            const removeelement=document.createElement("span");
            removeelement.textContent="remove";
            removeelement.classList.add("Removeitem");
            newelement.appendChild(removeelement);
            this.itemselect.appendChild(newelement);
            removeelement.onclick=()=>{
                this.removeitem(index);
                this.rendershopping();
                 this.storing();

            };
            
        });
    }
    additem(nwitem){
        this.item.push(nwitem);
    }
    removeitem(indexitem){
        this.item=this.item.filter((items,index)=>indexitem!=index)
    }
    storing(){
        localStorage.setItem(this.storage,JSON.stringify(this.item))
    }
}
const shop = new shoppinglist("#listitems","#inputselect","#buttonselect");
shop.rendershopping();