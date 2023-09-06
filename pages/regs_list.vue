<template>
  <div class="treeview-container ">
    <Treeview :tree="result"/>
  </div>
        
</template>
<script lang="ts" setup>
const { data, error, execute, refresh } = await useFetch('/api/file_data_list')
let data2 = (JSON.parse(data.value))
function createTree(obj, parentId = null) {
  const result = [];

  for (const nodeId in obj) {
    const node = obj[nodeId];
    if (node.pid === parentId) {
      const { id, title, body, isOpen } = node;
      const children = createTree(obj, id);
      if (children.length > 0) {
        result.push({ id, title, body, isOpen, children });
      } else {
        result.push({ id, title, body, isOpen });
      }
    }
  }

  return result;
}


const result = createTree(data2);
console.log(JSON.stringify(result, null, 2));

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
/* Estilo para o container principal do treeview */
.treeview-container {
  // background-color: #222; /* Cor de fundo escura */
  color: #fff; /* Cor do texto */
  font-family: Arial, sans-serif; /* Fonte */
  font-size: 20px;
  padding: 20px; /* Espaçamento interno */
}

/* Estilo para os itens de nível superior */
.treeview-item {
  padding: 10px; /* Espaçamento interno */
  border-bottom: 1px solid #444; /* Linha de separação */
}

/* Estilo para os itens filhos */
.treeview-subitem {
  margin-left: 20px; /* Espaçamento à esquerda para indicar aninhamento */
}

/* Estilo para os ícones de expandir/retrair */
.treeview-toggle {
  cursor: pointer; /* Mostrar cursor de mão ao passar o mouse */
  margin-right: 5px; /* Espaçamento à direita */
}

/* Estilo para os ícones de itens pais expandidos */
.treeview-toggle.expanded::before {
  content: "▼"; /* Símbolo de seta para baixo */
}

/* Estilo para os ícones de itens pais recolhidos */
.treeview-toggle.collapsed::before {
  content: "►"; /* Símbolo de seta para a direita */
}

/* Estilo para os ícones de itens sem filhos */
.treeview-toggle.no-children::before {
  content: ""; /* Nenhum símbolo para itens sem filhos */
}
</style>