const proxy = require( 'http-proxy-middleware' )

module.exports = function ( app ) {
  // app.use( proxy(标识符,options) )
  // http://m.maoyan.com/ajax/movieOnInfoList?token=
  app.use( proxy('/ajax',{
    target: 'http://m.maoyan.com',
    changeOrigin: true
  }))

  // http://www.qinqin.net/index.php?r=class/category&type=1
  app.use( proxy('/index.php',{
    target: 'http://www.qinqin.net',
    changeOrigin: true
  }))
}