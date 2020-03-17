# 🐝 Examine ESLint issues with the `prefer-object-spread` rule

`eslint --fix` command breaks down the code due to the `prefer-object-spread` rule.

```diff
-const obj = Object.assign<{}, Record<string, string[]>>({}, getObject());
+const obj = <{}, Record<string, string[]>>{ ...getObject()};
```

I understand why this code isn't suitable, but I think it's a problem that
the automatic fix can break the source code.

I created this project because I reproduce this problem
and find ways to improve it.
