const myForm = document.querySelector('#my-form');
const AmountIN = document.querySelector('#amount');
const Description = document.querySelector('#Description');
const Category = document.querySelector('#SelectCat');
const ExpenseList = document.querySelector('#Expense');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(AmountIN.value === '' || Description.value === '' || Category.value === '')
    {
        msg.innerHTML = "enter all fields";
        setTimeout(() => msg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        const btn=document.createElement('input');
        const editBtn = document.createElement('input');
        btn.type="button";
        btn.value="Delete";
        btn.className="btn1";
        li.appendChild(document.createTextNode(`${AmountIN.value}- ${Description.value}- ${Category.value}`));
        li.appendChild(btn);
        li.appendChild(editBtn);
        ExpenseList.appendChild(li);
       
        let data ={
            Amount:AmountIN.value,
            Description:Description.value,
            Category:Category.value
        } ;
        let data1=JSON.stringify(data);
        localStorage.setItem(Description.value,data1);
        let DescriptionInput=Description.value;
        let AmountINput=AmountIN.value;
        let CatInput=Category.value;
        btn.addEventListener('click',onclick);
        function onclick(e){
          e.preventDefault();
          ExpenseList.removeChild(li);
          console.log(DescriptionInput);
          localStorage.removeItem(DescriptionInput);
          
        }
        editBtn.type="button";
        editBtn.value="Edit";
        editBtn.className="btn1";
        editBtn.addEventListener('click',onclickEdit);
        function onclickEdit(e){
            e.preventDefault();
            AmountIN.value=AmountINput;
            Description.value=DescriptionInput;
            Category.value=AmountINput;
            ExpenseList.removeChild(li);
            localStorage.removeItem(DescriptionInput);
        }
        AmountIN.value='';
        Description.value='';
        Category.value='';
    }
}