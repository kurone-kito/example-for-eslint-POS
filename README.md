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

## Logs

<details><summary>STDOUT / STDERR</summary>

```text
> example-for-eslint-pos@0.1.0 lint:fix /Users/kurone-kito/src/my/example-for-eslint-POS
> eslint --fix ./*.ts


/Users/kurone-kito/src/my/example-for-eslint-POS/index.ts
  3:15  error  Parsing error: '>' expected

✖ 1 problem (1 error, 0 warnings)

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! example-for-eslint-pos@0.1.0 lint:fix: `eslint --fix ./*.ts`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the example-for-eslint-pos@0.1.0 lint:fix script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/kurone-kito/.npm/_logs/2020-03-17T15_22_30_038Z-debug.log
```

</details>

<details><summary>Log file</summary>

```text
0 info it worked if it ends with ok
1 verbose cli [
1 verbose cli   '/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/bin/node',
1 verbose cli   '/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/bin/npm',
1 verbose cli   'run',
1 verbose cli   'lint:fix'
1 verbose cli ]
2 info using npm@6.14.2
3 info using node@v13.11.0
4 verbose run-script [ 'prelint:fix', 'lint:fix', 'postlint:fix' ]
5 info lifecycle example-for-eslint-pos@0.1.0~prelint:fix: example-for-eslint-pos@0.1.0
6 info lifecycle example-for-eslint-pos@0.1.0~lint:fix: example-for-eslint-pos@0.1.0
7 verbose lifecycle example-for-eslint-pos@0.1.0~lint:fix: unsafe-perm in lifecycle true
8 verbose lifecycle example-for-eslint-pos@0.1.0~lint:fix: PATH: /Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/kurone-kito/src/my/example-for-eslint-POS/node_modules/.bin:/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/bin:/Users/kurone-kito/.anyenv/envs/nodenv/libexec:/Users/kurone-kito/.anyenv/envs/nodenv/plugins/nodenv-vars/bin:/Users/kurone-kito/.anyenv/envs/nodenv/plugins/nodenv-default-packages/bin:/Users/kurone-kito/.anyenv/envs/nodenv/plugins/node-build/bin:/Users/kurone-kito/.anyenv/envs/nodenv/shims:/Users/kurone-kito/.anyenv/envs/nodenv/bin:/usr/local/bin:/usr/local/sbin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/share/dotnet:~/.dotnet/tools:/Library/Frameworks/Mono.framework/Versions/Current/Commands:/Users/kurone-kito/.anyenv/envs/nodenv/shims:/Users/kurone-kito/.anyenv/envs/nodenv/bin:/Users/kurone-kito/.anyenv/envs/nodenv/versions/12.16.1/bin:/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/bin
9 verbose lifecycle example-for-eslint-pos@0.1.0~lint:fix: CWD: /Users/kurone-kito/src/my/example-for-eslint-POS
10 silly lifecycle example-for-eslint-pos@0.1.0~lint:fix: Args: [ '-c', 'eslint --fix ./*.ts' ]
11 silly lifecycle example-for-eslint-pos@0.1.0~lint:fix: Returned: code: 1  signal: null
12 info lifecycle example-for-eslint-pos@0.1.0~lint:fix: Failed to exec lint:fix script
13 verbose stack Error: example-for-eslint-pos@0.1.0 lint:fix: `eslint --fix ./*.ts`
13 verbose stack Exit status 1
13 verbose stack     at EventEmitter.<anonymous> (/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/lib/node_modules/npm/node_modules/npm-lifecycle/index.js:332:16)
13 verbose stack     at EventEmitter.emit (events.js:315:20)
13 verbose stack     at ChildProcess.<anonymous> (/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:55:14)
13 verbose stack     at ChildProcess.emit (events.js:315:20)
13 verbose stack     at maybeClose (internal/child_process.js:1026:16)
13 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:286:5)
14 verbose pkgid example-for-eslint-pos@0.1.0
15 verbose cwd /Users/kurone-kito/src/my/example-for-eslint-POS
16 verbose Darwin 19.3.0
17 verbose argv "/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/bin/node" "/Users/kurone-kito/.anyenv/envs/nodenv/versions/13.11.0/bin/npm" "run" "lint:fix"
18 verbose node v13.11.0
19 verbose npm  v6.14.2
20 error code ELIFECYCLE
21 error errno 1
22 error example-for-eslint-pos@0.1.0 lint:fix: `eslint --fix ./*.ts`
22 error Exit status 1
23 error Failed at the example-for-eslint-pos@0.1.0 lint:fix script.
23 error This is probably not a problem with npm. There is likely additional logging output above.
24 verbose exit [ 1, true ]
```

</details>
