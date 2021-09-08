---
title: "The Real purpose of Code"
date: 2021-09-09
author: "Varun Srivatsa"
tags:
  - Code
  - Programming
  - Computer Science
description: "Our computers are getting better and better since the day we created them. They solve problems more efficiently and effectively than we could. We designed them to do so, and ever since the day we created the first one, they have evolved more quickly than we have."
featureImage: "../featureImage/code_purpose.png"
---

> Code is for Humans, not Computers.

I want you to think about this question: Have you ever been stuck trying to figure out why a piece of code broke? It worked before, and now in an instant is broken, and you have no idea why it happened. Software developers and programmers both experience this, don't they? We write this code, then it breaks, and we are left scratching our heads, unable to figure out why it's broken.

Let me ask you a more probing question, which is a bit harder to nod at. Have you ever written code that worked, but you couldn't explain why it worked? I never worried about that back when I was new to programming.

I thought that's just how things are. We don't know what we are doing as programmers. We're all just winging it.

However, now I believe that's a sign of one of those deeper, more universal problems.

Imagine you can't get the unit test to pass, so you tuck some parentheses around it, add a plus one, and wrap a try-catch around it. And then, it just happens to work by accident. The test passes. Then you're like, let me back up, and just hope this doesn't break. You even put a little code comment there, like,

"Don't touch this. I can barely get it to work. I don't know why it works, but let's just ship it that way."

The truth is, if you don't know why your code works, you have no chance of fixing it when it breaks, except by sheer luck and guesswork. Nevertheless, we often do this. I like to refer to it as professional guessing. That's all we do. The only profession I've identified that gets away with professional guessing is weather forecasting.

Nonetheless, should our profession be that way? Should we just ship code, and we tell our boss yes, this feature is done? And, yet we have little or no faith in its ability to maintain its functionality, and we have no idea why it's doing so.

It's a widespread problem among software developers that, rather than being confident that we know what we're doing and why we're doing it, we like to think of ourselves as computer scientists, as if we're doing this very on purpose.

However, the truth is, we're all just guessing in most cases. Some of us are more skilful at guessing and making it look good than others. Unfortunately, this is one of those universal truths, that our profession is mostly just guessing.

Although that works, while we collect pay checks, it drives me to believe that there is something better we should be doing. If you're looking for the main reason why I write this blog, it is the idea that we should be striving for something better.

How many lines of code do you think are currently in existence running today worldwide? There's no right answer, but let's say maybe hundreds of billions, that's a lot of code. I have another question for you. How many zeroes do we need to add to that number, whatever it is, to account for all the lines of codes that have been rewritten? not once, not twice, not ten times, but hundreds of times.

If you are looking for one of those systemic universal problems that I mentioned earlier. The inability to comprehend code to such an extent that you need to totally rewrite it is such a universal problem.

In short, we can't figure it out when it works the first time. We can't figure out why it breaks, so we rewrite it. And we can't figure out why what we rewrote works. Then our rewrite ends up broken, and we have no way of fixing it. Eventually, someone says, " Well, there is this new framework available now. Let's update the entire codebase to this new framework since it is sure to fix the problem". And the cycle starts all over again. And it doesn’t matter what technology you’re using. So, I’m convinced that, this is one of those universal problems.

My point is that we often find it difficult to understand code because we're unable or unwilling to insist our ideas be communicated through the code. The problem is that we write our code primarily for computers.

And I got news for you, that’s not who the source code is for, okay?

I believe this as deeply as I could believe any religious belief, because we have spent the whole industry, the entire 60 years of computing science, figuring out how to optimize our code for the computer instead of optimizing for the person who is going to read that code.

In computer science theory, we are told that there is an infinite number of ways to write the same program, within the scope of programs that at least appear to do what we want at the moment.

Within JavaScript itself, the same program can be structured in an infinite number of ways. That's truly amazing because it's a huge number. In some ways, it feels like there should be a fixed number of ways to write that same program but, mathematically speaking, there are infinite possibilities. How would we decide what is the best option among all those choices? What metric would we use? Most people use fastest, right? The fastest code is the best.

The fastest code saves us a million dollars in revenue per quarter of a millisecond. Except we don’t even understand, what it means to write faster code. We have no idea what compilers do. We don't even understand what they do when we tweak something and do ++i instead of i++. You did a ++i instead of an i++ because you saw some jsPerf benchmark somewhere that said it’s one-tenth of a nanosecond faster. So you put it into all of your for loops. And there was also a benchmark somewhere that said we should cache the length of our arrays before looping over them. But it turns out that whatever you choose is nothing more than a suggestion to the computer.

This is what we started doing in the 1960s when we invented programming languages. That is when programmers stopped putting ones and zeros onto punch cards and started symbolically representing programs. But what we achieved was an abstraction, or separation, between the code that we wrote and the precise instructions that the computer used. In the past 60 years, we've only gotten more and more apart. Now when you write some React code, it doesn't even resemble the precise instructions that run on the computer.

As a predisposition, all of us are good computer scientists, engineers, and we know about registers. Thus, we all believe that ++i is faster because it uses fewer registers. But this is not true. What we're doing is confusing, and obfuscating, and obfuscating our code completely without purpose. Because, in the end, it turns out we're just suggesting something anyways.

In conclusion, maybe the real purpose of code isn't to instruct computers. Perhaps that's just a happy side effect. Maybe the real purpose of code is to communicate ideas with people. Perhaps the first and most important outcome of any source code you write is that you have done the mental analysis and created this mental bubble. You have done it well, but you now have to communicate it well, or all your work is for nothing. You see I’m not actually all that convinced or even impressed that you can write code.

Do you know what I’m interested in?

How many of your lines of code will survive that inevitable cycle where somebody tries to fix the bug or extend something and they find your code. How many of those lines of code that you wrote will survive that "it'd be faster if I rewrote its cycle"?

I think this is a much more important metric for code quality. Your code should convey your ideas clearly so that a person reading it without your same mental context will be able to recognize what you were thinking, and if you made a mistake, they will be able to spot it and fix it, instead of having to rewrite everything from scratch. I still have a hard time communicating my ideas in code. I obsess about this every day. We don't even design our programming languages or tools to optimize how we read code.

It is so vital and critical that we shift our thinking towards this problem because I got news for you.

Our computers are getting better and better since the day we created them. They solve problems more efficiently and effectively than we could. We designed them to do so, and ever since the day we created the first one, they have evolved more quickly than we have.

Now I do not believe in that dystopian future where computers will take over the world and programming will cease to exist. What I do know is that we face an existential crisis, not just as a profession, but as a species. We face an existential crisis in that we keep trying to compete with the computer at what the computer was designed to be best at.

That cannot end in success. They are evolving faster than we are. And that doesn’t mean that we don’t have some role to play, but our role to play is not to outguess and outsmart the computer, and we shouldn't spend the next 60 years trying to optimize ourselves to solve the problems better than the computer, instead, we should try to figure out how we can optimize our code so that it is more readable and understandable.

Why do we always try to optimize for writability? When somebody releases some new tools, some new CLI, it brings down to a simple concept: I'm trying to make it easier for you to write code. Look how many fewer lines of code you have to write to get the same code.
Instead of saying here’s this new framework that takes twice as many lines of code, but here’s how much more understandable it is.

Why don’t we ever see anybody try to optimize for readability?

It's been studied by researchers, and they've discovered that during this process of what we do, what we call coding, as much as 70% of that time is spent reading code. 70% of our day is spent reading code.

Write-only code does not exist. You cannot just write code and then not worry about how readable it is. That is a mythical unicorn. To be able to write code, one must have the ability to read code. It is directly related to your job, and the only way you can ensure that your code will survive that cycle is to ensure that it can be read. No matter how good the code is, if it is not readable, it won't survive.

Now here’s a warning. A warning that I’m about to offend you. But it’s with the best of intention, okay?

If your code has to be re-written to be fixed, improved, or extended, you failed. You failed as a software developer.

We optimize every single process so that we can write more code quickly. So, we’re producing more and more code that nobody can understand, except the computer.

I'd like to wrap this up with a few practical suggestions.

Refactoring your Code:

It's not just a great idea, it's essential to refactor your code to make it more readable, edit it, reconstruct it, come up with better names, and change the organization.

Just take six minutes out of every hour. There is no need to spend your entire day bike shedding about the name of a variable. Instead, perhaps you can take six minutes every hour to review the code you wrote in the previous 54 minutes and ask yourself, "Does this variable name make sense?"?

Here’s my trick. Whenever I look at one of the pieces of code that I wrote, that’s pretty terrible, the immediate question I ask myself is, try to imagine if I had to teach that to a class. What would that look like, and what questions would I get from people if I was trying to explain this to people, and that’s usually my big clue. I don’t understand this code well enough, and it needs work, and it’s not going to be done like that, it’s going to take multiple revisions over and over again. I go back over my code, over, and over, and over, and over, almost obsessively asking, does it make sense? Am I even remotely communicating my ideas?

This is the whole point. Remember when I said we face an existential crisis, and we've been trying to compete with the computer to do better at what it's designed to do? Here's one thing we'll always excel at empathetic communication with other people.

Our focus should be on that, because it's the one thing that will always separate us from the computer, and if it stops separating us from the computer, we might as well pack it up, because we're done.

Hopefully, some of these thoughts have challenged you to rethink where you're putting your efforts in your code. Maybe they have challenged you to have discussions with your teams about, what are we really trying to accomplish? Can we collaborate together, can we work together, and can our ideas be communicated effectively with each other? Do we really want to make the computer do something? Or are we trying to make a process that works for all of us?

Only then will the work that you do every day make a difference.

You'll collect the pay check, but to survive you need to communicate your ideas clearly, so your code is more readable. It's hard, but it's the whole point of us having a job. If not, let's just let the computer do it.

Thanks a lot for making this far.
