/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var cabs = require( '@stdlib/math-base-special-cabs' );
var Complex128 = require( '@stdlib/complex-float64' );
var cphase = require( '@stdlib/math-base-special-cphase' );
var Float64Array = require( '@stdlib/array-float64' );
var cpolar = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cpolar, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number', function test( t ) {
	var expected;
	var v;

	v = cpolar( 5.0, 3.0 );
	expected = [ cabs( new Complex128( 5.0, 3.0 ) ), cphase( new Complex128( 5.0, 3.0 ) ) ];

	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number (output array)', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Array( 2 );
	v = cpolar( out, 5.0, 3.0 );

	expected = [ cabs( new Complex128( 5.0, 3.0 ) ), cphase( new Complex128( 5.0, 3.0 ) ) ];

	t.deepEqual( v, expected, 'returns expected value' );
	t.strictEqual( v, out, 'returns output value' );

	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number (output typed array)', function test( t ) {
	var expected;
	var out;
	var abs;
	var v;

	out = new Float64Array( 2 );
	v = cpolar( out, 5.0, 3.0 );

	abs = cabs( new Complex128( 5.0, 3.0 ) );
	expected = new Float64Array( [ abs, cphase( new Complex128( 5.0, 3.0 ) ) ] );

	t.deepEqual( v, expected, 'returns expected value' );
	t.strictEqual( v, out, 'returns output value' );

	t.end();
});

tape( 'the function computes the absolute value and phase of a complex number (output object)', function test( t ) {
	var expected;
	var out;
	var v;

	out = {};
	v = cpolar( out, 5.0, 3.0 );

	expected = {
		'0': cabs( new Complex128( 5.0, 3.0 ) ),
		'1': cphase( new Complex128( 5.0, 3.0 ) )
	};

	t.deepEqual( v, expected, 'returns expected value' );
	t.strictEqual( v, out, 'returns output value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, both the absolute value and phase are `NaN`', function test( t ) {
	var v;

	v = cpolar( NaN, 3.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cpolar( 5.0, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cpolar( NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	t.end();
});
