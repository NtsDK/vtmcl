type ObjectEntries<T, U extends keyof T = keyof T> = U extends unknown
  ? [U, T[U] extends (a: any, b: infer K) => any ? K : never]
  : never;
// type ObjectEntries<T, U extends keyof T = keyof T> = U extends unknown
// 	? [U, T[U] extends (infer F | undefined)
// 	  ? F extends never
// 		? undefined
// 		: F
// 	  : T[U] ]
// 	: never;

// type UnionIteration<T> = T extends unknown ? [T] : never;

type TupleUnionToObject<T extends [any, any]> = T extends unknown
  ? {
      type: T[0];
      props: T[1];
    }
  : never;

type S = TupleUnionToObject<["set1", [123]]>;
type S2 = TupleUnionToObject<["set1", [123]] | ["set2", ["sdf", true]]>;

// function test<T>(arg: T): TupleUnionToObject<ObjectEntries<T>> {
//   return arg as any;
// }

// const val = test(commonActions);

type C = [{ val: 1 }, { num: true }][number];

type ActionMap<StateObj> = Record<
  string,
  (state: StateObj, actionProps: any) => StateObj
>;

export class CompositeReducer<StateObj, Actions = never> {
  actionMap: ActionMap<StateObj> = {};

  constructor() {
    this.reduce = this.reduce.bind(this);
  }

  assign<U extends ActionMap<StateObj>>(
    newActionMap: U
  ): CompositeReducer<
    StateObj,
    Actions | TupleUnionToObject<ObjectEntries<U>>
  > {
    this.actionMap = {
      ...this.actionMap,
      ...newActionMap,
    };
    return this;
  }

  // assigns<
  //   U extends ActionMap<StateObj>,
  //   // K extends ActionMap<StateObj>,
  // >(...rest: U[]): CompositeReducer<StateObj, Actions | TupleUnionToObject<ObjectEntries<U>>> {
  //   // let next = this;
  //   if (rest.length > 0) {
  //     const next = this.assigns(...rest);
  //     return next.assign(rest[0]);
  //   } else {
  //     return this;
  //   }
  //   // return next.assign(rest[0]);
  // }

  reduce(state: StateObj, action: Actions): StateObj {
    // @ts-ignore
    return this.actionMap[action.type](state, action.props);
    // return state;
  }
}
