/** Implement To-do functionality using LocalStorage API
  * Authors:
  *
  */

  if (window.localStorage) {

  	var txtToDo = document.getElementById('new-todo').value;

  	

  }


  /** To store to-do items
    * @param: string
    */
    function set_todos(txtToDo) {
    	var arrToDo = [];
    	if (localStorage.length>0) 
    		arrToDo.join(localStorage.getItem('todoList');
    			arrToDo.push(txtToDo);
    			localStorage.setItem('todoList',arrToDo);

    		}

    /** To retrieve to-do items & prepare the DOM
      * 
      */

      function addTodo(){
      	var newTodoItem = document.createElement("li", );

      }

    	


    	}

