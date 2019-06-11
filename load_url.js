module.exports = async function(context, commands) {
    await commands.measure.start("Google Home page");
    await commands.navigate('https://www.google.com/');
    await commands.measure.stop();
    
    await commands.measure.start('Github page');
    await commands.navigate('https://github.com/prashanth-sams');
    await commands.measure.stop();

    await commands.measure.start('Twitter page');
    await commands.navigate('https://twitter.com/prashanthsams');
    return commands.measure.stop();
}