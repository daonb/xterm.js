
import { Terminal } from '../out/browser/public/Terminal';
import { AttachAddon } from '../addons/xterm-addon-attach/out/AttachAddon';
import { CanvasAddon } from '../addons/xterm-addon-canvas/out/CanvasAddon';
import { FitAddon } from '../addons/xterm-addon-fit/out/FitAddon';
import { SearchAddon, ISearchOptions } from '../addons/xterm-addon-search/out/SearchAddon';
import { SerializeAddon } from '../addons/xterm-addon-serialize/out/SerializeAddon';
import { WebLinksAddon } from '../addons/xterm-addon-web-links/out/WebLinksAddon';
import { WebglAddon } from '../addons/xterm-addon-webgl/out/WebglAddon';
import { Unicode11Addon } from '../addons/xterm-addon-unicode11/out/Unicode11Addon';
import { LigaturesAddon } from '../addons/xterm-addon-ligatures/out/LigaturesAddon';

const term1 = new Terminal({
    cursorBlink: true,
    cursorStyle: 'block',
    fontSize: 14,
    cols: 80,
});

const term2 = new Terminal({
    cursorBlink: true,
    cursorStyle: 'block',
    fontSize: 14,
    cols: 60,
    theme: {
        background: '#F00000'
    }
});

const canvas = document.getElementById('canvas');

canvas.setAttribute('width', canvas.clientWidth.toString());
canvas.setAttribute('height', canvas.clientHeight.toString());

const webglAddon1 = new WebglAddon(document.getElementById('canvas'));
term1.loadAddon(webglAddon1);

const fitAddon1 = new FitAddon();
term1.loadAddon(fitAddon1);

term1.open(document.getElementById('term1-container'));
term1.write("term1")
fitAddon1.fit();

/* const webglAddon2 = new WebglAddon(document.getElementById('canvas'), { x: 50, y: 50, width: 100, height: 100 });
term2.loadAddon(webglAddon2);

const fitAddon2 = new FitAddon();
term2.loadAddon(fitAddon2);

term2.open(document.getElementById('term2-container'));
term2.write("term2");
fitAddon2.fit(); */

