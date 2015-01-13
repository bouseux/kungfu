/*
The MIT License (MIT)

Copyright (c) 2015 Sylvain Verly

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
"use strict";

var expect = require('chai').expect;
var object = require('../lib/object');

describe('Object library', function() {
  it('Check simple merge', function() {
    var obj = object.merge({a: 'a', b: 'b'}, {c: 'c'});
    expect(obj).to.have.keys(['a', 'b', 'c']);

    expect(obj.a).to.be.equal('a');
    expect(obj.b).to.be.equal('b');
    expect(obj.c).to.be.equal('c');
  });

  it('Check merge erases values', function() {
    var obj = object.merge({a: 'a', b: 'b'}, {c: 'c', 'a': 'toto'});
    expect(obj).to.have.keys(['a', 'b', 'c']);

    expect(obj.a).to.be.equal('toto');
    expect(obj.b).to.be.equal('b');
    expect(obj.c).to.be.equal('c');
  });

  it('Check merge erases values', function() {
    var obj = object.merge({}, {c: 'c', 'a': 'toto'});
    expect(obj).to.have.keys(['a', 'c']);

    expect(obj.a).to.be.equal('toto');
    expect(obj.c).to.be.equal('c');
  });
});
