## [ lazycoder ]
An experimental pattern generator for automated live visuals performance. Look ma, no hands.

#### About
Lazycoder is a small experimental Node application that generates completely original randomised Cyril live code patterns, and edits them automatically on the fly.

The application logic is built on [tracery.js](https://github.com/galaxykate/tracery), a story-grammar generation library by [Kate Compton](https://twitter.com/GalaxyKate).

Currently this is OSX only, as Cyril is OSX only. As and when it gets ported, this should ideally still work...

#### Installation
- Download [Cyril](http://cyrilcode.com)
- Install [Node](https://nodejs.org/en/download/) if you haven't already
- Do `npm link` from inside the project directory to make the lazycoder command available system-wide
- If this has worked, running `lazycoder version` should display the application version number
- That's it!

#### Usage
- Start up Cyril, and ensure the first frame is running. To do this, it `cmd-1` to select the first frame, and `cmd-r` to run the code in that frame. This frame will stay updated as Lazycoder runs.
- You can hide the code/frame display in Cyril by hitting `cmd-a`, and hit `cmd-f` to go full screen.
- Lazycoder commands are executed from the same directory level as the Cyril application (i.e. next to the Cyril app)
- To create a single new pattern, run `lazycoder once`. This is handy for testing.
- To run the full looping cycle, do `lazycoder start`. This will generate a new pattern, and then continually edit it's parameters over time until one of a few thresholds is reached, at which point a new pattern may be generated.
- To stop the loop, kill the process or do `lazycoder stop`

#### License
This prototype is released under the Do What The Fuck You Want public license, see LICENSE.md for details.
