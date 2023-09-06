<template>
  <!-- general form elements -->
  <div class="card card-primary">
            <!-- <div class="card-header">
              <h3 class="card-title">Quick Example</h3>
            </div> -->
            <!-- /.card-header -->
            <!-- form start -->
            <form>
              <div class="card-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">ID</label>
                  <input type="text" name="id" v-model="content.id" class="form-control" id="id" placeholder="">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">PID</label>
                  <input type="text" name="pid" v-model="content.pid" class="form-control" id="pid" placeholder="">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Título</label>
                  <input type="text" name="title" v-model="content.title" class="form-control" id="titulo" placeholder="">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Imagem</label>
                    <input type="text" name="img" v-model="content.img" class="form-control" id="img" placeholder="">
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Conteúdo</label>
                    <textarea class="form-control" name="body" v-model="content.body" id="body" rows="5"></textarea>
                </div>
                <div _class="card-footer">
                <button @click.prevent="save" type="button" class="btn btn-primary">Salvar</button>
              </div>
              </div>
              <!-- /.card-body -->  
            </form>
          </div>
          <!-- /.card -->
</template>
<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
let content = {
  id: uuidv4(),
  pid: 'home',
  title: '',
  img: '',
  body: '',
}
const router = useRouter();
let id = router.currentRoute.value.query.id
if (id) {
  const { data } = await useFetch('/api/file_data_list?id='+id)
  content = data.value
  // console.log(2, data2);
  
}else{
  
}

const save = async () => {
  if (1==1) {
    // router.push('/');
    console.log(content);
    
    const { data: resDataSuccess } = await $fetch('/api/file_data_save', {
      method: 'post',
      body: content
    })
    alert("Saved!")
  }else{
    console.log('save2')
  }
};
</script>