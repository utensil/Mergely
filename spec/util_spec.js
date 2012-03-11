describe('Object.size', function () {
  
  it("should return 0 with empty object", function(){
    expect(Object.size({})).toEqual(0);
  });
  
  it("should count correctly when with literal object", function(){
    expect(Object.size({ foo: 1, bar: 'abc'})).toEqual(2);
  });
  
  it("should count correctly when foo.size == 2", function () {
    var Foo = function() {
      this.prop1 = 1;
      this.prop2 = ["x", "xx"];
    }
    
    var foo = new Foo();
    
    expect(Object.size(foo)).toEqual(2);
  });
});