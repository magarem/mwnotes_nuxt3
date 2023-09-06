import fs from 'fs'
import { v4 as uuidv4 } from "uuid";

function JSONtoMap(json) {
  const obj = JSON.parse(json);

  return new Map(Object.entries(obj));
}
export default defineEventHandler (async (event) => {
    // const { data: resDataSuccess } = await $fetch('/api/test11', {
    //   method: 'post',
    //   body: { text: 'Nuxt is Awesome!' }
    // })
    const body = await readBody(event)
    // body.id = uuidv4()
    console.log("-------------------");
    console.log(body);
    // var bodyParsed = JSON.parse(body)
    const maptxt = new Map([
      [body.id, body]
    ]);
    console.log(JSON.stringify(Object.fromEntries(maptxt)))
    fs.readFile('public/data/datatodos_1.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      const map = JSONtoMap(data);
      console.log(map);
      map.set(body.id, body)
      // console.log(map.get('642d5f4d-406b-4aca-9638-0a9eb77660be'))
      console.log(map);
      
      // ✅ Convert to JSON string
      const json = JSON.stringify(Object.fromEntries(map), null, 2);
      console.log(json);
      
      // var json = JSON.parse(data)
      // json.push(body)
      fs.writeFile('public/data/datatodos_1.json', json, 'utf-8', (err) => {
        if (err) return console.log('An error happened', err)
        console.log('File fetched from {JSON} Placeholder and written locally!')
      })
    });
    
    return {
      hello: "teste"
    }
  })
  