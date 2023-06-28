const parent = {
    get value() {
      return '19Qingfeng';
    },
  };
  const proxy = new Proxy(parent, {
    get(target, key, receiver) {
      console.log(receiver === proxy);
      console.log(target);
      console.log(receiver);
      return target[key];
    },
  });
  const obj = {
    name: 'wang.haoyu',
  };
  // 设置obj继承于parent的代理对象proxy
  Object.setPrototypeOf(obj, proxy);
  // log: false
  obj.value 