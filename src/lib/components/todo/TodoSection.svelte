<script>
  import { todos } from "../../store/TodoStore";
  import TodoList from "./TodoList.svelte";

  let test = false;
</script>

<section>
  <div class="row container">
  {#each $todos as todo (todo.id)}
      <TodoList {todo} />

      {/each}
    </div>
</section>
