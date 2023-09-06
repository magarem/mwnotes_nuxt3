<template>
  <div>
    <!-- <div class="title">
      <h2>Item</h2>
    </div> -->
    <div class="container form">
      <label for="unidame"><b>ID</b></label>
      <input
        v-model="item.id"
        type="text"
        class="input"
        placeholder="Entre com o ID"
        name="id"
        required
      />
      <label for="pid"><b>PID</b></label>
      <input
        v-model="item.pid"
        type="text"
        class="input"
        placeholder="Entre com o ID do vinculo"
        name="pid"
        required
      />

      <label for="titulo"><b>Titulo</b></label>
      <input
        v-model="item.title"
        type="text"
        class="input"
        placeholder="Entre com o título"
        name="titulo"
        required
      />

      <label for="body"><b>Texto</b></label>
      <textarea
        v-model="item.body"
        type="text"
        class="input"
        placeholder="Entre com o texto"
        name="body"
        required
      />

      <button @click.prevent="save" class="button">Salvar</button>
    </div>
   
  </div>
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
const item = ref({
  id: uuidv4(),
  pid: '',
  title: 'teste',
  body: 'body text',
});
const router = useRouter();

const save = async () => {
  if (1==1) {
    // router.push('/');
    const { data: resDataSuccess } = await $fetch('/api/file_data_save', {
      method: 'post',
      body: item.value
    })
    alert("Saved!")
  }else{
    console.log('save2')
  }
};
</script>
<style lang="scss">
.title {
  display: flex;
  justify-content: center;
}
.container {
  padding: 16px;
}
.form {
 
  border-radius: 10px;
  .input {
    width: 100%;
    
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .button {
  
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    opacity: 0.8;
  }
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  /* Change styles for span and cancel button on extra small screens */
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
}
</style>