<template>
 {{ data }}
</template>
<script lang="ts" setup>
// import Tree from "vue3-treeview";
// import "vue3-treeview/dist/style.css";
const { data, error, execute, refresh } = await useFetch('/api/file_data_list/')


// let config = ref({
//         roots: ["642d5f4d-406b-4aca-9638-0a9eb77660be"],
//         keyboardNavigation: false,
//         dragAndDrop: false,
//         checkboxes: false,
//         editable: false,
//         disabled: false,
//         padding: 25,
//       })

    //   let changeMode = ()  => {
    //   modeBool = !modeBool;
    //   config.checkMode = modeBool ? 0 : 1;
    // }

  //  let config = {
  //       roots: ["id1", "id2"],
  //     }
  // let nodes = ref({
  //     id1: {
  //       text: "text1",
  //       children: ["id11", "id12"],
  //     },
  //     id11: {
  //       text: "text11",
  //     },
  //     id12: {
  //       text: "text12",
  //     },
  //     id2: {
  //       text: "text2",
  //     },
  //   })

  // let log = (s) => {
  //     console.log(s);
  // }

// const b3 = { "642d5f4d-406b-4aca-9638-0a9eb77660be": { "id": "642d5f4d-406b-4aca-9638-0a9eb77660be", "pid": null, "title": "MAguético!!!", "body": "body text" }, "742d5f4d-406b-4aca-9638-0a9eb77660be": { "id": "742d5f4d-406b-4aca-9638-0a9eb77660be", "pid": "642d5f4d-406b-4aca-9638-0a9eb77660be", "title": "é isso aí!!!", "txt": "body text" }, "842d5f4d-406b-4aca-9638-0a9eb77660be": { "title": "vvvvv", "txt": "body text111", "id": "642d5f4d-406b-4aca-9638-0a9eb77660be", "pid": "642d5f4d-406b-4aca-9638-0a9eb77660be" }, "e1abc09c-ed2e-432f-a5bf-fcdd5db872cd": { "id": "e1abc09c-ed2e-432f-a5bf-fcdd5db872cd", "title": "ninja trocado!", "txt": "body text", "pid": "642d5f4d-406b-4aca-9638-0a9eb77660be" }, "2f0da609-acb9-4a4b-a261-6b347aa3ace6": { "id": "2f0da609-acb9-4a4b-a261-6b347aa3ace6", "title": "teste444", "txt": "body text", "pid": "642d5f4d-406b-4aca-9638-0a9eb77660be" }, "402be901-530d-4061-9a9b-af7efee79244": { "id": "402be901-530d-4061-9a9b-af7efee79244", "pid": "642d5f4d-406b-4aca-9638-0a9eb77660be", "title": "Super teste", "body": "confira aí!" } }
// console.log(b);

// Iterate through the object
function changeParentToChildren(obj){
  let b2 = {...obj}
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // console.log(`${key}: ${b[key].pid}`);
      for (const key2 in obj) {
        if (obj[key2].pid == key){
          if (!b2[key].children) b2[key].children = []
          b2[key].children.push(key2)
        }
        // console.log(`${key}: ${b[key2].pid}`);
      }
    }
  }
  return b2
}

// let data2 = ref(changeParentToChildren(JSON.parse(data.value)))
// 
let data2 = ref(JSON.parse(data.value))
console.log(data2)
</script>
<style lang="scss">
pre {
    color: white;
}
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