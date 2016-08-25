# base64_img-cli
Easy command convert img to base64

## install
```
npm install base64_img-cli --save
```
## convert


```
trans -s <imgPath>
```

##example

```
trans -s imgs/1.png
```

> generate baseData.json




## for html <img> 


```
trans i <imgPath> -j <html>
```

## restore
```
trans -r <html>
```

####example

> trans -r index.html

> trans i imgs/1.png -j index.html

####before

```
<img src="imgs/1.png">
```

####after

```
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAcCAIA...">
```

