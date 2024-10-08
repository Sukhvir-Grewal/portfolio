# My first Portfolio

### The Plan: <br>

Well, folks, let me spill the beans about my grand plan. At first, I wanted things to be all classy and straightforward. You know, just a simple, elegant portfolio. But then, I got all wild and experimental. I started with Portfolio 1.0, then came Portfolio 2.0, and even a Portfolio 3.0, each with its own zany twist. Honestly, I had no clue where I was heading!

<br>

After a few days of this creative chaos, I had an epiphany. I decided to hit the reset button and set a clear goal. I thought, "Why not spice up this portfolio with some cool stuff to showcase my mad skills in both the front and back ends?" And then, out of the blue, the idea of a game hit me. I imagined a rocket launching from Earth to the Moon, sharing stories along the way. But hold on, that'd take ages to finish! So, I swiped a genius move from video games.

<br>

You know that little character who guides you through the game? Yep, that's gonna be me, always hanging out at the bottom, chatting away with different versions of me while the story unfolds. And the rest of the design? Back to classy and simple, just like I originally dreamed. Ta-da! That's how I cooked up this masterpiece! 🚀💫

# Version 1.0

Oh, the first version of this project was a real time-eater! I originally thought about diving into Node.js, but when it came to keeping things simple, I went with the good ol' trio: HTML, CSS, and JS, you know, the basics.
<br>
<br>
But hey, I also wanted to spice things up a bit, so I brought out my secret weapon: Next.js 14, which is all the rage these days. It's my go-to for the latest projects too!
<br>
<br>
Now, here's the fun part. Instead of having those pesky loading screens when you click around for "about" or "contact," I decided to go with some fancy conditional rendering. I'm talking about whipping up some components to switch up the views, and let me tell you, it's so blazingly fast you won't even have time to grab a coffee! 🚀💨

like so..

```js
function renderView() {
    const ViewComponent = {
        dashboard: DashBoard,
        about: About,
        contact: Contact,
        project: Project,
        skill: Skills,
    }[view];

    return ViewComponent ? (
        <ViewComponent setView={setView} view={view} />
    ) : null;
}
```

Well, the basic setup is all set, and those components are pretty much good to go. But let me tell you, V2 is going to be off-the-charts exciting, even wilder than a chocolate factory rollercoaster! 🍫🎢🤩

# Learnings

* I dipped my toes into the world of email sending with Nodemailer. Still unraveling its mysteries, but hey, progress!
* Axios made its debut in my toolkit, helping me connect with Nodemailer like a digital matchmaker.
* useEffect became my new frenemy, with its quirks and bugs. We've had some epic battles, but I'm learning the ropes.
* Drumroll, please! I unlocked the secret of creating Context, the superhero of variable-sharing between components.
* And then, there's useCallback, my trusty sidekick in the battle against relentless re-renders. It took a bit, but I finally cracked the code after a 5-hour showdown. 🚀📧🛡️

A lot to work on lets keep going🚀