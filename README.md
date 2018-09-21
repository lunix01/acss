# aless
    https://github.com/lunix01/aless  
    一个小小less mixins, less lib。只为更简洁方便的写less（css），尽可能实用，更佳实践！   

## bower
    如：bower install aless   

## 引用示例
    @import "aless/aless";  
    或 @import "aless/aless.less";  
    说明：reset.less，animation.less，effect.less，print.less是单独出来的，但都需要先依赖aless，如需使用请另外再引用。   

## 使用示例
    暂无！懂css，less，如果你用过emmet（ http://docs.emmet.io/cheat-sheet/ ）更佳，直接看aless源码咯。  
    关于字体，中文修改reset.less里的body{.ff-en();}的.ff-en()为.ff-cn()。   

## 关于aless的几点说明：
    reset.less里有fieldset，legend的padding设置，需要注意。  
    有关css3属性内容，本框架不对各浏览器前缀做处理。为标准，为未来。如果需要，可以自行用autoprefixer进行处理。   
