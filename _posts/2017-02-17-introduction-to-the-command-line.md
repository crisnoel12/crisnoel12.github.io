---
title: "Introduction to the Command Line"
description: "The command line interface (CLI) is an operating system application where you type in commands to run various tasks. As far as managing files and folders in the GUI, the CLI can do all that, but more. In this lesson we'll learn how to create, rename, delete, copy folders and files, as well as how to move around the filesystem."
date: 2017-02-17
tags: ['command line', 'terminal', 'unix']
image: intro-cli.jpg
---
## Introduction
The command line interface (CLI) is an operating system application where you type in commands to run various tasks. As far as managing files and folders in the GUI, the CLI can do all that, but more. With the CLI we can install and update packages, edit a file and perform git related tasks. But before we can get into that, we'll dive into the basics. In this lesson we'll learn how to **create**, **rename**, **delete**, **copy** folders and files, as well as how to **move** around the filesystem.

## What We'll Need
To follow along in this lesson we will need a unix-based CLI. Why unix? At the time of this post, 2 out of 3 major operating systems run on unix (**Mac** and **Linux**), **Windows** is the only major OS that doesn't run on unix, but no problemo, we can download [Cmder][cmder]{:target="_blank"}. Cmder will give you the ability to use all the basic unix commands as well as a sleek and beautiful interface.

[cmder]: http://cmder.net/

## Opening the Command Line
Let's open the CLI and start learning.
For mac and linux users, you'll open an application called **terminal**. If you're on Windows, navigate to where you extracted **cmder** and open the Cmder executable. Once you open the CLI, it should look something like this for Windows users:

![image-title-here](/assets/blog/intro-cli-cmder.jpg)

For Mac and Linux users, the text will look slightly different, it will show your computer's name and username like so:

**Mac**

    MacbookName:~ username$

**Linux**

    username@MyLinux ~ $

Before we dive into running commands, lets familiarize ourselves with the different parts of the console.
*   The initial text you see in the console is the **path** to your **current working directory** (Think of the **current working directory** as the equivalent of using your operating system's file explorer to navigate into a specific folder), it should default to the currently logged in **user's home folder**. For Mac and Linux, the **~** refers to the user's home folder.
*   The **$** or **&lambda;** followed by a cursor is where you start typing in your commands.

## Our First Command
Now we're ready to run commands. In the command line, type in the command: `pwd` and hit enter. **Pwd** stands for **Print Working Directory**. This command will print out your **current working directory**, useful when you're not sure where you are in the filesystem.

## Changing Directories
We can change our **current working directory** by using the `cd` command. By default you should be in your user home folder. Let's go into the **desktop** folder.

    $ cd Desktop

If you run `pwd` now, you should notice the path changed to your desktop.

### Going Up a Directory
Let's say we want to go back to our home folder. We can go there with two periods `..`

    $ cd ..

Alternatively, if you're using Mac or Linux, we can achieve the same thing with the tilde character, remember that the tilde refers to the user's home folder.

    $ cd ~

### Going Up Multiple Directories
If you're in two directories of where you want to be, you can navigate back up with two more periods prepended with a forward slash like so:

    $ cd ../..

If you're three directories deep, add another backslash and two periods.

### Going Down Multiple Directories
Essentially the same as going up, but instead of periods you'll enter the name of the directory.

    $ cd firstDir/secondDir

## Creating a Directory
We create directories with the `mkdir` command which stands for **Make Directory**. Let's navigate to the desktop and create a directory called **myWebsite**.

    $ mkdir myWebsite

## Creating Files
Change directories into **myWebsite**. We will create two files: **index.html** and **main.css** using the `touch` command.

    $ touch index.html main.css

## Listing Files/Folders
To list files and folders, use the `ls` command, it stands for list.

    $ ls

You should see **index.html** and **main.css** listed out.

There are options you can append to the `ls` command to show extra information:
*   `ls -l` Shows files and folders in long form along with permissions, file size, date that it was updated.
*   `ls -a` Shows hidden files and folders (files and folders prefixed with a period).
*   `ls -sh` Shows sizes of files and folders in human readable form.

## Moving Files/Folders
Let's reorganize and move the **main.css** file into a **css** folder. Create a **css** folder with the `mkdir` command, make sure your current working directory is **myWebsite**. Now we can move **main.css** with the `mv` command. We type **mv** followed by the file or folder we want to move and then follow that by the directory we want to move it to.

    $ mv main.css css

Cd into the css folder and use the `ls` command. You should see `main.css` relocated.

## Renaming Files/Folders
Renaming and moving files/folders are very similar, they both use the `mv` command. Instead of specifying the folder you want to relocate to, you just makeup a name that you want to rename your file/folder. Let's rename **main.css** to **styles.css**.

    $ mv main.css styles.css

Let's run `ls` again to check that we did it correctly.

## Deleting Files/Folders
To demonstrate deletion commands, create one new folder named **test** and one new file named **custom.css**. The command we will use is `rm`, it stands for remove and it will completely remove those files/folders from your computer. Let's remove the **custom.css** file.

    $ rm custom.css

For the **test** folder we cant just use `rm`, it will result in an error, we must use the `-r` option which stands for recursively. So run:

    $ rm -r test

Double check that they're gone using `ls`.

## Copying Files/Folders
If you need to copy a file/folder, use the `cp` command. The syntax for that is `cp folderToBeCopied newCopiedFolder`. Let's recreate the **test** folder and **custom.css** file that we deleted in the last section. Now let's copy **custom.css** into a new file called **custom2.css**.

    $ cp custom.css custom2.css

With directories, we have to use the `-r` flag again, or else we'll get an error. Let's recreate the **test** folder into a folder named **test2**.

    $ cp test test2

## Tips and Tricks
### Clearing the Command Line
Nearing the end of the tutorial, you should notice the command line getting bloated with multiple lines of commands. You can clear the screen with the `clear` command to have a cleaner work area.
### Cycling Through Commands
If ever you need to run a previous command you can use the `up` and `down` arrow keys to cycle through your previous commands.
### Tab Auto-Completion
Whenever you're running a task on a file or folder, instead of typing out the entire name, you can type part of the name then hit the `tab` key to autocomplete the name of the file or folder. For example lets say I'm in the **myWebsite** directory and I'm trying to get into the **css** folder, I would type `cd c` then hit `tab` to autocomplete the folder name. Highly useful when dealing with long file/folder names.

## Conclusion
You should now feel comfortable using the command line, but you know what they say, practice makes perfect. Try using the command line instead of your Operating System's GUI when creating and managing new projects.
