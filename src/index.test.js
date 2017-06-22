describe('password is strength', function(){
  it('empty is not strength', function(){
    expect(isStregnthPassword('')).not.toBe(true);
  });
  it('length more than 8 is strength', function(){
    expect(isStregnthPassword('12345678')).toBe(true);
  });
  it('chinese char\'s length is 2', function(){
    expect(isStregnthPassword('123456曾')).toBe(true);
  });
  it('===', function(){
    var a = jasmine.createSpy('abc')
    a.and.returnValue('hello')
    expect(a.and.identity()).toBe('abc')
    a('abc')
    expect(a).toHaveBeenCalled()
    expect(a).toHaveBeenCalledTimes(1)
    expect(a).toHaveBeenCalledWith('abc')
  })
})
/**
 * describe: 测试套件(Suites)由它的调用开始，两个参数，名字或者title及函数，内部可以有多个it
 * it:       定义一个测试(Specs)
 * expect:   Expectations，期望，它的参数是一个实际值
 * Matchers: 每个匹配器在实际值与期望值的之就间实现一个bool比较. 为true就成功，为false就失败
 *    expect(1).boBe('1') false ===
 *    expect(1).not.boBe('1') true
 *    比较字面量变量及对象
 *    expect({a:'abc'}).toEqual({a:'abc'})  true
 *    expect(1).toEqual('1')                false
 *
 *    匹配正则或字符串
 *    expect('abc').toMatch('a')    true
 *    expect('abc').toMatch(/a/)    true
 *
 *    判断是否是undefined
 *    var a = {}
 *    expect(a.b).not.toBeDefined()     true
 *    expect(e.b).toBeUndefined()       true
 *
 *    判断null
 *    var b = null;
 *    expect(b).toBeNull()      true
 *
 *    判断truthy与falsy
 *    expect('a').toBeTruthy()
 *    expect(null).toBeFalsy()
 *
 *    判断数组与字符串包含
 *    expect(['aa', 'bb']).toContain('bb')
 *    expect('aabb').toContain('ab')
 *
 *    判断函数抛出异常
 *    var a = function(){
 *       throw 'abc'
 *    }
 *    expect(a).toThrow('abc')
 *
 *    判断函数抛出指定异常
 *    var a = function(){
 *      throw new Error('abc')
 *    }
 *    expect(a).toThrowError('abc')
 *
 * fail函数强制让测试失败
 *
 * setup and teardown:
 * beforeEach, afterEach  每个测试执行前后
 * beforeAll, afterAll    在任何测试执行之前，所有测试执行之后
 *
 * 数据共享：
 * beforeEach, it, afterEach内部的this是同一个，可以用this.abc来共享
 * 当然用更高level的局部变量也可以共享数据
 *
 *
 * xdescribe  disabled suites，它会pending它下面的所有测试
 * xit        pedding spec,pending该测试
 * pedding    在it内部使用pedding('abc')将会pending该测试
 *
 * */