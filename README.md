<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# cpolar

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
cpolar = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolar@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-cpolar/tags). For example,

```javascript
cpolar = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolar@v0.2.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var cpolar = require( 'path/to/vendor/umd/math-base-special-cpolar/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolar@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.cpolar;
})();
</script>
```

#### cpolar( z )

Computes the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex-float64' );

var o = cpolar( new Complex128( 5.0, 3.0 ) );
// returns [ ~5.83, ~0.5404 ]
```

#### cpolar.assign( z, out, stride, offset )

Computes the [absolute value][@stdlib/math/base/special/cabs] and [phase][@stdlib/math/base/special/cphase] of a double-precision complex floating-point number and assigns results to a provided output array.

```javascript
var Complex128 = require( '@stdlib/complex-float64' );
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = cpolar.assign( new Complex128( 5.0, 3.0 ), out, 1, 0 );
// returns <Float64Array>[ ~5.83, ~0.5404 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cpolar@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var re;
var im;
var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    re = round( randu()*100.0 ) - 50.0;
    im = round( randu()*100.0 ) - 50.0;
    z = new Complex128( re, im );
    o = cpolar( z );
    z = z.toString();
    console.log( 'abs(%s) = %d. arg(%s) = %d', z, o[0], z, o[1] );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/cabs`][@stdlib/math/base/special/cabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value of a double-precision complex floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/cphase`][@stdlib/math/base/special/cphase]</span><span class="delimiter">: </span><span class="description">compute the argument of a double-precision complex floating-point number in radians.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cpolar.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cpolar

[test-image]: https://github.com/stdlib-js/math-base-special-cpolar/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-base-special-cpolar/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cpolar/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cpolar?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cpolar.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cpolar/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cpolar/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-cpolar/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-cpolar/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-cpolar/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-cpolar/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-cpolar/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-cpolar/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cpolar/main/LICENSE

[@stdlib/math/base/special/cabs]: https://github.com/stdlib-js/math-base-special-cabs/tree/umd

[@stdlib/math/base/special/cphase]: https://github.com/stdlib-js/math-base-special-cphase/tree/umd

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
