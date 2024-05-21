# A Minimal Zsh Git Setup

---

<Intro>
This how I setup my Git configuration on a Mac M1 device with Zsh. A reference for my future self.
</Intro>

Since switching to an Mac M1 device earlier this year my [old dotfiles](https://github.com/danielstocks/dotfiles) didn't work anymore.
Apart from X86 => Arm, Mac OS also ships with Zsh as the default shell instead of Bash since a while back. Instead of attempting to migrate my entire setup I decided to use a vanilla configuration for a few months to really identify the annoynances of my daily git usage. Here's what I ended up really missing:

## User configuration

Like many, I use the same device _at my job_, as I do for working on personal and open source projects. For the latter, I want to use my personal credentials when doing git commits.

I use a `.gitconfig` file in `~` together with a `.gitconfig-work` and a `.gitconfig-personal` to fix this.

```sh
# .gitconfig
[includeIf "gitdir:~/Projects/personal/"]
  path = .gitconfig-personal
[includeIf "gitdir:~/Projects/work/"]
  path = .gitconfig-work
```

```sh
# .gitconfig-personal
[user]
  name = Daniel
  email = daniel@my-personal-email.com
```

```sh
# .gitconfig-work
[user]
  name = Daniel
  email = daniel@my-work-email.com
```

To verify that you've set it up correctly. Go into a git repository and type `git config user.email` to verify the right user is configured for the present working directory.

## Aliases

In my `.zshrc` i a few simple git aliases, but that I type atleast 100 times per day:

```sh
alias gs="git status"
alias gb="git branch"
alias gc="git checkout"
```

What's nice about aliases is that you can still pass arguments that you would normally do. For example `gc -b new-branch`

I don't commit, push, pull or rebase as offen so I usually leave those as is.

### Pushing new branches to origin

This is by far my favorite shortuct. If you're like me, you create a lot of branches locally, and then you want to push them to something like GitHub, typing `git push` will yield the following error:

```sh
fatal: The current branch my-new-branch has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin my-new-branch
```

Instead of copy pasting the above (which i used to do all the time), I now have a alias named `gpo` that does the following:

```sh
alias gpo="git push -u origin HEAD"
```

Edit (2024-05-21): This can now also be set to happen automatically with the [push.autoSetupRemote](https://git-scm.com/docs/git-push#Documentation/git-push.txt-pushautoSetupRemote) git configuration flag.

## Minor Zsh improvements

### Prompt

The standard prompt looks something like this. Not very helpful.

```sh
daniel@Daniels-Mac some-project-dir %
```

With a few lines of configuration in `.zshrc`

```sh
autoload -Uz vcs_info
precmd_vcs_info() { vcs_info }
precmd_functions+=( precmd_vcs_info )
setopt prompt_subst
zstyle ':vcs_info:git:* ' formats '%b '
PROMPT='%B%F{240}%1~%f%b $vcs_info_msg_0_➟'
```

We can make it show the current git branch (`main` in this example) if inside a folder with a git repository.

```sh
some-dir ➟
cd some-project-dir
some-project-dir main ➟
```

Atleast that saves my typing `gb` 50 times less a day :D

### Autocompletion

I used to think this required a big old bash script to work, but it turns out it's as easy as enabling Zsh's built in [Completion system](https://www.csse.uwa.edu.au/programming/linux/zsh-doc/zsh_23.html)

```sh
autoload -Uz compinit && compinit
```

And you're done. Magic.

### But what about "x" ?

The tweaks in this article adressed the things that annoyed me the most after using git for a few months without any configuration.

I know there are a million things to configure with git but I tend to stick with a simple setup these days :)
