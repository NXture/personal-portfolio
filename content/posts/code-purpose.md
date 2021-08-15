---
title: "The Real purpose of Code"
date: 2021-04-12
author: "Varun Srivatsa"
tags:
  - Code
  - Programming
  - Computer Science
description: "Let me start by asking this question. Have you ever had a piece of code, that it broke but you just had no idea why it broke? It seemed like it had been working before and now all of a sudden it’s been broken and you just can’t figure out why."
featureImage: "../featureImage/code_purpose.png"
---

> Code is for Humans, not Computers.

Let me start by asking this question. Have you ever had a piece of code, that it broke but you just had no idea why it broke? It seemed like it had been working before and now all of a sudden it’s been broken and you just can’t figure out why. And that is I guess about as universal as it gets for software developers, right? Is that we write this piece of code, and then it breaks and we’re just pulling our hair out, we can’t figure out why it’s broken.

But let me ask a more probing question, one that’s sometimes a little harder to nod at. Have you ever written a piece of code that worked and you had no idea why it worked? And I didn’t think that was a problem at the time when I was new to programming.

I didn’t think that was a problem. I thought it was just how things are. Software developers don’t really know what we’re doing. We’re all just sort of making it up. But I’ve come to believe that that is a signal of one of these deeper, more universal problems. That we write code so much and it’s sort of a, maybe you’ve done this before because I’ve done it I can’t even count how many times, I can’t get this piece of code to work and so I’m like, all right, wrap some parentheses around it and put a plus one on it and wrap a try-catch around it. And at some point, it just accidentally works. The test case passes. And then you’re like, let me back up and just hopefully this doesn’t break, right?

You put a little code comment there, like nobody touch this. This is house of cards design right? I can barely get this thing to balance, please nobody breathe on it. Don’t know why it works, don’t know why it balances but let’s just ship it that way.

And while that can feel gratifying to ship a piece of code, in the back of my mind it always bugged me. Maybe you’re that way. Maybe you’ve been bugged by, why do I ship all this code and I’m not really certain why it’s working? And I wonder If that problem of not understanding our code is one of these universal issues, and I wonder if it actually is systemic that it leads to a lot of our other problems.

As a matter of fact, I would say it this way. If you don’t know why your code works, you have no hope of fixing it when it breaks, other than sheer luck and guessing and magic.

If you don’t know why your code works, you have no hope of fixing it when it breaks.

And yet, we do this all the time. I like to refer to this, we’re professional guessers, we just hope that it works. The only profession I’ve ever found that can get away with professional guessing is weathermen. Right, the weatherman just guesses maybe it’ll be sunny, maybe it’ll snow, who knows? 50⁄50 chance. But yet, should our profession be that way? Should it really be that we ship code, and we tell our boss yes, the feature is finished? And yet we have almost no confidence that it’s going to continue to do what it was supposed to be doing, because we don’t even understand why it’s doing it now.

That’s a systemic problem among software developers, that rather than having a confidence that we know what we’re doing and why we’re doing it, and we have a specific plan, we like to think of ourselves as computer scientists, like we’re doing this very on purpose.

But the reality is, that whole impostor syndrome that we’re all just guessing. And some of us are better at guessing and making it look good than others, right? That’s unfortunately what I’ve seen. This is one of those universal truths, that what we do as a profession, is this professional guessing. And while that works, while we collect pay checks, it drives me to believe that there’s something better that we should be striving for. If you’re looking for the one core motivating point that drives me to write this blog, it’s this. And I aspire that others would know the same and would be challenged to do the same.

How many lines of code do you think are currently in existence running today globally? There’s no right answer to this question, but I know specifically, I
have heard specifically of code bases that just one code base had 200 million lines of code in the code base. So if there’s a few of those we’ve got to be
talking in the tens maybe even hundreds of billions of lines of code in existence today that runs somewhere, does something. Okay, tens, maybe hundreds of billions, that’s a lot of lines of code. But here’s the more important question that I want to ask you. How many zeros do we need to add to that number, whatever it is, to account for all the lines of code that
have ever been written?

How many lines of code have been rewritten, not once, not twice, not ten times, hundreds of times. If you’re looking for one of those systemic problems, not just a one-off kind of problem, but a systemic problem that creates other problems in its wake. The inability to understand code to the extent that your only solution is to rewrite it , that’s one of those systemic universal problems.

So what we’re getting at here is that we can’t figure it out when it works the first time. We can’t figure out why it breaks, so we rewrite it and then the cycle restarts. And we can’t figure out why what we rewrote works. And then we can’t figure out why what we rewrote has been broken, and that cycle just keeps perpetuating itself. And so eventually somebody says, hey there’s this new framework that’s been released. Let’s re-write the whole code base in the new framework, because it will certainly fix this problem. And the cycle starts all over again. And it doesn’t matter what technology you’re using. This is one of those, I’m convinced, one of those universal problems.

What I’m getting at here is that the difficulty of understanding code comes directly from our inability and unwillingness to insist that the code communicate our ideas. The problem we have here is that we’re writing our code primarily for the computer. And I got news for you, that’s not who source code is for, okay? All of the systemic universal problems that I’ve been observing, I believe this as deeply as I could believe any religious belief, they’re all coming directly because we’ve spent our entire industry, the entire 60 years plus of computing science, figuring out how to optimize our code for the computer. Instead of optimizing for the person who’s going to read that code.

Do you know that computer science theory tells us that within the scope of correctly functioning programs, that is, programs that at least seem to do what we want at this exact moment, within that scope of programs, do you know there’s an infinite number of ways to write the same program?

Not just infinite languages. Literally, within JavaScript there’s an infinite number of ways to structure that program. That kind of blows my mind because that’s a really big number, right? I think that it feels like it ought to be fixed at a million or something. But somehow, mathematically we can prove that there’s an infinite number of ways to write that same program. That’s a lot of choices, and so how we would we decide among all those choices what the best option is? What metric would we use for best? A lot of people use fastest, right? Fastest code is best, we see case studies that come out from eBay, or whatever it was.

And they say every quarter of a millisecond that we save gives us another million dollars of revenue, so fastest code is best. Except we don’t even understand, especially as JavaScript developers, what it means to write faster code. We don’t even understand what JavaScript is doing with the code that we write, much less what it’s doing when we tweak something and do ++i instead of i++. We have some completely broken, busted concept of what might be happening. And it’s like when you write a for loop, right? And you did a ++i instead of an i++ because you saw some jsPerf benchmark somewhere that said it’s one-tenth of a nanosecond faster. So you put it into all of your for loops. And then you also saw some benchmark somewhere that said, I need to cache the length of my arrays before I loop over them. And you do all of this work and you construct this much more complicated for loop. And it’s as if the JavaScript engine just sort of chuckles. Thanks very much, but I’m not going to do a for loop at all. Because it turns out, my second observation, not only are there an infinite number of ways to write the code. And we don’t even have a good sense of the metric to discover what is the best. But it turns out whichever one you pick is nothing more than a suggestion to the computer. By definition, the thing that we started doing back in the early 1860s, when we started inventing programming languages. That is, when programmers stopped putting ones and zeros onto punch cards and we started symbolically representing programs. By definition, what we were doing is creating a separation, AKA abstraction, between the code that we write and the precise instructions that the computer uses. And we’ve only done that more, and more, and more over the last 60 plus years. We’ve created a wider and wider separation to the extent now when you write some React code, it doesn’t even remotely resemble the actual precise instructions that run in the computer.

And yet all of us seem to have, as a predisposition, we’re good computer scientists, we’re engineers, and we know about registers. And we all have this
perception that ++i is faster because it uses one less register. And it turns out it doesn’t do ++i at all.

And what we’re doing is obfuscating, and conflating, and confusing our code completely for no purpose. Because it turns out, our code is just a suggestion
anyway. So I take these two observations, that there’s an infinite number of choices and whichever one you pick is just a suggestion anyway.

And I come to the conclusion, maybe the purpose of code is not to instruct the computer. Maybe that’s just a happy side effect. Maybe what the real purpose of code is for communicating ideas with other people. Maybe that’s the first and most important outcome of any source code you write, is you’ve done all this mental analysis, this mental bubble.

And you’ve done it well, but your job now is you have to communicate it well. Or all of that work was pointless. You see I’m not actually all that convinced or
even impressed that you can write code. You tell me you ship eBay.com to 10 billion people a second. You know what I’m interested in? How many of your lines of code survive that next inevitable cycle where somebody’s trying to fix the bug or extend something, and they come across your code, how many of those lines of code that you wrote survive that it’d be faster if I rewrote its cycle?

I think that is a much more important metric for code quality. How clearly are you able to communicate the ideas in your code so that a future person reading it without your same mental context can figure out what the heck you were thinking, and even if you made a mistake they can spot the mistake and fix it, instead of rewriting all of your code? I suck at communicating my ideas in code. I still do, and I obsess about this day in and day out. Because we don’t even design our programming languages or our tools to optimize for how we read code.

Code that you do not understand is code that you cannot trust, and vice versa, code that you cannot trust is code that you do not understand.

It is so vital and critical that we shift our thinking of what we do, because I got news for you: the computer is getting better and better, and has since the day that we created it. It’s gotten better and better at solving problems more efficiently and effectively than we solve problems. We designed it to do that, and ever since we created the very first computer, they have evolved more quickly than we have. Now I don’t subscribe to that dystopian future where the computers are going to take over the whole world and there won’t be such a thing as programming. I don’t subscribe to that, but what I do know is that we face an existential crisis, not just as a profession, but as a species. We face an existential crisis that we keep trying to compete with the computer at the thing that we designed the computer to be best at.

That cannot end in success. They are evolving faster than we are. And that, that doesn’t mean that we don’t have some role to play, but our role to play is not to outguess and outsmart the computer, and yet we’ve spent 60 years trying to optimize ourselves to solve the problems better than the computer, instead of trying to figure out how do we optimize it so that this code is more readable and understandable?

Why do we always optimize for writability? Every time somebody releases some new tools, some new CLI that’s, always boils down to, I’m trying to make it faster for you to write code. Look how many fewer lines of code you have to write to get the same code, and that’s how every blog post goes that launches every project that’s ever been invented.

Instead of saying here’s this new framework that takes twice as many lines of code, but here’s how much more understandable it is. Why don’t we ever see anybody try to optimize for the readability? It’s been studied by researchers, and they have discovered that during this process of what we do, what we call coding, that as much as 70% of that time we spend reading code.

70% of our day is spent reading code. Do you know what the global average for lines of code written and committed to production is, per day, per programmer? Ten. Ten lines of code. You wrote 500, but the other 490 had to get deleted, and only ten survived. And why? Because you spent the other seven hours of your day figuring out where the heck to put those lines of code.

Let's say like. Code must first be read before it can be written. That’s number eight. It’s high up on the list. Code must first be read before it can be written.

There is no such thing as the write-only code. You don’t get to just write code and then not worry about how readable it is. There’s no such thing. That’s a
mythical unicorn. You have to be able to read code to be able to write code. It is directly related to your job, and the only way that you can ensure that your code is going to survive that cycle, the only way, it doesn’t matter how good the code is, if it’s not readable, it won’t survive.

The only way is to make it more readable. Now here’s a warning. A warning that I’m about to offend you. But it’s with the best of intention, okay?

If your code has to be re-written to be fixed, improved, or extended, you failed. You failed as a software developer.

And I think some of us reading this can identify with this idea, and we fail at our primary task of communicating our ideas, and should we actually be surprised that we struggle so much as developers? I’m actually amazed that any code ever runs anywhere, at all, as poorly as we do at communicating our ideas.

We optimize every single process so that we can write more code quickly. So, we’re producing more and more code that nobody can understand, except the computer. There is an inevitable conclusion to that. I’m not trying to write the script for a sci-fi movie, but there’s an inevitable conclusion to that if you keep
going.

let me try to make a practical set of suggestions to wrap this up. What I’m really suggesting is that refactoring to make your code more readable, to edit it, to reconstruct it, to come up with better names, to change the organization, whatever you have to do, that that is not just a great idea, but essential. And here’s what I’m suggesting, just take six minutes out of every hour. I’m not saying you have to spend your entire day doing nothing but bike shedding over the name of a variable. Six minutes out of every hour, could you take to go back over the code you wrote in the previous 54 minutes and ask yourself, does this variable name make any sense?

Here’s my trick. Whenever I look at one of the pieces of code that I wrote, that’s pretty terrible, the immediate question I ask myself is, try to imagine if I
had to teach that to a class. What would that look like, and what questions would I get from people if I was trying to explain this to people, and that’s usually my big clue. I don’t understand this code well enough, and it needs work, and it’s not going to be done like that, it’s going to take multiple revisions over and over again. I go back over my code, over, and over, and
over, and over, almost obsessively asking, does it make sense? Am I even remotely communicating my ideas?

It’s the whole point. So you remember I said we face that existential crisis, and we’ve been trying to compete with the computer to do something better, to try to do better at the thing that it was designed to? Here’s the one thing that we’ll always be better at: empathetic communication with other people.

That’s where we should put our attention because it’s the one thing that will always distinguish us from the computer and if it ceases to distinguish us from the computer, then we might as well pack it up, because we’re done.

I hope some of these thoughts have pushed you to rethink where you’re putting your efforts in your code. Hope they’ve challenged you to go back and have discussions with your teams about, what is it that we’re really doing here?

Are we really just trying to make the computer do something? Or are we trying to make a process that works for all of us? Can we collaborate together, can we work together and can we communicate our ideas effectively with each other? That’s the only thing that’s ever going to make the work that you’re doing day-in and day-out make any difference.

Yeah, you’ll collect the pay check. But make a difference and survive is if you communicate those ideas well, if your code is more readable. It’s not easy, but that’s the whole reason we have a profession. Because otherwise, let’s just let the computer do it.

Thanks a lot for making this far.
