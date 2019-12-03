## PROBLEM

Startup through `react-native run-android` or through `react-native start` fails.

Error code:

```
error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\
.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more det
ails.
SyntaxError: Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_mo
dules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class
    at new RegExp (<anonymous>)
    at blacklist (C:\web\goals\node_modules\metro-config\src\defaults\blacklist.js:34:10)
    at getBlacklistRE (C:\web\goals\node_modules\react-native\node_modules\@react-native-community\cli\build\tools\load
MetroConfig.js:66:59)
    at getDefaultConfig (C:\web\goals\node_modules\react-native\node_modules\@react-native-community\cli\build\tools\lo
adMetroConfig.js:82:20)
    at load (C:\web\goals\node_modules\react-native\node_modules\@react-native-community\cli\build\tools\loadMetroConfi
g.js:118:25)
    at Object.runServer [as func] (C:\web\goals\node_modules\react-native\node_modules\@react-native-community\cli\buil
d\commands\server\runServer.js:82:58)
    at Command.handleAction (C:\web\goals\node_modules\react-native\node_modules\@react-native-community\cli\build\inde
x.js:164:23)
    at Command.listener (C:\web\goals\node_modules\commander\index.js:315:8)
    at Command.emit (events.js:210:5)
    at Command.parseArgs (C:\web\goals\node_modules\commander\index.js:651:12)
```

### SOLUTION

you have to make change in this file {project_root}\node_modules\metro-config\src\defaults\blacklist.js

there is an invalid regular expression that needed changed. I changed the first expression under sharedBlacklist from:

```var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

to

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
