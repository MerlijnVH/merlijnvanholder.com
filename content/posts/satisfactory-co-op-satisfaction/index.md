---
date: '2022-08-22'
draft: false
title: 'Satisfactory Co-Op Satisfaction'
categories:
- Gaming
---

Over the past few months, my girlfriend and I have been spending a lot of time with [Satisfactory](https://store.steampowered.com/app/526870/Satisfactory/), and it's safe to say we've become pretty addicted.

Satisfactory is a game about factory management and planetary exploration (and exploitation). As a pioneer for FICSIT Inc., you drop onto an alien world with just a handful of tools. Your mission: harvest natural resources to construct increasingly complex automated factories. Think conveyor belts, lots of them.

![Prototype](media/satisfactory-01.png)
_Our coal plant is one of our greater achievements._

The main challenge we faced was the sheer time required to manufacture complex components. For example, creating rotors requires iron rods and screws. These are fabricated from iron ingots, which come from smelting iron ore. As parts become more advanced, the fabrication chains grow longer and more time-consuming.

![Prototype](media/satisfactory-02.png)
_```0``` Days since last accident._

While the fun lies in designing these processes, it can take hours for your factory to generate the quantities you need. Sadly, your factory only runs while the game is running. If you have bottlenecks (and let's be honest, you will), you're often left waiting on your factory's output rate.

This is where hosting a dedicated server comes in handy, which keeps your factory producing 24/7; you simply connect as a client and reap the rewards of overnight production.

![Prototype](media/satisfactory-03.png)
_Nothing like checking on your factory's production in the morning with a cup of joe._

If you have an old Windows computer lying around, setting this up is fairly trivial [thanks to SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD). To install (or update) your dedicated server, simply run the following snippet in your command line:

```
steamcmd.exe +force_install_dir C:\GameServers\SatisfactoryServer +login anonymous +app_update 1690800 -beta public validate +quit
```

- The `+login anonymous` parameter allows Steam downloads without a Steam account.
- The `+app_update 1690800` parameter points to Satisfactory's dedicated server App ID.

To start the server, run the following command from the dedicated server's directory:

```
.\FactoryServer.exe -log -unattended
```

Pro tip: Save these snippets as a Windows batch file (.bat) for easy execution.

![Prototype](media/satisfactory-04.png)
_One of the best parts of the game is looking over your accomplishments._

Satisfactory has certainly earned a permanent spot on my list of favorite games. I first played it with my best friend when it launched, and while it had its fair share of rough edges back then, [Coffee Stain Studios](https://coffeestain.com/) have updated it with such dedication that it has become one of the best rated games on Steam.
