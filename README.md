# store-json
apis to store any data on my server with your unique key
API examples 

Fetch data
GET : ```https://store-json-amber.vercel.app/data-server/data-fetch/:YOUR UNIQUE KEY```

create Data
POST : ```https://store-json-amber.vercel.app/data-server/data-save```
required schema : {
  "key": "AnyUniqueKeyword",
  "data": {
    "name": "elon","age":21
  },
  "type": "CREATE"
}

update data
POST : ```https://store-json-amber.vercel.app/data-server/data-save``` 
required schema : {
  "key": "AnyUniqueKeyword",
  "data": { 
  "name": "elon","age":21,""gender:"Male" 
  },
  "type": "UPDATE"
}

delete data 
DELETE : ```https://store-json-amber.vercel.app/data-server/data-delete/:YOUR UNIQUE KEY```
