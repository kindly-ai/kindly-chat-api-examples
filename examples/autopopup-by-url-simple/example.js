// Mapping from path regex to delay (in seconds)
const pathRegexToDialogue = [
    ['/second.html', 3],
];

function triggerOnPath() {
    console.log('location:', window.location.pathname);

    const match = pathRegexToDialogue.find((x) => { return new RegExp(x[0]).test(window.location.pathname) })
    if (match) {
        console.log("it's a match!")
        const delay = match[1] * 1000;  // setTimeout wants ms
        setTimeout(() => {
            kindlyChat.openChat();
        }, delay)
    } else {
        console.log('no match')
    }
}
window.kindlyOptions = {
    onLoad: triggerOnPath
}