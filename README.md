# Pebble Language Pack

**WORK IN PROGRESS**

Requires node.js, python.

* Korean
* Korean + Japanese

# License and Credits

Python scripts under `sdk/` directory are from Pebble SDK 2.9.

Python scripts under `tool/` directory are from [xndcn/pebble-firmware-utils](https://github.com/xndcn/pebble-firmware-utils/).

`list-generator/data_raw/mearie.txt` is a work by @lifthrasiir. See [blog post](http://j.mearie.org/post/24348147729/hangeul-usage-in-irc-chatting).

Fonts under `font/` directory are Noto Sans. They are under Apache License 2.0. See [Noto Sans' LICENSE file](https://github.com/googlei18n/noto-fonts/blob/master/LICENSE).

`data/000.po` is a work by [cryingneko](http://wh.to/pebble/index_new.html). This file is retrieved from `pbKorean_nk02.pbl` by unpacking it.

# How to build

0. `pip install freetype-py` (for `fontgen.py`)
1. `cd list-generator && npm install`
2. `./make-codepoint`
3. `./build-langpack-k` or `./build-langpack-kj`
