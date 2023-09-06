<template>
    <div>
      <ul>
        <li v-for="node in tree" :key="node.id">
          <NuxtLink :to="'form?id='+node.id" >
            <span class="treeview-item">{{ node.title }}</span>
          </NuxtLink>
          <Treeview class="treeview-subitem_" :tree="node.children" v-if="node.children && node.children.length > 0" />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
    const props = defineProps(['tree'])

    let test = ref(null)
  // let getChildItems = (parentId) => {
  //   const children = [];
  //     for (const itemId in props.treeData) {
  //       const item = props.treeData[itemId];
  //       if (item.pid === parentId) {
  //         children.push(item);
  //       }
  //     }
  //     return children;
  //   }
  const toggleNode = (node) => {
      // console.log(node);
      node.isOpen = !node.isOpen;
  }
  
  </script>