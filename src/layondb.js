const fs = require('fs')
    class DB{  
    constructor(filePath){
        this.jsonFilePath = filePath || "./layondb/database.json";
        this.data = {};
        if(!fs.existsSync(this.jsonFilePath)){
            fs.writeFileSync(this.jsonFilePath, "{}", "utf-8");
        } else {
            this.fetchDataFromFile();
        }}
    fetchDataFromFile(){
        const savedData = JSON.parse(fs.readFileSync(this.jsonFilePath));
        if(typeof savedData === "object"){
        this.data = savedData}}              
    saveDataToFile(){
    fs.writeFileSync(this.jsonFilePath, JSON.stringify(this.data, null, 2), "utf-8")
    }
    add(key,value){
      const data = JSON.parse(fs.readFileSync('./layondb/database.json','utf-8'))
      data[key] = value; fs.writeFileSync('./layondb/database.json',JSON.stringify(data,null,2))
    }
  fetch(key){
    const data = JSON.parse(fs.readFileSync('./layondb/database.json','utf-8'))
    if(!data[key]) throw new TypeError("Datada Böyle Bir Değer Bulunamadı")
   return data[key]
  }
  delete(key){
    const data = JSON.parse(fs.readFileSync('./layondb/database.json','utf-8'))
   /// if(!data[key])
    // throw new TypeError("Datada Böyle Bir Değer Bulunamadı")
     delete data[key]
      return 
fs.writeFileSync('./layondb/database.json',JSON.stringify(data,null,2))
  }
  has(key){
        const data = JSON.parse(fs.readFileSync('./layondb/database.json','utf-8'))
    return data[key] ? true : false  
  }
  math(data,op,data1){
    let p = parseInt(data)
    let p1 = parseInt(data1)  
     if(!data){return console.warn("Geçerli İşlem İçin 2 Kareker Giriniz")}
     if(!data1){return console.warn("Geçerli İşlem İçin 2 Karekter Giriniz")}
     if(!op){return console.warn("Geçerli İşlem İçin Operatörü Giriniz +,-,*,/")}                     
    if(op=="+"){
      return data + data1
    }
    if(op=="-"){
      return data - data1
    }
    if(op=="*"){
      return data * data1
    }
    if(op=="/"){
      return data / data1
    }
  }
    on(d,msg){
    if(d == "ready" && typeof msg == String){
       console.log(msg)
    }
  }
}
  
module.exports = new DB()