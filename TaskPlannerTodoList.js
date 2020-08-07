
class Task {
    constructor (id, tname, desc, assign, dueDate, status) 
    {
        this.id = id;
        this.tname = tname;
        this.desc = desc;
        this.assign = assign;
        this.dueDate = dueDate;
        this.status = status;
    }
} //class Task closed

class TaskList {
    constructor()
    {
        this.tasks = [];
        this.currentId = 1;
    }

    addTask(tname, desc, assign, dueDate, status) { //Function to Add TASK

const task = new Task(this.currentId++, tname, desc, assign, dueDate, status);
this.tasks.push(task); //pushing newtask into tasks array
    } // addTask
displayTaskList(){
    let displayTaskItems = "";
    for (let i=0; i<this.tasks.length;i++) {
        displayTaskItems += `${this.tasks[i].name} ${this.tasks.desc} ${this.tasks.assign} 
        ${this.tasks.dueDate} ${this.tasks.status}`;
    }
}
deleteTask(id) { //Function to delete TASK
        for(let i=0; i<this.tasks.length; i++) {
            if(this.tasks[i].id === id) {
            //HOW TO DELETE AN ARRAY
                 this.tasks.splice(i);
    //             this.tasks[i].desc = desc;
    //             this.tasks[i].assign = assign;
    //             this.tasks[i].duedate = duedate;
    //             this.tasks[i].status = status;
    //         }}
}
        }
    }

updateTask(id,tname, desc, assign, dueDate, status) { //Function to update TASK
    for(let i=0; i<this.tasks.length; i++) {
        if(this.tasks[i].id === id) {
            this.tasks[i].name = name;
            this.tasks[i].desc = desc;
            this.tasks[i].assign = assign;
            this.tasks[i].dueDate = dueDate;
            this.tasks[i].status = status;
        }
    }
}

getAllTasks()  {
    for(leti=0; i<this.tasks.length; i++) {
        return (this.tasks());
    }
}

getTaskByStatus(status) {
    for(i=0; i<this.tasks.length; i++) {
        if(this.tasks[i].status === status) {
            return (this.tasks.[i].status);
        }
    }
}
        } //End of TaskList class
        const taskList = new TaskList(); //instance for class TaskList
        displayTaskList();
        //add task button comes here
        let tname = document.querySelector(#tname);
        let desc = document.querySelector(#desc);
        let assign = document.querySelector(#assign);
        let dueDate = document.querySelector(#dueDate);
        let status = document.querySelector(#status);
        ///////////////////////////////////////////////////////////////////////////

       // let savebtn=document.querySelector("#saveBtn");
saveBtn.onclick=function(){

let tname = document.querySelector("#tname");
// let nLen = name.len;
let nmErrMsg = document.querySelector("#nmErrMsg"); 
let desc = document.querySelector("#desc");
let nmErrMsg1 = document.querySelector("#nmErrMsg1");
let assignee = document.querySelector("#assign");
let nmErrMsg2 = document.querySelector("#nmErrMsg2");
let dueDate = document.querySelector("#dueDate");
let nmErrMsg3 = document.querySelector("#nmErrMsg3");
     
if ( tname.value == "" || tname.value.length < 5)
    {   
       
        nmErrMsg.innerHTML="Minium 5 charecters";
        nmErrMsg.style.color="red";
         tname.style.borderColor = "red";
        return false;

    }
    
     else if (desc.value == "" || desc.value.length < 11)                               
     
     { 
        nmErrMsg1.innerHTML="Min 10 Charecters";
        nmErrMsg1.style.color="red";
         des.style.borderColor = "red"; 
         desc.focus(); 
         return false; 
     } 
     
     else if ( dueDate.value == "")                       
     { 
        nmErrMsg2.innerHTML="Please ,Assign a  date in format :mm/dd/yyyy";
        nmErrMsg2.style.color="red";
         dueDate.style.borderColor = "red"; 
         dueDate.focus(); 
         return false; 
     } 
     else if (assign.value == "" || assign.value.length < 5)
     
     { 
        nmErrMsg3.innerHTML="Please select Assignee name";
        nmErrMsg3.style.color="red";
         assignee.style.borderColor = "red"; 
         assignee.focus(); 
         return false; 
     } 

    // else if (select1.value == "Please select")                  
    // { 
    //     alert("Please enter your chioce."); 
    //     // nmErrMsg3.innerHTML="Please ,fill  the Assignees name field";
    //     // nmErrMsg3.style.color="red";
    //     //  select1.style.borderColor = "red"; 
    //     // select1.focus(); 
    //     // return false; 
    // } 
   
else 
     {
        nmErrMsg.innerHTML="looks good";
        nmErrMsg.style.color="green";
        tname.style.borderColor = "green";
        nmErrMsg1.innerHTML="looks good";
        nmErrMsg1.style.color="green";
        desc.style.borderColor = "green";
        nmErrMsg2.innerHTML="looks good";
        nmErrMsg2.style.color="green";
        assignee.style.borderColor = "green";
        nmErrMsg3.innerHTML="looks good";
        nmErrMsg3.style.color="green";
        dueDate.style.borderColor = "green";
        
        taskList.addTask(tname.value,desc.value,assign.value,dueDate.value,status.value);
//can we define varibale and assign the captured textfield value? 

     } 

displayTaskList();

$('#taskModal').modal('hide');
} //Validation ends

//////////////////additonal standalone functions can be added for display, update and clear textfields
