module.exports = {
    name: 'clear',
    description: 'Clear the channel with the specify number',
    execute(message, args) {
        const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            message.channel.bulkDelete(amount, true).catch(err => {
                console.error(err);
                message.channel.send('Erreur interne !');
            });
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Tu dois rentrer un nombre entre 1 et 99.');
        } else {
            message.channel.bulkDelete(amount, true);
        }

    },
};