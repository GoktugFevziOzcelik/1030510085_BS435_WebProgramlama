import {Rand} from "../src/kod";

test('gecersiz oyun',()=>{
    expect(()=>Rand(-1)).toThrow();
    expect(()=>Rand(0)).toThrow();
    expect(()=>Rand(99999999)).toThrow();
})
