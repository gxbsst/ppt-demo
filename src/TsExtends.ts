// 之前
 const getObjDeepValue = < Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]
// 之后
 // const getObjDeepValue = < Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
) =>  {} as any;

const obj = { foo: { a: true, b: 2 }, bar: { c: "cool", d: 2 } };

const result = getObjDeepValue(obj, "", "");
