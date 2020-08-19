import { join } from "https://deno.land/std@0.65.0/path/posix.ts";

/** Returns the path to the user's executable directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value                                                           | Example                    |
 * | ------- | --------------------------------------------------------------- | ---------------------------|
 * | Linux   | `XDG_BIN_HOME` or `$XDG_DATA_HOME`/../bin or `$HOME`/.local/bin | /home/justjavac/.local/bin |
 * | macOS   | -                                                               | -                          |
 * | Windows | -                                                               | -                          |
 */
export default function executable_dir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      const xdg = Deno.env.get("XDG_BIN_HOME");
      if (xdg) return xdg;

      const xdgData = Deno.env.get("XDG_DATA_HOME");
      if (xdgData) return join(xdgData, "../bin");

      const home = Deno.env.get("HOME");
      if (home) return join(home, ".local/bin");
      break;
    }
  }

  return null;
}
