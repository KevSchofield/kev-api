<div align="center">
<img src="https://i.ibb.co/xSk861N/k.png" alt="WATCIKER" width="600" />

# _**CREATED BY KEVIN SCHOFIELD**_

## WhatsApp Scrapper Api!
> 
>
</div><br/>
<br/>

```
Leer Lo Siguiente:
```

## IMPORTANTE

### ☕ JavaScript
```JS
const kvn = require('kev-api')
```
### 🌎 TypeScript
```TS 
import * as kvn from 'kev-api'
```

## ```Instalación Y Desinstalación```
> npm install kev-api
>  
> npm uninstall kev-api


## ```Youtube Descarga Por Enlace 480p```
``` 
const kvn = require('kev-api');
const link = 'https://youtu.be/VideoID' //Ejemplo: https://youtu.be/WTxYp9ECnPY

kvn.ytpp(link)
    .then(result => {
     console.log(result)
});
```

## ```Youtube Descarga Por Enlace 720p```
``` 
const kvn = require('kev-api');
const link = 'https://youtu.be/VideoID' //Ejemplo: https://youtu.be/WTxYp9ECnPY

kvn.ythd(link)
    .then(result => {
     console.log(result)
});
```

## ```Buscador De Stickers```
``` 
const kvn = require('kev-api');

(async () => {
    await kvn.stickersh(`Mario Kart`).then(Resultado => {
        console.log(Resultado)
    })
})()
```