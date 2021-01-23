module.exports = {
    name: 'madara',
    description: 'Random picture of Madara Uchiwa',
    execute(message, args) {
        RandomMadara(message);
    },
};

async function RandomMadara(message) {
    number = Math.floor(Math.random() * Math.floor(5));
    let extension = ['.jpg', '.png', '.gif'];

    for (let i = 0; i < extension.length; i++) {
        try {
            await Promise.all([
                message.channel.send({ files: ["C:/Users/valza/Pictures/Madara/" + number + extension[i]] })
            ]);
        } catch (e) {
            console.log(e);
        }
    }
}

/*
number = Math.floor(Math.random() * Math.floor(5));
    let extension = ['.jpg', '.png', '.gif'];

    for (let i = 0; i < extension.length; i++) {
        try {
            //await Promise.all([
            message.channel.send({ files: ["C:/Users/valza/Pictures/Madara/" + number + extension[i]] })
            //]);
        } catch (e) {
            console.log(e);
        }
    }
*/
