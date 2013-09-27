(function() {

module('rgbHex');

test('rgb to hex - valid', function() {
  equal( window.rgbHex( 'transparent' ), 'transparent' );
  equal( window.rgbHex( 'rgba(0, 0, 0, 0)' ), 'transparent' );
  equal( window.rgbHex( 'rgba(0,0,0,0)' ), 'transparent' );
  equal( window.rgbHex( 'rgb(255,255,255)' ), '#FFFFFF' );
  equal( window.rgbHex( 'rgb(255, 255, 255) ' ), '#FFFFFF' );
  equal( window.rgbHex( 'rgb(255, 255, 255, 0.4) ' ), '#FFFFFF' );
  equal( window.rgbHex( 'rgba(255,255,255)' ), '#FFFFFF' );
  equal( window.rgbHex( 'rgba(255,255,255, 0) ' ), '#FFFFFF' );
  equal( window.rgbHex( ' rgba(255,255,255, 0.0)' ), '#FFFFFF' );
  equal( window.rgbHex( '255,255,255' ), '#FFFFFF' );
  equal( window.rgbHex( '255, 255, 255' ), '#FFFFFF' );
  equal( window.rgbHex( '255,255,255,0' ), '#FFFFFF' );
  equal( window.rgbHex( ' 255,255, 255, 0' ), '#FFFFFF' );
  equal( window.rgbHex( '255, 255,255, 0.5 ' ), '#FFFFFF' );
  equal( window.rgbHex( 'rgb(255,255,255);' ), '#FFFFFF' );
});

test('rgb to hex - invalid', function() {
  equal( window.rgbHex( 'rgb(255,255);' ), null );
  equal( window.rgbHex( 'rgb(255,255,255' ), null );
  equal( window.rgbHex( 'rgba(255,255,255,0.4' ), null );
  equal( window.rgbHex( 'rgb(255,2 55,255);' ), null );
  equal( window.rgbHex( 'rgb(255,);' ), null );
  equal( window.rgbHex( 'rgba(255, 255,);' ), null );
  equal( window.rgbHex( 'rgba(255,);' ), null );
  equal( window.rgbHex( '7 rgba(255,255,255)' ), null );
  equal( window.rgbHex( '7 rgba(255,255,255) j' ), null );
  equal( window.rgbHex( '7 255,255,255' ), null );
  equal( window.rgbHex( '255, 255, 255 9 ' ), null );
  equal( window.rgbHex( '255,255,255,0 9' ), null );
  equal( window.rgbHex( 'a 255,255, 255, 0' ), null );
  equal( window.rgbHex( 'a 255,255,' ), null );
  equal( window.rgbHex( 'a 255,255' ), null );
  equal( window.rgbHex( '255,255' ), null );
  equal( window.rgbHex( '255,255,256' ), null );
  equal( window.rgbHex( 'rgb(255,255,256)' ), null );
  equal( window.rgbHex( 'rgba(255,255,256,0)' ), null );
  equal( window.rgbHex( ' rgb(255, 255, 255) ;' ), null );
  equal( window.rgbHex( 'rgb(a, b, c)' ), null );
  equal( window.rgbHex( 'rgb(255, 23, a)' ), null );
});

test('rgb to hex - colours', function() {
  equal( window.rgbHex( 'rgb(255,255,255)' ), '#FFFFFF' );
  equal( window.rgbHex( 'rgb(0, 0, 0)' ), '#000000' );
  equal( window.rgbHex( 'rgb(1, 2, 3)' ), '#010203' );
  equal( window.rgbHex( 'rgb(8, 9, 10)' ), '#08090A' );
  equal( window.rgbHex( 'rgb(14, 15, 16)' ), '#0E0F10' );
  equal( window.rgbHex( 'rgb(00, 0, 000)' ), '#000000' );
  equal( window.rgbHex( 'rgba(127,255,0)' ), '#7FFF00' );
  equal( window.rgbHex( 'rgba(64,224,208)' ), '#40E0D0' );
  equal( window.rgbHex( 'rgba(255,165,0)' ), '#FFA500' );
  equal( window.rgbHex( 'rgba(230,230,250)' ), '#E6E6FA' );
  equal( window.rgbHex( ' 65,105,225 ' ), '#4169E1' );
  equal( window.rgbHex( '119, 136, 153' ), '#778899' );
  equal( window.rgbHex( '47,79,79, 0' ), '#2F4F4F' );
  equal( window.rgbHex( ' 255,0, 255, 0' ), '#FF00FF' );
  equal( window.rgbHex( '152, 251,152, 0.5 ' ), '#98FB98' );
});

test('hex to rgb - valid', function() {
  equal( window.rgbHex( '255' ), 'rgb(34,85,85)' );
  equal( window.rgbHex( '#255' ), 'rgb(34,85,85)' );
  equal( window.rgbHex( '255255' ), 'rgb(37,82,85)' );
  equal( window.rgbHex( '#255255' ), 'rgb(37,82,85)' );
  equal( window.rgbHex( ' #255255 ' ), 'rgb(37,82,85)' );
  equal( window.rgbHex( 255255 ), 'rgb(37,82,85)' );
  equal( window.rgbHex( 255 ), 'rgb(34,85,85)' );
});

test('hex to rgb - invalid', function() {
  equal( window.rgbHex( ',255' ), null );
  equal( window.rgbHex( '2 55' ), null );
  equal( window.rgbHex( ',2555' ), null );
  equal( window.rgbHex( '2555' ), null );
  equal( window.rgbHex( '25' ), null );
  equal( window.rgbHex( ',#255' ), null );
  equal( window.rgbHex( '#255#' ), null );
  equal( window.rgbHex( '#25555' ),  null);
  equal( window.rgbHex( '25555' ),  null);
  equal( window.rgbHex( '34Z' ),  null);
  equal( window.rgbHex( 'ABT' ),  null);
  equal( window.rgbHex( '255255, ' ), null );
  equal( window.rgbHex( '  ,255255 ' ), null );
});

test('hex to rgb - colours', function() {
  equal( window.rgbHex( '#FFF' ), 'rgb(255,255,255)' );
  equal( window.rgbHex( '#000' ), 'rgb(0,0,0)' );
  equal( window.rgbHex( '#010203' ), 'rgb(1,2,3)' );
  equal( window.rgbHex( ' 08090A' ), 'rgb(8,9,10)' );
  equal( window.rgbHex( ' 0E0F10 ' ), 'rgb(14,15,16)' );
  equal( window.rgbHex( '4169E1 ' ), 'rgb(65,105,225)' );
  equal( window.rgbHex( '778899' ), 'rgb(119,136,153)' );
  equal( window.rgbHex( ' #2f4f4F' ), 'rgb(47,79,79)' );
  equal( window.rgbHex( ' #FF00FF ' ), 'rgb(255,0,255)' );
  equal( window.rgbHex( '#98FB98 ' ), 'rgb(152,251,152)' );
});

test('jQuery', function() {
  equal( $.rgbHex( '#FFF' ), 'rgb(255,255,255)' );
  equal( $.rgbHex( '000' ), 'rgb(0,0,0)' );
  equal( $.rgbHex( 'rgb(255,255,255)' ), '#FFFFFF' );
});

}());