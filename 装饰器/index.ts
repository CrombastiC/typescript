//1.类装饰器 classDecorator target 代表类的构造函数
//2.属性装饰器 propertyDecorator
//3.参数装饰器 ParameterDecorator
//4.方法装饰器 MethodDecorator propertyDecorator
//5.装饰器工厂
//6.import 'reflect-metadata'
import 'reflect-metadata'
import axios from 'axios'

//7.axios
const Base = (name: string) => {
  const fn: ClassDecorator = (target) => {
    // console.log(target)
    target.prototype.name = name
    target.prototype.fn = () => {
      // console.log('函数')
    }
  }
  return fn
}

const Get = (url: string) => {
  const fn: MethodDecorator = (
    target,
    _: any,
    descriptor: PropertyDescriptor
  ) => {
    const key = Reflect.getMetadata('key', target)
    axios.get(url).then((res) => {
      descriptor.value(res ? res.data[key] : res.data)
    })
  }
  return fn
}
const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    //反射
    Reflect.defineMetadata('key', 'result', target)
    // console.log(target, key, index)
  }
  return fn
}
const Name: PropertyDecorator = (target, key) => {
  console.log(target, key)
}
// @Base//装饰器自动调用
@Base('xiao li')
class Http {
  @Name
  xiaoli: string
  constructor() {
    this.xiaoli = 'xiaoli'
  }
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getLists(
    @Result()
    data: any
  ) {
    console.log(data)
  }
  // @post()
  create() {}
}
const http = new Http() as any
// Base(http) //手动调用
console.log(http.name)
