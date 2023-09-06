export default defineEventHandler (async (event) => {
  const { id } = getQuery(event);
  console.log(55, id);

    try {
      // const data = fs.readFileSync('public/data/datatodos_1.json', 'utf8');
      const body = await readBody(event)
      console.log('body>', body.username);
      if (body.username == "maga" && body.password == "12345"){
        return {
          "id": 15,
          "username": "maga",
          "email": "kminchelle@qq.com",
          "firstName": "Maguete",
          "lastName": "Halvorson",
          "gender": "female",
          "image": "https://robohash.org/autquiaut.png",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY4ODA0OTgwMSwiZXhwIjoxNjg4MDUzNDAxfQ.LiUHBFY3LsLt1jBSfc7qdu7pJn-ISPdJ-Xp6_LAsU8g"
        }
      } else {
        return 'forbidden'
      }
      
      
    } catch (err) {
      console.log(err.message);
    }
   
  })