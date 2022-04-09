export default () => {

    return (
        new Array(6).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})

    )
}