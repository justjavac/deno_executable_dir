# deno_executable_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_executable_dir)](https://github.com/justjavac/deno_executable_dir/releases)
[![Build Status](https://github.com/justjavac/deno_executable_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_executable_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_executable_dir)](https://github.com/justjavac/deno_executable_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

> _In v1.1.2(2020.06.26), Deno [Remove `Deno.dir` and dirs dependency #6385](https://github.com/denoland/deno/pull/6385)_

Returns the path to the user's executable directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                                                           | Example                    |
| ------- | --------------------------------------------------------------- | ---------------------------|
| Linux   | `XDG_BIN_HOME` or `$XDG_DATA_HOME`/../bin or `$HOME`/.local/bin | /home/justjavac/.local/bin |
| macOS   | -                                                               | -                          |
| Windows | -                                                               | -                          |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import executableDir from "https://deno.land/x/executable_dir/mod.ts";

executableDir();
// Lin: "/home/justjavac/.local/bin"
// Mac: null
// Win: null
```

## License

[deno_executable_dir](https://github.com/justjavac/deno_executable_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
