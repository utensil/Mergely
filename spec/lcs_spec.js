describe('Mgly.LCS', function () {
  
  var Klass = {
      added : function()
      {
        //nothing is ok
      },
      
      removed : function()
      {
        //nothing is ok
      },      
      spy : function()
      {
        spyOn(Klass, 'added');
        spyOn(Klass, 'removed');
      }
  };
  
  it("should apply when both sides are empty", function(){
    lcs = new Mgly.LCS('', '');
    
    expect(lcs).toBeDefined();
    
    expect(lcs.hasOwnProperty('length')).toBeTruthy();
    
    expect(lcs.length).toEqual(0);
    
    expect(lcs.ready).toEqual(1);
    
    expect(lcs.C).toEqual([ [ 0, 0 ], [ 0, 1 ] ]);
    expect(lcs.x).toEqual([ '' ]);
    expect(lcs.y).toEqual([ '' ]);
    
    lcs.clear();
    
    expect(lcs.ready).toEqual(0);    

    Klass.spy();
    
    lcs.diff(Klass.added, Klass.removed);
    
    expect(Klass.added).not.toHaveBeenCalled();
    expect(Klass.removed).not.toHaveBeenCalled();    
    
  });
  
  it("should apply when right side is empty", function(){
    lcs = new Mgly.LCS('abc', '');
    
    expect(lcs).toBeDefined();
    
    expect(lcs.length).toEqual(0);
    
    expect(lcs.ready).toEqual(1);
    
    expect(lcs.C).toEqual([ [ 0, 0 ], 
                            [ 0, 1 ], 
                            [ 0, 1 ], 
                            [ 0, 1 ], 
                            [ 0, 1 ] ] );
                            
    expect(lcs.x).toEqual([ '', 'a', 'b', 'c' ]);
    expect(lcs.y).toEqual( [ '' ] );
    
    lcs.clear();
    
    expect(lcs.ready).toEqual(0);
    
    Klass.spy();
    
    lcs.diff(Klass.added, Klass.removed);
    
    expect(Klass.added).not.toHaveBeenCalled();
    expect(Klass.removed).toHaveBeenCalled();    
  });
  
  it("should apply when left side is empty", function(){
    lcs = new Mgly.LCS('', 'abc');
    
    expect(lcs).toBeDefined();
    
    expect(lcs.length).toEqual(0);
    
    expect(lcs.ready).toEqual(1);
    
    expect(lcs.C).toEqual([ [ 0, 0, 0, 0, 0 ], 
                            [ 0, 1, 1, 1, 1 ] ] );
    expect(lcs.x).toEqual( [ '' ] );
    expect(lcs.y).toEqual([ '', 'a', 'b', 'c' ]);
    
    
    lcs.clear();
    
    expect(lcs.ready).toEqual(0);
    
    Klass.spy();
    
    lcs.diff(Klass.added, Klass.removed);
    
    expect(Klass.added).toHaveBeenCalled();
    expect(Klass.removed).not.toHaveBeenCalled(); 
    
  });
  
  it("should apply when one letter differs", function(){
    lcs = new Mgly.LCS('afc', 'abc');
    
    expect(lcs).toBeDefined();
    
    expect(lcs.length).toEqual(1);
    
    expect(lcs.ready).toEqual(1);
    
    expect(lcs.C).toEqual( [ [ 0, 0, 0, 0, 0 ], 
                             [ 0, 1, 1, 1, 1 ], 
                             [ 0, 1, 2, 2, 2 ], 
                             [ 0, 1, 2, 2, 2 ], 
                             [ 0, 1, 2, 2, 3 ] ]  );
                             
    expect(lcs.x).toEqual( [ '', 'a', 'f', 'c' ] );
    expect(lcs.y).toEqual([ '', 'a', 'b', 'c' ]);
        
    lcs.clear();
    
    expect(lcs.ready).toEqual(0);
    
    Klass.spy();
    
    lcs.diff(Klass.added, Klass.removed);
    
    expect(Klass.added).toHaveBeenCalled();
    expect(Klass.removed).toHaveBeenCalled(); 
    
  });
  
  //TODO
  
});