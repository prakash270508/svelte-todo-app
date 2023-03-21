<script>
  import { deleteTodo, toggelTodo, editTodo } from "../../store/TodoStore";
  export let todo;

  let isEdit = false;
  let edit = "";
  let percentageComplete = 0;

  function toggelEdit() {
    isEdit = !isEdit;
  }

  function handleEdit() {
    if (edit == "") {
      edit = todo.text;
    }

    editTodo(todo.id, edit);
    edit = "";
    isEdit = false;
  }

  function updatePercentageComplete(event) {
    percentageComplete = event.target.value;
  }
</script>

<div class="col-3">
  <div
    class="d-flex my-3"
    style="border: 1px solid black; {todo.complete
      ? 'box-shadow : 0 0 5px 5px green'
      : ''}"
  >
    {#if isEdit}
      <div>
        <input
          type="text"
          value={todo.text}
          on:change={(e) => (edit = e.target.value)}
        />
        <button class="btn btn-primary" on:click={handleEdit}>Done</button>
      </div>
    {:else}
      <div
        class={todo.complete
          ? "text-decoration-line-through"
          : "text-decoration-none"}
      >
        {todo.text}
      </div>
    {/if}
    <button class="btn btn-danger mx-2" on:click={() => deleteTodo(todo.id)}
      >Delete</button
    >
    <button class="btn btn-danger mx-2" on:click={toggelEdit}>Edit</button>
    <input
      type="checkbox"
      on:change={() => toggelTodo(todo.id)}
      value={todo.complete}
    />
  </div>
  <input
    type="range"
    min="0"
    max="100"
    value={percentageComplete}
    on:input={updatePercentageComplete}
  />
  <div>{`${percentageComplete}% Complete`}</div>
</div>
