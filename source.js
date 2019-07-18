var button = document.getElementById("add_task");
var task = document.getElementById("task");
var delete_buttons = document.getElementsByTagName("button");
var complete_list = document.getElementsByTagName("ul")[0];
function get_length()
{
	return task.value.length;
}


function add_list_item()
{
	var list = document.getElementsByTagName("ul")[0];
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(task.value));
	//li.innerHTML= li.innerHTML+" <span><button onClick=remove_task()>Delete</button></span>";
	li = add_delete(li);
	//li.addClass(toggle);
	console.log(li.innerHTML);
	list.appendChild(li);
	task.value="";

}

function add_task_by_click(){
	if(get_length() > 0)
	{
		add_list_item();
	}
}

function add_task_by_keypress(event){
	var len = get_length();
	if(len > 0 && event.key ==="Enter")
	{
		add_list_item();
	}
}

button.addEventListener("click",add_task_by_click);
task.addEventListener("keypress",add_task_by_keypress);
complete_list.addEventListener("click",toggle_classes);
function add_delete(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button)
	button.onclick=remove_task;
	console.log(li.innerHTML);
	return li;
}


function remove_task(event)
{
	console.log("in remove function");
	event.target.parentNode.remove();
}

function toggle_classes(event){
	console.log("in Function");
	event.target.classList.toggle("toggle");
}

/*var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}


function createListElement(){
var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

		var btn = document.createElement("button");
     	btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);
 		btn.onclick = removeParent;
}


function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}


function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} */