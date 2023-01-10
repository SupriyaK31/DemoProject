console.log(document);

var classlist = document.getElementsByClassName('list-group-item');

classlist[2].style.backgroundColor = 'green';

for(var i=0;i<classlist.length;i++)
{
classlist[i].style.fontWeight = 'bold';
}