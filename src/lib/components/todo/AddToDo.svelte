<script>
  import { addTodo } from "../../store/TodoStore";
  let input = "";
  let error = ''

  function handleSubmit(){
    if(input == ''){
      error = "Please add"
      return setTimeout(()=>{
        error = ''
      },3000)
    }
    addTodo(input)
    input = ''
  }

</script>

<section>
  <form on:submit={handleSubmit}>

    <div class="d-flex">
      <input
      type="text"
      on:change={(e) => (input = e.target.value)}
      value={input}
      />
      <button type="submit" class="btn btn-primary">
        Add task
      </button>
    </div>
    <div style="color :red ;">{error}</div>
  </form>
</section>
