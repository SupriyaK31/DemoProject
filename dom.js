var li=document.getElementsByTagName('li');

for(var i=0;i<li.length;i++)
{
li[i].style.fontWeight = 'bold';
}

//var li=document.getElementsByClassName('list-group-item');

//for(var i=0;i<li.length;i++)
//{
//li[i].style.backgroundColor = 'yellow';
//}

var odd= document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

even[0].style.color='green';
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}
