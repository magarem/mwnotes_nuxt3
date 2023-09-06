import fs from 'fs'
// function getNodeById(id, node){
//   var reduce = [].reduce;
//   function runner(result, node){
//       if(result || !node) return result;
//       return node.id === id && node || //is this the proper node?
//           runner(null, node.children) || //process this nodes children
//           reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
//   }
//   return runner(null, node);
// }

export default defineEventHandler (async (event) => {
  const { id } = getQuery(event);
  console.log(55, id);
  
    // const { data: resDataSuccess } = await $fetch('/api/test11', {
    //   method: 'post',
    //   body: { text: 'Nuxt is Awesome!' }
    // })
    // const body = await readBody(event)
    // body.id = uuidv4()
    // console.log(body);
    // var bodyParsed = JSON.parse(body)
    // const maptxt = new Map([
    //   [body.id, body]
    // ]);
    // console.log(JSON.stringify(Object.fromEntries(maptxt)))
    try {
      const data = fs.readFileSync('public/data/datatodos_1.json', 'utf8');
      
      
      if (id) {
        return JSON.parse(data)[id]
      }else{
        return data
      }
      
    } catch (err) {
      console.log(err.message);
    }
    
    // async function loadMonoCounter() {
    //   const data = await fs.readFile('public/data/datatodos_1.json', 'utf8');
    //   return data;
    // }
    // loadMonoCounter()
    // fs.readFile('public/data/datatodos_1.json', 'utf8', (err, data) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log(data);
    // });
    
    // return {
    //   hello: "teste"
    // }
  })
  