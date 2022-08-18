# Kurulum 
```js
const db = require('layon.db')
```

#Dosya Kurulum 
```js
layondb Adlı Bir Klasör Oluşturunuz Ardından İçine database.json Adlı Bir Dosya Oluşturun Sonra Bu Dosyasının İçine {} Şu İşareti Atın Ve Hazir!
```

# Database Ekleme Yapma
```js
const db = require('layon.db')
db.add("zero","hero")

Burda Yazılacak Şey

{
  "zero":"hero"
}
```

# Databaseten Veri Çekme
```js
const db = require('layon.db')
let layona = db.fetch("zero")
console.log(layona)

Az Önce  Eklediğimiz Veri zero ve değeri hero Bizim Konsolumuza Burda hero değeri dönecektir 
```

# Databaseten Veri Silme
```js
const db = require('layon.db')
db.delete("zero")


Az Önce  Eklediğimiz Veri zero ve değeri hero Burda Bunlar Silinecektir ve Databaseinizde Başka Bir Veri Bulunmuyorsa {} database.json dosyamız böyle gözükecektir 
```

# Databasete Veri Olup Olmadığını Kontrol Etme
```js
const db = require('layon.db')
db.has("zero")

Burda Değerimiz Buluyorsa true bulunmuyorsa false değerini döndürecektir az önce sildigimiz için false döndürecektir 
```

# Matematik İşlemleri


```js
const db = require('layon.db')

db.math(3,"+",3) //6
db.math(3,"*",3) //9
db.math(3,"/",3) //1
db.math(3,"-",3) //0

```

# Hazır Olunca İşlem Döndürme


```js
db.on("ready",console.log("Hazırım")) //Konsola Hazırım Yazdırır

db.on("ready",db.add("layona","db")) //Database'e Kayıt İşlemi Uygular
```

# Npm

<a href="https://www.npmjs.com/package/layon.db">Npm Linki</a>
<p>Developed By <a style="color:ORANGE" href="https://discord.com/users/920315243106795570">Layona-x</a>
<li>Basit Bir Json Modülüdür Geliştiriliyor</li>
