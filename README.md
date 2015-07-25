# video-shortcut-controller

Add keyboard shortcut to `<video>` element.

## Installation

    npm install video-shortcut-controller

## Usage

```js
var container = document.body;
var video = document.getElementById("video");
var VideoShortcutController = require("video-shortcut-controller");
var controller = new VideoShortcutController(container, video);
controller.start();
```

See [example/](example/)

### Default Keyboard chortcut

- Space
    - toggle play/pause
- ↑ Up
    - volume up
- ↓ Down
    - volume down
- → Right
    - seek forward
- ← Left
    - seek backward
- S
    - toggle track(subs)
- F
    - toggle FullScreen
    

### Custom Keyboard shortcut

```js
import VideoShortcutController from "video-shortcut-controller";
class MyShortcutController extends VideoShortcutController{
    onKeyCode(event, keyCode) {
    // define custom key
        switch (keyCode) {
            case 32:
                this.setPosition(100, 'forward');
                return
        }
        return super.onKeyCode(event, keyCode);
    }
    super(event, keyCode);
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT