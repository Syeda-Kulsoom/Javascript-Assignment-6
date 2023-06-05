var inpVal = document.getElementById('inp')
var list = document.getElementById('list')

function delRow(btn){
    console.log(btn.parentnode)
    btn.parentNode.remove();
}
function editRow(btn){
    console.log()
    btn.parentNode.firstChild.nodeValue = prompt()
}
function addTask(){
    var li = document.createElement('li')
    console.log(li)
    var liVal = document.createTextNode(inpVal.value);
    console.log(liVal)
    li.appendChild(liVal)

    var del = document.createElement('button')
    var delText = document.createTextNode("Delete");
    del.appendChild(delText)
    del.setAttribute('class', 'btn')
    del.setAttribute('onclick', 'delRow(this)')
    li.appendChild(del)
    del.style.backgroundColor = 'red'
    del.style.color = 'white'

    var editbtn = document.createElement('button')
    var editText = document.createTextNode('Edit Button')
    editbtn.appendChild(editText)
    del.setAttribute('class', 'btn')
    editbtn.setAttribute('onclick', 'editRow(this)')
    li.appendChild(editbtn)

    editbtn.style.backgroundColor = 'green'
    editbtn.style.color = 'white'
    list.appendChild(li)
    console.log(li)
    console.log(list)
    inpVal.value = ' '

}
