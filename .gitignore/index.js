const Discord = require('discord.js');
var bot = new Discord.Client();
bot.login(process.env.TOKEN);
var prefix = ("!")

bot.on('ready', function () {
  console.log(`Je suis connecté en tant que ${bot.user.tag}!`); // Dis à la console qu'il viens de se connecter et en tant que qui
  bot.user.setActivity('Administrer la Cup')
});

bot.on('guildCreate', guild => {
  console.log(`Je viens de rejoinde ${guild.name}`); // Dis à la console que le bot viens de rejoindre tel serveur
  member.guild.channels.get("435833840800628737").send(`Hey @everyone ! Je suis ROC™, le bot de la Ryh Overwatch Cup. J'ai été conçue par <@219024646253707264> dans le but de rendre le Discord plus confortable. Merci d'utiliser mes commandes uniquement dans le salon <#455016421240602625>. Passez une agréable journée ;)`); // Le bot se présente
});

bot.on('message', message => {
  if (message.content === prefix + 'ping') {
    message.channel.send('Pong ! :ping_pong:') // Répond au ping d'un utilisateur par Pong !
  }

  if (message.content === prefix + 'help') {
    message.channel.send("```Il n'éxiste que quelques commandes: \n  !help : Page d'aide qui t'affiche les commandes. \n  !guide : Te redirige vers le guide officiel de la RYH Overwatch Cup. \n  !ping : Permet de voir si je suis connecté. \n  !tm : Affiche le nombre de membres que compatbilise le serveur. \n  !om : Affiche le nombre de membres connectés sur le serveur.```")
  }

  if (message.content === prefix + 'tm') {
    message.channel.send(`Il y as ${message.guild.memberCount} membres sur le serveur`);
  }

  if (message.content === prefix + 'guide') {
    message.channel.send(`Pour lire le guide du tournoi: https://drive.google.com/open?id=1j8uw6fENKFj3GrEaC2P3YUX1vnNM0xe0`)
  }
});

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.displayName + ' as rejoint le serveur ROC'); // Dit à la console qu'un membre à rejoint
  member.guild.channels.get("435833840800628737").send(`Bienvenue sur le serveur de la RYH Overwatch Cup ${member} nous te conseillons vivement de lire le règlement et d'aller dans le channel #informations pour te renseigner sur la compétition`); // Envoie le message de bienvenue
  var role = member.guild.roles.find('name', 'Prout');
  member.addRole(role)
});
