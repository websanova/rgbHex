# rgbHex()

A simple yet intelligent rgb / hex converter for JavaScript (~1.06 Kb minified).

* [View the rgbHex demo](http://rgbhex.websanova.com)
* [Download the lastest version of rgbHex](https://github.com/websanova/rgbHex/tags)

The converter will automatically detect the input format and auto convert it allowing you to enter either a rgb or hex value as input.  Note that any white space before and after the entire or string or individual numbers are acceptable.  Also lower and upper case letters for hex values are also both acceptable.

## Related Plugins

* [url](https://github.com/websanova/js-url) - A lightweight JavaScript url parser with some awesome syntactical candy.


## Examples

```
rgb(255,255,255)       => #FFFFFF
rgb(255,255,255);      => #FFFFFF
rgb(255,255,255,0)     => #FFFFFF
rgba(255, 255, 255)    => #FFFFFF
rgba(255, 255, 255, 0) => #FFFFFF
255,255,255            => #FFFFFF
255,255,255,0          => #FFFFFF
#FFFFFF                => rgb(255,255,255)
#ffffff                => rgb(255,255,255)
#FfFfFf                => rgb(255,255,255)
#FFF                   => rgb(255,255,255)
FFFFFF                 => rgb(255,255,255)
FFF                    => rgb(255,255,255)
```

## jQuery

Also include is a jQuery version of the plugin that can be called via $.rgbHex() with all the same options.  If you're already using jQuery it may be better to use the jQuery version to avoid namespacing issues.


## Grunt.js

If you want to use Grunt you will need to install the required plugins locally using `npm install` in the root folder of your project.  If you need to setup Grunt on your system you can follow my [Setting up Grunt.js](http://www.websanova.com/blog/javascript/how-to-setup-grunt) guide.


## Resources

* [More jQuery plugins by Websanova](http://websanova.com/plugins)
* [Websanova JavaScript Extensions Project](http://websanova.com/extensions)
* [jQuery Plugin Development Boilerplate](http://wboiler.websanova.com)
* [The Ultimate Guide to Writing jQuery Plugins](http://www.websanova.com/blog/jquery/the-ultimate-guide-to-writing-jquery-plugins)


## License

MIT licensed

Copyright (C) 2011-2012 Websanova http://www.websanova.com